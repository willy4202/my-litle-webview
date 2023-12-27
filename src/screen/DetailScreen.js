import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import Header from "../components/Header/Header";
import { useNavigation } from "@react-navigation/native";

const DetailScreen = () => {
  const navigation = useNavigation();
  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <View>
      <Header>
        <Header.Icon iconName="arrow-back" onPress={goBack} />
        <Header.Title title="Detail" />
      </Header>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
