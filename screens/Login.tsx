import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useNavigation, useRoute} from '@react-navigation/native';
const Login = () => {
  const route = useRoute();
  const navigation: any = useNavigation();
  const {params}: any = route?.params;

  const handleNavigate = () => {
    navigation?.navigate('Dashboard');
  };
  return (
    <View style={tw`flex-1 bg-white`}>
      <ScrollView>
        <SafeAreaView>
          <View style={tw`p-3 max-h-[350px] w-full`}>
            <Image
              style={tw`w-full h-full`}
              source={require('../assets/images/loginBanner.png')}
              resizeMode="contain"
            />
          </View>

          <Text
            style={tw`text-center text-[2rem] font-bold p-2 text-[#454545] capitalize tracking-wide`}>
            {params}
          </Text>

          <View style={tw` px-8`}>
            <Text style={tw`text-lg font-medium text-[#454545] py-2`}>
              Username
            </Text>

            <TextInput
              keyboardType="default"
              style={tw`bg-[#CDC9C9]/30 rounded-lg p-4`}
            />
          </View>

          <View style={tw`pt-3 px-8`}>
            <Text style={tw`text-lg font-medium text-[#454545] py-2`}>
              Password
            </Text>

            <TextInput
              style={tw`bg-[#CDC9C9]/30 rounded-lg p-4`}
              keyboardType="default"
            />
          </View>
          <View style={tw`flex-row items-center justify-center py-5 gap-1`}>
            <Text style={tw`text-center`}>Don’t have a account? </Text>
            <Pressable>
              <Text style={tw`text-blue-600 font-medium`}>SignUp</Text>
            </Pressable>
          </View>

          <View style={tw`px-8`}>
            <TouchableOpacity
              onPress={handleNavigate}
              style={tw`bg-[#202020] p-4 rounded-lg w-full`}>
              <Text style={tw`text-white text-lg tracking-wide text-center`}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Login;
