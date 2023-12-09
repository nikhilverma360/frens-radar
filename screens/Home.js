import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { W3mButton } from "@web3modal/wagmi-react-native";
import useBLE from "../hooks/useBLE";
import SearchScreen from "./SearchScreen";
import SearchingScreen from "./SearchingScreen";

const Home = () => {
  const { requestPermissions, scanForPeripherals, allDevices } = useBLE();
  const [isSearching, setSearching] = useState(false);

  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
      console.log("btn pressed");
    }
  };

  function search() {
    scanForDevices();
    setSearching(isSearching ? false : true);
  }

  return isSearching ? <SearchingScreen devices={allDevices}  /> : <SearchScreen setState={search} />;
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
    elevation: 4,
    backgroundColor: "#525151",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  text: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#525151",
  },
});
