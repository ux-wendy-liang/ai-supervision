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
  ThumbsUp,
  AlertCircle,
  Edit3
} from 'lucide-react';
import { getCoachById } from '../data/coaches';

type TabType = 'about' | 'reviews' | 'availability';

export default function CoachProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const coach = getCoachById(id || '');

  const [activeTab, setActiveTab] = useState<TabType>('about');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(() => new Date());
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    reason: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    reason: ''
  });

  if (!coach) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Coach not found</h2>
          <p className="text-gray-600 mb-4">This coach profile doesn't exist or has been removed.</p>
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

  // Generate calendar days for current month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];

    // Add empty days for alignment
    const startPadding = (firstDay.getDay() + 6) % 7; // Monday = 0
    for (let i = 0; i < startPadding; i++) {
      days.push(null);
    }

    // Add actual days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const calendarDays = getDaysInMonth(currentMonth);
  const formatDate = (date: Date) => date.toISOString().split('T')[0];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getAvailableTimesForDate = (dateStr: string) => {
    const slot = coach.availableSlots.find(s => s.date === dateStr);
    return slot?.times || [];
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', reason: '' };
    let isValid = true;

    if (!clientInfo.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!clientInfo.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(clientInfo.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!clientInfo.reason.trim()) {
      newErrors.reason = 'Please tell us what you want to discuss';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleBookSession = () => {
    setShowBookingModal(true);
  };

  const confirmBooking = () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
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
    }, 1000);
  };

  const editDateTime = () => {
    setShowBookingModal(false);
    setActiveTab('availability');
    // Scroll to calendar
    document.getElementById('availability-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const tabs = [
    { id: 'about' as const, label: 'About' },
    { id: 'reviews' as const, label: `Reviews (${coach.reviewCount})` },
    { id: 'availability' as const, label: 'Availability' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/coaches')}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div
                onClick={() => navigate('/')}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
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
                className="px-4 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors font-medium"
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
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex gap-6">
                <img
                  src={coach.avatar}
                  alt={coach.name}
                  className="w-28 h-28 rounded-2xl object-cover"
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
                      {coach.yearsExperience} years
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

            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex border-b border-gray-100">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-4 text-center font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-teal-600 border-b-2 border-teal-600 bg-teal-50/50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* About Tab */}
                {activeTab === 'about' && (
                  <div className="space-y-8">
                    {/* Specialties */}
                    <div>
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
                    <div>
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
                    <div>
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
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-4">Session Details</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                            <Clock className="w-5 h-5 text-teal-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{coach.sessionDuration} minutes</div>
                            <div className="text-sm text-gray-500">Session length</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
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
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl font-bold text-gray-900">{coach.rating}</div>
                        <div>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map(i => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i <= Math.round(coach.rating)
                                    ? 'text-yellow-500 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <div className="text-sm text-gray-500">{coach.reviewCount} reviews</div>
                        </div>
                      </div>
                    </div>

                    {coach.reviews.length > 0 ? (
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
                    ) : (
                      <div className="text-center py-12">
                        <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
                        <p className="text-gray-600">Be the first to book a session with {coach.name}!</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Availability Tab */}
                {activeTab === 'availability' && (
                  <div id="availability-section">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </h2>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={goToPreviousMonth}
                          className="p-2 hover:bg-gray-100 rounded-xl"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                          onClick={goToNextMonth}
                          className="p-2 hover:bg-gray-100 rounded-xl"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1 mb-6">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                        <div key={day} className="text-center text-sm text-gray-500 py-2 font-medium">
                          {day}
                        </div>
                      ))}
                      {calendarDays.map((date, i) => {
                        if (!date) {
                          return <div key={`empty-${i}`} className="aspect-square" />;
                        }
                        const dateStr = formatDate(date);
                        const isToday = formatDate(new Date()) === dateStr;
                        const isPast = date < today;
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
                              aspect-square rounded-xl text-sm font-medium transition-all flex items-center justify-center
                              ${isPast || !hasSlots
                                ? 'text-gray-300 cursor-not-allowed'
                                : isSelected
                                ? 'bg-teal-600 text-white shadow-md'
                                : 'hover:bg-teal-50 text-gray-900'
                              }
                              ${isToday && !isSelected ? 'ring-2 ring-teal-600 ring-inset' : ''}
                              ${hasSlots && !isPast && !isSelected ? 'bg-teal-50/50' : ''}
                            `}
                          >
                            {date.getDate()}
                          </button>
                        );
                      })}
                    </div>

                    {/* Time Slots */}
                    {selectedDate && (
                      <div>
                        <h3 className="font-medium text-gray-900 mb-3">
                          Available times on {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                        </h3>
                        <div className="grid grid-cols-4 gap-2">
                          {getAvailableTimesForDate(selectedDate).map(time => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`
                                py-3 px-4 rounded-xl text-sm font-medium transition-all
                                ${selectedTime === time
                                  ? 'bg-teal-600 text-white shadow-md'
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

                    {!selectedDate && (
                      <div className="text-center py-8 text-gray-500">
                        <Calendar className="w-10 h-10 mx-auto mb-3 text-gray-300" />
                        Select a date to see available times
                      </div>
                    )}
                  </div>
                )}
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

              {/* Selected DateTime Summary */}
              {selectedDate && selectedTime && (
                <div className="bg-teal-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">Selected</div>
                      <div className="font-medium text-gray-900">
                        {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} at {selectedTime}
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTab('availability')}
                      className="text-teal-600 hover:text-teal-700"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Book Button */}
              <button
                onClick={handleBookSession}
                disabled={!selectedDate || !selectedTime}
                className={`
                  w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2
                  ${selectedDate && selectedTime
                    ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-500/20'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                <Calendar className="w-5 h-5" />
                {selectedDate && selectedTime ? 'Book This Session' : 'Select Date & Time'}
              </button>

              {!selectedDate && (
                <button
                  onClick={() => setActiveTab('availability')}
                  className="w-full mt-3 text-teal-600 hover:text-teal-700 text-sm font-medium"
                >
                  View availability calendar
                </button>
              )}

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

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Complete Your Booking</h2>

            {/* Session Summary with Edit Option */}
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
              <button
                onClick={editDateTime}
                className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                title="Change date/time"
              >
                <Edit3 className="w-5 h-5" />
              </button>
            </div>

            {/* Client Information Form */}
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold text-gray-900">Your Information</h3>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={clientInfo.name}
                  onChange={(e) => {
                    setClientInfo({ ...clientInfo, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={clientInfo.email}
                  onChange={(e) => {
                    setClientInfo({ ...clientInfo, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Phone Number (optional)</label>
                <input
                  type="tel"
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  What would you like to discuss? <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={clientInfo.reason}
                  onChange={(e) => {
                    setClientInfo({ ...clientInfo, reason: e.target.value });
                    if (errors.reason) setErrors({ ...errors, reason: '' });
                  }}
                  placeholder="Briefly describe what you'd like to focus on..."
                  rows={3}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none ${
                    errors.reason ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.reason && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.reason}
                  </p>
                )}
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Session ({coach.sessionDuration} min)</span>
                <span className="text-gray-900">${coach.pricePerSession}</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${coach.pricePerSession}</span>
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
                disabled={isLoading}
                className="flex-1 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Booking...
                  </>
                ) : (
                  'Confirm Booking'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
