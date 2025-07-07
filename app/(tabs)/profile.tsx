import {View,Text} from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{ fontSize: 24, color: 'black' }}>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
