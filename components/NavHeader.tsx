import {View, Text, Pressable} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import MenuIcon from 'react-native-vector-icons/Ionicons';
const NavHeader = () => {
  return (
    <View style={tw`bg-white p-2`}>
      <Pressable>
        <MenuIcon name="menu" size={20} />
      </Pressable>
    </View>
  );
};

export default NavHeader;
