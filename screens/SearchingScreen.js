import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";



const Item = ({ device , navigation}) => {


  return (
    <Pressable onPress={() => navigation.navigate('UserScreen', {
        profileHandle: device?.name,
      })}>
    <View style={styles.card}>
      <Image source={{ uri: "https://github-production-user-asset-6210df.s3.amazonaws.com/32412967/289316589-71b09fa7-7c1b-4d5b-8619-fc08bbe82ad8.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231209T225809Z&X-Amz-Expires=300&X-Amz-Signature=a08c7e6db8d13810813890fc3046fbb4c9334a29db84b7b9b7444bfe30f99119&X-Amz-SignedHeaders=host&actor_id=32412967&key_id=0&repo_id=313732427" }} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.username}>{device?.name}</Text>
        <Text style={styles.occupation}>OK fguhr ev r iue rv rev </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> {Math.pow(10, (-75 - device?.rssi) / (10 * 3)).toFixed(1)} meters</Text>
      </TouchableOpacity>
    </View>
    </Pressable>
  );
};

const SearchingScreen = ({ devices, navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        padding: 30,
      }}
    >
      <FlatList
        data={devices}
        renderItem={({ item }) => <Item device={item} navigation = {navigation} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
  },
  occupation: {
    color: "#555",
  },
  button: {
    backgroundColor: "#2684fd",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default SearchingScreen;
