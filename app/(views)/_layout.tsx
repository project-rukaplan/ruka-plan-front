import React from "react";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function ViewsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarPosition: Platform.OS === "web" ? "top" : "bottom",
        tabBarStyle: {
          height: 50,
        },
      }}
    >
      <Tabs.Screen
        name={"home/index"}
        options={{
          title: "Inicio",
          tabBarIcon: () => <></>,
          tabBarItemStyle: {
            flex: 1,
          },
        }}
      />
      <Tabs.Screen
        name={"profile/index"}
        options={{
          title: "Mi Perfil",
          tabBarIcon: () => <></>,
          tabBarItemStyle: {
            flex: 1,
          },
        }}
      />
      <Tabs.Screen
        name={"shopping-cart/index"}
        options={{
          title: "",
          //   tabBarIcon: () => (<></>),
          tabBarItemStyle: {
            flex: 6,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          },
        }}
      />
    </Tabs>
  );
}
