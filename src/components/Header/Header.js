import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import Spacer from "../Spacer";
import Button from "../Button";
import Icon from "../Icon";
import Typography from "../Typography";
import HeaderTitle from "./HeaderTitle";
import HeaderButton from "./HeaderButton";
import HeaderGroup from "./HeaderGroup";

const Header = ({ children }) => {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View style={{ paddingTop: insets.top }}>
          <View
            style={{
              width: width,
              flexDirection: "row",
              height: 56,
              borderBottomColor: "gray",
              borderBottomWidth: 0.6,
              alignItems: "center",
            }}
          >
            <Spacer height={12} />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 12,
              }}
            >
              {children}
            </View>
            <Spacer height={12} />
          </View>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};

Header.Title = HeaderTitle;
Header.Icon = HeaderButton;
Header.Group = HeaderGroup;

export default Header;
