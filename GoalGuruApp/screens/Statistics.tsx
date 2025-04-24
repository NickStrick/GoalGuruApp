// src/screens/Statistics.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { BarChart, LineChart } from 'react-native-gifted-charts';
import { Goal } from '../src/models'; // Adjust the import path as needed
import { useGoals } from '../hooks/useGoals'; // Custom hook to fetch goals

import { useTheme } from '../src/contexts/ThemeContext';
import { lightTheme, darkTheme } from '../src/themes/theme';
import { createStyles } from './Screens.styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFireFlameCurved, faTrophy, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

import { calculateStreak, calculateStreaks, getWeeklyStreakData } from '../src/utils/streaks' // Import the streak utility

const screenWidth = Dimensions.get('window').width;

export default function Statistics() {
  const { fetchGoals } = useGoals();
  const [completedData, setCompletedData] = useState<{ label: string; value: number }[]>([]);
  const [projectionData, setProjectionData] = useState<{ label: string; value: number }[]>([]);
  const [streak, setStreak] = useState(0);
  const [streaksData, setStreaksData] = useState<{ label: string; value: number }[]>([]);

    const { isDarkMode } = useTheme();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    useEffect(() => {
      const loadData = async () => {
        try {
          const goals = await fetchGoals();
          const completedGoals = goals.filter((goal: Goal) => goal.completed);
    
          // Group completed goals by date
          const grouped = completedGoals.reduce((acc: { [key: string]: Goal[] }, goal) => {
            const date = goal.date;
            if (!acc[date]) acc[date] = [];
            acc[date].push(goal);
            return acc;
          }, {});
    
          // Prepare completed goals chart data
          const completedChartData = Object.entries(grouped).map(([date, goals]) => ({
            label: date,
            value: goals.length,
          }));
          setCompletedData(completedChartData);
    
          // Calculate average for projection
          const average =
            completedChartData.reduce((sum, item) => sum + item.value, 0) / completedChartData.length || 0;
          const projection = Array.from({ length: 7 }, (_, i) => ({
            label: `Day ${i + 1}`,
            value: Math.round(average),
          }));
          setProjectionData(projection);
    
          // Calculate current streak
          const currentStreak = calculateStreak(goals);
          setStreak(currentStreak);
    
          // Calculate weekly streak data
          const today = new Date();
          const weeklyData = [];
    
          for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            const dateString = date.toISOString().split('T')[0];
    
            const count = goals.filter(
              (goal) => goal.completed && goal.date === dateString
            ).length;
    
            const dayLabel = date.toLocaleDateString('en-US', { weekday: 'short' }); // e.g., 'Mon', 'Tue'
            weeklyData.push({ label: dayLabel, value: count });
          }
    
          setStreaksData(weeklyData);
        } catch (error) {
          console.error('Error loading goals:', error);
        }
      };
    
      loadData();
    }, []);

  const groupGoalsByDate = (goals: Goal[]) => {
    return goals.reduce((acc: { [key: string]: Goal[] }, goal) => {
      const date = goal.date;
      if (!acc[date]) acc[date] = [];
      acc[date].push(goal);
      return acc;
    }, {});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewrow}>
        <FontAwesomeIcon icon={faFireFlameCurved} size={34} color="#ffa500" />
        <Text style={[styles.streakText, {color:streak?'#58cc02':'red'}]}> Streak: {streak} day{streak !== 1 ? 's' : ''}</Text>
      </View>
      <Text style={styles.subheading}>
              {streak > 0
                ? `Complete 3 goals to maintain your streak!`
                : 'No streak yet. Complete 3 goals to start!'}
      </Text>
      <View style={styles.viewrow}>
        <FontAwesomeIcon icon={faTrophy} size={34} color="#58cc02" />
        <Text style={styles.title}> Completed Goals</Text>
      </View>
      <BarChart
        data={completedData}
        barWidth={30}
        spacing={20}
        roundedTop
        frontColor="#58cc02"
        yAxisTextStyle={{ color: 'gray' }}
        xAxisLabelTextStyle={{ color: 'gray' }}
        noOfSections={4}
        maxValue={Math.max(...completedData.map(item => item.value), 1)}
        width={screenWidth - 40}
        height={220}
      />

      {/* <Text style={styles.title}>Projected Completions</Text>
      <LineChart
        data={projectionData}
        thickness={2}
        color="#58cc02"
        hideDataPoints
        isAnimated
        yAxisTextStyle={{ color: 'gray' }}
        xAxisLabelTextStyle={{ color: 'gray' }}
        noOfSections={4}
        maxValue={Math.max(...projectionData.map(item => item.value), 1)}
        width={screenWidth - 40}
        height={220}
      /> */}
      <View style={styles.viewrow}>
        <FontAwesomeIcon icon={faArrowTrendUp} size={34} color="#58cc02" />
      <Text style={styles.title}> Weekly Streaks</Text>
      
      </View>
<LineChart
  data={streaksData}
  thickness={8}
  color="#58cc02"
  hideDataPoints
  isAnimated
  yAxisTextStyle={{ color: 'gray' }}
  xAxisLabelTextStyle={{ color: 'gray' }}
  noOfSections={4}
  maxValue={Math.max(...streaksData.map(item => item.value), 1)}
  width={screenWidth - 40}
  height={220}
/>
    </ScrollView>
  );
}