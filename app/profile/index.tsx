import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function ProfileIndex() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Profile",
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link dismissTo href="/">
          Go back
        </Link>
      </View>
    </>
  );
}
