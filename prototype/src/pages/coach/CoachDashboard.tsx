import { useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  Video
} from 'lucide-react';

// Mock data for dashboard
const upcomingBookings = [
  {
    id: '1',
    clientName: 'Michael Thompson',
    date: '2026-01-27',
    time: '10:00',
    duration: 60,
    topic: 'Career transition discussion'
  },
  {
    id: '2',
    clientName: 'Jennifer Lee',
    date: '2026-01-27',
    time: '14:00',
    duration: 60,
    topic: 'Leadership development'
  },
  {
    id: '3',
    clientName: 'David Kim',
    date: '2026-01-28',
    time: '09:00',
    duration: 60,
    topic: 'Work-life balance'
  }
];

const recentReviews = [
  {
    id: '1',
    clientName: 'Amy R.',
    rating: 5,
    comment: 'Amazing session! Sarah helped me gain so much clarity.',
    date: '2026-01-24'
  },
  {
    id: '2',
    clientName: 'Chris P.',
    rating: 5,
    comment: 'Great questions that made me think deeply.',
    date: '2026-01-22'
  }
];

export default function CoachDashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      label: 'This Month',
      value: '$2,450',
      subtext: '12 sessions',
      icon: DollarSign,
      color: 'bg-green-100 text-green-600'
    },
    {
      label: 'Upcoming',
      value: '8',
      subtext: 'sessions this week',
      icon: Calendar,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      label: 'Clients',
      value: '24',
      subtext: 'active clients',
      icon: Users,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      label: 'Rating',
      value: '4.9',
      subtext: '47 reviews',
      icon: Star,
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sarah</h1>
        <p className="text-gray-600">Here's what's happening with your coaching practice.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.subtext}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Upcoming Sessions */}
        <div className="col-span-2 bg-white rounded-xl border border-gray-100">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Upcoming Sessions</h2>
            <button
              onClick={() => navigate('/coach/bookings')}
              className="text-sm text-teal-600 hover:text-teal-700 flex items-center gap-1"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="divide-y divide-gray-100">
            {upcomingBookings.map((booking) => (
              <div key={booking.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{booking.clientName}</div>
                      <div className="text-sm text-gray-500">{booking.topic}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-gray-900">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      {new Date(booking.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4 text-gray-400" />
                      {booking.time} ({booking.duration} min)
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white rounded-xl border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Recent Reviews</h2>
          </div>
          <div className="p-4 space-y-4">
            {recentReviews.map((review) => (
              <div key={review.id} className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">"{review.comment}"</p>
                <div className="text-sm font-medium text-gray-900">{review.clientName}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Supervision Promo */}
      <div className="mt-8 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Improve Your Coaching with AI Supervision</h3>
            <p className="text-teal-100 max-w-xl">
              Get instant feedback on your sessions, track your ICF competency scores, and accelerate your growth as a coach.
            </p>
          </div>
          <button
            onClick={() => navigate('/coach/supervision')}
            className="px-6 py-3 bg-white text-teal-600 rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Try AI Supervision
          </button>
        </div>
      </div>
    </div>
  );
}
