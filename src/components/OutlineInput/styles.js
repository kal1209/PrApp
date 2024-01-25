import { StyleSheet, Platform } from "react-native";
import Colors from '../../style/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 7.5,
    paddingHorizontal: 12.5,
    paddingBottom: 2.5,
    borderRadius: 30,
    borderWidth: 0.75,
    borderColor: Colors.mainColor,
  },
  input: {
    fontSize: 16,
    height: 37,
    color: Colors.blackText,
  },
  label: {
    marginLeft: 5,
    color: Colors.mainColor,
    fontSize: 10,
  },
});

export default styles;
