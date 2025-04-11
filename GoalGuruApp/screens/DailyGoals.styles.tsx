// DailyGoals.styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f7f7f7' },
  heading: { fontSize: 26, fontWeight: 'bold', color: '#2e2e2e' },
  subheading: { fontSize: 16, color: '#888', marginBottom: 12 },
  goalCard: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 14,
    borderColor: '#eee',
    borderWidth: 1,
  },
  goalCardCompleted: {
    backgroundColor: '#e0f5d9',
    borderColor: '#58cc02',
  },
  goalText: {
    fontSize: 16,
    color: '#333',
  },
  goalTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#7d7d7d',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#bbb',
    fontStyle: 'italic',
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 14,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: '#58cc02',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default styles;
