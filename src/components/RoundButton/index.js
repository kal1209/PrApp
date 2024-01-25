import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import styles from "./styles";

const RoundButton = ({ onAddPress }) => {

  return (
    <TouchableOpacity style={styles.cont} onPress={onAddPress}>
      <Image
        source={require('../../assets/Images/plus.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};
export default RoundButton;
