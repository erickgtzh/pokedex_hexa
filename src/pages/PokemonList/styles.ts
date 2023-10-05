import {StyleSheet} from 'react-native';
import fonts from '../../utils/fonts';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
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
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  addBtn: {
    backgroundColor: colors.accent,
    borderRadius: 50,
    marginRight: 10,
    padding: 10,
  },
  noPokemon: {
    textAlign: 'center',
    padding: 40,
  },
});

export default styles;
