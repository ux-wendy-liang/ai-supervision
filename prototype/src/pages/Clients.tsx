import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Search, Clock, TrendingUp, ChevronRight, MoreVertical } from 'lucide-react';

const clients = [
  {
    id: 1,
    name: 'Li Ming',
    sessions: 8,
    startDate: 'Oct 2025',
    lastSession: '3 days ago',
    status: 'active',
    progress: 75,
    topic: 'Leadership Development',
  },
  {
    id: 2,
    name: 'Wang Fang',
    sessions: 12,
    startDate: 'Aug 2025',
    lastSession: '2 days ago',
    status: 'active',
    progress: 82,
    topic: 'Career Transition',
  },
  {
    id: 3,
    name: 'Zhang Wei',
    sessions: 5,
    startDate: 'Nov 2025',
    lastSession: '1 week ago',
    status: 'active',
    progress: 45,
    topic: 'Work-Life Balance',
  },
  {
    id: 4,
    name: 'Chen Hao',
    sessions: 3,
    startDate: 'Dec 2025',
    lastSession: '2 weeks ago',
    status: 'paused',
    progress: 25,
    topic: 'Confidence Building',
  },
  {
    id: 5,
    name: 'Liu Yan',
    sessions: 10,
    startDate: 'Jul 2025',
    lastSession: '1 month ago',
    status: 'completed',
    progress: 100,
    topic: 'Team Communication',
  },
];

export default function Clients() {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Client Files</h1>
            <p className="text-gray-600">Track your clients' growth journey</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add Client
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search clients..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <select className="px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>All Status</option>
          <option>Active</option>
          <option>Paused</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="text-2xl font-bold text-gray-900">5</div>
          <div className="text-sm text-gray-500">Total Clients</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="text-2xl font-bold text-green-600">3</div>
          <div className="text-sm text-gray-500">Active</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="text-2xl font-bold text-gray-900">38</div>
          <div className="text-sm text-gray-500">Total Sessions</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="text-2xl font-bold text-indigo-600">65%</div>
          <div className="text-sm text-gray-500">Avg Progress</div>
        </div>
      </div>

      {/* Client List */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Client</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Topic</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Sessions</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Progress</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Status</th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Last Session</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                onClick={() => navigate(`/clients/${client.id}`)}
                className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                      {client.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{client.name}</div>
                      <div className="text-xs text-gray-500">Since {client.startDate}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">{client.topic}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-gray-700">
                    <Clock className="w-4 h-4 text-gray-400" />
                    {client.sessions}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          client.progress >= 80
                            ? 'bg-green-500'
                            : client.progress >= 50
                            ? 'bg-indigo-500'
                            : 'bg-amber-500'
                        }`}
                        style={{ width: `${client.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">{client.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      client.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : client.status === 'paused'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{client.lastSession}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
