import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

import { Colors } from "react-native/Libraries/NewAppScreen";
import { parameters } from "./src/global/style";
import RoootNavigator from "./src/navigations/RootNavigator";

import { Asset } from "expo";
import { DestinationContextProvider, OriginContextProvider } from "./src/contexts/contexts";

const App = () => {
  return (
    <DestinationContextProvider>
    <OriginContextProvider>
      <RoootNavigator />
    </OriginContextProvider>
    </DestinationContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:"white",
    //paddingBottom:30
  },
});
