import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Avatar, Icon } from "react-native-elements";
import { colors, parameters } from "../global/style";
import { mapStyle } from "../global/mapStyle";
import MapComponent from "../components/MapComponent";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { OriginContext, DestinationContext } from "../contexts/contexts";
import MapViewDirections from "react-native-maps-directions";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const ReqBookScreen = ({ navigation }) => {
  const { origin, dispatchOrigin } = useContext(OriginContext);
  const [userOrigin, setUserOrigin] = useState({
    latitude: origin.latitude,
    longitude: origin.longitude,
  });

  const { destination, dispatchDestination } = useContext(DestinationContext);
  const [userDestination, setUserDestination] = useState({
    latitude: destination.latitude,
    longitude: destination.longitude,
  });

  useEffect(() => {
    setUserOrigin({ latitude: origin.latitude, longitude: origin.longitude });
    setUserDestination({
      latitude: destination.latitude,
      longitude: destination.longitude,
    });
  }, [origin, destination]);

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
  
      <TouchableOpacity 
       onPress={() => navigation.navigate("HomeScreen")}
      style={ styles.bottomView} >

<Text style={styles.textStyle}>Book Vehicle</Text>

</TouchableOpacity>
<View style={styles.container3}>
<MapComponent userOrigin={userOrigin} userDestination={userDestination} />
</View>

      
     
    </View>
  );
};

export default ReqBookScreen;

const styles = StyleSheet.create({
 
  container: {
    flex: 2,
    //paddingTop: parameters.statusBarHeight,
  },

  container3: {
   width:"100%",
   height:"88%",
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
 
  bottomView:{

    width: '50%', 
    height: 50, 
    backgroundColor: '#000000', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    marginLeft:85,
    borderRadius:20,
    
  },

  textStyle:{

    color: '#fff',
    fontSize:20
  }
});
