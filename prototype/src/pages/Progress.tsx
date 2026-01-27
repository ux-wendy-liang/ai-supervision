import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Award, Target, Calendar, ChevronRight } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const radarData = [
  { skill: 'Active Listening', current: 80, first: 55 },
  { skill: 'Powerful Questions', current: 65, first: 45 },
  { skill: 'Building Trust', current: 85, first: 60 },
  { skill: 'Presence', current: 70, first: 50 },
  { skill: 'Evoking Awareness', current: 60, first: 40 },
];

const trendData = [
  { month: 'Sep', score: 55 },
  { month: 'Oct', score: 62 },
  { month: 'Nov', score: 68 },
  { month: 'Dec', score: 73 },
  { month: 'Jan', score: 80 },
];

const skillDetails = [
  { name: 'Active Listening', score: 80, acc: 60, pcc: 80, status: 'achieved' },
  { name: 'Powerful Questions', score: 65, acc: 60, pcc: 80, status: 'progress' },
  { name: 'Building Trust', score: 85, acc: 60, pcc: 80, status: 'achieved' },
  { name: 'Maintaining Presence', score: 70, acc: 60, pcc: 80, status: 'progress' },
  { name: 'Evoking Awareness', score: 60, acc: 60, pcc: 80, status: 'achieved' },
];

const practiceCalendar = [
  [false, true, false, true, true, false, false],
  [true, false, true, false, false, true, false],
  [false, true, false, true, false, false, false],
  [true, true, false, false, true, false, true],
];

export default function Progress() {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate('/dashboard')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Coaching Journey</h1>
          <p className="text-gray-600">Track your progress and growth over time</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-teal-600" />
            </div>
            <span className="text-sm text-gray-500">Total Practices</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">47</div>
          <div className="text-sm text-green-600 mt-1">+8 this month</div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-sm text-gray-500">Practice Hours</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">12.5h</div>
          <div className="text-sm text-green-600 mt-1">+3h this month</div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm text-gray-500">Current Level</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">ACC</div>
          <div className="text-sm text-teal-600 mt-1">Working toward PCC</div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-amber-600" />
            </div>
            <span className="text-sm text-gray-500">This Month Progress</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">+15%</div>
          <div className="text-sm text-gray-500 mt-1">Average improvement</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Radar Chart - Before/After */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Skills Growth</h2>
          <p className="text-sm text-gray-500 mb-4">Compare your first session vs now</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="skill" tick={{ fontSize: 10, fill: '#6b7280' }} />
                <Radar
                  name="First Session"
                  dataKey="first"
                  stroke="#d1d5db"
                  fill="#d1d5db"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Current"
                  dataKey="current"
                  stroke="#0d9488"
                  fill="#0d9488"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-gray-500">First Session</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span className="text-gray-500">Current</span>
            </div>
          </div>
        </div>

        {/* Line Chart - Progress Over Time */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Active Listening Trend</h2>
          <p className="text-sm text-gray-500 mb-4">Your progress over 5 months</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#6b7280' }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: '#6b7280' }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#0d9488"
                  strokeWidth={3}
                  dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center mt-4">
            <span className="text-2xl font-bold text-green-600">+25%</span>
            <span className="text-sm text-gray-500 ml-2">improvement since start</span>
          </div>
        </div>

        {/* Practice Calendar */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Practice Calendar</h2>
          <p className="text-sm text-gray-500 mb-4">Your activity this month</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
            {practiceCalendar.map((week, weekIdx) => (
              <div key={weekIdx} className="flex justify-between gap-1">
                {week.map((practiced, dayIdx) => (
                  <div
                    key={dayIdx}
                    className={`w-8 h-8 rounded-lg ${
                      practiced ? 'bg-teal-500' : 'bg-gray-100'
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">This month</span>
            <span className="text-lg font-semibold text-gray-900">12 sessions</span>
          </div>
        </div>
      </div>

      {/* ICF Certification Progress */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Path to PCC Certification</h2>
        <div className="space-y-4">
          {skillDetails.map((skill) => (
            <div key={skill.name} className="flex items-center gap-4">
              <div className="w-40 text-sm font-medium text-gray-700">{skill.name}</div>
              <div className="flex-1 relative">
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-full transition-all"
                    style={{ width: `${skill.score}%` }}
                  />
                </div>
                {/* ACC marker */}
                <div
                  className="absolute top-0 w-0.5 h-4 bg-green-500"
                  style={{ left: `${skill.acc}%` }}
                />
                {/* PCC marker */}
                <div
                  className="absolute top-0 w-0.5 h-4 bg-gray-900"
                  style={{ left: `${skill.pcc}%` }}
                />
              </div>
              <div className="w-16 text-right">
                <span className="text-lg font-semibold text-gray-900">{skill.score}%</span>
              </div>
              <div className="w-24 text-right">
                {skill.score >= skill.pcc ? (
                  <span className="text-sm text-teal-600 font-medium">PCC Level ✓</span>
                ) : skill.score >= skill.acc ? (
                  <span className="text-sm text-green-600 font-medium">ACC Level ✓</span>
                ) : (
                  <span className="text-sm text-gray-400">In Progress</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-100 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-500">ACC Standard (60%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
            <span className="text-gray-500">PCC Standard (80%)</span>
          </div>
        </div>
      </div>

      {/* Skill Deep Dive CTA */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1">Focus Area: Powerful Questions</h3>
            <p className="text-gray-400">Your weakest skill is 15% below PCC standard. Practice focused exercises to improve.</p>
          </div>
          <button
            onClick={() => navigate('/practice')}
            className="flex items-center gap-2 px-6 py-3 bg-white text-teal-600 font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            Start Focused Practice
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
