import LayoutFlexbox from "@/components/ui/LayoutFlexbox";
import { ScrollView, Text } from "react-native";

export default function Index() {
  return (
    // <StyleComponent />
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <Text>Margot Cafe</Text>

      <LayoutFlexbox />

      {/* <Button
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
      </Button> */}

      {/* <Button
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
      </Button> */}
    </ScrollView>
  );
}
