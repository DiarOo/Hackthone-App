import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import AIChatInterface from './components/AIChatInterface';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Product stack for navigation between ProductList and ProductDetails
const ProductStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProductList"
      component={ProductListWithHeader}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{ title: 'Product Details' }}
    />
  </Stack.Navigator>
);

const ProductListWithHeader = () => (
  <View style={styles.mainScreenContainer}>
    <Header />
    <ProductList />
  </View>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Products') {
                iconName = focused ? 'cart' : 'cart-outline';
              } else if (route.name === 'AI Chat') {
                iconName = focused ? 'chatbox' : 'chatbox-outline';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#4a90e2',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen
            name="Products"
            component={ProductStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="AI Chat"
            component={AIChatInterface}
            options={{ headerTitle: 'AI Chat Interface' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
});
