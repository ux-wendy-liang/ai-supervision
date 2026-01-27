import { useState } from 'react';
import { Camera, Check, Plus, X, Globe, DollarSign } from 'lucide-react';

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

const allCertifications = [
  'ICF ACC',
  'ICF PCC',
  'ICF MCC',
  'CTI CPCC',
  'NBC-HWC',
  'SHRM-SCP'
];

export default function CoachProfileEdit() {
  const [saved, setSaved] = useState(false);
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

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleSpecialty = (specialty: string) => {
    setProfile(prev => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty]
    }));
  };

  const toggleCertification = (cert: string) => {
    setProfile(prev => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter(c => c !== cert)
        : [...prev.certifications, cert]
    }));
  };

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
        <p className="text-gray-600">Update your public profile information</p>
      </div>

      {/* Avatar */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
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
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
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
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
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
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
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

      {/* Certifications */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
        <h2 className="font-semibold text-gray-900 mb-4">Certifications</h2>
        <div className="flex flex-wrap gap-2">
          {allCertifications.map((cert) => (
            <button
              key={cert}
              onClick={() => toggleCertification(cert)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                profile.certifications.includes(cert)
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {profile.certifications.includes(cert) && <Check className="w-4 h-4 inline mr-1" />}
              {cert}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
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
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
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
