 import React from 'react';
 import { View, Text, StyleSheet } from 'react-native';

 export default function Header() {
   return (
     <View style={styles.header}>
       <Text style={styles.headerText}>AI Shopping Companion</Text>
     </View>
   );
}

 const styles = StyleSheet.create({
   header: {
     backgroundColor: '#4a90e2',
     padding: 20,
     alignItems: 'center',
   },
   headerText: {
     color: 'white',
      fontSize: 20,
     fontWeight: 'bold',
   },
 });

