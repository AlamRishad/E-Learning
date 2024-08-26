import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import WishList from "../../../assets/courseDetailsIcon/WishList";
import PlayButtonIcon from "../../../assets/courseDetailsIcon/PlayButtton";
import { useNavigation } from "@react-navigation/native";
import WeekIcon from "../../../assets/courseDetailsIcon/Week";
import OffIcon from "../../../assets/courseDetailsIcon/OFF";
import LessonIcon from "../../../assets/courseDetailsIcon/Lesson";
import CertificateIcon from "../../../assets/courseDetailsIcon/Certificate";
import LessonDetails from "../../components/courseDetailsComponent/LessonDetails";
import ReviewDetails from "../../components/courseDetailsComponent/ReviewDetails";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CourseDetailsScreen = ({ route }) => {
  const { title, author, progress, image, stars } = route.params || {};
  const [activeTab, setActiveTab] = useState("Overview");
  const [showFullText, setShowFullText] = useState(false);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.background}
        imageStyle={styles.image}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.wishlistButton}>
            <WishList />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity>
            <PlayButtonIcon />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Overview" && styles.activeTab]}
          onPress={() => handleTabPress("Overview")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Overview" && styles.activeTabText,
            ]}
          >
            Overview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Lessons" && styles.activeTab]}
          onPress={() => handleTabPress("Lessons")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Lessons" && styles.activeTabText,
            ]}
          >
            Lessons
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Reviews" && styles.activeTab]}
          onPress={() => handleTabPress("Reviews")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Reviews" && styles.activeTabText,
            ]}
          >
            Reviews
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContent}>
        {activeTab === "Overview" && (
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
                <Text
                  style={styles.description}
                  numberOfLines={showFullText ? 0 : 3}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vitae dolor lectus. Fusce laoreet, ipsum id luctus tincidunt,
                  dui mi malesuada tortor, eu congue velit lorem id risus.
                  Mauris ex enim, placerat et nisi eu, eleifend dignissim
                  ligula.
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
        )}
        {activeTab === "Lessons" && <LessonDetails />}
        {activeTab === "Reviews" && <ReviewDetails />}
      </ScrollView>
      <TouchableOpacity style={styles.enrollButton}>
        <Text style={styles.enrollButtonText}>GET ENROLL</Text>
      </TouchableOpacity>
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
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 30,
    height: windowHeight * 0.35,
  },
  image: {
    borderRadius: 15,
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
    justifyContent: "center",
    alignItems: "center",
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "black",
    marginHorizontal: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#BA68C8",
  },
  tabText: {
    color: "black",
    fontWeight: "500",
    fontSize: 15,
  },
  activeTabText: {
    fontWeight: "bold",
  },
  scrollContent: {
    flex: 1,
    marginTop: 10,
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
    justifyContent: "center",
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

export default CourseDetailsScreen;
