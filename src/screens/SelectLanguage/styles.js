import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10
  },
  selectLanguageTitle: { paddingVertical: 75 },
  selectLanguageWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    width: '100%'
  }
});
