import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Sparkles, Mail, Lock, ArrowLeft, User, Briefcase } from 'lucide-react';

type UserType = 'client' | 'coach';

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get('type') as UserType || 'client';

  const [userType, setUserType] = useState<UserType>(defaultType);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      if (userType === 'coach') {
        navigate('/coach/dashboard');
      } else {
        navigate('/my-bookings');
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">CoachSpace</h1>
              <p className="text-sm text-gray-500">Sign in to continue</p>
            </div>
          </div>

          {/* User Type Selector */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setUserType('client')}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all ${
                userType === 'client'
                  ? 'border-teal-600 bg-teal-50 text-teal-700'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              <User className="w-5 h-5" />
              <span className="font-medium">I'm a Client</span>
            </button>
            <button
              type="button"
              onClick={() => setUserType('coach')}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all ${
                userType === 'coach'
                  ? 'border-teal-600 bg-teal-50 text-teal-700'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span className="font-medium">I'm a Coach</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  defaultValue={userType === 'coach' ? 'sarah@example.com' : ''}
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  defaultValue="password"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-teal-600 hover:text-teal-700">Forgot password?</button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                `Sign In as ${userType === 'coach' ? 'Coach' : 'Client'}`
              )}
            </button>
          </form>

          {/* Demo hint */}
          <div className="mt-4 p-3 bg-gray-50 rounded-xl text-center">
            <p className="text-xs text-gray-500">
              Demo mode: Click sign in to explore the {userType === 'coach' ? 'Coach Portal' : 'client experience'}
            </p>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  navigate(userType === 'coach' ? '/coach/dashboard' : '/my-bookings');
                }, 500);
              }}
              className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-700 font-medium">Google</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  navigate(userType === 'coach' ? '/coach/dashboard' : '/my-bookings');
                }, 500);
              }}
              className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-gray-700 font-medium">Facebook</span>
            </button>
          </div>

          <p className="text-center text-gray-600 text-sm mt-6">
            Don't have an account?{' '}
            <button
              onClick={() => navigate(userType === 'coach' ? '/coach/register' : '/coaches')}
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              {userType === 'coach' ? 'Join as Coach' : 'Browse Coaches'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
