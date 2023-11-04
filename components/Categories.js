import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../theme/Colors";
import { cats } from "../Constants";

const Categories = () => {
  const [selected, setSelected] = useState(0);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={cats}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            setSelected(index);
          }}
          activeOpacity={0.9}
          style={styles.main}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: selected === index ? Colors.primary : "#E3E3E3",
              height: 80,
              width: 70,
              borderRadius: 20,
              shadowColor: "#000",
              shadowoffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              elevation: 5,
            }}
          >
            <Image
              style={styles.image}
              source={item.image}
            />
          </View>
          <Text
            style={{
              color: selected === index ? Colors.primary : "grey",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            {" "}
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    //borderRadius: 25,
  },
  main: {
    marginRight: 10,
    alignItems: "center",
  },
});

export default Categories;
