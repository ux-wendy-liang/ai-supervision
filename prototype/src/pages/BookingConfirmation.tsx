import { useLocation, useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Calendar,
  Clock,
  Video,
  Mail,
  ArrowRight,
  Sparkles,
  Download,
  Share2
} from 'lucide-react';

interface BookingState {
  coach: {
    id: string;
    name: string;
    title: string;
    avatar: string;
    pricePerSession: number;
    sessionDuration: number;
  };
  date: string;
  time: string;
}

export default function BookingConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state as BookingState | null;

  // If no booking data, redirect to coaches
  if (!booking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No booking found</h2>
          <button
            onClick={() => navigate('/coaches')}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            Find a coach
          </button>
        </div>
      </div>
    );
  }

  const { coach, date, time } = booking;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Generate a fake booking ID
  const bookingId = `BK-${Date.now().toString(36).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">CoachSpace</span>
        </div>
      </header>

      <main className="px-6 py-12 max-w-2xl mx-auto">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600">
            Your session with {coach.name} has been scheduled.
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          {/* Coach Header */}
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-6">
            <div className="flex items-center gap-4">
              <img
                src={coach.avatar}
                alt={coach.name}
                className="w-16 h-16 rounded-xl object-cover border-2 border-white/20"
              />
              <div className="text-white">
                <div className="font-semibold text-lg">{coach.name}</div>
                <div className="text-teal-100">{coach.title}</div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Date</div>
                <div className="font-medium text-gray-900">{formattedDate}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Time</div>
                <div className="font-medium text-gray-900">{time} ({coach.sessionDuration} minutes)</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <Video className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Format</div>
                <div className="font-medium text-gray-900">Online (Zoom)</div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Booking ID</span>
                <span className="font-mono text-gray-900">{bookingId}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-gray-500">Total</span>
                <span className="font-bold text-gray-900">${coach.pricePerSession}</span>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">What's Next?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-3 h-3 text-teal-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Check your email</div>
                <p className="text-sm text-gray-600">
                  We've sent a confirmation email with meeting details and a calendar invite.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Video className="w-3 h-3 text-teal-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Join the session</div>
                <p className="text-sm text-gray-600">
                  Click the Zoom link in your email 5 minutes before the scheduled time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-3 h-3 text-teal-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Prepare for your session</div>
                <p className="text-sm text-gray-600">
                  Think about what you'd like to discuss. Your coach may send questions beforehand.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mb-8">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5" />
            Add to Calendar
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Share2 className="w-5 h-5" />
            Share
          </button>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => navigate('/coaches')}
            className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700"
          >
            Browse more coaches
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
