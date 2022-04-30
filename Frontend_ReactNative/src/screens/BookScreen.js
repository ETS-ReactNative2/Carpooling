import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { mapStyle } from "../global/mapStyle";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { colors, parameters } from "../global/style";
import { Avatar, Icon } from "react-native-elements";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";


const BookScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.View1}>
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.grey1}
          size={32}
          onPress={() => navigation.goBack()}
        />
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyle}
        //ref={this._map}
        initialRegion={{
          latitude: 7.12,
          longitude: 80.9,
          latitudeDelta: 1.9,
          longitudeDelta: 1.9,
        }}
      >
       <Marker
          coordinate={{
            latitude:  6.8041,
            longitude: 79.9225,
          }}
          image={require("../../assets/map_marker.png")}
          title="Nimesha Dilrukshi"
          description="This is the Description"
        >
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Nipuni Dilukshika</Text>
                <Text>Wagon R</Text>
                <Text>Passenger_4</Text>
                <Image
                  style={styles.image}
                  source={require("../../assets/driver.png")}
                />
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </Callout>
        </Marker>
        
        <Marker
          coordinate={{
            latitude:  6.5041,
            longitude: 80.1225,
          }}
          image={require("../../assets/map_marker.png")}
          title="Nimesha Dilrukshi"
          description="This is the Description"
        >
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Anura Shantha</Text>
                <Text>Vezel</Text>
                <Text>Passenger_5</Text>
                <Image
                  style={styles.image}
                  source={require("../../assets/driver.png")}
                />
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: 7.8041,
            longitude: 80.9225,
          }}
          image={require("../../assets/map_marker.png")}
          title="Nimesha Dilrukshi"
          description="This is the Description"
        >
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Nimesha Dilrukshi</Text>
                <Text>Motor Bike</Text>
                <Text>Passenger_1</Text>
                <Image
                  style={styles.image}
                  source={require("../../assets/driver.png")}
                />
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

export default BookScreen;
const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 180,
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 80,
  },
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
    //marginTop: 2,
    zIndex: 8,
  },
});
