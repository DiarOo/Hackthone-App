import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './components/Header';
import ProductList from './components/ProductList';
import AIChatInterface from './components/AIChatInterface';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the desired icon set

const Tab = createBottomTabNavigator();

// Main Screen combines Header and ProductList
const MainScreen = () => (
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

              // Assign icons based on the route name
              if (route.name === 'Product') {
                iconName = focused ? 'cart' : 'cart-outline';
              } else if (route.name === 'AI Chat') {
                iconName = focused ? 'chatbox' : 'chatbox-outline';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: '#fff', // Customize tab bar background
              borderTopWidth: 0.5,
              borderTopColor: '#ccc',
            },
          })}
        >
          {/* Tabs */}
          <Tab.Screen
            name="Product"
            component={MainScreen}
            options={{ headerShown: false }} // Hide header for this screen
          />
          <Tab.Screen
            name="AI Chat"
            component={AIChatInterface}
            options={{ headerTitle: 'AI Chat Interface' }} // Customize header title
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light background for the main screen
    padding: 10,
  },
});
