import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavHeader from '../components/NavHeader';
const Dashboard = () => {
  return (
    <View style={tw`bg-black flex-1`}>
      <NavHeader />
      <ScrollView>
        <View style={tw`bg-white flex-1`}>
          <Text>test</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
