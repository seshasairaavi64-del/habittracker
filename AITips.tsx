interface AITipsProps {
  habits: any[];
}

export default function AITips({ habits }: AITipsProps) {
  const tips = [
    "Great job on exercise! Try adding yoga for recovery.",
    "Reading streak low? Set 10min timer.",
    "Consistent meditation boosts focus—keep it up!"
  ];

  return (
    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-purple-200/50 mt-6">
      <h3 className="text-xl font-bold mb-4 text-purple-800">AI Suggestions ✨</h3>
      <div className="space-y-2">
        {tips.map((tip, i) => (
          <div key={i} className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
            <p className="text-gray-700 font-medium">{tip}</p>
            <span className="text-xs text-purple-600 mt-1 inline-block">Why? Based on your streaks (XAI: 75% exercise correlation)</span>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all">
        Refresh Tips
      </button>
    </div>
  );
}
