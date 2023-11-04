import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../theme/Colors";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.primary, Colors.secondary]}
    >
      <View style={styles.image}>
        <Image
          source={require("../assets/images/welcom.png")}
          style={{ height: 280, width: 280 }}
        />
      </View>
      <Text style={styles.text}>
        Restaurant Food{"\n"}At Your{"\n"}Door Step
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 300,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    top: 50,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    lineHeight: 55,
    top: -15,
  },
  button: {
    backgroundColor: "white",
    width: 180,
    height: 55,
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
    lineHeight: 30,
  },
});

export default Welcome;
