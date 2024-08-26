import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Install this using npm install react-native-vector-icons

const data = [
  {
    lesson: "Lesson 1: What is UI UX?",
    content: [
      { type: "video", text: "lorem ipsum Dummy Text Here" },
      { type: "document", text: "lorem ipsum Dummy Text Here" },
      { type: "video", text: "lorem ipsum Dummy Text Here" },
      { type: "document", text: "lorem ipsum Dummy Text Here" },
    ],
  },
  {
    lesson: "Lesson 2: App Design Process",
    content: [
      { type: "video", text: "lorem ipsum Dummy Text Here" },
      { type: "document", text: "lorem ipsum Dummy Text Here" },
      { type: "video", text: "lorem ipsum Dummy Text Here" },
      { type: "document", text: "lorem ipsum Dummy Text Here" },
    ],
  },
  {
    lesson: "Lesson 3: Role Of UI UX",
    content: [
      { type: "video", text: "lorem ipsum Dummy Text Here" },
      { type: "document", text: "lorem ipsum Dummy Text Here" },
      { type: "video", text: "lorem ipsum Dummy Text Here" },
      { type: "document", text: "lorem ipsum Dummy Text Here" },
    ],
  },
  {
    lesson: "Lesson 4: What Is Prototype?",
    content: [
      { type: "video", text: "lorem ipsum Dummy Text Here" },
      { type: "document", text: "lorem ipsum Dummy Text Here" },
      { type: "video", text: "lorem ipsum Dummy Text Here" },
      { type: "document", text: "lorem ipsum Dummy Text Here" },
    ],
  },
  {
    lesson: "Lesson 5: Define User Persona?",
    content: [
      { type: "video", text: "lorem ipsum Dummy Text Here" },
      { type: "document", text: "lorem ipsum Dummy Text Here" },
      { type: "video", text: "lorem ipsum Dummy Text Here" },
      { type: "document", text: "lorem ipsum Dummy Text Here" },
    ],
  },
];

const LessonDetails = () => {
  const [expandedLesson, setExpandedLesson] = useState(null);

  const renderItem = ({ item, index }) => (
    <View>
      <TouchableOpacity
        style={styles.lessonContainer}
        onPress={() =>
          setExpandedLesson(expandedLesson === index ? null : index)
        }
      >
        <Text style={styles.lessonTitle}>{item.lesson}</Text>
        <Icon
          name={expandedLesson === index ? "chevron-up" : "chevron-down"}
          size={20}
          color="black"
        />
      </TouchableOpacity>
      {expandedLesson === index && (
        <View style={styles.contentContainer}>
          {item.content.map((contentItem, idx) => (
            <View style={styles.contentItem} key={idx}>
              <Icon
                name={
                  contentItem.type === "video" ? "play-circle" : "document-text"
                }
                size={24}
                color="#A34AF7"
              />
              <Text style={styles.contentText}>{contentItem.text}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
  },
  lessonContainer: {
    backgroundColor: "#F2E1F3",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    paddingLeft: 10,
  },
  contentContainer: {
    backgroundColor: "#F2E1F3",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  contentItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  contentText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#000",
  },
});

export default LessonDetails;
