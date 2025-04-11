import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useGoals } from '../hooks/useGoals';
import { Goal } from '../src/models'; // Amplify v6 type import
import styles from './DailyGoals.styles';

const DailyGoals = () => {
  const { fetchGoals, addGoal, toggleGoal } = useGoals();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [loading, setLoading] = useState(true);

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
      <Text style={styles.heading}>Today’s Goals</Text>
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

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New goal..."
          value={newTitle}
          onChangeText={setNewTitle}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default DailyGoals;
