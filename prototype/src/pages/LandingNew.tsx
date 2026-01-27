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
  Zap
} from 'lucide-react';
import { coaches } from '../data/coaches';

export default function LandingNew() {
  const navigate = useNavigate();
  const featuredCoaches = coaches.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">CoachSpace</span>
        </div>
        <div className="flex items-center gap-4">
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
            className="px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
          >
            Join as Coach
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              The Coach Ecosystem
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your Coach.<br />
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Grow Together.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with certified coaches who can help you achieve your goals.
              Our AI-powered platform helps coaches continuously improve,
              so you always get the best experience.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/coaches')}
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                Find a Coach
              </button>
              <button
                onClick={() => navigate('/coach/register')}
                className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-teal-300 hover:bg-teal-50 transition-all"
              >
                I'm a Coach
              </button>
            </div>
          </div>

          {/* Hero Illustration - Featured Coaches Preview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-3xl blur-2xl opacity-60" />
            <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Career coaching, leadership..."
                  className="flex-1 text-gray-600 outline-none"
                  readOnly
                />
              </div>
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
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{coach.name}</div>
                      <div className="text-sm text-gray-500">{coach.title}</div>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{coach.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/coaches')}
                className="w-full mt-4 py-3 text-teal-600 font-medium hover:bg-teal-50 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                View all coaches
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-gray-600">Certified Coaches</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-1">10,000+</div>
            <div className="text-gray-600">Sessions Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-1">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-1">50+</div>
            <div className="text-gray-600">Specialties</div>
          </div>
        </div>
      </section>

      {/* How It Works - For Clients */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find and book your perfect coach in minutes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">1. Browse Coaches</h3>
            <p className="text-gray-600">
              Search by specialty, price, language, or availability.
              Read reviews from real clients.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">2. Book a Session</h3>
            <p className="text-gray-600">
              Pick a time that works for you. Get instant confirmation
              and calendar invites.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">3. Achieve Your Goals</h3>
            <p className="text-gray-600">
              Work with your coach to unlock your potential
              and make real progress.
            </p>
          </div>
        </div>
      </section>

      {/* For Coaches Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                For Coaches
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Grow Your Practice.<br />
                <span className="text-teal-400">Let Clients Find You.</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Stop chasing clients. Join CoachSpace and let qualified clients come to you.
                Plus, our AI Supervision tools help you continuously improve your coaching skills.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Get discovered by clients</div>
                    <div className="text-gray-400 text-sm">Our SEO brings thousands of potential clients every month</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Easy booking & scheduling</div>
                    <div className="text-gray-400 text-sm">Built-in calendar, reminders, and video integration</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">AI-powered supervision</div>
                    <div className="text-gray-400 text-sm">Get feedback on real sessions, track your growth</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/coach/register')}
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                Join as a Coach
              </button>
            </div>

            {/* AI Supervision Preview */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">AI Supervision</div>
                  <div className="text-sm text-gray-400">Session feedback powered by AI</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-teal-400" />
                    <span className="text-sm font-medium text-white">Session Review</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    "Great use of powerful questions! Consider giving more space after 'What do you really want?' - the client seemed to need more time."
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-teal-400" />
                    <span className="text-sm font-medium text-white">ICF Competency Score</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: '85%' }} />
                    </div>
                    <span className="text-teal-400 font-medium">85/100</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-teal-400" />
                    <span className="text-sm font-medium text-white">Growth Over Time</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Your active listening scores improved 15% this month!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Coaches For Any Goal</h2>
          <p className="text-gray-600">Explore coaches across 50+ specialties</p>
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
              <div className={`w-10 h-10 ${specialty.color} rounded-lg flex items-center justify-center`}>
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

      {/* Testimonials */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Found my career coach through CoachSpace and landed my dream job within 3 months.
                The booking process was seamless and the coach was exactly what I needed."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                  <div className="font-medium text-gray-900">Michael T.</div>
                  <div className="text-sm text-gray-500">Software Engineer → Product Manager</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "As a coach, CoachSpace has been a game-changer. I no longer spend hours on marketing -
                clients find me through the platform. The AI supervision feature helps me improve constantly."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                  <div className="font-medium text-gray-900">Sarah L.</div>
                  <div className="text-sm text-gray-500">ICF PCC, Executive Coach</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The quality of coaches on this platform is outstanding.
                I love being able to read reviews and see their credentials before booking.
                Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                  <div className="font-medium text-gray-900">Jennifer K.</div>
                  <div className="text-sm text-gray-500">Startup Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">
            Whether you're looking for a coach or you are one,
            CoachSpace is the platform for growth.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/coaches')}
              className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              Find a Coach
            </button>
            <button
              onClick={() => navigate('/coach/register')}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Join as Coach
            </button>
          </div>
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
