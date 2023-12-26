import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export class ScreenA extends React.Component {
  render() {
    const routeB = () => {
      this.props.navigation.navigate("ScreenB", { value: "from A" });
    };
    const routeC = () => {
      this.props.navigation.navigate("NestedNavigator");
    };
    return (
      <View>
        <Text>this is Screen A</Text>
        <Button title="B스크린으로 이동" onPress={routeB} />
        <Button title="C스크린으로 이동" onPress={routeC} />
      </View>
    );
  }
}
