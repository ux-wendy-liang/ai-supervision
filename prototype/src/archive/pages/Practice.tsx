import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, Heart, Users, Brain, Clock, Zap, MessageCircle, ChevronRight } from 'lucide-react';

const personas = [
  {
    id: 1,
    name: 'Li Wei',
    title: 'Career Change Anxiety',
    scenario: '"I want to change jobs but I\'m afraid of failure"',
    icon: Briefcase,
    color: 'indigo',
    difficulty: 'Beginner',
    duration: '15-20 min',
    tags: ['Career', 'Fear', 'Decision Making'],
  },
  {
    id: 2,
    name: 'Zhang Min',
    title: 'Leadership Challenge',
    scenario: '"My team doesn\'t listen to me"',
    icon: Users,
    color: 'purple',
    difficulty: 'Intermediate',
    duration: '20-25 min',
    tags: ['Leadership', 'Communication', 'Conflict'],
  },
  {
    id: 3,
    name: 'Wang Fang',
    title: 'Work-Life Balance',
    scenario: '"I\'m too busy, no time for family"',
    icon: Heart,
    color: 'pink',
    difficulty: 'Beginner',
    duration: '15-20 min',
    tags: ['Balance', 'Priorities', 'Stress'],
  },
  {
    id: 4,
    name: 'Chen Hao',
    title: 'Self-Confidence',
    scenario: '"I always feel I\'m not good enough"',
    icon: Brain,
    color: 'amber',
    difficulty: 'Intermediate',
    duration: '20-25 min',
    tags: ['Self-esteem', 'Imposter Syndrome', 'Growth'],
  },
  {
    id: 5,
    name: 'Liu Yan',
    title: 'Procrastination',
    scenario: '"I always wait until the last minute"',
    icon: Clock,
    color: 'green',
    difficulty: 'Beginner',
    duration: '15-20 min',
    tags: ['Habits', 'Motivation', 'Time Management'],
  },
  {
    id: 6,
    name: 'Zhao Qiang',
    title: 'Burnout & Stress',
    scenario: '"I feel like I\'m about to collapse"',
    icon: Zap,
    color: 'red',
    difficulty: 'Advanced',
    duration: '25-30 min',
    tags: ['Stress', 'Mental Health', 'Recovery'],
  },
];

const colorMap: Record<string, { bg: string; text: string; light: string }> = {
  indigo: { bg: 'bg-gray-800', text: 'text-gray-700', light: 'bg-gray-50' },
  purple: { bg: 'bg-gray-700', text: 'text-gray-600', light: 'bg-gray-50' },
  pink: { bg: 'bg-pink-500', text: 'text-pink-600', light: 'bg-pink-50' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600', light: 'bg-amber-50' },
  green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-50' },
  red: { bg: 'bg-red-500', text: 'text-red-600', light: 'bg-red-50' },
};

export default function Practice() {
  const navigate = useNavigate();
  const [selectedPersona, setSelectedPersona] = useState<number | null>(null);

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
          <h1 className="text-2xl font-bold text-gray-900">Simulate Practice</h1>
          <p className="text-gray-600">Choose a client persona to practice with</p>
        </div>
      </div>

      {/* Persona Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {personas.map((persona) => {
          const colors = colorMap[persona.color];
          const isSelected = selectedPersona === persona.id;

          return (
            <div
              key={persona.id}
              onClick={() => setSelectedPersona(persona.id)}
              className={`bg-white rounded-xl border-2 p-6 cursor-pointer transition-all ${
                isSelected
                  ? 'border-gray-900 shadow-lg shadow-gray-500/10'
                  : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center`}>
                  <persona.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{persona.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      persona.difficulty === 'Beginner'
                        ? 'bg-green-100 text-green-700'
                        : persona.difficulty === 'Intermediate'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {persona.difficulty}
                    </span>
                  </div>
                  <p className={`text-sm ${colors.text} font-medium`}>{persona.title}</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">{persona.scenario}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {persona.duration}
                </span>
                <div className="flex gap-2">
                  {persona.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className={`px-2 py-0.5 ${colors.light} ${colors.text} rounded text-xs`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Settings Panel */}
      {selectedPersona && (
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Practice Settings</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Real-time Feedback */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="font-medium text-gray-900">Real-time Tips</div>
                  <div className="text-sm text-gray-500">Get hints during conversation</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
              </label>
            </div>

            {/* Client Personality */}
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-500 mb-2">Client Openness</div>
              <select className="w-full p-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-500">
                <option>Talkative</option>
                <option>Moderate</option>
                <option>Reserved</option>
              </select>
            </div>

            {/* Emotional State */}
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-500 mb-2">Emotional State</div>
              <select className="w-full p-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-500">
                <option>Calm</option>
                <option>Anxious</option>
                <option>Frustrated</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={() => navigate('/practice/session')}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-gray-500/30 transition-all"
            >
              Start Practice
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
