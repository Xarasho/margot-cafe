import Button from "@/components/Button";
import Text from "@/components/ui/Text";
import { Link, Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Settings() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Settings",
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button>Hey</Button>
        <Text>You are inside settings with tabs</Text>
        <Link dismissTo href="/">
          Go back
        </Link>
      </View>
    </>
  );
}
