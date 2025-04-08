import React from "react";
import { Tabs } from "expo-router";
import { Platform, Image } from "react-native";

export default function ViewsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarPosition: Platform.OS === "web" ? "top" : "bottom",
        tabBarStyle: {
          height: 50,
          backgroundColor: "#B99470",
        },
        tabBarLabelStyle: {
          fontSize: 23,
          fontWeight: "bold",
          color: "#F7DCB9",
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
            alignItems: "flex-start",
            paddingLeft: 2, 
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
            alignItems: "flex-start",
            paddingLeft: 2 
          },
        }}
      />
      <Tabs.Screen
        name={"shopping-cart/index"}
        options={{
          title: "",
          tabBarIcon: () => (
            <Image 
              source={require("../../assets/images/carrito.png")} 
              style={{ width: 30, height: 30, marginRight: 20 }} 
            />
          ),
          tabBarItemStyle: {
            flex: 0.5,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          },
        }}
      />
    </Tabs>
  );
}