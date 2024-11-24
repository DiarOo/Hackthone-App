import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator, Keyboard } from 'react-native';

export default function AIChatInterface({ route }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);


  const { product } = route.params || {};

 
  useEffect(() => {
    if (product) {
      const initialMessage = `Can you tell me more about ${product.name}?`;
      handleSend(initialMessage, false); 
    }
  }, [product]);

  const handleSend = async (text, isUser = true) => {
    if (!text.trim()) return;

    const newMessage = { id: Date.now(), text, user: isUser };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (isUser) {
      setInputText('');
      setLoading(true);

      const aiResponse = await getAIResponse(text);
      const aiMessage = { id: Date.now() + 1, text: aiResponse, user: false };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      setLoading(false);
    }
  };

  const getAIResponse = async (input) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer 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`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: "user", content: input }],
        }),
      });

      if (!response.ok) {
        // Handle API errors
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content.trim() || 'Sorry, I could not process your request.';
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return error.toString();
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
      {loading && <ActivityIndicator size="large" color="#4a90e2" style={styles.loadingIndicator} />}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Ask me anything..."
          onSubmitEditing={() => {
            handleSend(inputText);
            Keyboard.dismiss();
          }}
          blurOnSubmit={false} 
        />
        <TouchableOpacity style={styles.sendButton} onPress={() => handleSend(inputText)} disabled={loading}>
          <Text style={styles.sendButtonText}>{loading ? '...' : 'Send'}</Text>
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
  loadingIndicator: {
    marginVertical: 10,
  },
});
