import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { WebView } from "react-native-webview";
import Header from "../components/Header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";

const DetailScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();
  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Icon iconName="arrow-back" onPress={goBack} />
        <Header.Title title="Detail" />
      </Header>
      <WebView style={{ flex: 1 }} source={{ uri: route.params.item.link }} />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
