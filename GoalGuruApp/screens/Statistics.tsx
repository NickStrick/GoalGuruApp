// Statistics.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const Statistics = () => {
  const [newTitle, setNewTitle] = useState('');

  return (
    <View>
      <TextInput value={newTitle} onChangeText={setNewTitle} placeholder='New goal...' />
      
    </View>
  );
};

export default Statistics;
