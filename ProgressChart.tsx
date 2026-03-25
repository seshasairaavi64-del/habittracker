'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ProgressChartProps {
  habits: any[];
}

export default function ProgressChart({ habits }: ProgressChartProps) {
  const data = [
    { date: '2026-03-20', Exercise: 5, Read: 3, Meditate: 7 },
    { date: '2026-03-21', Exercise: 6, Read: 4, Meditate: 7 },
    { date: '2026-03-22', Exercise: 4, Read: 5, Meditate: 6 },
    { date: '2026-03-23', Exercise: 7, Read: 3, Meditate: 8 },
    { date: '2026-03-24', Exercise: 6, Read: 4, Meditate: 7 },
    { date: '2026-03-25', Exercise: 5, Read: 5, Meditate: 7 },
  ];

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Weekly Progress</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="date" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Exercise" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6' }} />
          <Line type="monotone" dataKey="Read" stroke="#ec4899" strokeWidth={3} dot={{ fill: '#ec4899' }} />
          <Line type="monotone" dataKey="Meditate" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
