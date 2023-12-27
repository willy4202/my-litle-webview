import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "../Icon";
import Button from "../Button";

const HeaderButton = ({ onPress, iconName }) => {
  return (
    <Button onPress={onPress}>
      <Icon name={iconName} size={24} />
    </Button>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({});
