import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from "./styles";

const OutlineInput = ({ onAddPress }) => {

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{'name'}</Text>
        <TextInput
          placeholder={'name'}
          placeholderTextColor="#9F9F9F"
          style={styles.input}
          // keyboardType={props.keyboardType}
          secureTextEntry={false}
        // defaultValue={props.defaultValue}
        // onChangeText={props.onChangeText}
        // editable={props.editable}
        />
      </View>
    </View>
  );
};
export default OutlineInput;
