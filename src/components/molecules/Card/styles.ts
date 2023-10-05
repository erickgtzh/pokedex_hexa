import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 15,
    margin: 15,
  },
  text: {
    paddingTop: 15,
    textTransform: 'capitalize',
  },
  imageContainer: {
    height: 125,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  absoluteContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: colors.error,
    padding: 10,
    borderRadius: 8,
  },
  detailButton: {
    backgroundColor: colors.accent,
    padding: 10,
    borderRadius: 8,
  },
});

export default styles;
