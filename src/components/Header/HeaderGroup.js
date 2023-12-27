import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderGroup = ({ children }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {children}
    </View>
  );
};

export default HeaderGroup;

const styles = StyleSheet.create({});
