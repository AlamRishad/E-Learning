import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { globalStyle } from "../../utils/globalStyle";
import { useNavigation } from "@react-navigation/native";
import Settings from "../../../assets/homeScreenIcon/Settings";
import Notification from "../../../assets/homeScreenIcon/NotificationIcon";
import SearchIcon from "../../../assets/homeScreenIcon/Search";
import CourseCard from "../../components/commonComponent/CourseCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ ...styles.container, ...globalStyle.container }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>
          Welcome <Text style={styles.username}>sf29</Text>
        </Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            style={styles.iconPlaceholder}
          >
            <Settings />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
            style={styles.iconPlaceholder}
          >
            <Notification />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchInput}>
        <SearchIcon />
        <TextInput
          style={styles.searchTextInput}
          placeholder="Search Here"
          placeholderTextColor="#C6D0D7"
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <View style={styles.tagsContainer}>
          <TouchableOpacity style={styles.tag}>
            <Text style={styles.tagText}>UI/UX</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tag}>
            <Text style={styles.tagText}>Website Design</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tag}>
            <Text style={styles.tagText}>Figma</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={styles.verticalScroll}
      >
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Continue Watching</Text>
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

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Courses</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          <CourseCard
            title="App Design"
            author="By Kim Salena"
            progress={90}
            image={require("../../../assets/homeScreenIcon/AppDesign.png")} // Replace with the correct image path
            stars={5}
          />
          <CourseCard
            title="UI UX Design"
            author="By Taylor Swift"
            progress={45}
            image={require("../../../assets/homeScreenIcon/UIUXDesign.png")} // Replace with the correct image path
            stars={5}
          />
          <CourseCard
            title="UI UX Design"
            author="By Taylor Swift"
            progress={45}
            image={require("../../../assets/homeScreenIcon/UIUXDesign.png")} // Replace with the correct image path
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
    paddingTop: 5,
    paddingRight: 16,
    paddingBottom: 5,
    paddingLeft: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingRight: windowWidth * 0.05,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  username: {
    color: "#A349A4",
  },
  headerIcons: {
    flexDirection: "row",
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(224, 124, 214, 0.26)",
    marginLeft: 16,
    alignItems: "center",
    justifyContent: "center",
    border: 1,
    borderRadius: 3,
  },
  searchInput: {
    flexDirection: "row",
    backgroundColor: "#fbfbfb",
    alignItems: "center",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#C6D0D7",
  },
  searchTextInput: {
    paddingLeft: 10,
    color: "#C6D0D7",
  },
  tagsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tag: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#C6D0D7",
  },
  tagText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "500",
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
  horizontalScroll: {
    flexDirection: "row",
    marginBottom: 16,
  },
  verticalScroll: {
    flexDirection: "column",
    // marginBottom: windowHeight * 0.05,
    // height:
  },
});
