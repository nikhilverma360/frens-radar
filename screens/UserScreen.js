import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
const UserScreen = ({route}) => {
    const { profileHandle } = route.params;
  return (
    <View>
      <Text>{profileHandle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#ff0000', // Red background
      borderRadius: 8,
      padding: 20,
    },
    header: {
      alignItems: 'center',
      marginBottom: 20,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff', // White color
    },
    handle: {
      color: '#ffffff', // White color
    },
    description: {
      textAlign: 'center',
      color: '#ffffff', // White color
    },
    socialLinks: {
      alignItems: 'stretch',
    },
    button: {
      backgroundColor: '#ffff00', // Yellow background
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    buttonText: {
      textAlign: 'center',
      color: '#000000', // Black color
    },
  });

export default UserScreen