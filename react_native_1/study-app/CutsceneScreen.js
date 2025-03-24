import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const cutscenes = [
  { image: null, text: "I can't wait to arrive, I heard YarnWood is beautiful this time of year." },
  { image: null, text: "..." },
  { image: null, text: "💥 PSHHHHHH!!! 💥" },
  { image: null, text: "Oh no! I think my tire popped. I need to go check it out." },
  { image: null, text: "" },
];

function CutsceneScreen({ onComplete }) {
  const [sceneIndex, setSceneIndex] = useState(0);

  const nextScene = () => {
    if (sceneIndex < cutscenes.length - 1) {
      setSceneIndex(sceneIndex + 1);
    } else if (onComplete) {
      onComplete(); // Placeholder: navigate to next screen or trigger action
    }
  };

  const current = cutscenes[sceneIndex];

  return (
    <TouchableOpacity style={cutsceneStyles.container} onPress={nextScene} activeOpacity={0.9}>
      <View style={cutsceneStyles.imageContainer}>
        {current.image && <Image source={current.image} style={cutsceneStyles.image} />}
      </View>
      <View style={cutsceneStyles.textBox}>
        <Text style={cutsceneStyles.text}>{current.text}</Text>
      </View>
      <Text style={cutsceneStyles.continue}>TAP TO CONTINUE</Text>
    </TouchableOpacity>
  );
}

const cutsceneStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  textBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 20,
    width: '100%',
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  continue: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.7,
  },
});

export { CutsceneScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
