import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="profile" />
      <Stack.Screen
        name="settings"
        options={{
          headerShown: true,
          headerTitle: "Settings",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
