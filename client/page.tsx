import React from 'react';
import QuizCard from './components/QuizCard';
import Highlighter from './components/Highlighter';

export default function StudyPage() {
  // 這裡我們模擬 AI 生成後的資料結構
  const lessonData = {
    unitTitle: "第一單元：光合作用與能量轉換",
    goals: ["理解光反應流程", "掌握固碳反應關鍵", "分析影響速率因素"],
    content: "植物透過葉綠體進行反應。其中<mark>光反應</mark>發生在類囊體，而<mark>固碳反應</mark>（卡爾文循環）則發生在基質中。這是生命能量的泉源。",
    quiz: [
      {
        question: "下列哪一個反應發生在葉綠體的基質中？",
        options: ["(A) 光反應", "(B) 固碳反應", "(C) 水的光解", "(D) 電子傳遞鏈"],
        answer: "(B)",
        explanation: "光反應發生在類囊體薄膜，而固碳反應（卡爾文循環）則是在基質中利用 ATP 與 NADPH 將二氧化碳轉化為醣類。"
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20">
      {/* 1. 單元大門口：導覽與目標 */}
      <section className="bg-white p-8 rounded-3xl border-2 border-blue-500 shadow-sm">
        <h1 className="text-3xl font-black text-slate-900 mb-4">{lessonData.unitTitle}</h1>
        <div className="flex gap-2 mb-6">
          {lessonData.goals.map((goal, i) => (
            <span key={i} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold">
              🎯 {goal}
            </span>
          ))}
        </div>
        <div className="bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300">
          <p className="text-center text-slate-500 italic">[這裡會由 AI 自動渲染 Mermaid 流程圖]</p>
        </div>
      </section>

      {/* 2. 精華內容區 (帶有螢光筆) */}
      <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
          核心觀念詳細講解
        </h2>
        <Highlighter text={lessonData.content} />
      </section>

      {/* 3. 課後練習題 */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
          小節即時檢測
        </h2>
        {lessonData.quiz.map((q, index) => (
          <QuizCard key={index} {...q} />
        ))}
      </section>
    </div>
  );
}
