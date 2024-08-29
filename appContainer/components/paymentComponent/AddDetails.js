import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const AddDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Card Number"
        placeholderTextColor="#000"
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="CVV Number"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Expire Date"
          placeholderTextColor="#000"
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000"
        secureTextEntry
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // backgroundColor: "#fff",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DAB8E5",
    backgroundColor: "#F5E7F8",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    width: "48%",
  },
});

export default AddDetails;
