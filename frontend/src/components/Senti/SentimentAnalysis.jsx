// src/SentimentAnalysis.jsx
import React, { useState } from 'react';

const SentimentAnalysis = () => {
  // Simulated sentiment analysis data
  const [sentimentData, setSentimentData] = useState({
    emotions: ["😊", "happy", "excited"],
    sentence: "The scene feels positive and full of joy.",
  });

  return (
    <div className="min-h-screen bg-gradient-to-r bg-[#ffffff] from-purple-300 via-pink-300 to-red-300 flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-bold text-white mb-6">Sentiment Analysis</h1>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Sentiments Analysed: 
        </h2>

        <div className="flex justify-center mb-4">
          {sentimentData.emotions.map((emotion, index) => (
            <span key={index} className="text-4xl mx-2">
              {emotion}
            </span>
          ))}
        </div>

        <p className="text-lg text-gray-600 text-center italic">
          {sentimentData.sentence}
        </p>

        {/* <button
          
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Simulate Another Analysis
        </button> */}
      </div>
    </div>
  );
};

export default SentimentAnalysis;
