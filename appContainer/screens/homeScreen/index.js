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

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ ...styles.container, ...globalStyle.container }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>
          Welcome <Text style={styles.username}>sf29</Text>
        </Text>
        <View style={styles.headerIcons}>
          <View style={styles.iconPlaceholder}>
            <Settings />
          </View>
          <View style={styles.iconPlaceholder}>
            <Notification />
          </View>
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

      {/* Tags */}
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

      {/* Continue Watching */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Continue Watching</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal style={styles.horizontalScroll}>
        <View style={styles.courseCard}>
          <View style={styles.courseImagePlaceholder} />
          <Text style={styles.courseTitle}>Icon Design</Text>
          <Text style={styles.courseAuthor}>By Tom Cruise</Text>
          <Text style={styles.progressText}>70% DONE</Text>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>
        </View>

        <View style={styles.courseCard}>
          <View style={styles.courseImagePlaceholder} />
          <Text style={styles.courseTitle}>Wireframes</Text>
          <Text style={styles.courseAuthor}>By John Watson</Text>
          <Text style={styles.progressText}>30% DONE</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: "30%" }]} />
          </View>
        </View>
      </ScrollView>

      {/* My Courses */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Courses</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal style={styles.horizontalScroll}>
        <View style={styles.courseCard}>
          <View style={styles.courseImagePlaceholder} />
          <Text style={styles.courseTitle}>App Design</Text>
          <Text style={styles.courseAuthor}>By Kim Salena</Text>
          <Text style={styles.progressText}>90% DONE</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: "90%" }]} />
          </View>
        </View>

        <View style={styles.courseCard}>
          <View style={styles.courseImagePlaceholder} />
          <Text style={styles.courseTitle}>UI UX Design</Text>
          <Text style={styles.courseAuthor}>By Taylor Swift</Text>
          <Text style={styles.progressText}>45% DONE</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: "45%" }]} />
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
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
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  tagText: {
    color: "#000",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#A349A4",
  },
  horizontalScroll: {
    flexDirection: "row",
    marginBottom: 16,
  },
  courseCard: {
    width: 160,
    marginRight: 16,
  },
  courseImagePlaceholder: {
    width: "100%",
    height: 100,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 8,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  courseAuthor: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
  },
  progressText: {
    fontSize: 12,
    color: "#A349A4",
    marginBottom: 4,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    width: "70%",
    backgroundColor: "#A349A4",
  },
});
