import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Globe,
  Video,
  Users,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';
import { getCoachById } from '../data/coaches';

export default function CoachProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const coach = getCoachById(id || '');

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentWeekStart, setCurrentWeekStart] = useState(() => {
    const today = new Date();
    return new Date(today.setDate(today.getDate() - today.getDay() + 1)); // Monday
  });
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    reason: ''
  });

  if (!coach) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Coach not found</h2>
          <button
            onClick={() => navigate('/coaches')}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            Back to directory
          </button>
        </div>
      </div>
    );
  }

  // Generate week dates
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentWeekStart);
    date.setDate(currentWeekStart.getDate() + i);
    return date;
  });

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const getAvailableTimesForDate = (dateStr: string) => {
    const slot = coach.availableSlots.find(s => s.date === dateStr);
    return slot?.times || [];
  };

  const goToPreviousWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() - 7);
    setCurrentWeekStart(newStart);
  };

  const goToNextWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() + 7);
    setCurrentWeekStart(newStart);
  };

  const handleBookSession = () => {
    setShowBookingModal(true);
  };

  const confirmBooking = () => {
    // In a real app, this would send to backend
    navigate('/booking-confirmation', {
      state: {
        coach: {
          id: coach.id,
          name: coach.name,
          title: coach.title,
          avatar: coach.avatar,
          pricePerSession: coach.pricePerSession,
          sessionDuration: coach.sessionDuration
        },
        date: selectedDate,
        time: selectedTime,
        client: clientInfo
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/coaches')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div
                onClick={() => navigate('/')}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-gray-900">CoachSpace</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/login')}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Log in
              </button>
              <button
                onClick={() => navigate('/coach/register')}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Join as Coach
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex gap-6">
                <img
                  src={coach.avatar}
                  alt={coach.name}
                  className="w-32 h-32 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900">{coach.name}</h1>
                  <p className="text-gray-600 text-lg">{coach.title}</p>
                  <p className="text-teal-600 mt-1">{coach.tagline}</p>

                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold text-gray-900">{coach.rating}</span>
                      <span>({coach.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {coach.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {coach.yearsExperience} years experience
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      {coach.languages.join(', ')}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {coach.certifications.map(cert => (
                      <span
                        key={cert}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full"
                      >
                        <Award className="w-3 h-3" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {coach.specialties.map(specialty => (
                  <span
                    key={specialty}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
              <div className="prose prose-gray max-w-none">
                {coach.bio.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-600 mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Coaching Approach */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Coaching Approach</h2>
              <div className="prose prose-gray max-w-none">
                {coach.approach.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-600 mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Session Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Session Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{coach.sessionDuration} minutes</div>
                    <div className="text-sm text-gray-500">Session length</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Video className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {coach.sessionTypes.includes('online') && coach.sessionTypes.includes('in-person')
                        ? 'Online & In-Person'
                        : coach.sessionTypes.includes('online')
                        ? 'Online Only'
                        : 'In-Person Only'}
                    </div>
                    <div className="text-sm text-gray-500">Session format</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Reviews ({coach.reviewCount})
                </h2>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-xl font-bold text-gray-900">{coach.rating}</span>
                </div>
              </div>

              <div className="space-y-6">
                {coach.reviews.map(review => (
                  <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{review.clientName}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                      </div>
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
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                    <button className="flex items-center gap-2 mt-3 text-sm text-gray-500 hover:text-gray-700">
                      <ThumbsUp className="w-4 h-4" />
                      Helpful ({review.helpful})
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900">${coach.pricePerSession}</div>
                  <div className="text-gray-500">per {coach.sessionDuration} min session</div>
                </div>
              </div>

              {/* Calendar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Select a Date</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={goToPreviousWeek}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={goToNextWeek}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <div key={day} className="text-center text-xs text-gray-500 py-1">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {weekDates.map(date => {
                    const dateStr = formatDate(date);
                    const isToday = formatDate(new Date()) === dateStr;
                    const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
                    const hasSlots = getAvailableTimesForDate(dateStr).length > 0;
                    const isSelected = selectedDate === dateStr;

                    return (
                      <button
                        key={dateStr}
                        onClick={() => {
                          if (!isPast && hasSlots) {
                            setSelectedDate(dateStr);
                            setSelectedTime(null);
                          }
                        }}
                        disabled={isPast || !hasSlots}
                        className={`
                          aspect-square rounded-lg text-sm font-medium transition-colors
                          ${isPast || !hasSlots
                            ? 'text-gray-300 cursor-not-allowed'
                            : isSelected
                            ? 'bg-teal-600 text-white'
                            : 'hover:bg-teal-50 text-gray-900'
                          }
                          ${isToday && !isSelected ? 'ring-2 ring-teal-600 ring-inset' : ''}
                        `}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Select a Time</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {getAvailableTimesForDate(selectedDate).map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          py-2 px-3 rounded-lg text-sm font-medium transition-colors
                          ${selectedTime === time
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Book Button */}
              <button
                onClick={handleBookSession}
                disabled={!selectedDate || !selectedTime}
                className={`
                  w-full py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2
                  ${selectedDate && selectedTime
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                <Calendar className="w-5 h-5" />
                Book Session
              </button>

              {/* Quick Info */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-teal-600" />
                  Free cancellation up to 24 hours before
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MessageCircle className="w-4 h-4 text-teal-600" />
                  Message coach before booking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Complete Your Booking</h2>

            {/* Session Summary */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-6">
              <img
                src={coach.avatar}
                alt={coach.name}
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{coach.name}</div>
                <div className="text-sm text-gray-600">
                  {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                  })} at {selectedTime}
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-900">${coach.pricePerSession}</div>
                <div className="text-xs text-gray-500">{coach.sessionDuration} min</div>
              </div>
            </div>

            {/* Client Information Form */}
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold text-gray-900">Your Information</h3>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Full Name *</label>
                <input
                  type="text"
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Email Address *</label>
                <input
                  type="email"
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Phone Number (optional)</label>
                <input
                  type="tel"
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">What would you like to work on? *</label>
                <textarea
                  value={clientInfo.reason}
                  onChange={(e) => setClientInfo({ ...clientInfo, reason: e.target.value })}
                  placeholder="Briefly describe what you'd like to focus on in this coaching session..."
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>
            </div>

            {/* Session Details */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium text-gray-900">
                    {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium text-gray-900">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium text-gray-900">{coach.sessionDuration} minutes</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-900 font-semibold">Total</span>
                  <span className="font-bold text-gray-900">${coach.pricePerSession}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                disabled={!clientInfo.name || !clientInfo.email || !clientInfo.reason}
                className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
                  clientInfo.name && clientInfo.email && clientInfo.reason
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
