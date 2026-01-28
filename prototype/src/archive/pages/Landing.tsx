import { useNavigate } from 'react-router-dom';
import { Sparkles, Target, MessageSquare, TrendingUp, Users, Award } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">AI Coach Mentor</span>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="px-4 py-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
        >
          Login
        </button>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          AI-Powered Coaching Practice
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Become a Better Coach<br />
          <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            With AI Practice & Feedback
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Practice coaching conversations with AI clients, get real-time feedback based on ICF standards, and track your professional growth.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all"
          >
            Start Free Trial
          </button>
          <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-teal-300 hover:bg-teal-50 transition-all">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Two Powerful Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg shadow-teal-500/5 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Simulate Practice</h3>
            <p className="text-gray-600 mb-6">Practice with AI clients featuring various personas and challenges. Get real-time feedback and detailed reports after each session.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                8+ Client Personas
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Real-time Coaching Tips
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                ICF-Based Assessment
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg shadow-emerald-500/5 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Session Review</h3>
            <p className="text-gray-600 mb-6">Upload your real coaching sessions. Get AI-generated notes, inline feedback, and track your client's growth journey.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Auto Transcription
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Inline AI Feedback
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                Client Growth Tracking
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-white mb-2">$150+</div>
            <div className="text-teal-100">Saved per Hour vs Real Supervisor</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-teal-100">Available Anytime</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">ICF</div>
            <div className="text-teal-100">Standard Based</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-teal-100">Private & Safe</div>
          </div>
        </div>
      </section>

      {/* User Types */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Who Is This For?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Whether you're exploring coaching or advancing your career, we have you covered.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-300 transition-colors">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Exploring Coaching?</h3>
            <p className="text-gray-600 text-sm">Try it free and see if coaching is right for you. Get a personalized fit assessment.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-300 transition-colors">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">In Training?</h3>
            <p className="text-gray-600 text-sm">Practice anytime without scheduling. Prepare for ICF certification with confidence.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-300 transition-colors">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">ACC/PCC Coach?</h3>
            <p className="text-gray-600 text-sm">Review real sessions, track client growth, and continue improving your craft.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 max-w-7xl mx-auto text-center">
        <div className="bg-gray-900 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Level Up Your Coaching?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Start with 3 free practice sessions per month. No credit card required.</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-500 text-sm">
          <div>© 2026 AI Coach Mentor</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
