import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
//import * as Permission from 'expo-permissions';
import { Icon } from "react-native-elements/dist/icons/Icon";
import { colors, parameters } from "../global/style";

const SignupVerifyScreen = () => {
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
                52 Julampitiya Rd
              </Text>
              <Text style={{ color: colors.grey3 }}>
                155,Belihuloya,SriLanka
              </Text>
            </View>
          </View>
          <View style={{ ...styles.View5, borderBottomWidth: 0 }}>
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
                52 Julampitiya Rd
              </Text>
              <Text style={{ color: colors.grey3 }}>
                155,Belihuloya,SriLanka
              </Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="chevron-right"
              color={colors.grey}
              size={20}
            />
          </View>
        </View>
      <StatusBar style="light" backgroundColor="#009387" translucent={true} />
    </View>
    </View>
  );
};

export default SignupVerifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },
  
});
