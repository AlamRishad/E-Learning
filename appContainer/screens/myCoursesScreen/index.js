import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { globalStyle } from "../../utils/globalStyle";
import TopBar from "../../components/commonComponent/TopBar";
const CourseCard = ({ image, title, instructor, progress, timeDone }) => (
  <View style={styles.card}>
    <Image
      source={require("../../../assets/myCoursesIcon/course1.png")}
      style={styles.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.instructor}>{instructor}</Text>
      <Text style={styles.time}>{timeDone} Mins Done</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </View>
    </View>
  </View>
);

const MyCoursesScreen = () => {
  return (
    <View style={[styles.container, globalStyle.container]}>
      <TopBar title="My Courses" />
      <ScrollView>
        <CourseCard
          image={require("../../../assets/myCoursesIcon/course1.png")}
          title="UI UX Design"
          instructor="By M.Umair"
          progress={100 - ((250 - 100) * 100) / 250}
          timeDone={100}
        />
        <CourseCard
          image={require("../../../assets/myCoursesIcon/course2.png")}
          title="Adobe XD"
          instructor="By M.Umair"
          progress={100 - ((250 - 50) * 100) / 250}
          timeDone={50}
        />
        <CourseCard
          image={require("../../../assets/myCoursesIcon/course3.png")}
          title="Wire Framing"
          instructor="By M.Umair"
          progress={100 - ((200 - 150) * 100) / 200}
          timeDone={150}
        />
        <CourseCard
          image={require("../../../assets/myCoursesIcon/course1.png")}
          title="Wire Framing"
          instructor="By M.Umair"
          progress={100 - ((200 - 180) * 100) / 200}
          timeDone={180}
        />
        <CourseCard
          image={require("../../../assets/myCoursesIcon/course1.png")}
          title="Wire Framing"
          instructor="By M.Umair"
          progress={100 - ((200 - 150) * 100) / 200}
          timeDone={150}
        />
        <CourseCard
          image={require("../../../assets/myCoursesIcon/course1.png")}
          title="Wire Framing"
          instructor="By M.Umair"
          progress={100 - ((200 - 40) * 100) / 200}
          timeDone={40}
        />
        <CourseCard
          image={require("../../../assets/myCoursesIcon/course1.png")}
          title="Wire Framing"
          instructor="By M.Umair"
          progress={100 - ((200 - 150) * 100) / 200}
          timeDone={150}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F2E1F3",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    alignItems: "center",
    borderBlockColor: "#8AB3B5",
    borderWidth: 1,
  },
  image: {
    width: 80,
    height: 75,
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  instructor: {
    color: "#888",
    marginBottom: 5,
  },
  time: {
    color: "#888",
    marginTop: 5,
    textAlign: "right",
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

export default MyCoursesScreen;
