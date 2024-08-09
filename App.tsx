import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
const App = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-black`}>
      <Text style={tw`text-white`}>App</Text>
    </View>
  );
};

export default App;
