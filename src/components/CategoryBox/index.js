import React from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";

const CategoryBox = ({ category, onClick }) => {

  return (
    <TouchableWithoutFeedback onPress={() => onClick(category.id)}>
      <View style={styles.categoryBox} id={category.id}>
        <Image source={require('../../assets/Images/food.png')} />
        <View>
          <Text style={styles.categoryTitle}>{category.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CategoryBox;
