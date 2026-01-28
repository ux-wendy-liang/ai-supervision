import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
  MessageSquare,
  Zap,
  CheckCircle,
  AlertCircle,
  Users,
  Settings
} from 'lucide-react';

// Simulated live transcript with AI feedback
const liveTranscript = [
  {
    id: 1,
    time: 5,
    speaker: 'coach',
    text: "Good morning! How are you doing today?",
    feedback: null
  },
  {
    id: 2,
    time: 12,
    speaker: 'client',
    text: "Hi Sarah. I'm doing okay, but I've been feeling really stressed about this upcoming presentation.",
    feedback: null
  },
  {
    id: 3,
    time: 25,
    speaker: 'coach',
    text: "I can hear that you're feeling stressed. Tell me more about what's going on with this presentation.",
    feedback: {
      type: 'positive',
      text: "Great acknowledgment of emotion + open-ended question"
    }
  },
  {
    id: 4,
    time: 45,
    speaker: 'client',
    text: "It's a board presentation next week. I've never presented to the board before and I'm worried I'll mess it up.",
    feedback: null
  },
  {
    id: 5,
    time: 60,
    speaker: 'coach',
    text: "What specifically are you most worried about?",
    feedback: {
      type: 'positive',
      text: "Powerful question - helps identify core concern"
    }
  },
  {
    id: 6,
    time: 80,
    speaker: 'client',
    text: "I think... I'm worried they'll see that I don't really know what I'm doing. That I'm not ready for this role.",
    feedback: null
  },
  {
    id: 7,
    time: 95,
    speaker: 'coach',
    text: "(Silence...)",
    feedback: {
      type: 'positive',
      text: "Good use of silence - allowing reflection"
    }
  },
  {
    id: 8,
    time: 105,
    speaker: 'client',
    text: "I guess it's imposter syndrome again. I thought I was past this.",
    feedback: null
  },
  {
    id: 9,
    time: 120,
    speaker: 'coach',
    text: "Have you tried practicing in front of a mirror? That usually helps with presentations.",
    feedback: {
      type: 'warning',
      text: "This shifts into advice-giving. Consider: 'What has helped you in similar situations before?'"
    }
  },
  {
    id: 10,
    time: 140,
    speaker: 'client',
    text: "Yeah, I've tried that. It doesn't really help me feel more confident though.",
    feedback: null
  },
  {
    id: 11,
    time: 155,
    speaker: 'coach',
    text: "What would feeling confident look like for you in that room?",
    feedback: {
      type: 'positive',
      text: "Excellent reframe - future-focused and exploratory"
    }
  }
];

