import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CardStyleInterpolators } from "@react-navigation/stack";
import React, { useEffect } from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import SignInScreen from "../../screens/signInScreen";
import LoginScreen from "../../screens/loginScreen";
import SignUpScreen from "../../screens/signUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import ResetPasswordScreen from "../../screens/resetPasswordScreen";
import CourseDetailsScreen from "../../screens/courseDetailsScreen";
import PaymentScreen from "../../screens/paymentScreen";
import NotificationScreen from "../../screens/notificationScreen";
import SettingsScreen from "../../screens/settingsScreen";
import ConfirmationScreen from "../../screens/ConfirmationScreen";
import OverviewScreen from "../../screens/OverViewScreen";
const Stack = createNativeStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="SignIn" component={SignInScreen} />

      <Stack.Screen name="SignUp" component={SignUpScreen} />

      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />

      <Stack.Screen name="MainApp" component={BottomTabNavigator} />
      <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
      <Stack.Screen name="Overview" component={OverviewScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Completed" component={ConfirmationScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
