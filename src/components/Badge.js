import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Badge = ({ children, fontSize }) => {
  return (
    <View>
      {children}
      <View style={[styles.badge, styles.postionAbs]}>
        <Text style={{ fontSize: fontSize }}>N </Text>
      </View>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  postionAbs: {
    position: "absolute",
    right: -5,
    top: -5,
  },
});
