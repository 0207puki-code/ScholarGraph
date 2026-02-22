import React, { useState } from 'react';

// 這是練習題的漂亮卡片
export default function QuizCard({ question, options, answer, explanation }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm mb-6">
      {/* 題目區域 */}
      <h3 className="text-lg font-bold text-slate-800 mb-4">
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded mr-2">Q</span>
        {question}
      </h3>

      {/* 選項列表 */}
      <div className="space-y-3">
        {options.map((option, index) => (
          <button 
            key={index}
            className="w-full text-left px-4 py-3 border rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all"
          >
            {option}
          </button>
        ))}
      </div>

      {/* 查看詳解按鈕 */}
      <button 
        onClick={() => setShowAnswer(!showAnswer)}
        className="mt-6 text-sm font-medium text-blue-500 hover:text-blue-700 underline"
      >
        {showAnswer ? "隱藏詳解 ▲" : "查看詳解與答案 ▼"}
      </button>

      {/* 詳解區塊 (點擊才顯示) */}
      {showAnswer && (
        <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-100">
          <p className="font-bold text-green-700 mb-2">正確答案：{answer}</p>
          <p className="text-slate-600 text-sm leading-relaxed">
            <span className="font-bold underline">詳解：</span> {explanation}
          </p>
        </div>
      )}
    </div>
  );
}
