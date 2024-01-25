import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  categoryBox: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
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
  },
  categoryTitle: {
    fontWeight: '600',
    color: 'black',
    paddingTop: 5,
    paddingBottom: 5
  },
});

export default styles;
