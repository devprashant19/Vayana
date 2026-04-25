import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronUp, ChevronDown } from 'lucide-react';

interface AIAssistantProps {
  videoTitle?: string;
  videoDescription?: string;
}

export default function AIAssistant({ videoTitle = "Sample Video", videoDescription = "A detailed tutorial" }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/generate-summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoTitle, videoDescription }),
      });
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to generate summary');
      }
      
      setSummary(data.summary);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-80 max-h-96 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden flex flex-col"
          >
            <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex justify-between items-center shadow-md">
              <div className="flex items-center space-x-2">
                <Sparkles size={18} className="animate-pulse" />
                <h3 className="font-semibold text-sm tracking-wide">Vayana AI Insights</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>
            
            <div className="p-4 overflow-y-auto flex-1 text-sm text-gray-700 bg-emerald-50/30">
              {!summary && !loading && !error && (
                <div className="text-center py-6 text-gray-500 flex flex-col items-center">
                  <Sparkles size={32} className="text-emerald-300 mb-2 opacity-50" />
                  <p>Click below to generate an AI summary and smart chapters for this video.</p>
                </div>
              )}
              
              {loading && (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
                </div>
              )}
              
              {error && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg text-xs border border-red-100">
                  {error}
                </div>
              )}
              
              {summary && !loading && (
                <div className="prose prose-sm prose-emerald max-w-none">
                  {/* Basic markdown rendering. In production, use react-markdown */}
                  {summary.split('\n').map((line, i) => {
                    if (line.startsWith('## ')) return <h3 key={i} className="text-emerald-700 font-bold mt-4 mb-2">{line.replace('## ', '')}</h3>;
                    if (line.startsWith('# ')) return <h2 key={i} className="text-emerald-800 font-bold mt-4 mb-2">{line.replace('# ', '')}</h2>;
                    if (line.startsWith('* ') || line.startsWith('- ')) return <li key={i} className="ml-4 mb-1 list-disc">{line.substring(2)}</li>;
                    if (line.trim() === '') return <br key={i} />;
                    return <p key={i} className="mb-2 leading-relaxed">{line}</p>;
                  })}
                </div>
              )}
            </div>
            
            <div className="p-3 bg-white border-t border-gray-100">
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <span>Analyzing Video...</span>
                ) : (
                  <>
                    <Sparkles size={16} />
                    <span>{summary ? 'Regenerate Insights' : 'Generate AI Insights'}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-3 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300"
      >
        <Sparkles size={20} className={isOpen ? '' : 'animate-pulse'} />
        <span className="font-semibold tracking-wide">Vayana AI</span>
        {isOpen ? <ChevronDown size={18} className="opacity-70" /> : <ChevronUp size={18} className="opacity-70 group-hover:-translate-y-0.5 transition-transform" />}
      </button>
    </div>
  );
}
