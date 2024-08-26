import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import StarIcon from "../../../assets/homeScreenIcon/Star";
const CourseCard = ({ title, author, progress, image, stars }) => {
  const navigation = useNavigation();
  console.log(title);
  return (
    <TouchableOpacity
      style={styles.courseCard}
      onPress={() =>
        navigation.navigate("CourseDetails", {
          title: title,
          author: author,
          progress: progress,
          image: image,
          stars: stars,
        })
      }
    >
      <Image source={image} style={styles.courseImage} />
      {/* <View style={styles.courseImagePlaceholder} /> */}
      <View style={styles.courseTitleImage}>
        <Text style={styles.courseTitle}>{title}</Text>
        <View style={styles.starsContainer}>
          {Array.from({ length: stars }).map((_, index) => (
            <StarIcon key={index} />
          ))}
        </View>
      </View>
      <Text style={styles.courseAuthor}>{author}</Text>

      <Text style={styles.progressText}>{progress}% DONE</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  courseCard: {
    width: 166,
    marginRight: 25,
  },
  courseImagePlaceholder: {
    width: "100%",
    height: 100,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 8,
  },
  courseImage: {
    width: "100%",
    height: 184,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: "cover", // Ensures the image scales properly within its container
  },
  courseTitleImage: {
    flexDirection: "row",
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
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    // marginBottom: 4,
  },
  starImage: {
    width: 12,
    height: 12,
    marginRight: 2,
  },
  progressText: {
    fontSize: 10,
    color: "#8D8989",
    marginBottom: 4,
    width: "100%",
    textAlign: "right",
    paddingRight: 10,
  },
  progressBar: {
    height: 12,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },
  progress: {
    borderRadius: 10,
    height: "100%",
    width: "70%",
    backgroundColor: "#A349A4",
  },
});

export default CourseCard;
