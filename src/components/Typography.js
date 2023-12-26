import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Typography = ({ children, color, fontSize }) => {
  return (
    <View>
      <Text style={{ color: color, fontSize: fontSize }}>{children}</Text>
    </View>
  );
};

export default Typography;

const styles = StyleSheet.create({});
