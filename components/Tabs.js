import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import {
  Entypo,
  FontAwesome5,
  AntDesign,
  FontAwesome,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import {} from "@expo/vector-icons";
import { Colors } from "../theme/Colors";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const storeData = useSelector((state) => state.CartSlice);

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      //initialRouteName="Cart"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.icon}>
                <Entypo name="home" size={24} color={Colors.primary} />
              </View>
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.icon}>
                <FontAwesome5 name="search" size={24} color={Colors.primary} />
              </View>
            ) : (
              <Ionicons name="ios-search" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge: storeData.length > 0 ? storeData.length : null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.icon}>
                <FontAwesome name="shopping-cart" size={24} color={Colors.primary} />
              </View>
            ) : (
              <Feather name="shopping-cart" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.icon}>
                <Ionicons name="person" size={24} color={Colors.primary} />
              </View>
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    //backgroundColor: Colors.primary,
    height: 40,
    width: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Tabs;
