import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header/Header";
import SingleLineTextInput from "../components/SingleLineTextInput";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Spacer from "../components/Spacer";
import { useLinkList } from "../states/atomLinkList";

const RegisterScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);
  const [url, setUrl] = useState("");
  const [link, setLink] = useLinkList();

  const onPressSave = useCallback(() => {
    setLink((prev) => [
      ...prev,
      {
        title: "",
        image: "",
        link: url,
        createdAt: new Date().toISOString(),
      },
    ]);
    setUrl("");
  }, [url]);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Icon iconName="arrow-back" onPress={goBack} />
        <Header.Title title="Register" />
      </Header>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
      >
        <SingleLineTextInput
          value={url}
          onChangeText={setUrl}
          placeholder={"https:example.com"}
        />
      </View>
      <Button onPress={onPressSave}>
        <View
          style={{
            backgroundColor: url === "" ? "gray" : "black",
          }}
        >
          <View
            style={{
              height: 52,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="white">저장하기</Typography>
          </View>
          <Spacer height={bottom} />
        </View>
      </Button>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
