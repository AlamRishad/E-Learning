import { NavigationContainer } from "@react-navigation/native";
import { Dimensions, View, Text } from "react-native";
import { enableScreens } from "react-native-screens";
import AppStackNavigator from "./components/navigators/AppStackNavigator";
import LoginScreen from "./screens/LoginScreen";
enableScreens();

const windowHeight = Dimensions.get("window").height;

export default function Index() {
  return (
    <View style={{ height: windowHeight + 30 }}>
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    </View>
  );
}
