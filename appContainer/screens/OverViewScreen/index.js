import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
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

const windowWidth = Dimensions.get("window").width;

export default function OverviewScreen({ route }) {
  const navigation = useNavigation();
  const [activeStep, setActiveStep] = useState(1);
  const { stars, author } = route.params || {};

  return (
    <View style={[styles.container, globalStyle.container]}>
      {/* Image Section */}
      <TopBar />
      <StepIndicator activeStep={activeStep} />
      <View style={styles.overViewContainer}>
        <Text style={styles.title}>Overview</Text>
        <Text style={styles.label}>
          Name Of Lesson: <Text style={styles.value}>Mobile App UI/UX</Text>
        </Text>
      </View>
      <View style={styles.courseInfoContainer}>
        <View style={styles.courseInfoItem}>
          <LessonIcon />
          <Text style={styles.courseInfoText}>100+ Lessons</Text>
        </View>
        <View style={styles.courseInfoItem}>
          <WeekIcon />
          <Text style={styles.courseInfoText}>7 Weeks</Text>
        </View>
        <View style={styles.courseInfoItem}>
          <CertificateIcon />
          <Text style={styles.courseInfoText}>Certificate</Text>
        </View>
        <View style={styles.courseInfoItem}>
          <OffIcon />
          <Text style={styles.courseInfoText}>20% Off</Text>
        </View>
      </View>
      <View>
        <View style={styles.ratingSection}>
          <Text>Course Rating: </Text>
          {Array.from({ length: stars }).map((_, index) => (
            <Text key={index} style={styles.star}>
              ★
            </Text>
          ))}
        </View>
        <View style={styles.ratingSection}>
          <Text>Course Time: </Text>
          <Text>7 hour</Text>
        </View>
        <View style={styles.ratingSection}>
          <Text>Name of Trainer: </Text>
          <Text>{author}</Text>
        </View>
      </View>
      <PurchaseDetail />
      <TouchableOpacity
        style={styles.enrollButton}
        onPress={() => navigation.navigate("Payment")}
      >
        <Text style={styles.enrollButtonText}>Continue</Text>
      </TouchableOpacity>
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
  },
  image: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.5,
    marginBottom: 30,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  highlight: {
    color: "#A020F0", // Purple color
  },
  subheading: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 55,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  signInButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: "#A020F0", // Purple color
    borderRadius: 5,
    alignItems: "center",
  },
  signUpButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: "#A020F0", // Purple color
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
  },
  overViewContainer: {
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  label: {
    fontSize: 16,
    color: "#666",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  courseInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F2E1F3", // Light background to match the uploaded image
    padding: 10,
    borderRadius: 12,

    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "#8AB3B5",
  },
  courseInfoItem: {
    // alignItems: "center",
    flexDirection: "row",
    paddingLeft: 30,
    paddingVertical: 10,
    width: windowWidth * 0.4,
  },
  courseInfoText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  star: {
    color: "#1445F6",
    fontSize: 16,
  },
  enrollButton: {
    backgroundColor: "#D456DF",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
  },
  enrollButtonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
});
