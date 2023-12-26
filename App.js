import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigator } from "./src/BottomTabNavigator";
import { ScreenB } from "./src/ScreenB";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        {/* <Stack.Screen name="ScreenB" component={ScreenB} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// export default function App() {6
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="ScreenA" component={ScreenA}></Stack.Screen>
//         <Stack.Screen name="ScreenB" component={ScreenB}></Stack.Screen>
//         <Stack.Screen
//           name="NestedNavigator"
//           component={NestedStackNavigation}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
