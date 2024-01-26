import { StyleSheet, Platform } from "react-native";
import Colors from '../../style/color';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    elevation: 3,
  },
  primary: {
    backgroundColor: Colors.mainColor,
  },
  outline: {
    backgroundColor: Colors.grayText,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default styles;
