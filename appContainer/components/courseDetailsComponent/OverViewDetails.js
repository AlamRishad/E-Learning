import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // or any other icon library

import { Ionicons } from "@expo/vector-icons";
import WishList from "../../../assets/courseDetailsIcon/WishList";
import { globalStyle } from "../../utils/globalStyle";
import PlayButtonIcon from "../../../assets/courseDetailsIcon/PlayButtton";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import WeekIcon from "../../../assets/courseDetailsIcon/Week";
import OffIcon from "../../../assets/courseDetailsIcon/OFF";
import LessonIcon from "../../../assets/courseDetailsIcon/Lesson";
import CertificateIcon from "../../../assets/courseDetailsIcon/Certificate";
import LessonDetails from "../../components/courseDetailsComponent/LessonDetails";
import ReviewDetails from "../../components/courseDetailsComponent/ReviewDetails";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const OverViewDetails = ({ title, author, stars }) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.titleSection}>
            <Text style={styles.title2}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
            <View style={styles.ratingSection}>
              {Array.from({ length: stars }).map((_, index) => (
                <Text key={index} style={styles.star}>
                  ★
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.priceSection}>
            <Text style={styles.price}>100$</Text>
            <Text style={styles.discountText}>Lorem Ipsum Text</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description} numberOfLines={showFullText ? 0 : 3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            dolor lectus. Fusce laoreet, ipsum id luctus tincidunt, dui mi
            malesuada tortor, eu congue velit lorem id risus. Mauris ex enim,
            placerat et nisi eu, eleifend dignissim ligula.
          </Text>
          {!showFullText && (
            <TouchableOpacity onPress={() => setShowFullText(true)}>
              <Text style={styles.readMore}> Read More</Text>
            </TouchableOpacity>
          )}
        </View>

        {showFullText && (
          <TouchableOpacity onPress={() => setShowFullText(false)}>
            <Text style={styles.readMore}>Show Less</Text>
          </TouchableOpacity>
        )}
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
      <View style={styles.skillsContainer}>
        <Text style={styles.skillsTitle}>Skills</Text>
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
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 50,
  },
  background: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 30,
    // width: "100%",
    height: windowHeight * 0.35,
  },
  image: {
    borderRadius: 15, // Border radius for the image itself
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    paddingLeft: 5,
    paddingTop: 10,
    paddingRight: 10,
  },
  wishlistButton: {
    padding: 10,
  },
  content: {
    flex: 1,
    // justifyContent: "flex-end",
    // width: windowWidth * 0.5,
    // paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    color: "white",
    fontSize: 14,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#6200ea",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  imageContainer: {
    height: 200,
    backgroundColor: "#9c27b0",
    justifyContent: "center",
    alignItems: "center",
  },
  courseImage: {
    width: "100%",
    height: "100%",
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "black",
    marginLeft: 10,
    marginRight: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#BA68C8", // Active tab background color (purple)
  },
  tabText: {
    color: "black",
    fontWeight: "500",
    fontSize: 15,
  },
  activeTabText: {
    fontWeight: "bold",
  },
  detailsContainer: {
    padding: 15,
  },
  titleSection: {
    flex: 3,
  },
  title2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  author: {
    fontSize: 11,
    color: "#666",
    marginVertical: 2,
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
  priceSection: {
    flex: 1,
    alignItems: "flex-end",
    width: windowWidth * 0.4,
    height: windowHeight * 0.06,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  descriptionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    alignItems: "baseline",
    justifyContent: "space-around",
    textAlign: "justify",
  },
  readMore: {
    fontSize: 14,
    color: "#1E90FF",
  },
  discountText: {
    fontSize: 11,
    color: "#999",
    textAlign: "right",
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
  skillsContainer: {
    marginVertical: 20,
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
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
    marginRight: 10,
    fontWeight: "500",
  },
  skillItems: {
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
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

export default OverViewDetails;
