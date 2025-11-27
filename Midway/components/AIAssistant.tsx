import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { askAIAssistant } from '../services/geminiService';
import { UserCircleIcon, BotIcon } from './Icons';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: 'Hello! I am the Midway Hospital Health Assistant. How can I help you today? You can ask me general health questions.'
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: userInput.trim() };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);
    setMessages(prev => [...prev, { role: 'loading', content: '' }]);
    
    const aiResponse = await askAIAssistant(userInput.trim());
    
    setMessages(prev => prev.filter(msg => msg.role !== 'loading'));
    setMessages(prev => [...prev, { role: 'model', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="bg-brand-teal-light dark:bg-slate-900 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col" style={{height: '80vh'}}>
                <div className="p-4 border-b border-gray-200 dark:border-slate-700 text-center">
                    <h2 className="text-2xl font-bold text-brand-blue dark:text-white">Health Assistant</h2>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Your virtual guide for general health questions</p>
                </div>
                
                <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto space-y-6">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                            {msg.role !== 'user' && <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue flex items-center justify-center"><BotIcon className="h-6 w-6 text-white"/></div>}
                            <div className={`max-w-md p-4 rounded-2xl ${msg.role === 'user' ? 'bg-brand-blue text-white rounded-br-none' : 'bg-slate-100 text-gray-800 rounded-bl-none dark:bg-slate-700 dark:text-slate-200'}`}>
                                {msg.role === 'loading' ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></div>
                                        <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                        <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                                    </div>
                                ) : (
                                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                )}
                            </div>
                            {msg.role === 'user' && <div className="flex-shrink-0 h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center"><UserCircleIcon className="h-6 w-6 text-slate-600 dark:text-slate-300"/></div>}
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t dark:border-slate-700">
                    <form onSubmit={handleSubmit} className="flex items-center gap-4">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type your question here..."
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !userInput.trim()}
                            className="px-6 py-3 bg-brand-blue text-white rounded-full font-semibold shadow-md hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors dark:disabled:bg-slate-600"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AIAssistant;