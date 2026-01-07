import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Target, FileText, Share, Download, ChevronRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const clientData = {
  id: 1,
  name: 'Li Ming',
  sessions: 8,
  startDate: 'October 2025',
  duration: '3 months',
  topic: 'Leadership Development',
  status: 'active',
};

const growthData = [
  { session: 1, selfAwareness: 20, goalClarity: 30, actionTaking: 15, emotionManagement: 40 },
  { session: 2, selfAwareness: 28, goalClarity: 35, actionTaking: 20, emotionManagement: 45 },
  { session: 3, selfAwareness: 40, goalClarity: 42, actionTaking: 30, emotionManagement: 50 },
  { session: 4, selfAwareness: 48, goalClarity: 50, actionTaking: 38, emotionManagement: 55 },
  { session: 5, selfAwareness: 55, goalClarity: 58, actionTaking: 45, emotionManagement: 62 },
  { session: 6, selfAwareness: 62, goalClarity: 62, actionTaking: 52, emotionManagement: 70 },
  { session: 7, selfAwareness: 68, goalClarity: 68, actionTaking: 55, emotionManagement: 75 },
  { session: 8, selfAwareness: 75, goalClarity: 70, actionTaking: 60, emotionManagement: 80 },
];

const skillProgress = [
  { name: 'Self Awareness', start: 20, current: 75, change: '+55%' },
  { name: 'Goal Clarity', start: 30, current: 70, change: '+40%' },
  { name: 'Action Taking', start: 15, current: 60, change: '+45%' },
  { name: 'Emotion Management', start: 40, current: 80, change: '+40%' },
];

const keyMoments = [
  { session: 3, title: "Discovered fear of disappointing parents behind fear of failure", date: 'Nov 2025' },
  { session: 5, title: "Decided to talk to boss about promotion - succeeded!", date: 'Dec 2025' },
  { session: 7, title: "Started weekly exercise, stress noticeably reduced", date: 'Jan 2026' },
];

const topicEvolution = [
  { phase: 'Early', description: 'Work pressure, not knowing what they want' },
  { phase: 'Middle', description: 'Exploring career direction, handling relationship with manager' },
  { phase: 'Current', description: 'Executing plan, building work-life balance' },
];

const sessions = [
  { id: 1, date: 'Jan 3, 2026', duration: '32 min', score: 82, topic: 'Team communication challenges' },
  { id: 2, date: 'Dec 27, 2025', duration: '45 min', score: 78, topic: 'Preparing for difficult conversation' },
  { id: 3, date: 'Dec 20, 2025', duration: '38 min', score: 85, topic: 'Reflecting on promotion success' },
];

export default function ClientDetail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/clients')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {clientData.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{clientData.name}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Since {clientData.startDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {clientData.sessions} sessions
                  </span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              Export Report
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
              <Share className="w-4 h-4" />
              Share Growth Report
            </button>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Growth Summary */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white mb-8">
          <h2 className="text-lg font-semibold mb-4">Growth Summary</h2>
          <div className="grid grid-cols-4 gap-6">
            {skillProgress.map((skill) => (
              <div key={skill.name} className="bg-white/10 rounded-xl p-4">
                <div className="text-sm text-indigo-100 mb-2">{skill.name}</div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">{skill.current}%</span>
                  <span className="text-green-300 text-sm mb-1">{skill.change}</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-indigo-200">
                  <span>Started at {skill.start}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Growth Chart */}
          <div className="col-span-2 bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Growth Trajectory</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="session" tick={{ fontSize: 12 }} label={{ value: 'Session', position: 'bottom', offset: -5 }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="selfAwareness" stroke="#6366f1" strokeWidth={2} name="Self Awareness" />
                  <Line type="monotone" dataKey="goalClarity" stroke="#8b5cf6" strokeWidth={2} name="Goal Clarity" />
                  <Line type="monotone" dataKey="actionTaking" stroke="#ec4899" strokeWidth={2} name="Action Taking" />
                  <Line type="monotone" dataKey="emotionManagement" stroke="#10b981" strokeWidth={2} name="Emotion Mgmt" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-gray-600">Self Awareness</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">Goal Clarity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-gray-600">Action Taking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Emotion Mgmt</span>
              </div>
            </div>
          </div>

          {/* Key Breakthroughs */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Key Breakthrough Moments</h3>
            <div className="space-y-4">
              {keyMoments.map((moment, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Session {moment.session}</div>
                    <div className="text-sm text-gray-600">{moment.title}</div>
                    <div className="text-xs text-gray-400 mt-1">{moment.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Topic Evolution */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Topic Evolution</h3>
            <div className="space-y-4">
              {topicEvolution.map((phase, idx) => (
                <div key={idx} className="relative">
                  {idx < topicEvolution.length - 1 && (
                    <div className="absolute left-3 top-8 w-0.5 h-full bg-gray-200"></div>
                  )}
                  <div className="flex gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      idx === topicEvolution.length - 1
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700">{phase.phase}</div>
                      <div className="text-sm text-gray-500">{phase.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Sessions */}
          <div className="col-span-2 bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Session History</h3>
              <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">View All</button>
            </div>
            <div className="space-y-3">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  onClick={() => navigate('/review/session')}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{session.topic}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <span>{session.date}</span>
                      <span>•</span>
                      <span>{session.duration}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">{session.score}</div>
                    <div className="text-xs text-gray-500">Score</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shareable Report Preview */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Generate Client Growth Report</h3>
              <p className="text-sm text-gray-600">Create a shareable PDF report showing {clientData.name}'s progress and breakthroughs.</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors">
              <Share className="w-5 h-5" />
              Generate & Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
