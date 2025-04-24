import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Button, ScrollView, Modal } from 'react-native';
import { useGoals } from '../hooks/useGoals';
import { Goal } from '../src/models'; // Amplify v6 type import
import { useTheme } from '../src/contexts/ThemeContext';
import { lightTheme, darkTheme } from '../src/themes/theme';
import { createStyles } from './Screens.styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFireFlameCurved, faTrophy, faRobot } from '@fortawesome/free-solid-svg-icons';

import { generateGoalIdeas } from '../src/services/ChatGTPService'; // Adjust the import path as necessary

const DailyGoals = () => {
  const { fetchGoals, addGoal, toggleGoal } = useGoals();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [loading, setLoading] = useState(true);
  // AI States
  const [aiModalVisible, setAiModalVisible] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loadingAI, setLoadingAI] = useState(false);

  const { isDarkMode } = useTheme();
  console.log('isdarkmode', isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const today = new Date().toISOString().split('T')[0];

  const refreshGoals = async () => {
    setLoading(true);
    const allGoals = await fetchGoals();
    const todayGoals = allGoals.filter((goal) => goal.date === today);
    setGoals(todayGoals);
    setLoading(false);
  };

  useEffect(() => {
    refreshGoals();
  }, []);

  const handleAdd = async () => {
    if (!newTitle.trim()) return;
    await addGoal(newTitle, today);
    setNewTitle('');
    refreshGoals();
  };

  const completedCount = goals.filter((g) => g.completed).length;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today’s Goals
        <FontAwesomeIcon icon={faFireFlameCurved} size={24} color="#58cc02" /><Text style={{ fontSize: 16, color: theme.text }}>0</Text>
        </Text>
      <Text style={styles.subheading}>
        {goals.length > 0
          ? `${completedCount} of ${goals.length} completed`
          : 'No goals yet for today.'}
      </Text>

      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.goalCard,
              item.completed && styles.goalCardCompleted,
            ]}
            onPress={async () => {
              await toggleGoal(item);
              refreshGoals();
            }}
          >
            <Text
              style={[
                styles.goalText,
                item.completed && styles.goalTextCompleted,
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() =>
          loading ? null : (
            <Text style={styles.emptyMessage}>Add a goal to get started!</Text>
          )
        }
      />
      <TouchableOpacity onPress={() => setAiModalVisible(true)} style={styles.darkButton}>
      <FontAwesomeIcon icon={faRobot} size={20} color={theme.text} />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New goal..."
          value={newTitle}
          onChangeText={setNewTitle}
          placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={aiModalVisible}
        animationType="slide"
        onRequestClose={() => setAiModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>AI Goal Assistant</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="What area do you want to focus on?"
            value={aiInput}
            onChangeText={setAiInput}
          />
          <Button
            title={loadingAI ? 'Generating...' : 'Get Ideas'}
            onPress={async () => {
              setLoadingAI(true);
              const ideas = await generateGoalIdeas(aiInput);
              setAiResponse(ideas);
              setLoadingAI(false);
            }}
            disabled={loadingAI}
          />
          <ScrollView style={styles.modalResponseContainer}>
            <Text style={styles.modalResponseText}>{aiResponse}</Text>
          </ScrollView>
          <Button title="Close" onPress={() => setAiModalVisible(false)} />
        </View>
      </Modal>

    </View>
  );
};
// modalResponseText, modalResponseContainer, modalInput, modalTitle, modalContainer, aiButtonText, aiButton
export default DailyGoals;
