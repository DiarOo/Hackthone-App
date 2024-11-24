import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackgroundColor = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: isDarkMode ? '#4a90e2' : '#4a90e2' },
      ]}
    >
      <Text style={styles.headerText}>AI Shopping Companion</Text>
      <TouchableOpacity onPress={toggleBackgroundColor}>
        <Icon name="settings-outline" size={28} color="white" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    paddingHorizontal: 10,
  },
});
