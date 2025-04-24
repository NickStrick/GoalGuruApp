// src/utils/streak.ts

import { Goal } from '../models'; // Adjust the import path as needed

/**
 * Calculates the current streak of days where the user completed at least 3 goals.
 * @param goals - Array of Goal objects.
 * @returns The number of consecutive days with at least 3 completed goals.
 */
export function calculateStreak(goals: Goal[]): number {
  const completedGoals = goals.filter(goal => goal.completed);
  const goalCountsByDate: { [date: string]: number } = {};

  completedGoals.forEach(goal => {
    goalCountsByDate[goal.date] = (goalCountsByDate[goal.date] || 0) + 1;
  });

  let streak = 0;
  let currentDate = new Date();

  while (true) {
    const dateString = currentDate.toISOString().split('T')[0];
    if (goalCountsByDate[dateString] >= 3) {
      streak += 1;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}
export const calculateStreaks = (goals: Goal[]): { startDate: string; endDate: string; length: number }[] => {
  const completedDates = goals
    .filter(goal => goal.completed)
    .map(goal => goal.date)
    .sort();

  const streaks = [];
  let streakStart = completedDates[0];
  let streakEnd = completedDates[0];
  let streakLength = 1;

  for (let i = 1; i < completedDates.length; i++) {
    const currentDate = new Date(completedDates[i]);
    const previousDate = new Date(completedDates[i - 1]);
    const diffTime = currentDate.getTime() - previousDate.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);

    if (diffDays === 1) {
      streakEnd = completedDates[i];
      streakLength++;
    } else {
      streaks.push({ startDate: streakStart, endDate: streakEnd, length: streakLength });
      streakStart = completedDates[i];
      streakEnd = completedDates[i];
      streakLength = 1;
    }
  }

  // Add the last streak
  streaks.push({ startDate: streakStart, endDate: streakEnd, length: streakLength });

  // Filter streaks within the last 30 days
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  return streaks.filter(streak => new Date(streak.endDate) >= thirtyDaysAgo);
};

export const getWeeklyStreakData = (goals: Goal[]) => {
  const today = new Date();
  const data = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateString = date.toISOString().split('T')[0];

    const count = goals.filter(
      (goal) => goal.completed && goal.date === dateString
    ).length;

    const dayLabel = date.toLocaleDateString('en-US', { weekday: 'short' }); // e.g., 'Mon', 'Tue'

    data.push({ label: dayLabel, value: count });
  }

  return data;
};
