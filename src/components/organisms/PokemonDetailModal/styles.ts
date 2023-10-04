import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import fonts from '../../../utils/fonts';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightgray,
  },
  modalView: {
    backgroundColor: colors.lightgray,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 35,
    alignItems: 'center',
    margin: 0,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 3,
  },
  title: {
    fontSize: fonts.size.md,
    color: colors.white,
  },
  text: {
    fontSize: fonts.size.md,
    color: colors.white,
  },
});

export default styles;
