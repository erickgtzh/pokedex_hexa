import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export default StyleSheet.create({
  input: {
    color: colors.black,
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    marginTop: 40,
  },
  dateText: {
    fontSize: fonts.size.lg,
    color: colors.grey,
    marginVertical: 20,
  },
});
