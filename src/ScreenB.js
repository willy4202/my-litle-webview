import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export class ScreenB extends React.Component {
  render() {
    const onPress = () => {
      console.log(this.props.route.params.value);
    };
    return (
      <View>
        <Text>this is Screen B{this.props.route.params.value}</Text>
        <Button title="A 스크린으로 이동" onPress={onPress} />
      </View>
    );
  }
}
