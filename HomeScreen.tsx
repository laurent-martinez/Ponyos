import React from 'react';
import {Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  return (
    <LinearGradient
      className="h-screen w-screen flex justify-center items-center"
      colors={['#FFD580', '#FF0006']}
      testID="app">
      <Image
        source={{
          uri: 'https://cdn.discordapp.com/attachments/1039488310155935794/1106593241375186975/ouroboros.png',
        }}
        style={{width: 400, height: 400}}
      />
      <Text className="text-4xl font-bold">Ponio app</Text>
    </LinearGradient>
  );
};
export default HomeScreen;
