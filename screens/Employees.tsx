import {View, Text, ScrollView, SafeAreaView, Pressable} from 'react-native';
import React, {useCallback} from 'react';
import tw from 'twrnc';
import Dashboard_store from '../Store/Store';
import CardContainer from '../components/Utils/CardContainer';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Employees = () => {
  const employees = Dashboard_store(state => state?.employees);

  const ListItems = useCallback(
    () =>
      employees?.length > 0 &&
      employees?.map((items, index) => {
        return (
          <CardContainer key={index}>
            <View style={tw`flex-row gap-2`}>
              <View
                style={tw`w-[70px] h-[70px] bg-slate-200 rounded overflow-hidden`}></View>
              <View style={tw`flex-1 gap-2`}>
                <Text
                  style={tw`font-medium text-xs text-[#4E4747] tracking-wide`}>
                  Performance
                </Text>
                <View style={tw`bg-green-500 rounded-full p-1 w-full`}></View>
                <Text style={tw`text-xs capitalize`}>active</Text>
              </View>
            </View>
            <View style={tw`pt-2 flex-row items-end justify-between`}>
              <View style={tw`gap-2`}>
                <Text style={tw`text-[#4E4747] text-sm font-semibold`}>
                  {items?.name}
                </Text>
                <Text style={tw`text-xs tracking-wide text-[#4E4747]`}>
                  {items?.email ?? 'arun.skystack.io'}
                </Text>
              </View>
              <TouchableOpacity style={tw`bg-[#202020] rounded-lg py-2 px-3`}>
                <Text style={tw`text-xs text-white`}>Show more</Text>
              </TouchableOpacity>
            </View>
          </CardContainer>
        );
      }),
    [employees],
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-row justify-between items-center p-2`}>
        <Text>Employee</Text>
        <Pressable style={tw`bg-[#202020] px-5 py-2 rounded-lg`}>
          <Text style={tw`text-white`}>Create</Text>
        </Pressable>
      </View>
      <ScrollView>
        <View style={tw`gap-2 px-4 py-2`}>
          <ListItems />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Employees;
