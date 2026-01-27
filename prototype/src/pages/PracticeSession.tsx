import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mic, MicOff, Send, Lightbulb, Clock, Volume2, X, CheckCircle } from 'lucide-react';

const mockConversation = [
  { role: 'client', text: "Hi, thanks for meeting with me today. I've been feeling really stuck lately..." },
  { role: 'coach', text: "Hello, I'm glad you reached out. What's been on your mind?" },
  { role: 'client', text: "It's my job... I've been there for 5 years and I feel completely burned out. I want to change but I'm terrified of making a mistake." },
];

const tips = [
  { type: 'good', text: 'Great open-ended question!' },
  { type: 'tip', text: 'Try asking "What" or "How" questions' },
  { type: 'tip', text: 'The client mentioned fear - explore that emotion' },
];

export default function PracticeSession() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(mockConversation);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [showTip, setShowTip] = useState(true);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'coach', text: input }]);
    setInput('');

    // Simulate client response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'client',
          text: "That's a good question... I think what I'm really afraid of is disappointing my family. They all think I have a stable job...",
        },
      ]);
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 2000);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/practice')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="font-semibold text-gray-900">Practice with Li Wei</h1>
              <p className="text-sm text-gray-500">Career Change Anxiety</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
              <Clock className="w-4 h-4 text-gray-600" />
              <span className="font-mono text-gray-900">{formatTime(sessionTime)}</span>
            </div>
            <button
              onClick={() => navigate('/report')}
              className="px-4 py-2 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors"
            >
              End Session
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'coach' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-lg px-4 py-3 rounded-2xl ${
                    msg.role === 'coach'
                      ? 'bg-gray-900 text-white rounded-br-md'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-md'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {msg.role === 'client' && (
                      <span className="text-xs font-medium text-gray-500">Li Wei (Client)</span>
                    )}
                    {msg.role === 'coach' && (
                      <span className="text-xs font-medium text-gray-400">You (Coach)</span>
                    )}
                  </div>
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`p-3 rounded-xl transition-all ${
                  isRecording
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your response or click the mic to speak..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                className="p-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
              <button className="flex items-center gap-1 hover:text-gray-700">
                <Volume2 className="w-4 h-4" />
                Play client audio
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar - Real-time Tips */}
        <div className="w-80 bg-white border-l border-gray-200 p-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Real-time Tips</h3>
            <button
              onClick={() => setShowTip(!showTip)}
              className="text-gray-400 hover:text-gray-600"
            >
              {showTip ? <X className="w-4 h-4" /> : <Lightbulb className="w-4 h-4" />}
            </button>
          </div>

          {showTip && (
            <div className="space-y-3">
              {/* Current Tip */}
              <div className={`p-4 rounded-xl ${
                tips[currentTip].type === 'good'
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-amber-50 border border-amber-200'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {tips[currentTip].type === 'good' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <Lightbulb className="w-5 h-5 text-amber-600" />
                  )}
                  <span className={`text-sm font-medium ${
                    tips[currentTip].type === 'good' ? 'text-green-700' : 'text-amber-700'
                  }`}>
                    {tips[currentTip].type === 'good' ? 'Great job!' : 'Suggestion'}
                  </span>
                </div>
                <p className={`text-sm ${
                  tips[currentTip].type === 'good' ? 'text-green-800' : 'text-amber-800'
                }`}>
                  {tips[currentTip].text}
                </p>
              </div>

              {/* Stats */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Session Stats</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Talk Ratio</span>
                      <span className="text-gray-900 font-medium">35% / 65%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden flex">
                      <div className="w-[35%] bg-gray-800"></div>
                      <div className="w-[65%] bg-gray-300"></div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                      <span>You</span>
                      <span>Client</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Open Questions</span>
                    <span className="text-sm font-medium text-green-600">4 / 5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Interruptions</span>
                    <span className="text-sm font-medium text-gray-900">0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Empathy Moments</span>
                    <span className="text-sm font-medium text-green-600">2</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-teal-50 rounded-xl p-4">
                <h4 className="text-sm font-medium text-teal-700 mb-2">Try This</h4>
                <p className="text-sm text-teal-600 italic">
                  "What does 'disappointing your family' mean to you?"
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
