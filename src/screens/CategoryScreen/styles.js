import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 10,
    paddingRight: 20
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: '700',
    color: 'black'
  },
});

export default styles;
