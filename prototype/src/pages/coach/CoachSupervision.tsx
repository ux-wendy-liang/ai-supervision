import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Zap,
  Play,
  FileText,
  Clock,
  Users,
  Star,
  TrendingUp,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Calendar,
  Video
} from 'lucide-react';

// Mock past sessions with AI feedback
const pastSessions = [
  {
    id: '1',
    clientName: 'Michael Thompson',
    date: '2026-01-24',
    duration: 58,
    overallScore: 82,
    highlights: ['Strong opening questions', 'Good use of silence'],
    improvements: ['Could explore emotions more'],
    hasTranscript: true
  },
  {
    id: '2',
    clientName: 'Jennifer Lee',
    date: '2026-01-22',
    duration: 62,
    overallScore: 88,
    highlights: ['Excellent reframing', 'Deep listening demonstrated'],
    improvements: ['Consider shorter questions'],
    hasTranscript: true
  },
  {
    id: '3',
    clientName: 'David Kim',
    date: '2026-01-20',
    duration: 55,
    overallScore: 75,
    highlights: ['Good rapport building'],
    improvements: ['Avoid giving advice', 'More open-ended questions'],
    hasTranscript: true
  }
];

// Mock ICF competency scores
const competencyScores = [
  { name: 'Active Listening', score: 85, trend: 'up' },
  { name: 'Powerful Questioning', score: 78, trend: 'up' },
  { name: 'Creating Awareness', score: 82, trend: 'stable' },
  { name: 'Direct Communication', score: 88, trend: 'up' },
  { name: 'Establishing Trust', score: 90, trend: 'stable' },
  { name: 'Coaching Presence', score: 76, trend: 'up' },
  { name: 'Designing Actions', score: 80, trend: 'down' },
  { name: 'Managing Progress', score: 72, trend: 'up' }
];

export default function CoachSupervision() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'sessions' | 'progress'>('sessions');

  const upcomingWithAI = [
    {
      id: '1',
      clientName: 'Sarah Wilson',
      date: '2026-01-28',
      time: '11:00',
      aiEnabled: true
    }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Supervision</h1>
          <p className="text-gray-600">Get real-time feedback and improve your coaching skills</p>
        </div>
        <button
          onClick={() => navigate('/coach/supervision/session')}
          className="px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Video className="w-5 h-5" />
          Start Session with AI
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-teal-600" />
            </div>
            <span className="text-gray-600">Overall Score</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">82<span className="text-lg text-gray-500">/100</span></div>
          <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
            <TrendingUp className="w-4 h-4" />
            +5 from last month
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-gray-600">Sessions Reviewed</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">24</div>
          <div className="text-sm text-gray-500 mt-1">This month: 8</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-gray-600">Top Strength</span>
          </div>
          <div className="text-xl font-bold text-gray-900">Establishing Trust</div>
          <div className="text-sm text-gray-500 mt-1">Score: 90/100</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="text-gray-600">Focus Area</span>
          </div>
          <div className="text-xl font-bold text-gray-900">Managing Progress</div>
          <div className="text-sm text-gray-500 mt-1">Score: 72/100</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('sessions')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'sessions'
              ? 'bg-teal-100 text-teal-700'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Session Reviews
        </button>
        <button
          onClick={() => setActiveTab('progress')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'progress'
              ? 'bg-teal-100 text-teal-700'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Skill Progress
        </button>
      </div>

      {activeTab === 'sessions' && (
        <div className="grid grid-cols-3 gap-6">
          {/* Session List */}
          <div className="col-span-2 space-y-4">
            {/* Upcoming with AI */}
            {upcomingWithAI.length > 0 && (
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200 mb-6">
                <div className="flex items-center gap-2 text-teal-700 font-medium mb-3">
                  <Zap className="w-5 h-5" />
                  Upcoming Session with AI Supervision
                </div>
                {upcomingWithAI.map(session => (
                  <div key={session.id} className="flex items-center justify-between bg-white rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{session.clientName}</div>
                        <div className="text-sm text-gray-500">
                          {session.date} at {session.time}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate('/coach/supervision/session')}
                      className="px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Join with AI
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Past Sessions */}
            <h3 className="font-semibold text-gray-900 mb-4">Past Sessions</h3>
            {pastSessions.map(session => (
              <div
                key={session.id}
                onClick={() => navigate(`/coach/supervision/review/${session.id}`)}
                className="bg-white rounded-xl p-4 border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{session.clientName}</div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {session.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {session.duration} min
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{session.overallScore}</div>
                      <div className="text-xs text-gray-500">Score</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {session.highlights.map((h, i) => (
                    <span key={i} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {h}
                    </span>
                  ))}
                  {session.improvements.map((im, i) => (
                    <span key={i} className="px-2 py-1 bg-yellow-50 text-yellow-700 text-xs rounded-full flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {im}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Tips */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 h-fit">
            <h3 className="font-semibold text-gray-900 mb-4">AI Insights</h3>
            <div className="space-y-4">
              <div className="p-4 bg-teal-50 rounded-lg">
                <div className="flex items-center gap-2 text-teal-700 font-medium mb-2">
                  <Star className="w-4 h-4" />
                  This Week's Win
                </div>
                <p className="text-sm text-gray-600">
                  Your powerful questioning improved by 12% - great job asking more open-ended questions!
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-2 text-yellow-700 font-medium mb-2">
                  <MessageSquare className="w-4 h-4" />
                  Focus This Week
                </div>
                <p className="text-sm text-gray-600">
                  Try allowing more silence after questions. Your clients may need more time to reflect.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 text-blue-700 font-medium mb-2">
                  <TrendingUp className="w-4 h-4" />
                  Progress Tip
                </div>
                <p className="text-sm text-gray-600">
                  You've reviewed 8 sessions this month. Keep it up to maintain momentum!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'progress' && (
        <div className="grid grid-cols-2 gap-6">
          {/* ICF Competency Scores */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-6">ICF Core Competencies</h3>
            <div className="space-y-4">
              {competencyScores.map((comp) => (
                <div key={comp.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">{comp.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{comp.score}</span>
                      {comp.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
                      {comp.trend === 'down' && <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />}
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-500 rounded-full transition-all"
                      style={{ width: `${comp.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Over Time */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-6">Growth Over Time</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {[65, 68, 72, 70, 75, 78, 82].map((score, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-teal-500 rounded-t-lg transition-all"
                    style={{ height: `${score * 2.5}px` }}
                  />
                  <span className="text-xs text-gray-500">
                    {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'][i]}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-teal-50 rounded-lg">
              <div className="text-sm text-teal-700">
                <strong>+17 points</strong> improvement over 6 months
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
