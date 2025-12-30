
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      sender: 'ai', 
      text: 'I noticed shipment #AIR-8821 is delayed in Customs. Would you like me to draft an inquiry email to the broker?', 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulated AI Response (In a real scenario, call ai.models.generateContent)
    setTimeout(() => {
      const aiMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        sender: 'ai', 
        text: `I've prepared a draft for #AIR-8821. It highlights the 2-day delay and requests immediate status update from the Frankfurt customs broker. Should I send it?`, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-b from-primary/10 to-surface-light dark:to-surface-dark rounded-xl border border-primary/20 shadow-sm p-5 relative overflow-hidden flex flex-col h-[400px]">
      <div className="flex items-start gap-3 mb-4 shrink-0">
        <div className="p-2 bg-primary rounded-lg shadow-lg shadow-primary/30">
          <span className="material-symbols-outlined text-white">smart_toy</span>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white text-sm">TradeFlow AI Assistant</h3>
          <span className="text-xs text-primary font-medium">Online & Ready</span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-hide pr-1">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-xl text-xs ${
              msg.sender === 'user' 
                ? 'bg-primary text-white rounded-tr-none ml-8' 
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-tl-none mr-8 border border-slate-100 dark:border-slate-700 shadow-sm'
            }`}>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-slate-800 p-3 rounded-xl rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-sm">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative shrink-0">
        <input 
          className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-lg py-2 pl-3 pr-10 text-xs text-slate-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary" 
          placeholder="Type your request..." 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary-dark transition-colors">
          <span className="material-symbols-outlined text-[18px]">send</span>
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
