import { useState } from 'react';
import {
  Calendar,
  Clock,
  Users,
  Video,
  MessageSquare,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Filter
} from 'lucide-react';

// Mock bookings data
const allBookings = [
  {
    id: '1',
    clientName: 'Michael Thompson',
    clientEmail: 'michael.t@email.com',
    date: '2026-01-27',
    time: '10:00',
    duration: 60,
    status: 'confirmed',
    topic: 'Career transition discussion',
    notes: 'First session - wants to explore moving into product management'
  },
  {
    id: '2',
    clientName: 'Jennifer Lee',
    clientEmail: 'jennifer.lee@email.com',
    date: '2026-01-27',
    time: '14:00',
    duration: 60,
    status: 'confirmed',
    topic: 'Leadership development',
    notes: 'Follow-up session - working on delegation skills'
  },
  {
    id: '3',
    clientName: 'David Kim',
    clientEmail: 'david.kim@email.com',
    date: '2026-01-28',
    time: '09:00',
    duration: 60,
    status: 'pending',
    topic: 'Work-life balance',
    notes: 'New client - referred by Jennifer'
  },
  {
    id: '4',
    clientName: 'Sarah Wilson',
    clientEmail: 'sarah.w@email.com',
    date: '2026-01-28',
    time: '11:00',
    duration: 60,
    status: 'confirmed',
    topic: 'Executive presence',
    notes: 'Preparing for board presentation'
  },
  {
    id: '5',
    clientName: 'Robert Chen',
    clientEmail: 'robert.c@email.com',
    date: '2026-01-29',
    time: '15:00',
    duration: 60,
    status: 'cancelled',
    topic: 'Team management',
    notes: 'Rescheduled to next week'
  }
];

type BookingStatus = 'all' | 'confirmed' | 'pending' | 'cancelled';

export default function CoachBookings() {
  const [statusFilter, setStatusFilter] = useState<BookingStatus>('all');
  const [selectedBooking, setSelectedBooking] = useState<typeof allBookings[0] | null>(null);

  const filteredBookings = allBookings.filter(booking => {
    if (statusFilter === 'all') return true;
    return booking.status === statusFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bookings</h1>
          <p className="text-gray-600">Manage your upcoming and past sessions</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-1">
            <button className="p-2 hover:bg-gray-100 rounded">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <span className="px-4 font-medium text-gray-900">Jan 27 - Feb 2, 2026</span>
            <button className="p-2 hover:bg-gray-100 rounded">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">Status:</span>
        </div>
        {(['all', 'confirmed', 'pending', 'cancelled'] as BookingStatus[]).map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              statusFilter === status
                ? 'bg-teal-100 text-teal-700'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Bookings List */}
        <div className="col-span-2 bg-white rounded-xl border border-gray-100">
          <div className="divide-y divide-gray-100">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                onClick={() => setSelectedBooking(booking)}
                className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                  selectedBooking?.id === booking.id ? 'bg-teal-50' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{booking.clientName}</div>
                      <div className="text-sm text-gray-500">{booking.topic}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
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
                        {booking.time}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {filteredBookings.length === 0 && (
              <div className="p-12 text-center text-gray-500">
                No bookings found with the selected filter.
              </div>
            )}
          </div>
        </div>

        {/* Booking Details */}
        <div className="bg-white rounded-xl border border-gray-100">
          {selectedBooking ? (
            <div>
              <div className="p-6 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">Booking Details</h2>
              </div>
              <div className="p-6 space-y-6">
                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                    <Users className="w-7 h-7 text-gray-500" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{selectedBooking.clientName}</div>
                    <div className="text-sm text-gray-500">{selectedBooking.clientEmail}</div>
                  </div>
                </div>

                {/* Session Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">
                      {new Date(selectedBooking.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{selectedBooking.time} ({selectedBooking.duration} minutes)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">Zoom Meeting</span>
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <div className="text-sm text-gray-500 mb-1">Topic</div>
                  <div className="text-gray-900">{selectedBooking.topic}</div>
                </div>

                {/* Notes */}
                <div>
                  <div className="text-sm text-gray-500 mb-1">Notes</div>
                  <div className="text-gray-900 text-sm bg-gray-50 p-3 rounded-lg">
                    {selectedBooking.notes}
                  </div>
                </div>

                {/* Actions */}
                {selectedBooking.status === 'confirmed' && (
                  <div className="space-y-3 pt-4">
                    <button className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
                      <Video className="w-5 h-5" />
                      Join Session
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </button>
                      <button className="py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {selectedBooking.status === 'pending' && (
                  <div className="space-y-3 pt-4">
                    <button className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
                      <Check className="w-5 h-5" />
                      Confirm Booking
                    </button>
                    <button className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                      <X className="w-4 h-4" />
                      Decline
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Select a booking to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
