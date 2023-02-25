import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  hamburgerMenu: {
    alignItems: 'center',
    borderRadius: 25,
    display: 'flex',
    height: 45,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 8,
    opacity: 0.9,
    padding: 23,
    position: 'absolute',
    width: 45,
    zIndex: 1
  },
  map: {
    flex: 1,
    width: '100%'
  },
  page: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  screen: { flex: 1 }
});
