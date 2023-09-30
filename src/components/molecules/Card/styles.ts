import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 15,
    margin: 15,
  },
  name: {
    fontSize: fonts.size.md,
    color: colors.primary,
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 100,
  },
  text: {paddingTop: 15},
});
