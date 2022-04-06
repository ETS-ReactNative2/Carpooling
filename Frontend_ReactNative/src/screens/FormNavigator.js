import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppLink from "./AppLink";

const FormNavigator = ({
  onLeftLinkPress,
  onRightLinkPress,
  leftLinkText,
  righttLinkText,
}) => {
  return (
    <View style={styles.linkContainer}>
      <AppLink onPress={onLeftLinkPress} text={leftLinkText} />
      <AppLink onPress={onRightLinkPress} text={righttLinkText} />
    </View>
  );
};

export default FormNavigator;

const styles = StyleSheet.create({
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
