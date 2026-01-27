import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Users,
  Calendar,
  Star,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  TrendingUp,
  Download,
  Share2
} from 'lucide-react';

// Mock transcript data
const mockTranscript = [
  {
    time: '00:00',
    speaker: 'coach',
    text: "Good morning! How are you doing today?",
    feedback: null
  },
  {
    time: '00:15',
    speaker: 'client',
    text: "Hi Sarah. I'm doing okay, but I've been feeling really stressed about this upcoming presentation.",
    feedback: null
  },
  {
    time: '00:35',
    speaker: 'coach',
    text: "I can hear that you're feeling stressed. Tell me more about what's going on with this presentation.",
    feedback: {
      type: 'positive',
      text: "Great acknowledgment of emotion + open-ended question"
    }
  },
  {
    time: '01:15',
    speaker: 'client',
    text: "It's a board presentation next week. I've never presented to the board before and I'm worried I'll mess it up. There's so much riding on it.",
    feedback: null
  },
  {
    time: '01:45',
    speaker: 'coach',
    text: "What specifically are you most worried about?",
    feedback: {
      type: 'positive',
      text: "Powerful question - helps identify core concern"
    }
  },
  {
    time: '02:10',
    speaker: 'client',
    text: "I think... I'm worried they'll see that I don't really know what I'm doing. That I'm not ready for this role.",
    feedback: null
  },
  {
    time: '02:35',
    speaker: 'coach',
    text: "Silence...",
    feedback: {
      type: 'positive',
      text: "Good use of silence - allowing reflection"
    }
  },
  {
    time: '02:45',
    speaker: 'client',
    text: "I guess it's imposter syndrome again. I thought I was past this.",
    feedback: null
  },
  {
    time: '03:00',
    speaker: 'coach',
    text: "Have you tried practicing in front of a mirror? That usually helps with presentations.",
    feedback: {
      type: 'improvement',
      text: "This shifts into advice-giving. Consider: 'What has helped you in similar situations before?'"
    }
  },
  {
    time: '03:30',
    speaker: 'client',
    text: "Yeah, I've tried that. It doesn't really help me feel more confident though.",
    feedback: null
  },
  {
    time: '03:45',
    speaker: 'coach',
    text: "What would feeling confident look like for you in that room?",
    feedback: {
      type: 'positive',
      text: "Excellent reframe - future-focused and exploratory"
    }
  }
];

// Mock session data
const sessionData = {
  id: '1',
  clientName: 'Michael Thompson',
  date: '2026-01-24',
  duration: 58,
  overallScore: 82,
  competencyScores: {
    'Active Listening': 88,
    'Powerful Questioning': 85,
    'Creating Awareness': 78,
    'Direct Communication': 82,
    'Coaching Presence': 80
  },
  highlights: [
    'Strong opening with empathy',
    'Good use of silence after key moments',
    'Excellent reframing question at 03:45'
  ],
  improvements: [
    'Avoid shifting to advice-giving mode',
    'Consider exploring emotions more before moving to solutions'
  ],
  keyMoments: [
    { time: '02:45', text: 'Client breakthrough: recognized imposter syndrome pattern' }
  ]
};

export default function SessionReview() {
  const navigate = useNavigate();
  const { id: _id } = useParams(); // id would be used to fetch session data

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/coach/supervision')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="font-semibold text-gray-900">Session Review</h1>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {sessionData.clientName}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {sessionData.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {sessionData.duration} min
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Transcript with Inline Feedback */}
          <div className="col-span-2">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Transcript with AI Feedback</h2>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    Positive
                  </span>
                  <span className="flex items-center gap-1 text-yellow-600">
                    <AlertCircle className="w-4 h-4" />
                    Improvement
                  </span>
                </div>
              </div>

              <div className="divide-y divide-gray-50">
                {mockTranscript.map((entry, index) => (
                  <div
                    key={index}
                    className={`p-4 ${entry.feedback ? 'bg-gray-50' : ''}`}
                  >
                    <div className="flex gap-4">
                      <div className="text-xs text-gray-400 w-12 pt-1">{entry.time}</div>
                      <div className="flex-1">
                        <div className={`text-sm font-medium mb-1 ${
                          entry.speaker === 'coach' ? 'text-teal-600' : 'text-gray-600'
                        }`}>
                          {entry.speaker === 'coach' ? 'You' : sessionData.clientName}
                        </div>
                        <p className={`text-gray-700 ${entry.text === 'Silence...' ? 'italic text-gray-500' : ''}`}>
                          {entry.text}
                        </p>

                        {entry.feedback && (
                          <div className={`mt-3 p-3 rounded-lg flex items-start gap-2 ${
                            entry.feedback.type === 'positive'
                              ? 'bg-green-50 border border-green-200'
                              : 'bg-yellow-50 border border-yellow-200'
                          }`}>
                            {entry.feedback.type === 'positive' ? (
                              <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                            )}
                            <p className={`text-sm ${
                              entry.feedback.type === 'positive' ? 'text-green-700' : 'text-yellow-700'
                            }`}>
                              {entry.feedback.text}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="space-y-6">
            {/* Overall Score */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-gray-900 mb-2">{sessionData.overallScore}</div>
                <div className="text-gray-500">Overall Score</div>
                <div className="flex items-center justify-center gap-1 mt-2 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+3 from average</span>
                </div>
              </div>

              {/* Competency Breakdown */}
              <div className="space-y-3">
                {Object.entries(sessionData.competencyScores).map(([name, score]) => (
                  <div key={name}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">{name}</span>
                      <span className="font-medium text-gray-900">{score}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-teal-500 rounded-full"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Highlights
              </h3>
              <ul className="space-y-2">
                {sessionData.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas for Improvement */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-yellow-500" />
                Areas to Improve
              </h3>
              <ul className="space-y-2">
                {sessionData.improvements.map((im, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <AlertCircle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                    {im}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Moments */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-teal-500" />
                Key Moments
              </h3>
              {sessionData.keyMoments.map((moment, i) => (
                <div key={i} className="p-3 bg-teal-50 rounded-lg">
                  <div className="text-xs text-teal-600 mb-1">{moment.time}</div>
                  <p className="text-sm text-teal-700">{moment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
