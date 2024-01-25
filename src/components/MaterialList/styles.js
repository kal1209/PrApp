import { StyleSheet, Platform } from "react-native";
import Colors from "../../style/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 5,
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  column: {
    width: '50%',
  },
  name: {
    fontSize: 18,
    color: Colors.blackColor,
    fontWeight: '800',
  },
  expiraction_date: {
    color: Colors.warningColor
  }
});

export default styles;
