import {StyleSheet} from 'react-native';
import fonts from '../../utils/fonts';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    flexGrow: 1,
  },
  text: {
    fontSize: fonts.size.md,
    color: colors.black,
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
