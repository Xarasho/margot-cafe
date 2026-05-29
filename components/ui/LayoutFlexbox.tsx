import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function LayoutFlexbox() {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, flexGrow: 1, gap: 16 }}>
      {/* // <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 16, padding: 16 }}> */}
      <View style={{ flex: 1, flexBasis: 100, flexDirection: "row", gap: 16 }}>
        <View style={styles.node} />
        <View
          style={StyleSheet.compose(styles.node, {
            backgroundColor: "lightgreen",
          })}
        />
      </View>

      <View style={{ flex: 1, flexDirection: "row", gap: 16 }}>
        <Text style={{ width: "50%", borderWidth: 1, flexShrink: 1 }}>
          Hello, World! lorem ipsum dolor sit amet consectetur adipiscing elit.
          lorem ipsum dolor sit amet consectetur adipiscing elit.
        </Text>
        <Text style={{ width: "50%", borderWidth: 1, flexShrink: 1 }}>
          Hello, World! lorem ipsum dolor sit amet consectetur adipiscing elit.
          lorem ipsum dolor sit amet consectetur adipiscing elit.
        </Text>
      </View>

      {/* <View style={{ flex: 1, flexDirection: "row", columnGap: 16 }}> */}
      <View style={{ height: 200, flexDirection: "row", columnGap: 16 }}>
        <View
          style={StyleSheet.compose(styles.node, {
            backgroundColor: "blue",
          })}
        />
        <View
          style={StyleSheet.compose(styles.node, {
            // backgroundColor: "red",
            backgroundColor: "lightgray",
            width: "33%",
          })}
        ></View>
        <View
          style={StyleSheet.compose(styles.node, {
            backgroundColor: "purple",
          })}
        />
      </View>
      <View
        style={StyleSheet.compose(styles.node, {
          backgroundColor: "orange",
        })}
      />
      <View
        style={StyleSheet.compose(styles.node, {
          backgroundColor: "lightblue",
        })}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    backgroundColor: "lightgreen",
  },

  node: {
    // flex: 1,
    // width: 100,
    // height: 100,
    flexGrow: 1,
    backgroundColor: "lightpink",
  },
});
