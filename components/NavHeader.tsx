import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';
const NavHeader = () => {
  return (
    <View style={tw`bg-white py-2 px-4 flex-row items-center justify-between`}>
      <Pressable>
        <Icon name="menu-sharp" size={30} color="#202020" />
      </Pressable>

      {/* //todo profile logo container */}
      <View style={tw`w-[50px] h-[50px] bg-slate-200 p-2 rounded-full`}>
        <Image
          resizeMode="contain"
          style={tw`w-full h-full`}
          source={require('../assets/images/sampleLogo.png')}
        />
      </View>
    </View>
  );
};

export default NavHeader;
