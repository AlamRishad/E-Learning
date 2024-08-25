import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import HomeIcon from "../../../assets/bottomNavbarIcon/Home.js";
import HomeDarkIcon from "../../../assets/bottomNavbarIcon/HomeDark.js";
import MessageIcon from "../../../assets/bottomNavbarIcon/Message.js";

import MessageDarkIcon from "../../../assets/bottomNavbarIcon/MessageDark.js";
import CoursesIcon from "../../../assets/bottomNavbarIcon/courses";
import CoursesDarkIcon from "../../../assets/bottomNavbarIcon/CoursesDark";
import ProfileDarkIcon from "../../../assets/bottomNavbarIcon/ProfileDark";
import ProfileIcon from "../../../assets/bottomNavbarIcon/Profile";
import HomeScreen from "../../screens/homeScreen";
import SignInScreen from "../../screens/signInScreen";
import SignUpScreen from "../../screens/signUpScreen";
import ResetPasswordScreen from "../../screens/resetPasswordScreen";
import colors from "../../utils/Colors";
const windowHeight = Dimensions.get("window").height;
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          tabBarStyle: {
            borderRadius: 20,
            backgroundColor: colors.light.colorPrimary, // Background color matching the image
            height: windowHeight * 0.06,

            paddingTop: windowHeight * 0.02,
            margin: windowHeight * 0.01,
            elevation: 20,
            shadowColor: "#000000",
            shadowOpacity: 0.14,
            shadowRadius: 19,
            shadowOffset: { width: 0, height: 2 },
            borderTopWidth: 1,
            borderColor: "#D3D3D3",
          },
          tabBarLabelStyle: {
            fontSize: 1,
            color: "#ffffff", // White color for text labels
          },
          tabBarIconStyle: {
            size: 24,
            color: "black", // White color for icons
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused }) => <Text></Text>,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "90%",
                }}
              >
                {focused ? <HomeIcon /> : <HomeDarkIcon />}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="allProblems"
          component={SignInScreen}
          options={{
            tabBarLabel: ({ focused }) => <Text></Text>,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "90%",
                }}
              >
                {focused ? <MessageIcon /> : <MessageDarkIcon />}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="allReports"
          component={SignUpScreen}
          options={{
            tabBarLabel: ({ focused }) => <Text></Text>,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "90%",
                }}
              >
                {focused ? <CoursesIcon /> : <CoursesDarkIcon />}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="allReport"
          component={ResetPasswordScreen}
          options={{
            tabBarLabel: ({ focused }) => <Text></Text>,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "90%",
                }}
              >
                {focused ? <ProfileIcon /> : <ProfileDarkIcon />}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default BottomTabNavigator;
