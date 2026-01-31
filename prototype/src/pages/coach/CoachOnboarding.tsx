import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Camera,
  Check,
  ArrowRight,
  ArrowLeft,
  Upload,
  FileText,
  Clock,
  User,
  FileCheck,
  DollarSign,
  Calendar,
  X,
  Plus
} from 'lucide-react';

type VerificationStatus = 'pending' | 'verified' | 'not_uploaded';

interface Credential {
  id: string;
  name: string;
  fileName?: string;
  status: VerificationStatus;
}

const steps = [
  { id: 1, title: 'Basic Info', icon: User, description: 'Photo & title' },
  { id: 2, title: 'About You', icon: FileCheck, description: 'Bio & approach' },
  { id: 3, title: 'Credentials', icon: Upload, description: 'Certifications' },
  { id: 4, title: 'Pricing', icon: DollarSign, description: 'Rates & sessions' },
];

const suggestedCertifications = [
  'ICF ACC Certificate',
  'ICF PCC Certificate',
  'ICF MCC Certificate',
  'CTI CPCC Certificate',
  'Professional Liability Insurance',
];

export default function CoachOnboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadingCredential, setUploadingCredential] = useState<string | null>(null);

  const [profile, setProfile] = useState({
    title: '',
    tagline: '',
    bio: '',
    approach: '',
    pricePerSession: 150,
    sessionDuration: 60,
  });

  const [credentials, setCredentials] = useState<Credential[]>([
    { id: '1', name: 'ICF PCC Certificate', status: 'not_uploaded' },
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
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
          ? { ...cred, fileName: file.name, status: 'pending' as VerificationStatus }
          : cred
      ));
      setUploadingCredential(null);
    }
    e.target.value = '';
  };

  const addCredential = (name?: string) => {
    const newId = String(Date.now());
    setCredentials(prev => [...prev, {
      id: newId,
      name: name || 'New Certification',
      status: 'not_uploaded'
    }]);
  };

  const removeCredential = (id: string) => {
    setCredentials(prev => prev.filter(cred => cred.id !== id));
  };

  const getStepCompletion = () => {
    let completed = 0;
    if (profile.title && profile.tagline) completed++;
    if (profile.bio && profile.approach) completed++;
    if (credentials.some(c => c.fileName)) completed++;
    if (profile.pricePerSession > 0) completed++;
    return completed;
  };

  const completionPercent = Math.round((getStepCompletion() / 4) * 100);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/coach/dashboard');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipOnboarding = () => {
    navigate('/coach/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">CoachSpace</span>
          </div>
          <button
            onClick={skipOnboarding}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Skip for now
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to CoachSpace! 🎉
          </h1>
          <p className="text-gray-600">
            Complete your profile to start receiving clients
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">Profile Completeness</span>
            <span className="text-sm font-bold text-teal-600">{completionPercent}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500"
              style={{ width: `${completionPercent}%` }}
            />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between mt-6">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`flex flex-col items-center gap-2 flex-1 ${
                  currentStep === step.id ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    currentStep === step.id
                      ? 'bg-teal-600 text-white'
                      : currentStep > step.id
                      ? 'bg-teal-100 text-teal-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <div className="text-center">
                  <div className={`text-sm font-medium ${currentStep === step.id ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-400 hidden sm:block">{step.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Let's set up your profile</h2>
              <p className="text-gray-600 mb-8">This is the first thing clients will see</p>

              {/* Profile Photo */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">Profile Photo</label>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <input
                      ref={imageInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-24 h-24 rounded-2xl object-cover"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center">
                        <User className="w-10 h-10 text-gray-300" />
                      </div>
                    )}
                    <button
                      onClick={() => imageInputRef.current?.click()}
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors"
                    >
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>Upload a professional photo</p>
                    <p>Recommended: 400×400 pixels</p>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Professional Title
                </label>
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                  placeholder="e.g., Executive Leadership Coach"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Tagline */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tagline
                </label>
                <input
                  type="text"
                  value={profile.tagline}
                  onChange={(e) => setProfile({ ...profile, tagline: e.target.value })}
                  placeholder="e.g., Helping leaders unlock their authentic potential"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <p className="text-sm text-gray-400 mt-2">A short sentence about your coaching style</p>
              </div>
            </div>
          )}

          {/* Step 2: About You */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Tell clients about yourself</h2>
              <p className="text-gray-600 mb-8">Help potential clients understand your background</p>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Bio
                </label>
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  rows={5}
                  placeholder="Share your background, experience, and what drives you as a coach..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <p className="text-sm text-gray-400 mt-2">Tip: Include your relevant experience and what makes you unique</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coaching Approach
                </label>
                <textarea
                  value={profile.approach}
                  onChange={(e) => setProfile({ ...profile, approach: e.target.value })}
                  rows={4}
                  placeholder="Describe your coaching methodology and what clients can expect..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
          )}

          {/* Step 3: Credentials */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Upload your credentials</h2>
              <p className="text-gray-600 mb-8">Verified coaches get more bookings and build trust faster</p>

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
              />

              <div className="space-y-4 mb-6">
                {credentials.map((credential) => (
                  <div
                    key={credential.id}
                    className={`p-4 rounded-xl border-2 ${
                      credential.status === 'pending'
                        ? 'border-yellow-200 bg-yellow-50/50'
                        : 'border-gray-200 bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={credential.name}
                          onChange={(e) => setCredentials(prev => prev.map(c =>
                            c.id === credential.id ? { ...c, name: e.target.value } : c
                          ))}
                          className="font-medium text-gray-900 bg-transparent border-none focus:outline-none focus:ring-0 p-0 w-full"
                          placeholder="Certification Name"
                        />
                        {credential.fileName ? (
                          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                            <FileText className="w-4 h-4" />
                            <span>{credential.fileName}</span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                              <Clock className="w-3 h-3" />
                              Under Review
                            </span>
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500 mt-1">No document uploaded yet</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleFileUpload(credential.id)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                            credential.fileName
                              ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                              : 'bg-teal-600 text-white hover:bg-teal-700'
                          }`}
                        >
                          <Upload className="w-4 h-4" />
                          {credential.fileName ? 'Replace' : 'Upload'}
                        </button>
                        {credentials.length > 1 && (
                          <button
                            onClick={() => removeCredential(credential.id)}
                            className="p-2 text-gray-400 hover:text-red-500 rounded-lg"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => addCredential()}
                  className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-teal-400 hover:text-teal-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Another Certification
                </button>
              </div>

              {/* Quick add suggestions */}
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm font-medium text-gray-700 mb-3">Common certifications:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedCertifications
                    .filter(cert => !credentials.some(c => c.name === cert))
                    .slice(0, 3)
                    .map((cert) => (
                      <button
                        key={cert}
                        onClick={() => addCredential(cert)}
                        className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-teal-400 hover:text-teal-600 transition-colors"
                      >
                        + {cert}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Pricing */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Set your pricing</h2>
              <p className="text-gray-600 mb-8">You can always adjust this later</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price per Session
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={profile.pricePerSession}
                      onChange={(e) => setProfile({ ...profile, pricePerSession: Number(e.target.value) })}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Session Duration
                  </label>
                  <select
                    value={profile.sessionDuration}
                    onChange={(e) => setProfile({ ...profile, sessionDuration: Number(e.target.value) })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value={30}>30 minutes</option>
                    <option value={45}>45 minutes</option>
                    <option value={60}>60 minutes</option>
                    <option value={90}>90 minutes</option>
                  </select>
                </div>
              </div>

              {/* Pricing guide */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <h3 className="font-medium text-blue-900 mb-2">💡 Pricing tip</h3>
                <p className="text-sm text-blue-700">
                  The average coaching rate on CoachSpace is $150-250 per hour.
                  New coaches often start around $100-150 to build their client base.
                </p>
              </div>

              {/* What's next */}
              <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl border border-teal-100">
                <h3 className="font-semibold text-gray-900 mb-3">🎉 You're almost done!</h3>
                <p className="text-gray-600 mb-4">
                  After this, you can set your availability in the dashboard and start receiving bookings.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    Set your available times
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    Your profile will be visible to clients
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={prevStep}
              className={`flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors ${
                currentStep === 1 ? 'invisible' : ''
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>

            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-8 py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors"
            >
              {currentStep === 4 ? (
                <>
                  Go to Dashboard
                  <Check className="w-5 h-5" />
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
