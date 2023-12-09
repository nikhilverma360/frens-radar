import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react'

const CreateScreen = () => {
  return (
    <ScrollView >
      <View style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.header}>Create Profile</Text>
      
      <Text style={styles.label}>Name *</Text>
      <TextInput style={styles.input} />
      
      <Text style={styles.label}>Bio *</Text>
      <TextInput style={styles.input} multiline />
      
      <Text style={styles.label}>Twitter *</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Linkedin *</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Telegram *</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Website</Text>
      <TextInput style={styles.input} />
      
      {/* <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>add +</Text>
      </TouchableOpacity> */}
      
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create</Text>
      </TouchableOpacity>
    </View>
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f7f7',
      justifyContent:'center',
      alignContent:'center'
    },
    card: {
      backgroundColor: '#fff',
      margin: 20,
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    label: {
      fontSize: 16,
      color: '#333',
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    addButton: {
      backgroundColor: '#ffd700',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    addButtonText: {
      color: '#000',
      fontWeight: 'bold',
    },
    createButton: {
      backgroundColor: '#2684fd',
      padding: 15,
      borderRadius: 5,
      marginTop: 10,
      alignItems: 'center',
    },
    createButtonText: {
      color: '#000',
      fontWeight: 'bold',
    },
  });

export default CreateScreen