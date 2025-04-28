// CatGenieScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import * as GoogleGenerativeAI from '@google/generative-ai';

const CatGenieScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const API_KEY = "AIzaSyDwcD437_jps2kS2fX93rppuKFI-pagp2w"; 

  const askGenie = async () => {
    if (!input.trim()) return;

    // Add user's message to chat
    setMessages(prev => [...prev, { sender: 'user', text: input }]);

    try {
      const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro" });

const result = await model.generateContent([input]);
const response = await result.response;
const text = response.text();

      // Add AI's response to chat
      setMessages(prev => [...prev, { sender: 'genie', text: text || 'Hmm, Cat Genie is confused.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { sender: 'genie', text: 'Oops! Cat Genie is sleeping.' }]);
    }

    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.catIntro}>Hello! I'm your Cat Genie 🐱✨ Ask me anything!</Text>

      <FlatList
        style={{ width: '100%' }}
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.messageBubble, item.sender === 'user' ? styles.userBubble : styles.genieBubble]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask me a question..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Send" onPress={askGenie} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
  },
  catIntro: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  messageBubble: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userBubble: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  genieBubble: {
    backgroundColor: '#E3E3E3',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
});

export default CatGenieScreen;