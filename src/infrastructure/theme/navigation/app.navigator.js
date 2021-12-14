import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { RestaurantsNavigator } from "./restaurants.navigator";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";

const MapScreen = () => (
  <SafeArea>
    <Text>Map!</Text>
  </SafeArea>
);

const SettingsScreen = () => (
  <SafeArea>
    <Text>Settings!</Text>
  </SafeArea>
);

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = (route) => {
  return {
    tabBarIcon: ({ color, size }) => {
      const iconName = TAB_ICON[route.name];
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  };
};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          ...createScreenOptions(route),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
