import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={styles.container}>
        <FontAwesome name="search" size={24} color="black" />
        
      <TextInput style={{paddingHorizontal: 16, fontSize: 17 }} placeholder='Search' />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        backgroundColor: "#fff",
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 60,
        shadowColor: "#000",
        shadowoffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        elevation: 5,
    }
});
export default Search