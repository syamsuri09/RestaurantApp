import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import FoodItem from "../components/FoodItem";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={"User Name"} />
      <Search />
      <View style={{}}>
        {/* Categories list */}
        <Categories />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Popular</Text>
        <FoodItem />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    marginHorizontal: 20,
    paddingTop: 60,
  },
});
export default Home;
