import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function AIChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const userMessage = { id: Date.now(), text: inputText, user: true };
    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = { id: Date.now() + 1, text: getAIResponse(inputText), user: false };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }, 1000);

    setInputText('');
  };

  const getAIResponse = (input) => {
    // This is a very basic simulation of AI responses
    if (input.toLowerCase().includes('recommend')) {
      return "Based on your shopping history, I'd recommend the AI-Enhanced Smartwatch. It's our top-rated product!";
    } else if (input.toLowerCase().includes('price')) {
      return "Our prices are competitive and offer great value. Is there a specific product you're interested in?";
    } else {
      return "How can I assist you with your shopping today?";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat with AI Assistant</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.messageBubble, item.user ? styles.userMessage : styles.aiMessage]}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Ask me anything..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

