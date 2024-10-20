// src/SentimentAnalysis.jsx
import React, { useState } from 'react';

const SentimentAnalysis = () => {
  // Simulated sentiment analysis data
  const [sentimentData, setSentimentData] = useState({
    emotions: [
      { emoji: "😊", name: "smile" },
      { emoji: "🤔", name: "think" },
      { emoji: "😲", name: "astonish" }
    ],
    sentence: "The scene feels positive and full of joy."
  });

  return (
    <div className="min-h-screen bg-gradient-to-r bg-black from-purple-300 via-pink-300 to-red-300 flex flex-col items-center justify-center p-5">
      <h1 className="center text-4xl font-bold text-white mb-6 mt-[-80px]">Sentiment Analysis</h1>

      <div className="w-full max-w-lg px-14 py-4 content-box shadow-md bg-transparent border border-gray-500 dark:text-gray-800 rounded">
        <h2 className="text-2xl text-center font-semibold text-gray-200 mb-4">
          Results:
        </h2>

        <div className="flex justify-center mb-4">
            {sentimentData.emotions.map((emotion, index) => (
                <div key={index} className="relative group text-center">
                {/* Emoji */}
                <span className="text-4xl mx-2">
                    {emotion.emoji}
                </span>
                
                {/* Tooltip */}
                <div
                    className={`absolute z-30 rounded-lg px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 group-hover:visible group-hover:opacity-100 -translate-x-[30%] translate-y-[30%]`}
                >
                    {emotion.name}
                </div>
                </div>
            ))}
        </div>

        <p className="text-lg text-center text-gray-300 italic">
          {sentimentData.sentence}
        </p>

        
      </div>
      <button
          type="button"
          className="relative px-5 py-2 ml-4 mt-10 text-xl overflow-hidden font-semibold rounded text-white hover:bg-darkPurple transition-all bg-purple"
        >
          { sentimentData.sentence? "Analyse again" : "Analyse"}
        </button>
    </div>
  );
};

export default SentimentAnalysis;
