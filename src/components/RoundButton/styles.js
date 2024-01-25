import { StyleSheet, Platform } from "react-native";
import Colors from '../../style/color';

const styles = StyleSheet.create({
  cont: {
    alignSelf: 'center',
    backgroundColor: Colors.mainColor,
    zIndex: 1,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    tintColor: Colors.white,
    height: 45,
    width: 45,
  },
});

export default styles;
