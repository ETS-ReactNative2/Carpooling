import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Avatar, Caption, Title } from "react-native-paper";
import { colors, parameters } from "../global/style";
//import { Icon } from 'react-native-vector-icons/Icon';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//import { Image } from "react-native-elements/dist/image/Image";
const RatingScreen = () => {
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  //const starImgCorner = "https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true";
  //const starImgFilled = "https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true";
  const starImgCorner = "https://www.clipartmax.com/png/middle/0-7405_blue-star-outline-clip-art-at-vector-clip-art-blue-star-outline.png";
  const starImgFilled = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-KjIV2DF-LvAXb1F7E7SjWXcVltoqeb_K7r2qyflHEoseEPob4ba4UFJW9huBkt6BLJE&usqp=CAU";

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setdefaultRating(item)}
            >
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImgFilled }
                    : { uri: starImgCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <View>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.icon1}>
            <Icon
              type="material-community"
              name="menu"
              color={colors.black}
              size={30}
            />
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
              source={require("../../assets/driver.png")}
              size={100}
            />
            <View style={{ marginLeft: 20 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                    color: "#3A7FC9",
                  },
                ]}
              >
                Nipuni Dilukshika
              </Title>
              <Caption style={styles.caption}>@Standard Driver</Caption>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="black" size={20} />
            <Text style={{ color: "black", marginLeft: 20 }}>
              Walasmulla, SriLanka
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="black" size={20} />
            <Text style={{ color: "black", marginLeft: 20 }}>
              +94-999999999
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="black" size={20} />
            <Text style={{ color: "black", marginLeft: 20 }}>
              nipu_ddd@email.com
            </Text>
          </View>
        </View>
        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {
                borderRightColor: "#3A7FC9",
                borderRightWidth: 2,
              },
            ]}
          >
            <Title style={{ color: "#3A7FC9" }}>140</Title>
            <Caption>Reviews</Caption>
            <Icon name="star" color="black" size={20} />
          </View>
          <View style={styles.infoBox}>
            <Title style={{ color: "#3A7FC9" }}>4.5</Title>
            <Caption>Rates</Caption>
            <Icon name="star" color="black" size={20} />
          </View>
        </View>
        <Text style={styles.textStyle}> Please Rate Us </Text>
        <CustomRatingBar />
        <Text style={styles.textStyle}>
          {defaultRating + ' / ' + maxRating.length}
        </Text>
        <TouchableOpacity
          activeOpacity= {0.7}
          style={styles.buttonStyle}
          onPress={() => alert(defaultRating)}
        >
          <Text style={{fontWeight: 'bold', fontSize:15}}>Get Selected Value</Text>

        </TouchableOpacity>
        <StatusBar style="light" backgroundColor="#009387" translucent={true} />
      </SafeAreaView>
    </View>
  );
};

export default RatingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: parameters.statusBarHeight,
    margin:10,
    justifyContent: 'center'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "800",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  header: {
    //backgroundColor: "#3A7FC9",
    paddingTop: parameters.statusBarHeight,
    //height:parameters.headerHeight,
    alignItems: "flex-start",
  },
  icon1: {
    marginLeft: 10,
    marginBottom: 5,
  },
  infoBoxWrapper: {
    borderBottomColor: "#3A7FC9",
    borderBottomWidth: 2,
    borderTopColor: "#3A7FC9",
    borderTopWidth: 2,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold'
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30
  },

  starImgStyle: {
    width: 30,
    height: 30,
    resizeMode: 'cover'
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '60%',
    padding: 15,
    fontWeight: 'bold',
    backgroundColor: '#3A7FC9',
    borderRadius: 5,
    paddingHorizontal:35,
    marginLeft:70

  }
});
