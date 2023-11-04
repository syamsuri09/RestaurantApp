import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "../theme/Colors";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../Redux/CartSlice";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);

  let amount = 0;
  storeData.forEach((element) => {
    amount += element.price * element.quantity;
  });

  return (
    <View style={styles.safe}>
      <SafeAreaView style={{ gap: 20, flex: 1 }}>
        <Text style={{ fontWeight: "500", fontSize: 22 }}>
          {storeData.length} items in Cart
        </Text>
        <View style={{ height: 300 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={storeData}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    height: 130,
                    //backgroundColor: "blue",
                    marginBottom: 10,
                    borderRadius: 20,
                    flexDirection: "row",
                    gap: 5,
                    paddingHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      width: "35%",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 20,
                      backgroundColor: "#F0EDF8",
                    }}
                  >
                    <Image
                      style={{ width: 90, height: 90 }}
                      source={item.image}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      paddingHorizontal: 15,
                      paddingVertical: 15,
                      justifyContent: "space-between",
                      borderRadius: 20,
                    }}
                  >
                    <View style={{ gap: 5 }}>
                      <View
                        style={{
                          justifyContent: "space-between",
                          flexDirection: "row",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: "500" }}>
                          {item.name}
                        </Text>
                        <MaterialIcons
                          onPress={() => {
                            dispatch(removeFromCart(item));
                          }}
                          name="delete"
                          size={24}
                          color="black"
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "600",
                          color: "#98942C",
                        }}
                      >
                        ₹{item.price * item.quantity}
                      </Text>
                    </View>
                    <View
                      style={{
                        //backgroundColor: Colors.primary,
                        height: 35,
                        width: 80,
                        borderRadius: 20,
                        alignSelf: "flex-start",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                      }}
                    >
                      <AntDesign
                        name="minuscircle"
                        size={20}
                        color={Colors.primary}
                        onPress={() => {
                          dispatch(decrementQuantity(item));
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          fontSize: 15,
                          color: "black",
                        }}
                      >
                        {item.quantity}
                      </Text>
                      <AntDesign
                        name="pluscircle"
                        size={20}
                        color={Colors.primary}
                        onPress={() => {
                          if (item.quantity == 10) {
                          } else {
                            dispatch(incrementQuantity(item));
                          }
                        }}
                      />
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <Text style={{ fontWeight: "500", fontSize: 22 }}>
          Order instructions
        </Text>
        <View
          style={{
            height: 90,
            borderWidth: 2,
            borderRadius: 20,
            borderColor: "black",
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <TextInput style={{ height: 55, fontSize: 17 }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            //backgroundColor: "red",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 22 }}>Total:</Text>
          <Text
            style={{
              fontWeight: "800",
              fontSize: 17,
              color: "#98942C",
            }}
          >
            ₹{amount}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            height: 60,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.replace("Order")}
        >
          <Text style={{ color: "white", fontSize: 19, fontWeight: "700" }}>
            Checkout
          </Text>
        </TouchableOpacity>
        <Text
          style={{ textAlign: "center", fontSize: 19, fontWeight: "400" }}
          onPress={() => navigation.navigate("Home")}
        >
          Back to Menu
        </Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
  },
});

export default Cart;
