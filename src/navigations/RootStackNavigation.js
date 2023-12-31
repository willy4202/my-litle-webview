import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkStackNavigation from "./LinkStackNavigation";
import RegisterScreen from "../screen/RegisterScreen";
import AnimationScreen from "../screen/AnimationScreen";

const Stack = createNativeStackNavigator();

const RootStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="AnimationScreen"
      screenOptions={{ presentation: "containedModal", headerShown: false }}
    >
      <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
      <Stack.Screen name="LinkStack" component={LinkStackNavigation} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;

const styles = StyleSheet.create({});
