import React from 'react';

// 這個組件負責處理「名師螢光筆」效果
export default function Highlighter({ text }) {
  // 將文字中的 <mark> 標籤轉換為漂亮的螢光筆樣式
  const highlightedText = text.replace(
    /<mark>(.*?)<\/mark>/g, 
    '<span class="bg-yellow-200 px-1 rounded-sm font-bold text-slate-900 border-b-2 border-yellow-400">$1</span>'
  );

  return (
    <div 
      className="prose prose-slate max-w-none leading-relaxed text-slate-700"
      dangerouslySetInnerHTML={{ __html: highlightedText }} 
    />
  );
}
