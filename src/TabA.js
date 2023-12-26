import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Typography from "./components/Typography";
import LocalImage from "./components/LocalImage";
import RemoteImage from "./components/RemoteImage";
import Badge from "./components/Badge";
import Icon from "./components/Icon";
import Button from "./components/Button";
import Divider from "./components/Divider";
import Spacer from "./components/Spacer";

export class TabA extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Typography color="red" fontSize={24}>
          <Typography color="green" fontSize={14}>
            안녕
          </Typography>
          하세요
        </Typography>
        <Divider />

        <LocalImage
          source={require("../assets/recent.png")}
          width={100}
          height={100}
        />
        <RemoteImage
          uri="https://i.rtings.com/assets/products/pP29sg7u/keychron-q-pro-series-q1-pro-q2-pro-etc/design-medium.jpg"
          width={100}
          height={100}
        />
        <Badge>
          <Typography fontSize={15}>ADBDA</Typography>
        </Badge>
        <Text>TabA</Text>
        <Icon name="home" size={24} />
        <Button onPress={() => console.log("hihiih")}>
          <Typography>hi</Typography>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
