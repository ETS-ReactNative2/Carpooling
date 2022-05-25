import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Children } from "react";
import { StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";

const FormContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require("../../assets/images.png")}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          {children}
        </Animatable.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FormContainer;

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#286ef0",
    // alignItems: 'center'
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 60,
    alignItems: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 60,
    paddingBottom: 220,
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
    marginBottom: 5,
    alignItems: "center",
    borderRadius: 200,
    backgroundColor: "#286ef0",
    marginTop: height * 0.06,
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
