import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "../theme/Colors";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../Redux/CartSlice";

const Details = ({ navigation, route }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  //console.log(storeData);

  return (
    <View style={styles.main}>
      <SafeAreaView style={{ paddingTop: 40, marginLeft: 16 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={32} color="black" />
        </Pressable>
      </SafeAreaView>
      <View style={styles.down}>
        <View style={styles.image}>
          <Image
            source={item.image}
            style={{
              width: "120%",
              height: "120%",
              resizeMode: "contain",
              borderRadius: 50,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 130,
            //backgroundColor: "red",
            justifyContent: "space-between",
            width: 360,
            alignSelf: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: Colors.primary,
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
            <FontAwesome name="star" size={21} color="yellow" />
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              4.5
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 16,
            //backgroundColor: "red",
            justifyContent: "space-between",
            width: 360,
            alignSelf: "flex-start",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontWeight: "500", fontSize: 22 }}>
            {item.name}
          </Text>
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
            <Text
              style={{
                color: Colors.primary,
                fontWeight: "bold",
                fontSize: 24,
              }}
            >
              ₹{item.price}
            </Text>
          </View>
        </View>
        <Text style={{ marginTop: 20, fontWeight: "400" }}>
          {item.discription}
        </Text>
        <Text
          style={{
            color: "black",
            fontWeight: "500",
            fontSize: 20,
            alignSelf: "flex-start",
            marginTop: 20,
          }}
        >
          Add Ons
        </Text>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignSelf: "flex-start",
            gap: 30,
          }}
        >
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/images/welcom.png")}
            />
            <AntDesign
              style={styles.icon}
              name="pluscircle"
              size={24}
              color="green"
            />
          </View>
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/images/welcom.png")}
            />
            <AntDesign
              style={styles.icon}
              name="pluscircle"
              size={24}
              color="green"
            />
          </View>
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/images/welcom.png")}
            />
            <AntDesign
              style={styles.icon}
              name="pluscircle"
              size={24}
              color="green"
            />
          </View>
        </View>
        {storeData.some((value) => value.name == item.name) ? (
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginTop: 25,
              backgroundColor: "red",
              height: 55,
              width: 360,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 19, fontWeight: "700" }}>
              Added to Cart
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              dispatch(addToCart(item));
              //navigation.navigate("Cart");
            }}
            style={{
              marginTop: 25,
              backgroundColor: Colors.primary,
              height: 55,
              width: 360,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 19, fontWeight: "700" }}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  down: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 220,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
    paddingHorizontal: 18,
  },
  image: {
    height: 300,
    width: 300,
    position: "absolute",
    top: -200,
    alignItems: "center",
    borderRadius: 100,
  },
  icon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default Details;
