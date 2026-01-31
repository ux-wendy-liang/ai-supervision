// Simple localStorage-based booking store for prototype

export interface Booking {
  id: string;
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
  duration: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  topic: string;
  client?: {
    name: string;
    email: string;
  };
  createdAt: string;
}

const STORAGE_KEY = 'coachspace_bookings';

export function getBookings(): Booking[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function addBooking(booking: Omit<Booking, 'id' | 'createdAt'>): Booking {
  const bookings = getBookings();
  const newBooking: Booking = {
    ...booking,
    id: `BK-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString()
  };
  bookings.unshift(newBooking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  return newBooking;
}

export function cancelBooking(id: string): void {
  const bookings = getBookings();
  const updated = bookings.map(b =>
    b.id === id ? { ...b, status: 'cancelled' as const } : b
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function getUpcomingBookings(): Booking[] {
  return getBookings().filter(b => b.status === 'upcoming');
}

export function getPastBookings(): Booking[] {
  return getBookings().filter(b => b.status === 'completed' || b.status === 'cancelled');
}
