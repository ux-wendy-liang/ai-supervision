import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Check,
  User,
  X,
  Mail,
  Lock,
  AlertCircle
} from 'lucide-react';

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

export default function CoachRegister() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    specialties: [] as string[]
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    specialties: ''
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateStep1 = () => {
    const newErrors = { ...errors };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    } else {
      newErrors.firstName = '';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    } else {
      newErrors.lastName = '';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateStep2 = () => {
    if (formData.specialties.length === 0) {
      setErrors({ ...errors, specialties: 'Please select at least one specialty' });
      return false;
    }
    setErrors({ ...errors, specialties: '' });
    return true;
  };

  const updateFormData = (field: string, value: unknown) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const toggleSpecialty = (specialty: string) => {
    const newSpecialties = formData.specialties.includes(specialty)
      ? formData.specialties.filter(s => s !== specialty)
      : formData.specialties.length < 3
      ? [...formData.specialties, specialty]
      : formData.specialties;
    updateFormData('specialties', newSpecialties);
    if (newSpecialties.length > 0) {
      setErrors({ ...errors, specialties: '' });
    }
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      if (validateStep2()) {
        handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/coach/onboarding');
    }, 1500);
  };

  const getPasswordStrength = () => {
    const len = formData.password.length;
    if (len === 0) return { text: '', color: '' };
    if (len < 6) return { text: 'Weak', color: 'text-red-500' };
    if (len < 8) return { text: 'Fair', color: 'text-yellow-500' };
    if (len < 12) return { text: 'Good', color: 'text-green-500' };
    return { text: 'Strong', color: 'text-green-600' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-lg mx-auto px-6 h-16 flex items-center justify-between">
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

      <main className="max-w-lg mx-auto px-6 py-12">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className={`w-3 h-3 rounded-full ${currentStep >= 1 ? 'bg-teal-600' : 'bg-gray-300'}`} />
          <div className={`w-12 h-1 ${currentStep >= 2 ? 'bg-teal-600' : 'bg-gray-300'}`} />
          <div className={`w-3 h-3 rounded-full ${currentStep >= 2 ? 'bg-teal-600' : 'bg-gray-300'}`} />
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          {/* Step 1: Account Info */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create your account</h2>
              <p className="text-gray-600 mb-8">Join 500+ coaches growing their practice</p>

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Sarah"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Chen"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="sarah@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => updateFormData('password', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Min 8 characters"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    {errors.password ? (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.password}
                      </p>
                    ) : (
                      <span className="text-sm text-gray-500">Min 8 characters</span>
                    )}
                    {passwordStrength.text && (
                      <span className={`text-sm font-medium ${passwordStrength.color}`}>
                        {passwordStrength.text}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Quick Specialty Selection */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">What do you specialize in?</h2>
              <p className="text-gray-600 mb-8">Select up to 3 areas (you can add more later)</p>

              <div className="flex flex-wrap gap-3">
                {allSpecialties.map((specialty) => (
                  <button
                    key={specialty}
                    onClick={() => toggleSpecialty(specialty)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      formData.specialties.includes(specialty)
                        ? 'bg-teal-600 text-white shadow-md'
                        : formData.specialties.length >= 3
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {formData.specialties.includes(specialty) && (
                      <Check className="w-4 h-4 inline mr-1.5" />
                    )}
                    {specialty}
                  </button>
                ))}
              </div>

              {errors.specialties && (
                <p className="text-red-500 text-sm mt-4 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.specialties}
                </p>
              )}

              <div className="bg-gray-50 rounded-xl p-5 mt-8">
                <h3 className="font-semibold text-gray-900 mb-3">After signup, you can:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    Complete your profile with bio and credentials
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    Set your pricing and availability
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600" />
                    Start receiving bookings
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={nextStep}
            disabled={isLoading}
            className="w-full mt-8 flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Creating account...
              </>
            ) : currentStep === 1 ? (
              <>
                Continue
                <ArrowRight className="w-5 h-5" />
              </>
            ) : (
              <>
                Create My Account
                <Check className="w-5 h-5" />
              </>
            )}
          </button>

          {currentStep === 2 && (
            <button
              onClick={() => setCurrentStep(1)}
              className="w-full mt-3 text-gray-600 hover:text-gray-900 text-sm"
            >
              Back to previous step
            </button>
          )}
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
