import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import { globalStyle } from "../../utils/globalStyle";
import ProfileIcon from "../../../assets/settingsIcon/Profile";
import HelpIcon from "../../../assets/settingsIcon/Help";
import InviteIcon from "../../../assets/settingsIcon/Invite";
import CertificateIcon from "../../../assets/settingsIcon/Certificate";
import LogoutIcon from "../../../assets/settingsIcon/Logout";
import PaymentIcon from "../../../assets/settingsIcon/Payment";
import TermIcon from "../../../assets/settingsIcon/Terms";
import TopBar from "../../components/commonComponent/TopBar";
import SmallIcon from "../../../assets/settingsIcon/smallerIcon";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SettingsScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={[styles.container, globalStyle.container]}
    >
      <TopBar title={"Settings"}></TopBar>
      <Image
        source={require("../../../assets/settingsIcon/settings1.png")}
        style={styles.profileCircle}
      />
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.option}>
            <ProfileIcon />
            <Text style={styles.optionText}>Edit Profile</Text>
          </View>
          <View>
            <SmallIcon />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.option}>
            <PaymentIcon />
            <Text style={styles.optionText}>Payment Option</Text>
          </View>
          <View>
            <SmallIcon />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.option}>
            <CertificateIcon />
            <Text style={styles.optionText}>My Certificate</Text>
          </View>
          <View>
            <SmallIcon />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.option}>
            <TermIcon />
            <Text style={styles.optionText}>Terms & Conditions</Text>
          </View>
          <View>
            <SmallIcon />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.option}>
            <HelpIcon />
            <Text style={styles.optionText}>Help Center</Text>
          </View>
          <View>
            <SmallIcon />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.option}>
            <InviteIcon />
            <Text style={styles.optionText}>Invite Friends</Text>
          </View>
          <View>
            <SmallIcon />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.option}>
            <LogoutIcon />
            <Text style={styles.optionText}>Log Out</Text>
          </View>
          <View>
            <SmallIcon />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  subContainer: {
    backgroundColor: "#F2E1F3",
    borderColor: "#C6D0D7",
    borderWidth: 1,
    marginTop: -50,
    paddingTop: windowHeight * 0.12,
    paddingBottom: windowHeight * 0.1,
    borderRadius: 40,
    paddingLeft: 20,
    paddingRight: 50,
  },
  profileCircle: {
    marginTop: 30,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#D3D3D3",
    alignSelf: "center",
    marginBottom: 1,
    zIndex: 2,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomColor: "#E0E0E0",
  },
  optionText: {
    fontSize: 18,
    color: "#4A4A4A",
    marginLeft: 16,
  },
});

export default SettingsScreen;
