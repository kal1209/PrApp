import { StyleSheet, Platform } from "react-native";
import Colors from "../../style/color";

const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
  },
  row: {
    flexDirection: "row"
  },
  "1col": {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10
  },
  "2col": {
    flex: 2,
    alignItems: 'center',
    marginHorizontal: 10
  },
  smallTitle: {
    color: Colors.mainColor,
    fontWeight: '600',
  }
});

export default styles;
