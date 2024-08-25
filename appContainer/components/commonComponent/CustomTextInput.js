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
    padding: 20,
    borderWidth: 1,
    borderColor: "#9E08AB", // Default purple border color
    borderRadius: 5,
    marginBottom: 12,

    // marginLeft: 5,
    // marginRight: 10,
    color: "#000",
  },
});

export default CustomTextInput;
