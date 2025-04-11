// src/hooks/useGoals.ts
import { DataStore } from '@aws-amplify/datastore';
import { Goal } from '../src/models';

export const useGoals = () => {
  const fetchGoals = async (): Promise<Goal[]> => {
    try {
      return await DataStore.query(Goal);
    } catch (error) {
      console.error('Error fetching goals:', error);
      return [];
    }
  };

  const addGoal = async (title: string, date: string) => {
    try {
      return await DataStore.save(
        new Goal({ title, completed: false, date })
      );
    } catch (error) {
      console.error('Error adding goal:', error);
    }
  };

  const toggleGoal = async (goal: Goal) => {
    try {
      return await DataStore.save(
        Goal.copyOf(goal, (updated) => {
          updated.completed = !goal.completed;
        })
      );
    } catch (error) {
      console.error('Error toggling goal:', error);
    }
  };

  return { fetchGoals, addGoal, toggleGoal };
};
