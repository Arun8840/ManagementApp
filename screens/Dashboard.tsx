import {View, Text, ScrollView, SafeAreaView, Pressable} from 'react-native';
import React, {useCallback} from 'react';
import tw from 'twrnc';
import NavHeader from '../components/NavHeader';
import Dashboard_store from '../Store/Store';
import Icon from 'react-native-vector-icons/Ionicons';
import {Dashboard_CategoriesType} from '../models/DashboardTypes';
import {useNavigation} from '@react-navigation/native';
import CardContainer from '../components/Utils/CardContainer';
const Dashboard = () => {
  const router: any = useNavigation();
  const DashboardCategoies = Dashboard_store(state => state?.categories);

  // todo redirect-to detail screen
  const handle_Redirect_Page = (path: string) => {
    path && router?.navigate(path);
  };

  // todo dashboard categorys
  const Categorys = useCallback(
    () =>
      DashboardCategoies?.length > 0 &&
      DashboardCategoies?.map((items: Dashboard_CategoriesType) => {
        let isAttendance = items?.category === 'Attendance';
        let chartType =
          items?.chartType === 'bar' ? 'stats-chart-sharp' : 'pie-chart';
        return (
          <CardContainer>
            <View style={tw`flex flex-row justify-between items-center p-2`}>
              <Text
                style={tw`font-medium text-sm text-slate-500 tracking-wide`}>
                {items?.title}
              </Text>
              <Pressable onPress={() => handle_Redirect_Page(items?.path)}>
                <Icon name="arrow-forward" size={20} color={'#787A91'} />
              </Pressable>
            </View>
            <View style={tw`flex flex-row justify-between items-center`}>
              <Text
                style={tw`flex-1 font-bold text-[2.5rem] px-5 text-stone-500`}>
                {items?.value}
                {isAttendance && '%'}
              </Text>
              <View
                style={tw`p-2 flex-1 min-h-[100px] flex justify-center items-center`}>
                <Icon name={chartType} size={80} color={items?.color} />
              </View>
            </View>
          </CardContainer>
        );
      }),
    [DashboardCategoies],
  );

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <NavHeader />
      <ScrollView>
        <View style={tw`flex-1`}>
          <Text
            style={tw`text-xl font-semibold tracking-wide text-[#4E4747] p-2`}>
            Hello Arun
          </Text>
        </View>
        <View style={tw`p-3 pt-5 gap-y-4`}>
          <Categorys />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
