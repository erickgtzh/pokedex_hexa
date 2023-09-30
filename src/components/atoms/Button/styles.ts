import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export default StyleSheet.create({
  default: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  basicButton: {
    backgroundColor: colors.accent,
  },
  deleteButton: {
    backgroundColor: colors.error,
  },
  text: {color: colors.black, fontSize: fonts.size.md},
  icon: {},
});
