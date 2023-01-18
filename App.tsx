import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { Node } from 'react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomeScreen from './src/screens/HomeScreen';
import RetailerScreen from './src/screens/RetailerScreen';
import useSelectedRetailer from './store';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();
const App: () => Node = () => {
  const { selectedRetailer } = useSelectedRetailer();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={() => ({
            headerTitleStyle: { color: 'white' },
            statusBarStyle: 'light',
            headerStyle: { backgroundColor: '#2d2d2d' },
          })}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: 'Home',
            }}
          />
          <Stack.Screen
            name="Retailer"
            component={RetailerScreen}
            options={{
              headerTitle: selectedRetailer,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
