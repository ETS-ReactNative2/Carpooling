import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
//import { onChange } from 'react-native-reanimated'

const AppInput = ({ name, placeholder, ...rest }) => {
  const { errors, values, touched, handleSubmit, handleBlur, handleChange } =
    useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  return (
    <>
      {error && isInputTouched ? (
        <Text style={{ color: "red", paddingVertical: 3 }}>{error}</Text>
      ) : null}
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        style={styles.input}
        {...rest}
      />
    </>
  );
};

export default AppInput;

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A7FC9",
    // alignItems: 'center'
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  text_header: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text_footer: {
    color: "#05375a",
    fontSize: 15,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 5,
    color: "#05375a",
  },
  input: {
    width: width - 40,
    height: 50,
    backgroundColor: "#eae9e7",
    fontSize: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: "#8469cf",
    marginBottom: 15,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 1,
    alignItems: "center",
    borderRadius: 200,
    backgroundColor: "#3A7FC9",
    marginTop: height * 0.04,
  },
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
  linkText: {
    fontSize: 16,
    color: "#0284c7",
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
