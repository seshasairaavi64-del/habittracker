'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface HabitListProps {
  habits: any[];
  userId: string;
  onUpdate: () => void;
}

export default function HabitList({ habits, userId, onUpdate }: HabitListProps) {
  const today = new Date().toISOString().split('T')[0];
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const toggleHabit = async (habitId: string) => {
    setLoading((prev) => ({ ...prev, [habitId]: true }));
    const { error } = await supabase
      .from('habit_logs')
      .upsert({ habit_id: habitId, user_id: userId, date: today, completed: true });
    setLoading((prev) => ({ ...prev, [habitId]: false }));
    if (!error) onUpdate();
  };

  const todayHabits = habits.filter((h: any) => {
    const log = h.habit_logs?.find((l: any) => l.date === today);
    return h.frequency === 'daily';
  });

  return (
    <div className="space-y-4">
      {todayHabits.map((habit: any) => {
        const isCompleted = habit.habit_logs?.some((l: any) => l.date === today && l.completed);
        return (
          <div key={habit.id} className="group bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:border-purple-300">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{habit.name}</h3>
                <p className="text-sm text-gray-500">Goal: {habit.goals?.title}</p>
              </div>
              <button
                onClick={() => toggleHabit(habit.id)}
                disabled={loading[habit.id] || isCompleted}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                  isCompleted
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md hover:shadow-xl hover:from-purple-500 hover:to-pink-500'
                } ${loading[habit.id] ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isCompleted ? '✓' : '○'}
              </button>
            </div>
            {isCompleted && (
              <div className="mt-3 pt-3 border-t border-green-200">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium animate-pulse">
                  Streak continued! 🎉
                </span>
              </div>
            )}
          </div>
        );
      })}
      {todayHabits.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>No habits yet. Add a goal to get started!</p>
        </div>
      )}
    </div>
  );
}
