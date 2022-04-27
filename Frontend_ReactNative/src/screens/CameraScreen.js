import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { colors, parameters } from "../global/style";
import { Avatar, Icon } from "react-native-elements";

const CameraScreen = ({ navigation }) => {
  return (
    <View style={styles.View1}>
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.grey1}
          size={32}
          onPress={() => navigation.goBack()}
        />
      </View>
  )
}

export default CameraScreen

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
        marginTop: 2,
        zIndex: 8,
      },
})