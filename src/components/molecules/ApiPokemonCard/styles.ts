import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightgray,
  },
});

export default styles;