export default function LiveSession() {
  const navigate = useNavigate();
  const [sessionTime, setSessionTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [showAI, setShowAI] = useState(true);
  const [showEndConfirm, setShowEndConfirm] = useState(false);
  const [isEnding, setIsEnding] = useState(false);
  const [visibleTranscript, setVisibleTranscript] = useState<typeof liveTranscript>([]);
  const transcriptRef = useRef<HTMLDivElement>(null);

  // Simulate session timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate transcript appearing over time
  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    liveTranscript.forEach(entry => {
      const timeout = setTimeout(() => {
        setVisibleTranscript(prev => {
          // Avoid duplicates
          if (prev.some(e => e.id === entry.id)) return prev;
          return [...prev, entry];
        });
      }, entry.time * 1000);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(t => clearTimeout(t));
    };
  }, []);

  // Auto-scroll transcript
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [visibleTranscript]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndClick = () => {
    setShowEndConfirm(true);
  };

  const confirmEndSession = () => {
    setIsEnding(true);
    setTimeout(() => {
      navigate('/coach/supervision/review/1');
    }, 1000);
  };

  // Calculate live stats
  const coachEntries = visibleTranscript.filter(e => e.speaker === 'coach').length;
  const totalEntries = visibleTranscript.length;
  const talkRatio = totalEntries > 0 ? Math.round((coachEntries / totalEntries) * 100) : 0;
  const positiveCount = visibleTranscript.filter(e => e.feedback?.type === 'positive').length;
  const warningCount = visibleTranscript.filter(e => e.feedback?.type === 'warning').length;

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Main Video Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-gray-800 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/coach/supervision')}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700"
            >
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
            <button
              onClick={() => setShowAI(!showAI)}
              className={`p-2 rounded-lg ${showAI ? 'bg-teal-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
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
            {!isVideoOn && (
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                <VideoOff className="w-8 h-8 text-gray-600" />
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="h-20 bg-gray-800 flex items-center justify-center gap-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
              isMuted ? 'bg-red-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>
          <button
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
              !isVideoOn ? 'bg-red-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            {isVideoOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
          </button>
          <button
            onClick={handleEndClick}
            className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
          >
            <Phone className="w-6 h-6 rotate-135" />
          </button>
        </div>
      </div>

      {/* AI Sidebar with Transcript */}
      {showAI && (
        <div className="w-96 bg-gray-800 border-l border-gray-700 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center gap-2 text-white font-medium mb-1">
              <Zap className="w-5 h-5 text-teal-400" />
              AI Supervision
            </div>
            <p className="text-gray-400 text-sm">Live transcript with feedback (visible only to you)</p>
          </div>

          {/* Live Stats */}
          <div className="p-3 border-b border-gray-700 grid grid-cols-4 gap-2">
            <div className="bg-gray-700/50 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-white">{talkRatio}%</div>
              <div className="text-xs text-gray-400">You</div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-white">{100 - talkRatio}%</div>
              <div className="text-xs text-gray-400">Client</div>
            </div>
            <div className="bg-teal-500/20 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-teal-400">{positiveCount}</div>
              <div className="text-xs text-gray-400">Good</div>
            </div>
            <div className="bg-yellow-500/20 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-yellow-400">{warningCount}</div>
              <div className="text-xs text-gray-400">Tips</div>
            </div>
          </div>

          {/* Live Transcript with Inline Feedback */}
          <div ref={transcriptRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {visibleTranscript.map((entry) => (
              <div key={entry.id} className="animate-fade-in">
                {/* Transcript Entry */}
                <div className={`flex gap-3 ${entry.feedback ? 'mb-2' : ''}`}>
                  <div className="text-xs text-gray-500 w-10 pt-1 shrink-0">
                    {formatTime(entry.time)}
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs font-medium mb-1 ${
                      entry.speaker === 'coach' ? 'text-teal-400' : 'text-blue-400'
                    }`}>
                      {entry.speaker === 'coach' ? 'You' : 'Michael'}
                    </div>
                    <p className={`text-sm text-gray-300 ${
                      entry.text.includes('Silence') ? 'italic text-gray-500' : ''
                    }`}>
                      {entry.text}
                    </p>
                  </div>
                </div>

                {/* Inline AI Feedback */}
                {entry.feedback && (
                  <div className={`ml-13 p-2 rounded-lg flex items-start gap-2 ${
                    entry.feedback.type === 'positive'
                      ? 'bg-teal-500/20 border border-teal-500/30'
                      : 'bg-yellow-500/20 border border-yellow-500/30'
                  }`} style={{ marginLeft: '52px' }}>
                    {entry.feedback.type === 'positive' ? (
                      <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                    )}
                    <p className={`text-xs ${
                      entry.feedback.type === 'positive' ? 'text-teal-300' : 'text-yellow-300'
                    }`}>
                      {entry.feedback.text}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {visibleTranscript.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                <p className="text-sm">Transcript will appear here as you speak</p>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t border-gray-700">
            <div className="text-xs text-gray-400 mb-2">Quick prompts</div>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs hover:bg-gray-600">
                Ask "What else?"
              </button>
              <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs hover:bg-gray-600">
                Reflect back
              </button>
              <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs hover:bg-gray-600">
                Explore emotions
              </button>
            </div>
          </div>
        </div>
      )}

      {/* End Session Confirmation Modal */}
      {showEndConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl max-w-md w-full p-6 border border-gray-700">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-500 rotate-135" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">End Session?</h2>
              <p className="text-gray-400">
                Your session has been {formatTime(sessionTime)} long.
                The recording will be saved for review.
              </p>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">{formatTime(sessionTime)}</div>
                  <div className="text-xs text-gray-400">Duration</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-400">{positiveCount}</div>
                  <div className="text-xs text-gray-400">Positive Feedback</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowEndConfirm(false)}
                className="flex-1 py-3 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-600 transition-colors"
              >
                Continue Session
              </button>
              <button
                onClick={confirmEndSession}
                disabled={isEnding}
                className="flex-1 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isEnding ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Ending...
                  </>
                ) : (
                  'End Session'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
