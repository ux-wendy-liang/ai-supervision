import { useState, useRef } from 'react';
import {
  Camera,
  Check,
  Plus,
  X,
  Globe,
  DollarSign,
  Upload,
  FileText,
  Clock,
  AlertCircle,
  Shield,
  Trash2,
  User,
  Calendar
} from 'lucide-react';

// Types
type TabType = 'profile' | 'availability';

type VerificationStatus = 'pending' | 'verified' | 'rejected' | 'not_uploaded';

interface Credential {
  id: string;
  name: string;
  fileName?: string;
  uploadDate?: string;
  status: VerificationStatus;
  expiryDate?: string;
}

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

// Constants
const allSpecialties = [
  'Executive Coaching',
  'Leadership Development',
  'Career Transition',
  'Team Dynamics',
  'Work-Life Balance',
  'Communication',
  'Entrepreneurship',
  'New Managers',
  'Stress Management',
  'Personal Branding'
];

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

export default function CoachSettings() {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadingCredential, setUploadingCredential] = useState<string | null>(null);

  // Profile state
  const [credentials, setCredentials] = useState<Credential[]>([
    {
      id: '1',
      name: 'ICF PCC Certificate',
      fileName: 'ICF_PCC_Certificate.pdf',
      uploadDate: '2024-01-15',
      status: 'verified',
      expiryDate: '2027-01-15'
    },
    {
      id: '2',
      name: 'CTI CPCC Certificate',
      fileName: 'CPCC_certification.jpg',
      uploadDate: '2024-02-20',
      status: 'pending'
    },
    {
      id: '3',
      name: 'Professional Liability Insurance',
      status: 'not_uploaded'
    }
  ]);

  const [profile, setProfile] = useState({
    name: 'Sarah Chen',
    title: 'Executive Leadership Coach',
    tagline: 'Helping leaders unlock their authentic potential',
    bio: `With 8 years of experience coaching C-suite executives and emerging leaders, I specialize in helping professionals navigate complex organizational dynamics while staying true to their values.

Before becoming a coach, I spent 12 years in tech leadership roles at companies like Google and Stripe, where I led teams of 50+ engineers and experienced firsthand the challenges of leadership.`,
    approach: `My coaching approach combines deep listening, powerful questioning, and practical frameworks. I believe that every leader has the answers within them—my role is to help you access your inner wisdom and translate it into action.

I draw from ICF core competencies, adult development theory, and systems thinking to support sustainable transformation.`,
    specialties: ['Executive Coaching', 'Leadership Development', 'Career Transition', 'Team Dynamics'],
    certifications: ['ICF PCC', 'CTI CPCC'],
    languages: ['English', 'Mandarin'],
    location: 'San Francisco, CA',
    timezone: 'America/Los_Angeles',
    pricePerSession: 250,
    sessionDuration: 60,
    sessionTypes: ['online', 'in-person'] as ('online' | 'in-person')[]
  });

  // Availability state
  const [schedule, setSchedule] = useState<WeekSchedule>(initialSchedule);
  const [bufferTime, setBufferTime] = useState(15);
  const [advanceBooking, setAdvanceBooking] = useState(24);

  // Profile handlers
  const toggleSpecialty = (specialty: string) => {
    setProfile(prev => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty]
    }));
  };

  const handleFileUpload = (credentialId: string) => {
    setUploadingCredential(credentialId);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && uploadingCredential) {
      setCredentials(prev => prev.map(cred =>
        cred.id === uploadingCredential
          ? {
              ...cred,
              fileName: file.name,
              uploadDate: new Date().toISOString().split('T')[0],
              status: 'pending' as VerificationStatus
            }
          : cred
      ));
      setUploadingCredential(null);
    }
    e.target.value = '';
  };

  const addNewCredential = () => {
    const newId = String(Date.now());
    setCredentials(prev => [...prev, {
      id: newId,
      name: 'New Certification',
      status: 'not_uploaded'
    }]);
  };

  const removeCredential = (id: string) => {
    setCredentials(prev => prev.filter(cred => cred.id !== id));
  };

  const getStatusBadge = (status: VerificationStatus) => {
    switch (status) {
      case 'verified':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
            <Check className="w-3 h-3" />
            Verified
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
            <Clock className="w-3 h-3" />
            Under Review
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
            <AlertCircle className="w-3 h-3" />
            Rejected
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
            Not Uploaded
          </span>
        );
    }
  };

  // Availability handlers
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

  const tabs = [
    { id: 'profile' as const, label: 'Profile', icon: User },
    { id: 'availability' as const, label: 'Availability', icon: Calendar }
  ];

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your profile and availability</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors border-b-2 -mb-px ${
              activeTab === tab.id
                ? 'text-teal-600 border-teal-600'
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Hidden file input for credentials */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="space-y-6">
          {/* Avatar */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Profile Photo</h2>
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
                  alt="Profile"
                  className="w-24 h-24 rounded-2xl object-cover"
                />
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div className="text-sm text-gray-600">
                <p>Upload a professional photo that shows your face clearly.</p>
                <p>Recommended: 400x400 pixels, JPG or PNG format.</p>
              </div>
            </div>
          </div>

          {/* Basic Info */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Basic Information</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Professional Title</label>
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-gray-600 mb-2">Tagline</label>
                <input
                  type="text"
                  value={profile.tagline}
                  onChange={(e) => setProfile({ ...profile, tagline: e.target.value })}
                  placeholder="A short sentence about your coaching style"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Location</label>
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Timezone</label>
                <select
                  value={profile.timezone}
                  onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                </select>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">About You</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Bio</label>
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Tell potential clients about your background and experience..."
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Coaching Approach</label>
                <textarea
                  value={profile.approach}
                  onChange={(e) => setProfile({ ...profile, approach: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Describe your coaching style and methodology..."
                />
              </div>
            </div>
          </div>

          {/* Specialties */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Specialties</h2>
            <div className="flex flex-wrap gap-2">
              {allSpecialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => toggleSpecialty(specialty)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    profile.specialties.includes(specialty)
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {profile.specialties.includes(specialty) && <Check className="w-4 h-4 inline mr-1" />}
                  {specialty}
                </button>
              ))}
            </div>
          </div>

          {/* Credentials & Verification */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-teal-600" />
              <h2 className="font-semibold text-gray-900">Credentials & Verification</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Upload your certifications and credentials. Our team will verify them within 2-3 business days.
            </p>

            <div className="space-y-4">
              {credentials.map((credential) => (
                <div
                  key={credential.id}
                  className={`p-4 rounded-xl border-2 transition-colors ${
                    credential.status === 'verified'
                      ? 'border-green-200 bg-green-50/50'
                      : credential.status === 'pending'
                      ? 'border-yellow-200 bg-yellow-50/50'
                      : 'border-gray-200 bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <input
                          type="text"
                          value={credential.name}
                          onChange={(e) => setCredentials(prev => prev.map(c =>
                            c.id === credential.id ? { ...c, name: e.target.value } : c
                          ))}
                          className="font-medium text-gray-900 bg-transparent border-none focus:outline-none focus:ring-0 p-0"
                          placeholder="Certification Name"
                        />
                        {getStatusBadge(credential.status)}
                      </div>

                      {credential.fileName ? (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FileText className="w-4 h-4" />
                          <span>{credential.fileName}</span>
                          <span className="text-gray-400">•</span>
                          <span>Uploaded {credential.uploadDate}</span>
                          {credential.expiryDate && (
                            <>
                              <span className="text-gray-400">•</span>
                              <span>Expires {credential.expiryDate}</span>
                            </>
                          )}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No document uploaded yet</p>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleFileUpload(credential.id)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                          credential.fileName
                            ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            : 'bg-teal-600 text-white hover:bg-teal-700'
                        }`}
                      >
                        <Upload className="w-4 h-4" />
                        {credential.fileName ? 'Replace' : 'Upload'}
                      </button>
                      <button
                        onClick={() => removeCredential(credential.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={addNewCredential}
                className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-teal-400 hover:text-teal-600 transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Another Certification
              </button>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Pricing & Session</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Price per Session</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={profile.pricePerSession}
                    onChange={(e) => setProfile({ ...profile, pricePerSession: Number(e.target.value) })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Session Duration</label>
                <select
                  value={profile.sessionDuration}
                  onChange={(e) => setProfile({ ...profile, sessionDuration: Number(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={60}>60 minutes</option>
                  <option value={90}>90 minutes</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-gray-600 mb-2">Session Types</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={profile.sessionTypes.includes('online')}
                      onChange={() => {
                        setProfile(prev => ({
                          ...prev,
                          sessionTypes: prev.sessionTypes.includes('online')
                            ? prev.sessionTypes.filter(t => t !== 'online')
                            : [...prev.sessionTypes, 'online']
                        }));
                      }}
                      className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
                    />
                    <Globe className="w-4 h-4 text-gray-500" />
                    Online
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={profile.sessionTypes.includes('in-person')}
                      onChange={() => {
                        setProfile(prev => ({
                          ...prev,
                          sessionTypes: prev.sessionTypes.includes('in-person')
                            ? prev.sessionTypes.filter(t => t !== 'in-person')
                            : [...prev.sessionTypes, 'in-person']
                        }));
                      }}
                      className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
                    />
                    In-Person
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Languages</h2>
            <div className="flex flex-wrap gap-2">
              {profile.languages.map((lang, index) => (
                <span
                  key={lang}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-2"
                >
                  {lang}
                  <button
                    onClick={() => setProfile(prev => ({
                      ...prev,
                      languages: prev.languages.filter((_, i) => i !== index)
                    }))}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
              <button className="px-4 py-2 border border-dashed border-gray-300 text-gray-500 rounded-full text-sm hover:border-gray-400 flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add Language
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Availability Tab */}
      {activeTab === 'availability' && (
        <div className="space-y-6">
          {/* Session Settings */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Session Settings</h2>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Session Duration</label>
                <select
                  value={profile.sessionDuration}
                  onChange={(e) => setProfile({ ...profile, sessionDuration: Number(e.target.value) })}
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
          <div className="bg-white rounded-xl border border-gray-100 p-6">
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
        </div>
      )}

      {/* Save Button */}
      <div className="flex justify-end mt-6">
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
