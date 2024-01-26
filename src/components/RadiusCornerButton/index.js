import React from "react";
import { Text, Pressable } from "react-native";
import styles from "./styles";

const RadiusCornerButton = ({ title, type, onClick }) => {

  const typeStyles = {
    primary: styles.primary,
    outline: styles.outline,
  }
  const buttonStyle = [styles.button, typeStyles[type]]
  return (
    <Pressable style={buttonStyle} onPress={onClick}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
export default RadiusCornerButton;
