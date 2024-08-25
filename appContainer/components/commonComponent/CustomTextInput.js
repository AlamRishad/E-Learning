import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({
  placeholder,
  placeholderTextColor = "#A9A9A9",
  keyboardType = "default",
  secureTextEntry = false,
  value,
  onChangeText,
  style = {},
}) => {
  return (
    <TextInput
      style={[styles.input, style]} // Combine styles
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#A020F0", // Default purple border color
    borderRadius: 5,
    marginBottom: 20,
    color: "#000",
  },
});

export default CustomTextInput;
