import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useContext, useRef } from "react";
import { Avatar, Icon } from "react-native-elements";
import { colors, parameters } from "../global/style";
import MapComponent from "../components/MapComponent";
import { OriginContext, DestinationContext } from "../contexts/contexts";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const AddScreen = ({ navigation }) => {
  const { origin, dispatchOrigin } = useContext(OriginContext);
  const [userOrigin, setUserOrigin] = useState({
    latitude: origin.latitude,
    longtitude: origin.longtitude,
  });
  const textInput1 = useRef(4);
  const textInput2 = useRef(5);
  return (
    <View style={styles.container}>
      <View style={styles.View1}>
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.grey1}
          size={32}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.View4}>
        <View style={styles.View6}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed="auto" // true/false/undefined
            fetchDetails={true}
            renderDescription={(row) => row.description} // custom description render
            onPress={(data, details = null) => {
              console.log("data", data);
              console.log("details", details);
            }}
            onFail={(error) => {
              console.error(error);
            }}
            getDefaultValue={() => {
              return ""; // text input default value
            }}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: "AIzaSyD-c9lY0cuGs5lGmqHIx724D6swI3w8fXs",
              language: "en", // language of the results
            }}
            styles={autoComplete}
            CurrentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={
              {
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
              }
            }
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: "distance",
            }}
            // filterReverseGeocodingByTypes={[
            //   'locality',
            // ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            debounce={200}
          />
        </View>
        <View style={styles.View6}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed="auto" // true/false/undefined
            fetchDetails={true}
            styles={autoComplete}
            renderDescription={(row) => row.description} // custom description render
            onPress={(data, details = null) => {
              console.log("data", data);
              console.log("details", details);
            }}
            onFail={(error) => {
              console.error(error);
            }}
            getDefaultValue={() => {
              return ""; // text input default value
            }}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: "AIzaSyD-c9lY0cuGs5lGmqHIx724D6swI3w8fXs",
              language: "en", // language of the results
            }}
            //currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={
              {
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
              }
            }
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: "distance",
            }}
            // filterReverseGeocodingByTypes={[
            //   'locality',
            // ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            debounce={200}
          />
        </View>
      </View>
      <MapComponent userOrigin={userOrigin} />
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: parameters.statusBarHeight,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
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
    marginTop: 2,
    zIndex: 8,
  },
  View4: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 35,
  },
  View6: {
    width: SCREEN_WIDTH * 0.8,
    height: 40,
    justifyContent: "center",
    marginTop: 5,
    paddingLeft: 0,
  },
  text1: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.grey1,
  },

  image1: { height: 70, width: 30, marginRight: 10, marginTop: 10 },
  View7: {
    flexDirection: "row",
    alignItems: "center",
    //backgroundColor:colors.white
  },

  map: {
    marginVertical: 0,
    width: SCREEN_WIDTH,
    zIndex: -1,
  },
  text10: { color: colors.grey2, paddingLeft: 10 },

  centeredView: {
    zIndex: 14,
  },
});
const autoComplete = {
  textInput: {
    backgroundColor: colors.grey6,
    height: 30,
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontSize: 15,
    flex: 2,
    borderWidth: 1,
    marginHorizontal: 5,
  },
  container: {
    flex: 1,
  },
  predefinedPlacesDescription: {
    color: "#1faadb",
  },

  textInputContainer: {
    flexDirection: "row",
  },
};
