// App.js

import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';

import CutsceneScreen from './components/CutsceneScreen';
import HomeScreen from './components/HomeScreen';
import styles from './styles';

const Stack = createNativeStackNavigator();

function HomeWithAI({ navigation }) {
  const [response, setResponse] = useState('');
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchAIResponse = async (prompt) => {
    setLoading(true);
    setError('');
    setResponse('');
    try {
      const res = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + process.env.EXPO_PUBLIC_GEMINI_API_KEY,
        {
          contents: [{ parts: [{ text: prompt }] }]
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const aiText = res?.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (aiText) {
        setResponse(aiText);
      } else {
        setError('⚠️ Gemini returned an empty response.');
      }
    } catch (err) {
      console.error('API ERROR:', err.message);
      setError('❌ Failed to reach Gemini API. Check your API key or connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <HomeScreen navigation={navigation} />
      <TextInput
        style={{ borderWidth: 1, padding: 8, marginBottom: 10, width: '80%' }}
        placeholder="Ask the AI something..."
        value={userInput}
        onChangeText={setUserInput}
      />
      <Button title="Ask" onPress={() => fetchAIResponse(userInput)} />
      {loading && <Text>⏳ Loading AI response...</Text>}
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : <Text>{response}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeWithAI} />
        <Stack.Screen name="Cutscene" component={CutsceneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
