// HomeScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Home Screen</Text>
      <Button
        title="Go to Cutscene"
        onPress={() => navigation.navigate('Cutscene')}
      />
    </View>
  );
}