import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ReviewCard = ({ profileImage, name, role, description, stars }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.profile}>
        <View style={styles.profileSection}>
          <Image source={profileImage} style={styles.profileImage} />
        </View>
        <View style={styles.contentSection}>
          <View style={styles.header}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.stars}>
              {[...Array(stars)].map((_, index) => (
                <Text key={index} style={styles.star}>
                  ★
                </Text>
              ))}
            </View>
          </View>
          <Text style={styles.role}>{role}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    padding: 16,
    borderRadius: 20,
    backgroundColor: "#F2E1F3",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
  },
  profile: {
    flexDirection: "row",
  },
  profileSection: {
    marginRight: 12,
  },
  profileImage: {
    width: 50,
    height: 50, // Set the height to match the width for a square or circular image
    borderRadius: 25, // Makes the image circular
    borderWidth: 1,
    borderColor: "#ccc", // Optional: adds a border color around the image
  },
  contentSection: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  role: {
    fontSize: 13,
    color: "#777",
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: "#333",
  },
  stars: {
    flexDirection: "row",
  },
  star: {
    color: "#1E90FF",
    fontSize: 18,
  },
});

export default ReviewCard;
