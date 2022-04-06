import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  StyleSheet,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from "react-native";
import { colors, parameters } from "../global/style";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Formik } from "formik";

import * as yup from "yup";
import FormContainer from "./FormContainer";
import AppInput from "./AppInput";
import SubmitButton from "./SubmitButton";
import FormNavigator from "./FormNavigator";
import { useNavigation } from "@react-navigation/native";
import { navigateToForgotPassword, navigateToSignin } from "../utils/helper";
import CustomFormik from "./CustomFormik";
//import client from '../api/client';
import AppNotification from "./AppNotification";
import { signup } from "../utils/auth";

const initialValues = {
  name: "",
  email: "",
  password: "",
  address: "",
  role: "",
};
const validationSchema = yup.object({
  name: yup.string().trim().required("Name is missing"),
  email: yup.string().email("Invalid email").required("Email is missing"),
  password: yup
    .string()
    .trim()
    .min(8, "password is too short!")
    .required("Password is missing!"),
  address: yup.string().trim().required("Address is missing"),
  role: yup.string().trim().required("Role is missing"),
});

const SigninScreen = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const handleSignup = async (values, formikActions) => {
    // console.log(values);
    const res = await signup(values);
    formikActions.setSubmitting(false);

    if (!res.success) return setMessage({ type: "error", text: res.error });
    formikActions.resetForm();
    console.log(res);
  };

  return (
    <>
      {message.text ? (
        <AppNotification type={message.type} text={message.text} />
      ) : null}

      <FormContainer>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignup}
        >
          <AppInput name="name" placeholder={"Your Name"} />
          <AppInput name="email" placeholder={"email@email.com"} />
          <AppInput secureTextEntry name="password" placeholder={"******"} />
          <AppInput name="address" placeholder={"Your Address"} />
          <AppInput name="role" placeholder={"Your Role"} />
          <SubmitButton title="Sign Up" />
          <FormNavigator
            onLeftLinkPress={() => navigateToSignin(navigation)}
            leftLinkText="Sign in"
            onRightLinkPress={() => navigateToForgotPassword(navigation)}
            righttLinkText="Forgot Password"
          />
        </CustomFormik>
      </FormContainer>
    </>
  );
};
export default SigninScreen;

const styles = StyleSheet.create({
  container: {},
});
