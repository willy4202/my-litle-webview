import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import Header from "../components/Header/Header";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "../components/Icon";
import { useLinkListValue } from "../states/atomLinkList";
import Spacer from "../components/Spacer";

const ListScreen = () => {
  const navigation = useNavigation();
  const safeAreaInset = useSafeAreaInsets();
  const list = useLinkListValue();

  const onPress = useCallback((item) => {
    navigation.navigate("DetailScreen", { item });
  }, []);
  const onPressAddButton = useCallback(() => {
    navigation.navigate("RegisterScreen");
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Button
        onPress={() => onPress(item)}
        paddingHorizontal={24}
        paddingVertical={24}
      >
        <Typography fontSize={24}>{item.link}</Typography>
        <Spacer height={4} />
        <Typography color="gray" fontSize={16}>
          {item.title !== "" ? `${item.title.slice(0, 20)} | ` : ""}
          {new Date(item.createdAt).toLocaleString()}
        </Typography>
      </Button>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="Link LIST" />
      </Header>
      <FlatList data={list} renderItem={renderItem} />
      <View
        style={{
          position: "absolute",
          right: 24,
          bottom: 24 + safeAreaInset.bottom,
        }}
      >
        <Button onPress={onPressAddButton}>
          <View style={styles.floatBtn}>
            <Icon name={"add"} color={"white"} size={32} />
          </View>
        </Button>
      </View>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  floatBtn: {
    width: 52,
    height: 52,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
