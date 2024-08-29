import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StepIndicator from "../../components/paymentComponent/StepIndicator";
import TopBar from "../../components/commonComponent/TopBar";
import { globalStyle } from "../../utils/globalStyle";
import WeekIcon from "../../../assets/courseDetailsIcon/Week";
import OffIcon from "../../../assets/courseDetailsIcon/OFF";
import LessonIcon from "../../../assets/courseDetailsIcon/Lesson";
import CertificateIcon from "../../../assets/courseDetailsIcon/Certificate";
import PurchaseDetail from "../../components/paymentComponent/PurchaseDetail";
import PaymentMethod from "../../components/paymentComponent/PaymentMethod";
import AddDetails from "../../components/paymentComponent/AddDetails";
import CourseCard from "../../components/commonComponent/CourseCard";
import EditIcon from "../../../assets/ProfileIcon/Edit";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ProfileScreen({ route }) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, globalStyle.container]}>
      {/* Image Section */}

      <TopBar title="Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../../assets/settingsIcon/settings1.png")}
          style={styles.profileCircle}
        />

        <View style={styles.subContainer}>
          <View style={styles.editbutton}>
            <EditIcon />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Name Here</Text>
            <Text>Tag Line</Text>
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillsTitle}>About Me</Text>
            <View style={styles.skillItems}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vitae dolor lectus. Fusce laoreet, ipsum id luctus tincidunt,
                dui mi malesuada tortor,
              </Text>
            </View>
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillsTitle}>My Skills</Text>
            <View style={styles.skillItems}>
              <Text style={styles.skill}>UI/UX</Text>
              <Text style={styles.skill}>Website Design</Text>
              <Text style={styles.skill}>Figma</Text>
              <Text style={styles.skill}>XD</Text>
              <Text style={styles.skill}>Animation</Text>
              <Text style={styles.skill}>User Persona</Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Enrolled Courses</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          <CourseCard
            title="Icon Design"
            author="By Tom Cruise"
            progress={70}
            image={require("../../../assets/homeScreenIcon/IconDesignImage.png")} // Replace with the correct image path
            stars={5}
          />
          <CourseCard
            title="Wireframes"
            author="By John Watson"
            progress={30}
            image={require("../../../assets/homeScreenIcon/WireFrames.png")} // Replace with the correct image path
            stars={5}
          />
          <CourseCard
            title="Wireframes"
            author="By John Watson"
            progress={30}
            image={require("../../../assets/homeScreenIcon/WireFrames.png")} // Replace with the correct image path
            stars={5}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 20,
    height: windowHeight * 0.9,
  },
  subContainer: {
    backgroundColor: "#F2E1F3",
    borderColor: "#C6D0D7",
    borderWidth: 1,
    marginTop: -50,
    paddingTop: windowHeight * 0.025,
    paddingBottom: windowHeight * 0.005,
    borderRadius: 40,
    paddingLeft: 5,
    paddingRight: 5,
  },
  nameContainer: {
    textAlign: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
  },
  editbutton: {
    justifyContent: "flex-end",
    textAlign: "right",
    alignItems: "flex-end",
    marginRight: 20,
  },
  profileCircle: {
    marginTop: 10,
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
  horizontalScroll: {
    flexDirection: "row",
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  seeAll: {
    color: "#A349A4",
    paddingRight: windowWidth * 0.05,
    fontWeight: "400",
    fontSize: 15,
    color: "#8D8989",
  },
  skillsContainer: {
    marginVertical: 2,
    // borderWidth: 1,
  },
  skillsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    paddingLeft: 5,
    marginVertical: 10,
  },
  skill: {
    fontSize: 17,
    color: "black",
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#C6D0D7",
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 5,
    fontWeight: "500",
    backgroundColor: "white",
  },
  skillItems: {
    // padding: 5,
    // borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    // alignItems: "center",
  },
});
