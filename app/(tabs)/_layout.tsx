import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
 
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#18ba30",
            borderRadius: 50,
            borderWidth: 0,
            marginVertical: 5,
            marginHorizontal: 12,
            position: "absolute"
          },
        }}
      >
        <Tabs.Screen
          name="dashboard"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "refresh" : "refresh"} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="bills"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "card" : "card-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "person" : "person"} color={color} />
            ),
          }}
        />
      </Tabs>
  );
}
