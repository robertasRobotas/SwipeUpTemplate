import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'red',
  },
  video: {
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  infoContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  rightContainer: {
    alignSelf: 'flex-end',
    backgroundColor: 'red',
  },
  username: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
});

export default styles;
