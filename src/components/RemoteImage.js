import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const RemoteImage = ({ uri, style, width, height }) => {
  return (
    <View>
      <Image
        source={{ uri: uri }}
        style={[style, { width: width, height: height }]}
      />
    </View>
  );
};

export default RemoteImage;
//
