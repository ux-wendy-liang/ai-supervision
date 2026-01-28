import { useNavigate } from 'react-router-dom';
import { MessageSquare, Target, TrendingUp, Clock, Award, ChevronRight, Play } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

const radarData = [
  { skill: 'Active Listening', value: 80, fullMark: 100 },
  { skill: 'Powerful Questions', value: 65, fullMark: 100 },
  { skill: 'Building Trust', value: 85, fullMark: 100 },
  { skill: 'Presence', value: 70, fullMark: 100 },
  { skill: 'Evoking Awareness', value: 60, fullMark: 100 },
];

const recentSessions = [
  { id: 1, type: 'practice', title: 'Career Change Anxiety', date: '2 hours ago', score: 78 },
  { id: 2, type: 'review', title: 'Session with Li Ming', date: 'Yesterday', score: 82 },
  { id: 3, type: 'practice', title: 'Work-Life Balance', date: '3 days ago', score: 71 },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Coach!</h1>
        <p className="text-gray-600">Continue your coaching journey</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">47</div>
              <div className="text-sm text-gray-500">Total Practices</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">12.5h</div>
              <div className="text-sm text-gray-500">Practice Time</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">+15%</div>
              <div className="text-sm text-gray-500">This Month</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">ACC</div>
              <div className="text-sm text-gray-500">Current Level</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Start</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => navigate('/practice')}
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                  <Play className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Start Practice</div>
                  <div className="text-sm text-gray-500">Practice with AI clients</div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/review')}
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Upload Session</div>
                  <div className="text-sm text-gray-500">Analyze real sessions</div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Recent Sessions */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Sessions</h2>
              <button className="text-teal-600 text-sm font-medium hover:text-teal-700">View All</button>
            </div>
            <div className="space-y-3">
              {recentSessions.map((session) => (
                <div
                  key={session.id}
                  onClick={() => navigate('/report')}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    session.type === 'practice' ? 'bg-teal-100' : 'bg-gray-100'
                  }`}>
                    {session.type === 'practice' ? (
                      <MessageSquare className="w-5 h-5 text-teal-600" />
                    ) : (
                      <Target className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{session.title}</div>
                    <div className="text-sm text-gray-500">{session.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">{session.score}</div>
                    <div className="text-xs text-gray-500">Score</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Radar */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">ICF Core Skills</h2>
          <p className="text-sm text-gray-500 mb-4">Your current skill levels</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11, fill: '#6b7280' }} />
                <Radar
                  name="Skills"
                  dataKey="value"
                  stroke="#0d9488"
                  fill="#0d9488"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <button
            onClick={() => navigate('/progress')}
            className="w-full mt-4 py-2 text-teal-600 text-sm font-medium hover:bg-teal-50 rounded-lg transition-colors"
          >
            View Full Progress
          </button>
        </div>
      </div>

      {/* ICF Progress Banner */}
      <div className="mt-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1">Your Path to PCC</h3>
            <p className="text-gray-400">You're 72% of the way to PCC certification level</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold">65%</div>
              <div className="text-xs text-gray-500">Active Listening</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">58%</div>
              <div className="text-xs text-gray-500">Powerful Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">80%</div>
              <div className="text-xs text-gray-500">Building Trust</div>
            </div>
            <button className="px-6 py-3 bg-white text-teal-600 font-semibold rounded-xl hover:shadow-lg transition-all">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
