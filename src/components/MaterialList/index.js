import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";

const MaterialList = ({ material, onClick }) => {

  return (
    <TouchableWithoutFeedback onPress={() => onClick(material.id)}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.name}>{material.amount} kg - {material.name}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text>{material.inventory_number}</Text>
            <Text>{material.storage_location}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.expiraction_date}>{material.expiration_date}</Text>
            <Text>{material.kcal} kcal/100g</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default MaterialList;
