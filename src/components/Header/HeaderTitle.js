import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../Typography";

const HeaderTitle = ({ title }) => {
  return <Typography fontSize={24}>{title}</Typography>;
};

export default HeaderTitle;
