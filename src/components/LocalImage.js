import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const LocalImage = ({ source, style, width, height }) => {
  return (
    <View>
      <Image
        source={source}
        style={[style, { width: width, height: height }]}
      />
    </View>
  );
};

export default LocalImage;
// https://i.rtings.com/assets/products/pP29sg7u/keychron-q-pro-series-q1-pro-q2-pro-etc/design-medium.jpg
