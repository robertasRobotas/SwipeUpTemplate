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
    height: 350,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  bottomContainer: { paddingBottom: 25, paddingLeft: 18 },
  username: {
    paddingTop: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  description: {
    paddingTop: 10,
    color: 'white',
  },
  tags: { color: 'white', paddingTop: 10 },
  userPhoto: { height: 60, width: 60, borderRadius: 50 },
  iconText: { textAlign: 'center', fontWeight: '700', color: 'white' },
  icon: { textAlign: 'center', color: 'white' },
  iconContainer: { marginTop: 30 },
});

export default styles;
