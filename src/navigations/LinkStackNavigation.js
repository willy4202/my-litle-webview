import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "../screen/ListScreen";
import DetailScreen from "../screen/DetailScreen";
import RegisterScreen from "../screen/RegisterScreen";

const Stack = createNativeStackNavigator();

const LinkStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ListScreen"
      screenOptions={{ presentation: "card", headerShown: false }}
    >
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default LinkStackNavigation;
