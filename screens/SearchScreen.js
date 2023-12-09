import { View, Text, Pressable, StyleSheet } from "react-native";
import React from 'react'

const SearchScreen = ({setState}) => {
  return (
    <View style={styles.container}>
    <Pressable style={styles.button} onPress={setState}>
      <Text style={styles.buttonText}>Find</Text>
    </Pressable>
  </View>
  )
}

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

export default SearchScreen