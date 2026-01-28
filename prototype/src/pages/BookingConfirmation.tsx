import { useLocation, useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Calendar,
  Clock,
  Video,
  Mail,
  Sparkles,
  Download,
  ArrowRight,
  Bell,
  User
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
  client?: {
    name: string;
    email: string;
  };
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
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No booking found</h2>
          <p className="text-gray-600 mb-4">It looks like you haven't made a booking yet.</p>
          <button
            onClick={() => navigate('/coaches')}
            className="px-6 py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors"
          >
            Find a Coach
          </button>
        </div>
      </div>
    );
  }

  const { coach, date, time, client } = booking;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Generate a fake booking ID
  const bookingId = `BK-${Date.now().toString(36).toUpperCase()}`;

  // Generate .ics calendar file
  const generateCalendarFile = () => {
    const startDate = new Date(`${date}T${time.replace(':', '')}00`);
    const endDate = new Date(startDate.getTime() + coach.sessionDuration * 60000);

    const formatICSDate = (d: Date) => {
      return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CoachSpace//Booking//EN
BEGIN:VEVENT
UID:${bookingId}@coachspace.com
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:Coaching Session with ${coach.name}
DESCRIPTION:Your coaching session with ${coach.name}. Join via Zoom link in your email.
LOCATION:Online (Zoom)
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `coaching-session-${bookingId}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-once">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">You're All Set!</h1>
          <p className="text-gray-600">
            Your session with {coach.name} is confirmed.
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6">
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
              <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Date</div>
                <div className="font-medium text-gray-900">{formattedDate}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Time</div>
                <div className="font-medium text-gray-900">{time} ({coach.sessionDuration} minutes)</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                <Video className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Format</div>
                <div className="font-medium text-gray-900">Online (Zoom)</div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Booking ID</span>
                <span className="font-mono text-gray-900">{bookingId}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-gray-500">Total Paid</span>
                <span className="font-bold text-gray-900 text-lg">${coach.pricePerSession}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Action - Add to Calendar */}
        <button
          onClick={generateCalendarFile}
          className="w-full flex items-center justify-center gap-3 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/20 mb-4"
        >
          <Download className="w-5 h-5" />
          Add to Calendar
        </button>

        {/* Secondary Action - View My Bookings */}
        <button
          onClick={() => navigate('/my-bookings')}
          className="w-full flex items-center justify-center gap-3 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors mb-8"
        >
          <User className="w-5 h-5" />
          View My Bookings
        </button>

        {/* What's Next */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">What Happens Next?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Check your inbox</div>
                <p className="text-sm text-gray-600">
                  Confirmation email sent to {client?.email || 'your email'} with Zoom link
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <Bell className="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Get a reminder</div>
                <p className="text-sm text-gray-600">
                  We'll send you a reminder 24 hours and 1 hour before your session
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <Video className="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Join your session</div>
                <p className="text-sm text-gray-600">
                  Click the Zoom link 5 minutes before your scheduled time
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Browse More */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/coaches')}
            className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700"
          >
            Explore more coaches
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      <style>{`
        @keyframes bounce-once {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-once {
          animation: bounce-once 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
