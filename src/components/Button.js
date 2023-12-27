import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({
  onPress,
  hitSlop,
  children,
  paddingHorizontal,
  paddingVertical,
}) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}
      style={{ paddingHorizontal, paddingVertical }}
    >
      {children}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
