import {StyleSheet} from 'react-native';
import fonts from '../../../utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    margin: 8,
  },
  text: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,
  },
});
