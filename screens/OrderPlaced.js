import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";
import { useDispatch } from "react-redux";

const OrderPlaced = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Tabs");
    }, 4000);
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        backgroundColor: Colors.primary,
      }}
    >
      <AntDesign name="checkcircle" size={65} color="white" />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
          lineHeight: 40,
        }}
      >
        Hurray! Your Order Placed Successfully
      </Text>
    </View>
  );
};

export default OrderPlaced;
