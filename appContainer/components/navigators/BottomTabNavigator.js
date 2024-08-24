import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, View, Text } from "react-native";

// import { globalStyle } from "../../utils/globalStyle.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function BottomTabNavigator() {
  return (
    // <SafeAreaView style={[globalStyle.container, styles.container]}>
    <SafeAreaView>
      <View>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
  },
  scrollableViewContainer: {},
  componentContainer: {
    marginBottom: 20,
  },
});
