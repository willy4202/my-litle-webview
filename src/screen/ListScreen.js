import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import Header from "../components/Header/Header";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { useNavigation } from "@react-navigation/native";

const ListScreen = () => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate("DetailScreen");
  }, []);
  const onPressAddButton = useCallback(() => {
    navigation.navigate("RegisterScreen");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="Link LIST" />
      </Header>
      <Text>ListScreen</Text>
      <View>
        <Button onPress={onPress}>
          <Typography>LINK DETAIL로 이동하기</Typography>
        </Button>
        <Button onPress={onPressAddButton}>
          <Typography>REGISTER 스크린 이동하기</Typography>
        </Button>
      </View>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
