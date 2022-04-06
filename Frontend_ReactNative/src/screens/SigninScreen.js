import React from "react";
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
import AppInput from "./AppInput";
import FormContainer from "./FormContainer";
import SubmitButton from "./SubmitButton";
import FormNavigator from "./FormNavigator";
import { useNavigation } from "@react-navigation/native";
import { navigateToForgotPassword, navigateToSignup } from "../utils/helper";
import CustomFormik from "./CustomFormik";
import * as yup from "yup";
import client from "../api/client";
import { signin } from "../utils/auth";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is missing"),
  password: yup
    .string()
    .trim()
    .min(8, "password is too short!")
    .required("Password is missing!"),
});

const SigninScreen = () => {
  const navigation = useNavigation();

  const handleSignin = async (values, formikActions) => {
    // console.log(values);
    const res = await signin(values);
    formikActions.setSubmitting(false);

    if (!res.success)
      //return setMessage({type: 'error', text: res.error});
      formikActions.resetForm();
    console.log(res);
  };

  return (
    <FormContainer>
      <CustomFormik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSignin}
      >
        <AppInput name="email" placeholder={"email@email.com"} />
        <AppInput secureTextEntry name="password" placeholder={"******"} />
        <SubmitButton title="Sign in" />
        <FormNavigator
          onLeftLinkPress={() => navigateToSignup(navigation)}
          leftLinkText="Sign Up"
          onRightLinkPress={() => navigateToForgotPassword(navigation)}
          righttLinkText="Forgot Password"
        />
      </CustomFormik>
    </FormContainer>
  );
};
export default SigninScreen;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {},
});
