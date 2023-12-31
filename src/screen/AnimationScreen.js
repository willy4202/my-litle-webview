import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import Header from "../components/Header/Header";

const AnimationScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title={"박스 움직이기"} />
      </Header>
      <View style={{ flex: 1, borderWidth: 1 }}>
        <Button title="박스 움직이기" onPress={() => console.log("움직이기")} />
        <Animated.View></Animated.View>
      </View>
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({});
