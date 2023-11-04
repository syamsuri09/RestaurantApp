import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Header = ({ headerText }) => {
  return (
    <View style={styles.container}>
      <Text style={{ flex: 1, fontSize: 35 }}>Menu</Text>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/images/deliveryGuy.png")}
          style={styles.image}
        />
        <Text>{headerText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
});

export default Header;
