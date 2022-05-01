import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height / 4,
    borderRadius: 5,
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 15,
    color: '#A2A7B8',
  },
});
