// App.js

import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import CutsceneScreen from './components/CutsceneScreen';
import HomeScreen from './components/HomeScreen';
import CatGenieScreen from './components/CatGenieScreen';
import styles from './styles';

const Stack = createNativeStackNavigator();

function HomeWithAI({ navigation }) {
  return (
    <View style={[styles.container, { justifyContent: 'space-between', paddingBottom: 50 }]}>
      <HomeScreen navigation={navigation} />
      <Button
        title="Talk to Cat Genie 🐱✨"
        onPress={() => navigation.navigate('CatGenie')}
      />
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
        <Stack.Screen name="CatGenie" component={CatGenieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
