import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { globalStyle } from "../../utils/globalStyle";
import TopBar from "../../components/commonComponent/TopBar";
import CompletedIcon from "../../../assets/NotificationIcon/Completed";
import OkIcon from "../../../assets/NotificationIcon/Ok";
import DueIcon from "../../../assets/NotificationIcon/Due";

const notifications = [
  {
    type: "Transaction Completed",
    icon: <CompletedIcon />,
    time: "Just Now",
  },
  {
    type: "Lesson Completed",
    icon: <OkIcon />,
    time: "5 mins ago",
  },
  {
    type: "Due Date Is Near",
    icon: <DueIcon />,
    time: "5 mins ago",
  },
  {
    type: "Transaction Completed",
    icon: <CompletedIcon />,
    time: "10 mins ago",
  },
  {
    type: "Transaction Completed",
    icon: <CompletedIcon />,
    time: "30 mins ago",
  },
  ,
  {
    type: "Transaction Completed",
    icon: <CompletedIcon />,
    time: "35 mins ago",
  },
  ,
  {
    type: "Transaction Completed",
    icon: <CompletedIcon />,

    time: "43 mins ago",
  },
  ,
  {
    type: "Transaction Completed",
    icon: <CompletedIcon />,

    time: "55 mins ago",
  },
];

const NotificationCard = ({ type, icon, color, time }) => (
  <View style={[styles.card]}>
    <View style={styles.iconContainer}>{icon}</View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{type}</Text>
      <Text style={styles.subtitle}>lorem ipsum Dummy Text Here</Text>
    </View>
    <Text style={styles.time}>{time}</Text>
  </View>
);

const NotificationScreen = () => {
  return (
    <View style={[styles.container, globalStyle.container]}>
      <TopBar title={"Notification"} />
      <ScrollView
        style={styles.cardConteiner}
        showsVerticalScrollIndicator={false}
      >
        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            type={notification.type}
            icon={notification.icon}
            color={notification.color}
            time={notification.time}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#F5F5F5",
  },
  cardConteiner: {
    marginVertical: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 10,
    marginBottom: 16,
    borderColor: "#8AB3B5",
    borderWidth: 1,
    backgroundColor: "#F2E1F3",
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 11,
    color: "#000000",
  },
  time: {
    fontSize: 12,
    color: "#888",
  },
});

export default NotificationScreen;
