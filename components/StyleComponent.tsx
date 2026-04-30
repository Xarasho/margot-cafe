import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Button from "./Button";

export default function StyleComponent() {
  return (
    <>
      <Image
        source={{
          uri: "https://scontent.fbjx1-1.fna.fbcdn.net/v/t51.82787-15/670294177_17873783259592749_8160706903267723771_n.webp?stp=dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=iTh9n2Uv1VEQ7kNvwEBkvHM&_nc_oc=Adp5HOxIryEwOJD20McU4d--C1DNtyQXPgbFanB-8DHDxUvupO5xuicexvXc71EbwgkopHwXp8z5PKlvusy64-cj&_nc_zt=23&_nc_ht=scontent.fbjx1-1.fna&_nc_gid=eyHgNXaSulZ07EORMe0OZw&_nc_ss=7b2a8&oh=00_Af0daB6e4VYjhhY3nNkpsDqvPG_C5EKmTRAB1W-GRRbPqA&oe=69F8E206",
          // uri: "https://scontent.fbjx1-1.fna.fbcdn.net/v/t51.82787-15/682382846_17876098605592749_2267663382049886666_n.webp?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=r606ZwdiF6UQ7kNvwEil-Vl&_nc_oc=AdqdWvjk94vyYpbnYc4DNL2GxQtIgv3i9fzOpN-TgVGFHqOV2EIjx8LosqX9Mpn0wqdia7Y63chAo_Sj8c-nWBAD&_nc_zt=23&_nc_ht=scontent.fbjx1-1.fna&_nc_gid=-hg1EEBs3f59stQvPZw4aw&_nc_ss=7b2a8&oh=00_Af2fBOr8dM0poBUbygDuJmIVZSRMXJR-g_4jUbZKJ6sicw&oe=69F8CBBB", //www.facebook.com/photo/?fbid=122131223913113431&set=a.122127428073113431",
        }}
        style={StyleSheet.absoluteFillObject}
      />
      <View
        // style={StyleSheet.compose(styles.centerItems, styles.backgroundOverlay)}
        style={StyleSheet.flatten([
          styles.centerItems,
          styles.backgroundOverlay,
          { justifyContent: "center", gap: 20 },
        ])}
      >
        <Button variant="sunset" size="lg">
          Haz Click
        </Button>
        <Button disabled size="lg">
          Haz Click
        </Button>
        <Button loading variant="danger" size="lg">
          Haz Click
        </Button>
        <View style={styles.box} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "black",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 16,
  },
  centerItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundOverlay: {
    backgroundColor: "#00000080",
    justifyContent: "flex-end",
  },
});
