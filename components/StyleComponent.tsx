import React from "react";
import { StyleSheet, View } from "react-native";
// import Button from "./Button";

export default function StyleComponent() {
  return (
    <>
      {/* <Image
        source={{
          uri: "https://instagram.fbjx1-1.fna.fbcdn.net/v/t51.82787-15/670294177_17873783259592749_8160706903267723771_n.webp?_nc_cat=100&ig_cache_key=Mzg3NTQ0MDc2ODkyODgxNzM3OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=vsyx0mKsOLEQ7kNvwHK46nb&_nc_oc=AdqXkaqIS4OR3NQ2tG9t_Rgax02Q12Up_ZLC4NhgI9pp8gKAaV03gjgcyabPeU_hht21LOyRlvYJX3573xPlfTeS&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbjx1-1.fna&_nc_gid=Xp5wciqsbVQr0cIsPEQeDw&_nc_ss=7a22e&oh=00_Af5N7qZk5sFVAuSxnYGga8QD05Vuy-s8x6iueekCO4gmRA&oe=6A002246",
        }}
        style={StyleSheet.absoluteFillObject}
      /> */}
      <View
        // style={StyleSheet.compose(styles.centerItems, styles.backgroundOverlay)}
        style={StyleSheet.flatten([
          styles.centerItems,
          // styles.backgroundOverlay,
          // { justifyContent: "center", gap: 20 },
        ])}
      >
        {/* <Button>Haz Click</Button>
        <Button disabled>Haz Click</Button>
        <Button variant="sunset">Haz Click</Button> */}

        <View style={styles.box} />
        <View style={styles.box} />
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
    width: "90%",
    height: 100,
    // backgroundColor: "lightblue",
    borderRadius: 16,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderWidth: StyleSheet.hairlineWidth,
    boxShadow: " 0px 4px 6px rgba(0, 0, 0, 0.5)",
  },
  centerItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  backgroundOverlay: {
    backgroundColor: "#00000090",
    justifyContent: "flex-end",
  },
});
