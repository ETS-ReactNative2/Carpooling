import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Picker,
  Button,
  Platform,
} from "react-native";
import * as Location from "expo-location";
import { Icon } from "react-native-elements/dist/icons/Icon";

const SCREEN_WIDTH = Dimensions.get("window").width;

import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors, parameters } from "../global/style";
import { filterData, carsAround } from "../global/data";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native-elements/dist/image/Image";
import { mapStyle } from "../global/mapStyle";
import SelectDropdown from "react-native-select-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";

//import { Picker } from "react-native-web";

const HomeScreen = ({ navigation }) => {
  const [latlng, setLatLng] = useState({});

  // const [pickerValue, setPickerValue] = useState("Passenger");

  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if (hasPermission.status === "granted") {
      const permission = await askPermission();
      return permission;
    }
    return true;
  };

  const askPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    return permission.status === "granted";
  };

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLatLng({ latitude: latitude, longitude: longitude });
    } catch (error) {}
  };

  const _map = useRef(1);

  useEffect(() => {
    checkPermission();
    getLocation();
    console.log(latlng), [];
  });

  const roles = ["Passenger", "Driver"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon1}>
          <Icon
            type="material-community"
            name="menu"
            color={colors.white}
            size={30}
          />
        </View>
      </View>
      <ScrollView bounces={false}>
        <View style={styles.home}>
          <Text style={styles.text1}>Carpooling</Text>
          <View style={styles.View1}>
            <View style={styles.View8}>
              <Text style={styles.text2}>
                Read a book, Take a map, stare out the window
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RequestScreen");
                }}
              >
                <View style={styles.button1}>
                  <Text style={styles.button1Text}>Start Ride</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                style={styles.image1}
                source={require("../../assets/uberCar.png")}
              />
            </View>
          </View>
        </View>
        <SelectDropdown
          data={roles}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />

        <Text style={styles.text4}>Around you</Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <MapView
            ref={_map}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyle}
            showsUserLocation={true}
            followsUserLocation={true}
            initialRegion={{
              ...carsAround[0],
              latitude: 6.844,
              longitude: 79.953,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
          >
            {carsAround.map((item, index) => (
              <MapView.Marker coordinate={item} key={index.toString()}>
                <Image
                  source={require("../../assets/carMarker.png")}
                  style={styles.carsAround}
                  resizeMode="cover"
                />
              </MapView.Marker>
            ))}
          </MapView>
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#009387" translucent={true} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },
  header: {
    backgroundColor: "#3A7FC9",
    paddingTop: parameters.statusBarHeight,
    //height:parameters.headerHeight,
    alignItems: "flex-start",
  },
  image1: {
    height: 100,
    width: 100,
  },
  image2: { height: 60, width: 60, borderRadius: 30 },
  home: {
    backgroundColor: "#3A7FC9",
    paddingLeft: 20,
  },

  text1: {
    color: "white",
    fontSize: 21,
    paddingBottom: 20,
    paddingTop: 20,
  },

  text2: {
    color: "white",
    fontSize: 16,
  },

  View1: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
  },

  picker: {
    width: 100,
    height: 45,
  },

  button1: {
    height: 40,
    width: 150,
    backgroundColor: "black",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  button1Text: {
    color: "white",
    fontSize: 17,
    marginTop: -2,
    alignItems: "center",
  },
  card: {
    alignItems: "center",
    margin: SCREEN_WIDTH / 22,
  },

  View2: { marginBottom: 5, borderRadius: 15, backgroundColor: "#f0fc" },
  title: {
    color: "black",
    fontSize: 16,
  },
  View3: {
    flexDirection: "row",
    marginTop: 5,
    height: 50,
    backgroundColor: "#F7F0EE",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },

  text3: { marginLeft: 15, fontSize: 20, color: "black" },

  View4: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
  },

  View5: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    justifyContent: "space-between",
    marginHorizontal: 15,
    borderBottomColor: Colors.grey4,
    borderBottomWidth: 1,
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

  map: {
    height: 150,
    marginVertical: 0,
    width: SCREEN_WIDTH * 0.92,
  },

  text4: {
    fontSize: 20,
    color: "black",
    marginLeft: 20,
    marginBottom: 20,
  },

  icon1: {
    marginLeft: 10,
    marginBottom: 5,
  },

  View8: {
    flex: 4,
    marginTop: -25,
  },
  carsAround: {
    width: 20,
    height: 14,
  },

  location: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },

  View9: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "white",
  },
});
