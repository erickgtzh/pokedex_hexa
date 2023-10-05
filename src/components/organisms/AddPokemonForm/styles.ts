import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 3,
    height: '98%',
    width: '97%',
    marginTop: 6,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    marginTop: 15,
    color: colors.black,
  },
});
