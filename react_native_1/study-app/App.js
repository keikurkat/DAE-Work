import { StatusBar } from 'expo-status-bar';
import { Text, View, useEffect, useState } from 'react';
import axios from 'axios';
import CutsceneScreen from './components/CutsceneScreen';
import styles from './styles';

export default function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchAIResponse = async () => {
      try {
        const res = await axios.post(
          'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + process.env.EXPO_PUBLIC_GEMINI_API_KEY,
          {
            contents: [
              {
                parts: [{ text: "Explain how AI helps students study" }],
              },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const aiText = res.data.candidates[0].content.parts[0].text;
        setResponse(aiText);
      } catch (error) {
        console.error('Error fetching AI response:', error);
      }
    };

    fetchAIResponse();
  }, []);

  return (
    <View style={styles.container}>
      <CutsceneScreen />
      <Text>{response || "Loading AI response..."}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
