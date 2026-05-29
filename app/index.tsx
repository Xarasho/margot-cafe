import Button from "@/components/Button";
import { Link } from "expo-router";
import { ScrollView, Text, useColorScheme } from "react-native";

export default function Index() {
  const theme = useColorScheme();
  const isDarkMode = theme === "dark";

  return (
    // <StyleComponent />

    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        backgroundColor: isDarkMode ? "#000" : "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: isDarkMode ? "#fff" : "#000",
        }}
      >
        Margot Cafe
      </Text>
      <Link
        href={{ pathname: "./settings", params: { name: "Margot" } }}
        style={{ color: isDarkMode ? "#fff" : "#000" }}
      >
        Settings
      </Link>
      <Link
        href={{ pathname: "./profile" }}
        style={{ color: isDarkMode ? "#fff" : "#000" }}
      >
        Profile
      </Link>
      <Button
        onPress={() => alert("Quieres un cafe?")}
        size="sm"
        disabled
        variant="ghost"
      >
        Haz Click
      </Button>
      <Button onPress={() => alert("Quieres un cafe?")} variant="sunset">
        Haz Click
      </Button>
      <Button onPress={() => alert("Quieres un cafe?")} size="lg">
        Haz Click
      </Button>
      <Button size="lg" loading variant="sunset">
        Haz Click
      </Button>
      <Button size="lg" variant="danger">
        Haz Click
      </Button>
      <Button
        onPress={() => alert("Quieres un cafe?")}
        size="lg"
        style={{ backgroundColor: "purple" }}
        textStyle={{ color: "yellow" }}
      >
        Haz Click
      </Button>
      <Button
        onPress={() => alert("Quieres un cafe?")}
        size="lg"
        style={{ backgroundColor: "green" }}
        textStyle={{ color: "white" }}
      >
        Haz Click
      </Button>
    </ScrollView>

    // <LayoutFlexbox />
  );
}
