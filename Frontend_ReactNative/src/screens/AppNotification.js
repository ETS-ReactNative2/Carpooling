import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";

const AppNotification = ({ type, text }) => {
  const height = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(height, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);

  const backgroundColor =
    type === "error" ? "rgba(255, 0, 0, 0.7)" : "rgba(0, 25, 0, 0.7)";

  return (
    <Animated.View style={[styles.container, { height, backgroundColor }]}>
      <Text style={{ color: "#fff", fontSize: 15 }}>{text}</Text>
    </Animated.View>
  );
};

export default AppNotification;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 10,
  },
});
