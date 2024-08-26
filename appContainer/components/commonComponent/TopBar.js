import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // You can use any icon library
import { useNavigation } from "@react-navigation/native";
import BackBar from "../../../assets/topBarIcon/backBar";
import Settings from "../../../assets/homeScreenIcon/Settings";
import Notification from "../../../assets/homeScreenIcon/NotificationIcon";

const TopBar = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <BackBar />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      {title == "Notification" && (
        <View style={styles.headerIcons}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            style={styles.iconPlaceholder}
          >
            <Settings />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
            style={styles.iconPlaceholder}
          >
            <Notification />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#FFFFFF", // You can customize the background color
    // borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000", // You can customize the text color
  },
  headerIcons: {
    flexDirection: "row",
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(224, 124, 214, 0.26)",
    marginLeft: 16,
    alignItems: "center",
    justifyContent: "center",
    border: 1,
    borderRadius: 3,
  },
});

export default TopBar;
