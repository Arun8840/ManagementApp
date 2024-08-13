import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
function Welcome() {
  const navigation: any = useNavigation();
  // todo navigate to home screen
  const handleNavigate = (navigateString: string) => {
    navigation.navigate('login', {params: navigateString});
  };

  return (
    <View style={tw`bg-white p-2 flex-1`}>
      <SafeAreaView>
        <View style={tw`p-3 max-h-[500px] w-full`}>
          <Image
            style={tw`w-full h-full`}
            source={require('../assets/images/banner.png')}
            resizeMode="contain"
          />
        </View>

        {/* //todo title */}
        <Text
          style={tw`text-center text-[2rem] font-bold p-2 text-[#454545] capitalize tracking-wide`}>
          User Management from anywhere
        </Text>

        <Text style={tw`w-[90%] mx-auto text-center p-5`}>
          Hope you're doing well. This is Personal Password Manager App
        </Text>

        <View style={tw`gap-4 px-3 pt-5`}>
          <TouchableOpacity
            onPress={() => handleNavigate('admin')}
            style={tw`bg-[#202020] p-4 rounded-lg`}>
            <Text style={tw`text-white text-lg tracking-wide text-center`}>
              Admin
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleNavigate('employee')}
            style={tw`bg-[#F3F3F3] p-4 rounded-lg`}>
            <Text style={tw`font-medium text-lg tracking-wide text-center`}>
              Employee
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
export default Welcome;
