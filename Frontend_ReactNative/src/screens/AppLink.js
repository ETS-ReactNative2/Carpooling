import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const AppLink = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.linkText}>{text}</Text>
    </Pressable>
  );
};

export default AppLink;

const styles = StyleSheet.create({
  linkText: {
    fontSize: 16,
    color: "#0284c7",
  },
});
