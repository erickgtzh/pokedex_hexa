import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingTop: 20,
  },
  input: {
    backgroundColor: colors.white,
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: colors.black,
  },
});

export default styles;
