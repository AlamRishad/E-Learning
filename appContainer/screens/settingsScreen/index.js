import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";

const SettingsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileCircle} />
      <TouchableOpacity style={styles.option}>
        <FontAwesome name="user" size={24} color="#8E44AD" />
        <Text style={styles.optionText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <MaterialIcons name="payment" size={24} color="#8E44AD" />
        <Text style={styles.optionText}>Payment Option</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <FontAwesome name="certificate" size={24} color="#8E44AD" />
        <Text style={styles.optionText}>My Certificate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <AntDesign name="filetext1" size={24} color="#8E44AD" />
        <Text style={styles.optionText}>Terms & Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Feather name="headphones" size={24} color="#8E44AD" />
        <Text style={styles.optionText}>Help Center</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <AntDesign name="sharealt" size={24} color="#8E44AD" />
        <Text style={styles.optionText}>Invite Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <AntDesign name="logout" size={24} color="#8E44AD" />
        <Text style={styles.optionText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  profileCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#D3D3D3",
    alignSelf: "center",
    marginBottom: 32,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  optionText: {
    fontSize: 18,
    color: "#4A4A4A",
    marginLeft: 16,
  },
});

export default SettingsScreen;
