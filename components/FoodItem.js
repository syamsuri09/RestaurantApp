import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { food } from "../Constants";
import { Colors } from "../theme/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/CartSlice";

const FoodItem = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);

  return (
    <View style={{}}>
      <FlatList
        data={food}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { item: item })}
            style={{
              backgroundColor: "#E3E3E3",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 16,
              marginVertical: 16,
              paddingHorizontal: 20,
              paddingVertical: 20,
              height: 180,
              width: 160,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 85,
                height: 85,
                resizeMode: "center",
                alignSelf: "center",
                borderRadius: 20,
              }}
            />
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: Colors.primary,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                ₹{item.price}
              </Text>
              {storeData.some((value) => value.name == item.name) ? (
                <Ionicons
                  name="ios-remove-circle"
                  size={24}
                  color="green"
                  onPress={() => dispatch(removeFromCart(item))}
                />
              ) : (
                <Ionicons
                  name="ios-add-circle"
                  size={24}
                  color="green"
                  onPress={() => {
                    dispatch(addToCart(item));
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({});
