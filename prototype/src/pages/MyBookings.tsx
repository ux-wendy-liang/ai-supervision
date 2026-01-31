import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  Clock,
  Video,
  User,
  ChevronRight,
  X,
  AlertCircle,
  Check,
  MessageCircle
} from 'lucide-react';
import { getBookings, cancelBooking as cancelBookingInStore, type Booking } from '../data/bookingStore';

type TabType = 'upcoming' | 'past';

export default function MyBookings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('upcoming');
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [cancelReason, setCancelReason] = useState('');
  const [isCancelling, setIsCancelling] = useState(false);
  const [cancelSuccess, setCancelSuccess] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Load bookings from localStorage
  useEffect(() => {
    setBookings(getBookings());
  }, []);

  const upcomingBookings = bookings.filter(b => b.status === 'upcoming');
  const pastBookings = bookings.filter(b => b.status === 'completed' || b.status === 'cancelled');

  const handleCancelClick = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    if (!selectedBooking) return;

    setIsCancelling(true);
    setTimeout(() => {
      // Update localStorage
      cancelBookingInStore(selectedBooking.id);
      // Update local state
      setBookings(getBookings());

      setIsCancelling(false);
      setCancelSuccess(true);
      setTimeout(() => {
        setShowCancelModal(false);
        setCancelSuccess(false);
        setSelectedBooking(null);
        setCancelReason('');
      }, 1500);
    }, 1000);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <div
            onClick={() => navigate('/')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">CoachSpace</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/coaches')}
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Find a Coach
            </button>
            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-teal-600" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Bookings</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-2 rounded-xl font-medium transition-colors ${
              activeTab === 'upcoming'
                ? 'bg-teal-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Upcoming ({upcomingBookings.length})
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-4 py-2 rounded-xl font-medium transition-colors ${
              activeTab === 'past'
                ? 'bg-teal-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Past ({pastBookings.length})
          </button>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {activeTab === 'upcoming' && (
            <>
              {upcomingBookings.length > 0 ? (
                upcomingBookings.map(booking => (
                  <div
                    key={booking.id}
                    className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={booking.coach.avatar}
                        alt={booking.coach.name}
                        className="w-14 h-14 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{booking.coach.name}</h3>
                            <p className="text-sm text-gray-600">{booking.coach.title}</p>
                          </div>
                          <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                            Upcoming
                          </span>
                        </div>

                        <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(booking.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {booking.time} ({booking.duration} min)
                          </div>
                          <div className="flex items-center gap-1">
                            <Video className="w-4 h-4" />
                            Online
                          </div>
                        </div>

                        <p className="text-sm text-gray-500 mt-2">
                          Topic: {booking.topic}
                        </p>

                        <div className="flex items-center gap-3 mt-4">
                          <button className="px-4 py-2 bg-teal-600 text-white rounded-xl text-sm font-medium hover:bg-teal-700 transition-colors flex items-center gap-2">
                            <Video className="w-4 h-4" />
                            Join Session
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Message
                          </button>
                          <button
                            onClick={() => handleCancelClick(booking)}
                            className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl text-sm font-medium transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No upcoming sessions</h3>
                  <p className="text-gray-600 mb-6">
                    You don't have any scheduled coaching sessions yet.
                  </p>
                  <button
                    onClick={() => navigate('/coaches')}
                    className="px-6 py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors inline-flex items-center gap-2"
                  >
                    Find a Coach
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}

          {activeTab === 'past' && (
            <>
              {pastBookings.length > 0 ? (
                pastBookings.map(booking => (
                  <div
                    key={booking.id}
                    className="bg-white rounded-2xl border border-gray-200 p-6"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={booking.coach.avatar}
                        alt={booking.coach.name}
                        className="w-14 h-14 rounded-xl object-cover opacity-75"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{booking.coach.name}</h3>
                            <p className="text-sm text-gray-600">{booking.coach.title}</p>
                          </div>
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            Completed
                          </span>
                        </div>

                        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(booking.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {booking.time}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 mt-4">
                          <button
                            onClick={() => navigate(`/coaches/${booking.id}`)}
                            className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                          >
                            Book again
                          </button>
                          <span className="text-gray-300">|</span>
                          <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                            Leave a review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No past sessions</h3>
                  <p className="text-gray-600">
                    Your completed sessions will appear here.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Cancel Modal */}
      {showCancelModal && selectedBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            {cancelSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Cancelled</h3>
                <p className="text-gray-600">Your refund will be processed within 3-5 business days.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Cancel Booking?</h2>
                  <button
                    onClick={() => setShowCancelModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-xl"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl mb-6">
                  <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0" />
                  <p className="text-sm text-yellow-800">
                    Free cancellation is available up to 24 hours before the session.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedBooking.coach.avatar}
                      alt={selectedBooking.coach.name}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{selectedBooking.coach.name}</div>
                      <div className="text-sm text-gray-600">
                        {formatDate(selectedBooking.date)} at {selectedBooking.time}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for cancellation (optional)
                  </label>
                  <textarea
                    value={cancelReason}
                    onChange={(e) => setCancelReason(e.target.value)}
                    placeholder="Let us know why you're cancelling..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowCancelModal(false)}
                    className="flex-1 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Keep Booking
                  </button>
                  <button
                    onClick={confirmCancel}
                    disabled={isCancelling}
                    className="flex-1 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isCancelling ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Cancelling...
                      </>
                    ) : (
                      'Cancel Booking'
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
