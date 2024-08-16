import React from 'react';
import tw from 'twrnc';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Employees from './screens/Employees';
import TimingData from './screens/TimingData';
import Projects from './screens/Projects';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={tw`flex-1 bg-[#0C0C0C]`}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="welcome">
            <Stack.Screen
              options={{headerShown: false}}
              name="welcome"
              component={Welcome}
            />

            <Stack.Screen
              options={{headerShown: false}}
              name="login"
              component={Login}
            />

            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Dashboard"
              component={Dashboard}
            />

            {/* //todo details screens */}
            <Stack.Screen
              options={{
                headerShown: true,
                headerBackTitle: 'Back',
              }}
              name="Employees"
              component={Employees}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                headerBackTitle: 'Back',
              }}
              name="TimingData"
              component={TimingData}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                headerBackTitle: 'Back',
              }}
              name="Projects"
              component={Projects}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
