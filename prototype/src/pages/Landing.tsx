import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Search,
  Calendar,
  Star,
  TrendingUp,
  Users,
  Award,
  MessageSquare,
  Target,
  ArrowRight,
  Check,
  Zap,
  Shield,
  Clock,
  Menu,
  X
} from 'lucide-react';
import { coaches } from '../data/coaches';

export default function Landing() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const featuredCoaches = coaches.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto relative">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">CoachSpace</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => navigate('/coaches')}
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Find a Coach
          </button>
          <button
            onClick={() => navigate('/login')}
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Log in
          </button>
          <button
            onClick={() => navigate('/coach/register')}
            className="px-4 py-2 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition-colors"
          >
            Join as Coach
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden z-50">
            <div className="px-6 py-4 space-y-3">
              <button
                onClick={() => {
                  navigate('/coaches');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                Find a Coach
              </button>
              <button
                onClick={() => {
                  navigate('/login');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                Log in
              </button>
              <button
                onClick={() => {
                  navigate('/coach/register');
                  setMobileMenuOpen(false);
                }}
                className="block w-full py-3 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition-colors text-center"
              >
                Join as Coach
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero - Problem-focused */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Feeling Stuck?<br />
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Find Your Coach.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with certified coaches who specialize in career transitions,
              leadership, and personal growth. Book your first session in minutes.
            </p>

            {/* Split Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={() => navigate('/coaches')}
                className="flex-1 px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Find a Coach
              </button>
              <button
                onClick={() => navigate('/for-coaches')}
                className="flex-1 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                I'm a Coach
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Featured Coaches Preview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-3xl blur-2xl opacity-60" />
            <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="text-sm font-medium text-gray-500 mb-4">Featured Coaches</div>
              <div className="space-y-4">
                {featuredCoaches.map(coach => (
                  <div
                    key={coach.id}
                    onClick={() => navigate(`/coaches/${coach.id}`)}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <img
                      src={coach.avatar}
                      alt={coach.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{coach.name}</div>
                      <div className="text-sm text-gray-500">{coach.title}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{coach.rating}</span>
                      </div>
                      <div className="text-sm text-gray-500">${coach.pricePerSession}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/coaches')}
                className="w-full mt-4 py-3 text-teal-600 font-medium hover:bg-teal-50 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                View All Coaches
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-gray-600">Verified Coaches</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-1">10,000+</div>
            <div className="text-gray-600">Sessions Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-1">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-1">24hr</div>
            <div className="text-gray-600">Response Time</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Journey in 3 Steps</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finding the right coach shouldn't be complicated. Here's how it works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
              <Search className="w-8 h-8 text-teal-600" />
              <span className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Browse & Compare</h3>
            <p className="text-gray-600">
              Filter by specialty, price, and availability.
              Read verified reviews from real clients.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
              <Calendar className="w-8 h-8 text-teal-600" />
              <span className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Book Instantly</h3>
            <p className="text-gray-600">
              Pick a time that works for you.
              Get instant confirmation and calendar invite.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
              <TrendingUp className="w-8 h-8 text-teal-600" />
              <span className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Grow Together</h3>
            <p className="text-gray-600">
              Work with your coach to unlock your potential
              and achieve your goals.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/coaches')}
            className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors inline-flex items-center gap-2"
          >
            Find Your Coach Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CoachSpace?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Coaches</h3>
              <p className="text-gray-600">
                Every coach is vetted for credentials, experience, and client reviews.
                ICF certified coaches only.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Enhanced Quality</h3>
              <p className="text-gray-600">
                Our coaches use AI tools to continuously improve their skills,
                giving you better sessions every time.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Booking</h3>
              <p className="text-gray-600">
                Book online or in-person sessions. Free cancellation up to 24 hours.
                Sessions as short as 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "Found my career coach through CoachSpace and landed my dream job within 3 months.
              The booking process was seamless."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-medium">MT</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Michael T.</div>
                <div className="text-sm text-gray-500">Product Manager at Google</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "As a coach, CoachSpace has transformed my practice. I no longer spend hours on marketing -
              qualified clients find me."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-medium">SL</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Sarah L.</div>
                <div className="text-sm text-gray-500">ICF PCC, Executive Coach</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "The quality of coaches is outstanding. I love reading reviews and seeing credentials
              before booking. Highly recommend!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-medium">JK</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Jennifer K.</div>
                <div className="text-sm text-gray-500">Startup Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Specialties */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Coaches For Any Goal</h2>
          <p className="text-gray-600">Browse coaches across 50+ specialties</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Executive Coaching', icon: Award, color: 'bg-purple-100 text-purple-600' },
            { name: 'Career Transition', icon: TrendingUp, color: 'bg-blue-100 text-blue-600' },
            { name: 'Leadership', icon: Users, color: 'bg-orange-100 text-orange-600' },
            { name: 'Life Balance', icon: Target, color: 'bg-green-100 text-green-600' },
            { name: 'Entrepreneurship', icon: Zap, color: 'bg-yellow-100 text-yellow-600' },
            { name: 'Communication', icon: MessageSquare, color: 'bg-pink-100 text-pink-600' },
            { name: 'Health & Wellness', icon: Star, color: 'bg-red-100 text-red-600' },
            { name: 'New Managers', icon: Users, color: 'bg-indigo-100 text-indigo-600' },
          ].map(specialty => (
            <button
              key={specialty.name}
              onClick={() => navigate('/coaches')}
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all text-left"
            >
              <div className={`w-10 h-10 ${specialty.color} rounded-xl flex items-center justify-center`}>
                <specialty.icon className="w-5 h-5" />
              </div>
              <span className="font-medium text-gray-900">{specialty.name}</span>
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/coaches')}
            className="text-teal-600 font-medium hover:text-teal-700 flex items-center gap-2 mx-auto"
          >
            View all specialties
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Unlock Your Potential?
          </h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">
            Join thousands of professionals who found their perfect coach on CoachSpace.
            Your first step starts here.
          </p>
          <button
            onClick={() => navigate('/coaches')}
            className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            Find Your Coach Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CoachSpace</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white">About</a>
              <a href="#" className="text-gray-400 hover:text-white">For Coaches</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2026 CoachSpace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
