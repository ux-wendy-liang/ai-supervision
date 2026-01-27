import { useState } from 'react';
import { Clock, Plus, Trash2, Check } from 'lucide-react';

interface TimeSlot {
  start: string;
  end: string;
}

interface DaySchedule {
  enabled: boolean;
  slots: TimeSlot[];
}

type WeekSchedule = {
  [key: string]: DaySchedule;
};

const initialSchedule: WeekSchedule = {
  monday: { enabled: true, slots: [{ start: '09:00', end: '12:00' }, { start: '14:00', end: '18:00' }] },
  tuesday: { enabled: true, slots: [{ start: '09:00', end: '12:00' }, { start: '14:00', end: '18:00' }] },
  wednesday: { enabled: true, slots: [{ start: '09:00', end: '12:00' }, { start: '14:00', end: '18:00' }] },
  thursday: { enabled: true, slots: [{ start: '09:00', end: '12:00' }, { start: '14:00', end: '18:00' }] },
  friday: { enabled: true, slots: [{ start: '09:00', end: '12:00' }, { start: '14:00', end: '17:00' }] },
  saturday: { enabled: false, slots: [] },
  sunday: { enabled: false, slots: [] }
};

const dayNames = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export default function CoachAvailability() {
  const [schedule, setSchedule] = useState<WeekSchedule>(initialSchedule);
  const [sessionDuration, setSessionDuration] = useState(60);
  const [bufferTime, setBufferTime] = useState(15);
  const [advanceBooking, setAdvanceBooking] = useState(24);
  const [saved, setSaved] = useState(false);

  const toggleDay = (day: string) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled: !prev[day].enabled,
        slots: !prev[day].enabled ? [{ start: '09:00', end: '17:00' }] : prev[day].slots
      }
    }));
  };

  const addSlot = (day: string) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: [...prev[day].slots, { start: '09:00', end: '17:00' }]
      }
    }));
  };

  const removeSlot = (day: string, index: number) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: prev[day].slots.filter((_, i) => i !== index)
      }
    }));
  };

  const updateSlot = (day: string, index: number, field: 'start' | 'end', value: string) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: prev[day].slots.map((slot, i) =>
          i === index ? { ...slot, [field]: value } : slot
        )
      }
    }));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Availability</h1>
        <p className="text-gray-600">Set your weekly schedule and booking preferences</p>
      </div>

      {/* Session Settings */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Session Settings</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Session Duration</label>
            <select
              value={sessionDuration}
              onChange={(e) => setSessionDuration(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value={30}>30 minutes</option>
              <option value={45}>45 minutes</option>
              <option value={60}>60 minutes</option>
              <option value={90}>90 minutes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Buffer Between Sessions</label>
            <select
              value={bufferTime}
              onChange={(e) => setBufferTime(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value={0}>No buffer</option>
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>60 minutes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Minimum Advance Booking</label>
            <select
              value={advanceBooking}
              onChange={(e) => setAdvanceBooking(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value={2}>2 hours</option>
              <option value={24}>24 hours</option>
              <option value={48}>48 hours</option>
              <option value={72}>72 hours</option>
            </select>
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Weekly Schedule</h2>
        <div className="space-y-4">
          {dayNames.map((day) => (
            <div key={day} className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0">
              {/* Day Toggle */}
              <div className="w-32 flex items-center gap-3">
                <button
                  onClick={() => toggleDay(day)}
                  className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                    schedule[day].enabled
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {schedule[day].enabled && <Check className="w-4 h-4" />}
                </button>
                <span className={`font-medium capitalize ${
                  schedule[day].enabled ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {day}
                </span>
              </div>

              {/* Time Slots */}
              {schedule[day].enabled ? (
                <div className="flex-1 space-y-2">
                  {schedule[day].slots.map((slot, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <input
                        type="time"
                        value={slot.start}
                        onChange={(e) => updateSlot(day, index, 'start', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <span className="text-gray-500">to</span>
                      <input
                        type="time"
                        value={slot.end}
                        onChange={(e) => updateSlot(day, index, 'end', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      {schedule[day].slots.length > 1 && (
                        <button
                          onClick={() => removeSlot(day, index)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => addSlot(day)}
                    className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700"
                  >
                    <Plus className="w-4 h-4" />
                    Add time slot
                  </button>
                </div>
              ) : (
                <div className="flex-1 text-gray-400">Unavailable</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
            saved
              ? 'bg-green-600 text-white'
              : 'bg-teal-600 text-white hover:bg-teal-700'
          }`}
        >
          {saved ? (
            <>
              <Check className="w-5 h-5" />
              Saved!
            </>
          ) : (
            'Save Changes'
          )}
        </button>
      </div>
    </div>
  );
}
