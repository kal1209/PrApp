import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from "./styles";

const OutlineInput = ({ label, defaultValue, onChange }) => {

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          placeholder={''}
          placeholderTextColor="#9F9F9F"
          style={styles.input}
          // keyboardType={props.keyboardType}
          secureTextEntry={false}
          defaultValue={defaultValue}
          onChangeText={value => onChange}
        // editable={props.editable}
        />
      </View>
    </View>
  );
};
export default OutlineInput;
