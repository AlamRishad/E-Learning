import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // You can use any icon library
import { useNavigation } from "@react-navigation/native";
import BackBar from "../../../assets/topBarIcon/backBar";
const TopBar = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <BackBar />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#FFFFFF", // You can customize the background color
    // borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  backButton: {
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000", // You can customize the text color
  },
});

export default TopBar;
