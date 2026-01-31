import { useState } from 'react';
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
  User,
  Edit3,
  Lock,
  Eye,
  EyeOff,
  Check
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

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

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

        {/* Secondary Actions */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <button
            onClick={() => navigate('/my-bookings')}
            className="flex items-center justify-center gap-2 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <User className="w-5 h-5" />
            My Bookings
          </button>
          <button
            onClick={() => navigate(`/coaches/${coach.id}`)}
            className="flex items-center justify-center gap-2 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <Edit3 className="w-5 h-5" />
            Reschedule
          </button>
        </div>

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

        {/* Create Account Section */}
        {!accountCreated ? (
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100 mt-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Create your account</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Set a password to easily manage your bookings, reschedule sessions, and book again faster.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <div className="px-4 py-3 bg-white/60 border border-gray-200 rounded-xl text-gray-500">
                  {client?.email || 'your@email.com'}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Create Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    if (password.length >= 8) {
                      setIsCreating(true);
                      setTimeout(() => {
                        setAccountCreated(true);
                        setIsCreating(false);
                      }, 1000);
                    }
                  }}
                  disabled={password.length < 8 || isCreating}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2
                    ${password.length >= 8
                      ? 'bg-teal-600 text-white hover:bg-teal-700'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  {isCreating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Creating...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </button>
                <button
                  onClick={() => setAccountCreated(true)}
                  className="px-4 py-3 text-gray-500 hover:text-gray-700 font-medium"
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {password ? 'Account created!' : 'No problem!'}
                </h3>
                <p className="text-sm text-gray-600">
                  {password
                    ? `You can now log in with ${client?.email || 'your email'} anytime.`
                    : 'You can create an account later from the login page.'
                  }
                </p>
              </div>
            </div>
          </div>
        )}

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
