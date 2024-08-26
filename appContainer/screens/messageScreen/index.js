import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { globalStyle } from "../../utils/globalStyle";
import SearchIcon from "../../../assets/homeScreenIcon/Search";
import TopBar from "../../components/commonComponent/TopBar";
const messages = [
  {
    id: "1",
    name: "Name Here",
    message: "Hi,Good Evening dear.!",
    time: "15:48",
    avatar: "boy.png",
  },
  {
    id: "2",
    name: "Name Here",
    message: "Hi,Good Evening dear.!",
    time: "15:48",
    avatar: "boy.png",
  },
  {
    id: "3",
    name: "Name Here",
    message: "Hi,Good Evening dear.!",
    time: "15:48",
    avatar: "boy.png",
  },
  {
    id: "4",
    name: "Name Here",
    message: "Hi,Good Evening dear.!",
    time: "15:48",
    avatar: "boy.png",
  },
  {
    id: "5",
    name: "Name Here",
    message: "Hi,Good Evening dear.!",
    time: "15:48",
    avatar: "boy.png",
  },
  {
    id: "6",
    name: "Name Here",
    message: "Hi,Good Evening dear.!",
    time: "15:48",
    avatar: "boy.png",
  },
  {
    id: "7",
    name: "Name Here",
    message: "Hi,Good Evening dear.!",
    time: "15:48",
    avatar: "boy.png",
  },
  {
    id: "8",
    name: "Name Here",
    message: "Hi,Good Evening dear.!",
    time: "15:48",
    avatar: "boy.png",
  },
  {
    id: "9",
    name: "Name Here",
    message: "Hi,Good Evening dear.!",
    time: "15:48",
    avatar: "boy.png",
  },
];

const MessageScreen = () => {
  const [activeTab, setActiveTab] = useState("Chat");
  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };
  return (
    <View style={[globalStyle.container, styles.container]}>
      <TopBar title={"Inbox"}></TopBar>

      <View style={styles.searchInput}>
        <SearchIcon />
        <TextInput
          style={styles.searchTextInput}
          placeholder="Search Here"
          placeholderTextColor="#C6D0D7"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.buttonDesign,
            activeTab === "Chat" && styles.activeButtonDesign,
          ]}
          onPress={() => handleTabPress("Chat")}
        >
          <Text
            style={[
              styles.buttonText,
              activeTab === "Chat" && styles.activeButtonText,
            ]}
          >
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonDesign,
            activeTab === "Calls" && styles.activeButtonDesign,
          ]}
          onPress={() => handleTabPress("Calls")}
        >
          <Text
            style={[
              styles.buttonText,
              activeTab === "Calls" && styles.activeButtonText,
            ]}
          >
            Calls
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageContainer}>
            <Image
              source={require("../../../assets/courseDetailsIcon/boy.png")}
              style={styles.avatar}
            />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            <View style={styles.timeContainer}>
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>05</Text>
              </View>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchInput: {
    flexDirection: "row",
    backgroundColor: "#fbfbfb",
    alignItems: "center",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#C6D0D7",
  },
  searchTextInput: {
    paddingLeft: 10,
    color: "#C6D0D7",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  buttonDesign: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 12,
    borderWidth: 2,
    backgroundColor: "#F2E1F3",
    borderColor: "#C6D0D7",
    borderRadius: 20,
    alignItems: "center",
  },
  activeButtonDesign: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 12,
    borderWidth: 2,
    backgroundColor: "#BA68C8",
    borderColor: "#C6D0D7",
    borderRadius: 20,
    alignItems: "center",
    color: "white",
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "500",
  },
  activeButtonText: {
    color: "white",
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    color: "#757575",
  },
  timeContainer: {
    alignItems: "flex-end",
  },
  unreadBadge: {
    backgroundColor: "#ab47bc",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  unreadText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,
    color: "#757575",
  },
});

export default MessageScreen;
