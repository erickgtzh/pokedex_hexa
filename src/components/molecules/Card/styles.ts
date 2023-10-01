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
  text: {paddingTop: 15, textTransform: 'capitalize'},
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
});
