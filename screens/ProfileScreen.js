import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { W3mButton } from "@web3modal/wagmi-react-native";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";

const ProfileScreen = () => {
  const { open } = useWeb3Modal();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* <Pressable onClick={() => open()}>
          <Text>Open Connect Mod</Text>
        </Pressable> */}
        <W3mButton/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    position: "absolute",
    bottom : 0,
    marginBottom : 80,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    
  },
  button: {
    marginTop: 20,
    backgroundColor: "#ffd700",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
