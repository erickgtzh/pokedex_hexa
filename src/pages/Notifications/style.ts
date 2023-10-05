import {StyleSheet} from 'react-native';
import fonts from '../../utils/fonts';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  text: {
    fontSize: fonts.size.md,
    color: colors.black,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});

export default styles;
