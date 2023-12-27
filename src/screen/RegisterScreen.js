import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header/Header";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View>
      <Header>
        <Header.Icon iconName="arrow-back" onPress={goBack} />
        <Header.Title title="Register" />
      </Header>
      <Text>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
