import React, {useState, useEffect} from 'react';
import {View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import Avatar from '../../atoms/Avatar';
import {DEFAULT_USER_IMAGE} from '../../../config/constants';
import styles from './styles';
import Button from '../../atoms/Button';
import {useUserContext} from '../../../context/UserContex';
import {colors} from '../../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const EditProfileForm: React.FC = () => {
  const {user, updateUser} = useUserContext();
  const [localUser, setLocalUser] = useState(user);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setLocalUser(user);
    if (user?.birthDate) {
      setDate(new Date(user.birthDate));
    }
  }, [user]);

  useEffect(() => {
    if (localUser && localUser.fullName && localUser.avatarUrl && date) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [localUser, date]);

  const handleAvatarEdit = () => {
    launchImageLibrary({mediaType: 'photo'}, ({didCancel, assets}) => {
      if (!didCancel && assets && assets.length > 0) {
        const source = {uri: assets[0].uri};
        if (localUser) {
          setLocalUser({...localUser, avatarUrl: source.uri});
        }
      }
    });
  };

  const handleSave = async () => {
    if (!isValid) {
      Alert.alert('Error', 'Please fill all the fields (avatar, name, date)');
      return;
    }
    if (localUser) {
      const updatedUser = {
        ...localUser,
        birthDate: date.toISOString().split('T')[0],
      };
      Alert.alert('Success', 'User updated successfully!');
      navigation.goBack();
      await updateUser(updatedUser);
    }
  };
  return (
    <View>
      <Avatar
        imageUrl={localUser?.avatarUrl || DEFAULT_USER_IMAGE}
        onEdit={handleAvatarEdit}
      />
      <TextInput
        placeholder="Full Name"
        value={localUser?.fullName}
        onChangeText={text => setLocalUser({...localUser, fullName: text})}
        style={styles.input}
        placeholderTextColor={colors.grey}
      />
      <TouchableOpacity onPress={() => setShowDatePicker(!showDatePicker)}>
        <Text style={styles.dateText}>Birth Date</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DatePicker
          date={date}
          onDateChange={setDate}
          textColor="black"
          androidVariant="iosClone"
          mode="date"
          maximumDate={new Date('2018-01-01')}
          minimumDate={new Date('1950-01-01')}
          theme="dark"
        />
      )}
      <Button title="Save Changes" style={styles.button} onPress={handleSave} />
    </View>
  );
};

export default EditProfileForm;
