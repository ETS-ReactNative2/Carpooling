import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <Pressable
      onPress={isSubmitting ? null : handleSubmit}
      style={[
        styles.button,
        { backgroundColor: isSubmitting ? "gray" : "#0284c7" },
      ]}
    >
      <Text style={styles.btnTitle}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    //marginTop: 50,
    width: width - 40,
    height: 50,
    alignItems: "center",
    backgroundColor: "#0284c7",
    fontSize: 35,
    fontWeight: "bold",
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: "center",
  },
  btnTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
