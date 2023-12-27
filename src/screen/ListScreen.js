import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import Header from "../components/Header/Header";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "../components/Icon";

const ListScreen = () => {
  const navigation = useNavigation();
  const safeAreaInset = useSafeAreaInsets();

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
      </View>
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
