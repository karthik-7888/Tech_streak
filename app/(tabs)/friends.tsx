import {View,Text} from 'react-native';
import React from 'react';

const friends = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{ fontSize: 24, color: 'black' }}>Friends Screen</Text>
    </View>
  );
};

export default friends;
// export const unstable_settings = {
//   initialRouteName: 'friends',
// };