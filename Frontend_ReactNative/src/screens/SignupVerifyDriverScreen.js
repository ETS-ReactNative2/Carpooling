import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
//import * as Permission from 'expo-permissions';
import { Icon } from "react-native-elements/dist/icons/Icon";
import { colors, parameters } from "../global/style";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SignupVerifyDriverScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.View5}>
        <View style={styles.View6}>
          <View style={styles.View7}>
            <Icon
              type="material-community"
              name="map-marker"
              color={colors.grey1}
              size={15}
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, color: colors.black }}>
              Profile Photo
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
          <Icon
            type="material-community"
            name="chevron-right"
            color={colors.black}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View5}>
        <View style={styles.View6}>
          <View style={styles.View7}>
            <Icon
              type="material-community"
              name="map-marker"
              color={colors.grey1}
              size={15}
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, color: colors.black }}>
              License Card
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
          <Icon
            type="material-community"
            name="chevron-right"
            color={colors.black}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.View5 }}>
        <View style={styles.View6}>
          <View style={styles.View7}>
            <Icon
              type="material-community"
              name="map-marker"
              color={colors.grey1}
              size={15}
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, color: colors.black }}>
              Vehicle Registration Form
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
          <Icon
            type="material-community"
            name="chevron-right"
            color={colors.black}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        <View style={styles.button1}>
          <Text style={styles.button1Text}>Start Ride</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="light" backgroundColor="#009387" translucent={true} />
    </View>
  );
};

export default SignupVerifyDriverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 30,
    paddingBottom: 100,
    paddingTop: 120,
    //paddingTop: parameters.statusBarHeight,
  },

  View5: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginBottom: 30,
    marginTop: 30,
    borderBottomColor: Colors.grey4,
    borderBottomWidth: 3,
    flex: 1,
  },

  View6: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
  },

  View7: {
    backgroundColor: "#F7F0EE",
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  button1: {
    height: 40,
    width: 150,
    backgroundColor: "black",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginLeft: 100,
    marginTop: 20,
  },

  button1Text: {
    color: "white",
    fontSize: 17,
    marginTop: -2,
    alignItems: "center",
  },
});
