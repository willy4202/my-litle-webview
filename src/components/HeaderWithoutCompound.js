import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import Spacer from "./Spacer";
import Button from "./Button";
import Icon from "./Icon";
import Typography from "./Typography";

const HeaderWithoutCompound = ({ leftIcon, title }) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View style={{ paddingTop: insets.top }}>
          <View
            style={{
              //   width: insets.width,
              height: 56,
              flexDirection: "row",
              borderBottomColor: "gray",
              borderBottomWidth: 1,
            }}
          />
          <Spacer height={12} />
          <Text>hi</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* {leftIcon && (
              <Button onPress={leftIcon.onPress}>
                <Icon name={leftIcon.name} size={28} />
              </Button>
            )} */}

            <Typography color={"red"} fontSize={24}>
              {title}
            </Typography>
            {/* {rightIcon && (
              <Button onPress={rightIcon.onPress}>
                <Icon name={rightIcon.name} size={28} />
              </Button>
            )} */}
          </View>
          <Spacer height={24} />
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default HeaderWithoutCompound;

const styles = StyleSheet.create({});
