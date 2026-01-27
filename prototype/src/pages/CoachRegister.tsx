import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Check,
  User,
  Award,
  Briefcase,
  DollarSign,
  Camera,
  Plus,
  X
} from 'lucide-react';

const steps = [
  { id: 1, name: 'Basic Info', icon: User },
  { id: 2, name: 'Credentials', icon: Award },
  { id: 3, name: 'Expertise', icon: Briefcase },
  { id: 4, name: 'Pricing', icon: DollarSign }
];

const allSpecialties = [
  'Executive Coaching',
  'Leadership Development',
  'Career Transition',
  'Life Coaching',
  'Health & Wellness',
  'Business Coaching',
  'Team Dynamics',
  'Communication',
  'Work-Life Balance',
  'Entrepreneurship',
  'New Managers',
  'Personal Branding'
];

const certifications = [
  'ICF ACC',
  'ICF PCC',
  'ICF MCC',
  'CTI CPCC',
  'NBC-HWC',
  'SHRM-SCP',
  'Other'
];

export default function CoachRegister() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    firstName: 'Sarah',
    lastName: 'Chen',
    email: 'sarah@example.com',
    password: 'password123',
    // Step 2: Credentials
    certifications: ['ICF PCC', 'CTI CPCC'] as string[],
    yearsExperience: '5-10',
    linkedIn: 'https://linkedin.com/in/sarahchen',
    // Step 3: Expertise
    title: 'Executive Leadership Coach',
    tagline: 'Helping leaders unlock their authentic potential',
    specialties: ['Executive Coaching', 'Leadership Development', 'Career Transition'] as string[],
    languages: ['English', 'Mandarin'],
    bio: 'With 8 years of experience coaching C-suite executives and emerging leaders, I specialize in helping professionals navigate complex organizational dynamics while staying true to their values.',
    // Step 4: Pricing
    pricePerSession: '250',
    sessionDuration: '60',
    sessionTypes: ['online', 'in-person'] as string[]
  });

  const updateFormData = (field: string, value: unknown) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: string, item: string) => {
    const currentArray = formData[field as keyof typeof formData] as string[];
    const newArray = currentArray.includes(item)
      ? currentArray.filter(i => i !== item)
      : [...currentArray, item];
    updateFormData(field, newArray);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit and go to dashboard
      navigate('/coach/dashboard');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.password;
      case 2:
        return formData.certifications.length > 0 && formData.yearsExperience;
      case 3:
        return formData.title && formData.specialties.length > 0;
      case 4:
        return formData.pricePerSession && formData.sessionDuration;
      default:
        return true;
    }
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
          <button
            onClick={() => navigate('/')}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      currentStep > step.id
                        ? 'bg-teal-600 text-white'
                        : currentStep === step.id
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className={`text-sm mt-2 ${
                    currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-24 h-0.5 mx-2 ${
                    currentStep > step.id ? 'bg-teal-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's get started</h2>
              <p className="text-gray-600 mb-8">Create your coach account</p>

              <div className="space-y-6">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <User className="w-10 h-10 text-gray-400" />
                    </div>
                    <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-lg flex items-center justify-center hover:bg-teal-700">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Sarah"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Chen"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="sarah@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => updateFormData('password', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Create a password"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Credentials */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your credentials</h2>
              <p className="text-gray-600 mb-8">Help clients trust your expertise</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Certifications</label>
                  <div className="flex flex-wrap gap-2">
                    {certifications.map((cert) => (
                      <button
                        key={cert}
                        onClick={() => toggleArrayItem('certifications', cert)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          formData.certifications.includes(cert)
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {formData.certifications.includes(cert) && <Check className="w-4 h-4 inline mr-1" />}
                        {cert}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Coaching Experience</label>
                  <select
                    value={formData.yearsExperience}
                    onChange={(e) => updateFormData('yearsExperience', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select...</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile (optional)</label>
                  <input
                    type="url"
                    value={formData.linkedIn}
                    onChange={(e) => updateFormData('linkedIn', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Expertise */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your expertise</h2>
              <p className="text-gray-600 mb-8">Tell clients what you specialize in</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => updateFormData('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="e.g., Executive Leadership Coach"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
                  <input
                    type="text"
                    value={formData.tagline}
                    onChange={(e) => updateFormData('tagline', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="e.g., Helping leaders unlock their authentic potential"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Specialties (select up to 5)</label>
                  <div className="flex flex-wrap gap-2">
                    {allSpecialties.map((specialty) => (
                      <button
                        key={specialty}
                        onClick={() => {
                          if (formData.specialties.includes(specialty) || formData.specialties.length < 5) {
                            toggleArrayItem('specialties', specialty);
                          }
                        }}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          formData.specialties.includes(specialty)
                            ? 'bg-teal-600 text-white'
                            : formData.specialties.length >= 5
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {formData.specialties.includes(specialty) && <Check className="w-4 h-4 inline mr-1" />}
                        {specialty}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
                  <div className="flex flex-wrap gap-2">
                    {formData.languages.map((lang, index) => (
                      <span
                        key={lang}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-2"
                      >
                        {lang}
                        {index > 0 && (
                          <button
                            onClick={() => updateFormData('languages', formData.languages.filter((_, i) => i !== index))}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </span>
                    ))}
                    <button className="px-4 py-2 border border-dashed border-gray-300 text-gray-500 rounded-full text-sm hover:border-gray-400 flex items-center gap-1">
                      <Plus className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Brief Bio</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => updateFormData('bio', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Tell potential clients about your background and approach..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Pricing */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Set your pricing</h2>
              <p className="text-gray-600 mb-8">You can change this anytime</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price per Session (USD)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={formData.pricePerSession}
                      onChange={(e) => updateFormData('pricePerSession', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="150"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Average coach on our platform charges $100-250 per session
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Session Duration</label>
                  <div className="grid grid-cols-4 gap-3">
                    {['30', '45', '60', '90'].map((duration) => (
                      <button
                        key={duration}
                        onClick={() => updateFormData('sessionDuration', duration)}
                        className={`py-3 rounded-xl font-medium transition-colors ${
                          formData.sessionDuration === duration
                            ? 'bg-teal-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {duration} min
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Session Types</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-teal-500 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.sessionTypes.includes('online')}
                        onChange={() => toggleArrayItem('sessionTypes', 'online')}
                        className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                      />
                      <span>Online (Zoom/Google Meet)</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-teal-500 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.sessionTypes.includes('in-person')}
                        onChange={() => toggleArrayItem('sessionTypes', 'in-person')}
                        className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                      />
                      <span>In-Person</span>
                    </label>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-xl p-6 mt-8">
                  <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-teal-600" />
                      Your profile will be reviewed within 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-teal-600" />
                      Once approved, you'll appear in our coach directory
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-teal-600" />
                      Start receiving bookings from clients
                    </li>
                  </ul>
                </div>
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
              disabled={!canProceed()}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-medium transition-colors ${
                canProceed()
                  ? 'bg-teal-600 text-white hover:bg-teal-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentStep === 4 ? 'Complete Setup' : 'Continue'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Already have account */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            Log in
          </button>
        </p>
      </main>
    </div>
  );
}
