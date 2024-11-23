import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Import local images
const aiEnhancedImage = require('../images/AI-enhanced.jpg');
const coffeeMakerImage = require('../images/machine-coffee-maker.jpg');
const headphonesImage = require('../images/ai-powered-headphones.jpg');

const products = [
  { id: '1', name: 'AI-Enhanced Smartwatch', price: '$299', image: aiEnhancedImage },
  { id: '2', name: 'Noise-Cancelling Headphones', price: '$199', image: headphonesImage },
  { id: '3', name: 'Machine Learning Coffee Maker', price: '$149', image: coffeeMakerImage },
];

export default function ProductList() {
  const handleProductPress = (product) => {
    alert(`You selected: ${product.name}`);
    // Navigate to a product details screen or perform another action
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductPress(item)} style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});
