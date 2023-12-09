/* eslint-disable no-bitwise */
import { useMemo, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import { BleManager, Device, ScanMode } from "react-native-ble-plx";

import * as ExpoDevice from "expo-device";

function useBLE() {
  const bleManager = useMemo(() => new BleManager(), []);
  const [allDevices, setAllDevices] = useState([]);
  const [distance, setDistance] = useState(-1);
  const distanceBuffer = [-1, -1, -1];
  let numOfSamples = 0;

  const ProfileRegex = /^[a-zA-Z0-9-]+\.([lL][eE][nN][sS]|[eE][tT][hH])$/;

  const requestAndroid31Permissions = async () => {
    const bluetoothScanPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      {
        title: "Location Permission",
        message: "Bluetooth Low Energy requires Location",
        buttonPositive: "OK",
      }
    );
    const bluetoothConnectPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      {
        title: "Location Permission",
        message: "Bluetooth Low Energy requires Location",
        buttonPositive: "OK",
      }
    );
    const fineLocationPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location Permission",
        message: "Bluetooth Low Energy requires Location",
        buttonPositive: "OK",
      }
    );

    return (
      bluetoothScanPermission === "granted" &&
      bluetoothConnectPermission === "granted" &&
      fineLocationPermission === "granted"
    );
  };

  const requestPermissions = async () => {
    if (Platform.OS === "android") {
      if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "Bluetooth Low Energy requires Location",
            buttonPositive: "OK",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        const isAndroid31PermissionsGranted =
          await requestAndroid31Permissions();

        return isAndroid31PermissionsGranted;
      }
    } else {
      return true;
    }
  };

  const isDuplicteDevice = (devices, nextDevice) =>
    devices.findIndex((device) => nextDevice.id === device.id) > -1;

  const scanForPeripherals = () =>
    bleManager.startDeviceScan(
      null,
      {
        allowDuplicates: true,
        scanMode: ScanMode.LowLatency,
      },
      (error, device) => {
        if (error) {
          console.log(error);
        }
        if (device) {
          setAllDevices((prevState) => {
            if (isDuplicteDevice(prevState, device)) {
              const updatedRssi = [...prevState];
              updatedRssi[
                updatedRssi.findIndex((item) => item.id === device.id)
              ] = device;
              console.log("Updated Rssi --->", updatedRssi[1]?.rssi);
              // return [...prevState, device];
            }

            if (
              !isDuplicteDevice(prevState, device) &&
              ProfileRegex.test(device.name)
            ) {
              console.log("Devices --->", device.id);
              return [...prevState, device];
            }
            return prevState;
          });
        }
      }
    );

  return {
    scanForPeripherals,
    requestPermissions,
    allDevices,
  };
}

export default useBLE;
