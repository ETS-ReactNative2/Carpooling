import {
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { colors, parameters } from "../global/style";
import { COLORS, SIZES } from "../constants/themes";
//import {COLORS, SIZES} from '../constants';

const CalculateScreen = (navigation) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [number1, onChangeNumber1] = React.useState(null);

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <StatusBar style="light" backgroundColor="#009387" translucent={true} />
      <View
        style={{
          width: "100%",
          height: 0.35 * SIZES.height,
          padding: 20,
          backgroundColor: "#FFFFFF",
          borderRadius: 30,
          position: "relative",
        }}
      >
        <View style={styles.View1}>
          <Icon
            type="material-community"
            name="arrow-left"
            color={colors.grey1}
            size={32}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={styles.text1}>Hire Schedule</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: "40%",
            height: 0.25 * SIZES.height,
            padding: 10,
            marginLeft: 30,
            alignItems: "center",
            marginTop: 20,
            backgroundColor: "#FFFFFF",
            borderRadius: 30,
            position: "relative",
          }}
        >
          <Image
            style={styles.image1}
            source={require("../../assets/social-distance.png")}
          />
          <Text style={styles.text3}>Distance</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="input here......."
            keyboardType="numeric"
          />
        </View>
        <View
          style={{
            width: "40%",
            height: 0.25 * SIZES.height,
            padding: 10,
            marginLeft: 20,
            alignItems: "center",
            marginTop: 20,
            backgroundColor: "#FFFFFF",
            borderRadius: 30,
            position: "relative",
          }}
        >
          <Image
            style={styles.image1}
            source={require("../../assets/cost.png")}
          />
          <Text style={styles.text3}>Cost per 1km</Text>
          <Text>per 1km</Text>
          <Text>$1.00</Text>
          <Text>Discount 7.2%</Text>
        </View>
      </View>
      <View
        style={{
          width: "70%",
          height: 0.15 * SIZES.height,
          padding: 10,
          alignItems: "center",
          marginLeft: 50,
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: "#FFFFFF",
          borderRadius: 30,
          position: "relative",
        }}
      >
        <Text style={[styles.text2, { marginBottom: 10 }]}>Total Cost</Text>
        <TextInput
          style={styles.input1}
          onChangeText={onChangeNumber1}
          value={number1}
          placeholder="input here...."
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => alert(defaultRating)}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Pay</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CalculateScreen;
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  View1: {
    position: "absolute",
    top: 25,
    left: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    zIndex: 10,
  },
  input: {
    height: 40,
    margin: 2,
    borderWidth: 1,
    padding: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    borderRadius: 30,
  },
  input1: {
    height: 40,
    margin: 2,
    borderWidth: 1,
    padding: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    borderRadius: 30,
  },
  text2: {
    color: "black",
    fontSize: 16,
    marginBottom: 25,
    fontWeight: "bold",
  },
  home: {
    //backgroundColor: "#3A7FC9",
    paddingLeft: 20,
  },
  text3: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text1: {
    color: "black",
    fontSize: 40,
    paddingBottom: 20,
    paddingTop: 100,
    fontWeight: "bold",
  },
  image1: {
    width: 30,
    height: 30,
    alignItems: "flex-end",
    marginBottom: 5,
    alignItems: "center",
    borderRadius: 200,
    backgroundColor: "#3A7FC9",
    marginTop: height * 0.02,
  },
  View5: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    justifyContent: "space-between",
    marginHorizontal: 20,
    borderBottomColor: colors.grey4,
    borderBottomWidth: 1,
    flex: 6,
    paddingVertical: 20,
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    width: "30%",
    padding: 15,
    fontWeight: "bold",
    backgroundColor: "#3A7FC9",
    borderRadius: 50,
    paddingHorizontal: 35,
    marginLeft: 120,
  },
  textInput: {},
});
