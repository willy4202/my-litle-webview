import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import LinkStackNavigation from "./src/navigations/LinkStackNavigation";
import RootStackNavigation from "./src/navigations/RootStackNavigation";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
