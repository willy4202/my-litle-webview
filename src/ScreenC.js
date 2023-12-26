import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export class ScreenC extends React.Component {
  render() {
    const routeB = () => {
      this.props.navigation.navigate("ScreenB", { value: "from C" });
    };
    const onPress = () => {
      console.log(this.props.route);
    };
    return (
      <View>
        <Text>this is Screen C</Text>
      </View>
    );
  }
}
