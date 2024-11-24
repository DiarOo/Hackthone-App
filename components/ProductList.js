import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const products = [
  {
    id: '1',
    name: 'AI-Enhanced Smartwatch',
    price: '$299',
    description: 'A smartwatch that uses AI to monitor health metrics and provide personalized recommendations.',
    image: require('../images/AI-enhanced.jpg'),
  },
  {
    id: '2',
    name: 'Noise-Cancelling Headphones',
    price: '$199',
    description: 'Headphones equipped with AI-driven noise cancellation for an immersive audio experience.',
    image: require('../images/ai-powered-headphones.jpg'),
  },
  {
    id: '3',
    name: 'Machine Learning Coffee Maker',
    price: '$149',
    description: 'A coffee maker that learns your brewing preferences over time to deliver the perfect cup.',
    image: require('../images/machine-coffee-maker.jpg'),
  },
  {
    id: '4',
    name: 'AI-Powered Robot Vacuum',
    price: '$399',
    description: 'A smart vacuum cleaner that uses AI to navigate and clean your home efficiently.',
    image: require('../images/robot-vacuum.jpg'),
  },
  {
    id: '5',
    name: 'Smart AI Speaker',
    price: '$129',
    description: 'A voice-activated speaker that learns your preferences and integrates seamlessly with your smart home devices.',
    image: require('../images/smart-speaker.jpg'),
  },
  {
    id: '6',
    name: 'AI-Driven Security Camera',
    price: '$249',
    description: 'A security camera that uses AI to detect unusual activities and alert you in real-time.',
    image: require('../images/security-camera.jpg'),
  }, { id: '7',
  name: 'AI-Driven Smart Thermostat',
       price: '$199',
      description: 'An AI-powered thermostat that learns your schedule and adjusts temperatures to save energy.',
       image: require('../images/smart-thermostat.jpg'),
    },
{
  id: '8',
  name: 'AI-Powered Fitness Tracker',
  price: '$99',
  description: 'A fitness tracker that provides real-time health insights using AI algorithms.',
  image: require('../images/fitness-tracker.jpg'),
},
{
  id: '9',
  name: 'AI-Enhanced Drone',
  price: '$699',
  description: 'A drone with AI-enhanced navigation and obstacle detection for stunning aerial photography.',
  image: require('../images/ai-drone.jpg'),
},
{
  id: '10',
  name: 'AI-Based Photo Printer',
  price: '$249',
  description: 'A smart photo printer that uses AI to enhance image quality and color accuracy.',
  image: require('../images/photo-printer.jpg'),
},
{
  id: '11',
  name: 'AI-Powered Personal Robot',
  price: '$999',
  description: 'A personal AI robot assistant that helps with tasks and interacts socially.',
  image: require('../images/personal-robot.jpg'),
},
];

export default function ProductList() {
  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Our Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <Text style={styles.productDescription} numberOfLines={3}>
                {item.description}
              </Text>
              <TouchableOpacity
                style={styles.viewButton}
                onPress={() => handleProductPress(item)}
              >
                <Text style={styles.viewButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'linear-gradient(to bottom, #f3f4f6, #e3e4e8)',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a2e',
    textAlign: 'center',
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginRight: 20,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#28a745',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  viewButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  viewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
