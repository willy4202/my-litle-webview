import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header/Header";
import SingleLineTextInput from "../components/SingleLineTextInput";
import Button from "../components/Button";
import Typography from "../components/Typography";
import RemoteImage from "../components/RemoteImage";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Spacer from "../components/Spacer";
import { useLinkList } from "../states/atomLinkList";
import { getOpenGraphData } from "../util/OpenGraphTagUtils";
import { getClipboardString } from "../util/ClipboardUtils";

const RegisterScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);
  const [url, setUrl] = useState("");
  const [link, setLink] = useLinkList();
  const [metaData, setMetaData] = useState(null);
  const { width } = useWindowDimensions();

  const onPressSave = useCallback(() => {
    setLink((prev) => [
      ...prev,
      {
        title: metaData.title,
        image: metaData.image,

        link: url,
        createdAt: new Date().toISOString(),
      },
    ]);
    setUrl("");
  }, [url]);

  const onSubmitEditing = useCallback(async (url) => {
    const result = await getOpenGraphData(url);
    setMetaData(result);
  }, []);

  const onGetClipboardString = useCallback(async () => {
    const result = await getClipboardString();
    const openGraph = await getOpenGraphData(result);
    console.log(
      "🚀 ~ file: RegisterScreen.js:48 ~ onGetClipboardString ~ openGraph:",
      openGraph
    );
    setUrl(result);
    setMetaData({
      title: openGraph.title,
      description: openGraph.description,
      image: openGraph.image,
    });
  }, []);

  useEffect(() => {
    onGetClipboardString();
  }, []);

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
          justifyContent: "flex-start",
          paddingHorizontal: 24,
          paddingVertical: 24,
        }}
      >
        <SingleLineTextInput
          value={url}
          onChangeText={setUrl}
          placeholder={"https:example.com"}
          onSubmitEditing={() => {
            onSubmitEditing(url);
          }}
        />
        {metaData !== null && (
          <>
            <Spacer height={12} />
            <View style={{ borderWidth: 0.4, borderColor: "gray" }}>
              <RemoteImage
                uri={metaData.image}
                width={width - 48}
                height={width / 2}
              />
              <View style={{ padding: 12 }}>
                <Spacer height={10} />
                <Typography fontSize={20} color={"black"}>
                  {metaData.title}
                </Typography>
                <Spacer height={6} />
                <Typography fontSize={16} color={"gray"}>
                  {metaData.description}
                </Typography>
              </View>
            </View>
          </>
        )}
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
