import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Image,
    FlatList,
  } from "react-native";
import React from 'react'

const Item = ({ device }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{device?.name}</Text>
    </View>
  );

const SearchingScreen = ({ devices }) => {
  return (
    <View
      style={{
        flex: 1,   
        justifyContent: "center",
        backgroundColor: "white",
        padding:30
      }}
    >
      <FlatList
        data={devices}
        renderItem={({ item }) => <Item device={item} />}
        keyExtractor={(item) => item.id}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        padding:20,
        margin: 20
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
    item: {
      backgroundColor: "#525151",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      color: "#000",
    },
  });

export default SearchingScreen