import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Mic,
  Video,
  Phone,
  Zap,
  Users,
  Settings,
  MessageSquare,
  HelpCircle,
  Heart,
  Clock
} from 'lucide-react';

// Iteration 1: Stats-only dashboard (no inline feedback)
// This shows why stats alone were too abstract

export default function LiveSessionIteration1() {
  const [sessionTime, setSessionTime] = useState(185); // Start at ~3 min for demo

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Main Video Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-gray-800 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-white font-medium">{formatTime(sessionTime)}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-2 bg-teal-600/20 rounded-lg">
              <Zap className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400 text-sm font-medium">AI Supervision Active</span>
            </div>
            <button className="p-2 bg-teal-600 text-white rounded-lg">
              <Zap className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Video Grid */}
        <div className="flex-1 p-6 flex gap-4">
          {/* Client Video (Main) */}
          <div className="flex-1 bg-gray-800 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-500" />
                </div>
                <div className="text-white font-medium">Michael Thompson</div>
                <div className="text-gray-400 text-sm">Client</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 rounded-lg text-white text-sm">
              Michael Thompson
            </div>
          </div>

          {/* Coach Video (Small) */}
          <div className="w-64 h-48 bg-gray-800 rounded-2xl overflow-hidden relative self-end">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xl font-medium">SC</span>
                </div>
                <div className="text-white text-sm">You</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="h-20 bg-gray-800 flex items-center justify-center gap-4">
          <button className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-700 text-white hover:bg-gray-600">
            <Mic className="w-6 h-6" />
          </button>
          <button className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-700 text-white hover:bg-gray-600">
            <Video className="w-6 h-6" />
          </button>
          <button className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600">
            <Phone className="w-6 h-6 rotate-135" />
          </button>
        </div>
      </div>

      {/* AI Sidebar - ITERATION 1: Stats Only */}
      <div className="w-96 bg-gray-800 border-l border-gray-700 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center gap-2 text-white font-medium mb-1">
            <Zap className="w-5 h-5 text-teal-400" />
            AI Supervision
          </div>
          <p className="text-gray-400 text-sm">Real-time coaching metrics</p>
        </div>

        {/* Stats Dashboard - This is what Iteration 1 looked like */}
        <div className="flex-1 p-4 space-y-4">
          {/* Talk Ratio */}
          <div className="bg-gray-700/50 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <MessageSquare className="w-4 h-4" />
              Talk Ratio
            </div>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">45%</div>
                <div className="text-xs text-gray-400 mt-1">You</div>
              </div>
              <div className="flex-1 mx-4 h-3 bg-gray-600 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 rounded-full" style={{ width: '45%' }} />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">55%</div>
                <div className="text-xs text-gray-400 mt-1">Client</div>
              </div>
            </div>
            <div className="mt-2 text-xs text-teal-400 text-center">✓ Good balance</div>
          </div>

          {/* Open Questions */}
          <div className="bg-gray-700/50 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <HelpCircle className="w-4 h-4" />
              Open Questions Asked
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400">4</div>
              <div className="text-sm text-gray-400 mt-1">out of 6 questions total</div>
            </div>
            <div className="mt-3 text-xs text-teal-400 text-center">✓ 67% open questions</div>
          </div>

          {/* Empathy Moments */}
          <div className="bg-gray-700/50 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <Heart className="w-4 h-4" />
              Empathy Moments
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400">3</div>
              <div className="text-sm text-gray-400 mt-1">acknowledgments detected</div>
            </div>
          </div>

          {/* Silence Usage */}
          <div className="bg-gray-700/50 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <Clock className="w-4 h-4" />
              Silence Usage
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">1</div>
              <div className="text-sm text-gray-400 mt-1">meaningful pause</div>
            </div>
            <div className="mt-3 text-xs text-yellow-400 text-center">Consider more pauses</div>
          </div>

          {/* Problem indicator */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mt-4">
            <div className="text-yellow-400 text-sm font-medium mb-2">❓ The Problem</div>
            <div className="text-yellow-300/80 text-xs leading-relaxed">
              Stats are too abstract. You know "4 open questions" but not WHICH questions were good or what you could improve.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
