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
import FormContainer from "./FormContainer";
import AppInput from "./AppInput";
import SubmitButton from "./SubmitButton";
import FormNavigator from "./FormNavigator";
import { useNavigation } from "@react-navigation/native";
import { navigateToSignin, navigateToSignup } from "../utils/helper";
import CustomFormik from "./CustomFormik";
import * as yup from "yup";

const initialValues = {
  email: "",
};

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is missing"),
});

const ForgotPassword = () => {
  const navigation = useNavigation();

  const handleResetLink = (values, formikActions) => {
    console.log(values, formikActions);
  };
  return (
    <FormContainer>
      <CustomFormik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleResetLink}
      >
        <AppInput name="email" placeholder={"email@email.com"} />
        <SubmitButton title="Send Link" />
        <FormNavigator
          onLeftLinkPress={() => navigateToSignup(navigation)}
          leftLinkText="Sign Up"
          onRightLinkPress={() => navigateToSignin(navigation)}
          righttLinkText="Sign in"
        />
      </CustomFormik>
    </FormContainer>
  );
};
export default ForgotPassword;

const styles = StyleSheet.create({
  container: {},
});
