import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {Tabs} from 'expo-router';
// Update the import path to use a relative path and forward slashes
// Update the import path to use a relative path and forward slashes
import {images} from '@/constants/images';
import { icons } from '@/constants/icons';

const _Layout = () => {
  return (
    <Tabs>

    <Tabs.Screen
      name="index"
      options={{
        title: "",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <ImageBackground
            source={images.highlight}
            className='flex flex-column w-full flex-1 min-w-[90px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden'
          >
            <Image source={icons.home} tintColor="#151312" className="size-8 mb-1" style={{ alignItems: "center" }} />
            <Text style={{ color: "#151312", fontSize: 12}}>Home</Text>
          </ImageBackground>
        )
      }}
    />
    <Tabs.Screen name="friends" options={{ headerShown: false }} />
    <Tabs.Screen name="profile" options={{ headerShown: false }} />
    <Tabs.Screen name="settings" options={{ headerShown: false }} />
    </Tabs>
  )
}

export default _Layout;

   
