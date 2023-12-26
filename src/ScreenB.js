import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export class ScreenB extends React.Component {
  render() {
    return (
      <View>
        <Text>this is Screen B</Text>
        <Button title="A 스크린으로 이동" />
      </View>
    );
  }
}
