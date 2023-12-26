import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabA } from "./TabA";
import { NestedStackNavigation } from "./NestedNavigator";
import { TabB } from "./TabB";

const BottomTab = createBottomTabNavigator();

export class BottomTabNavigator extends React.Component {
  render() {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="TabA"
          component={TabA}
          options={{
            tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
          }}
        />
        <BottomTab.Screen
          name="TabB"
          component={NestedStackNavigation}
          options={{
            tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
          }}
        />
      </BottomTab.Navigator>
    );
  }
}
