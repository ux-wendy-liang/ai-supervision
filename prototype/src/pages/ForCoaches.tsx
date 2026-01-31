import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Users,
  Calendar,
  TrendingUp,
  ArrowRight,
  Check,
  Zap,
  DollarSign,
  Clock,
  Star,
  MessageSquare,
  Target,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function ForCoaches() {
  const navigate = useNavigate();
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(150);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const monthlyEarnings = hoursPerWeek * hourlyRate * 4;

  const faqs = [
    {
      question: 'How much does it cost to join?',
      answer: 'Joining CoachSpace is completely free. We only charge a small platform fee (15%) when you get paid for sessions. You keep 85% of your earnings.'
    },
    {
      question: 'What qualifications do I need?',
      answer: 'We require coaches to have at least 100 hours of coaching experience and hold a recognized certification (ICF ACC or above, or equivalent). We verify all credentials during onboarding.'
    },
    {
      question: 'How do clients find me?',
      answer: 'Your profile is searchable on our platform. We also optimize for Google search, so clients searching for coaches in your specialty can discover you organically.'
    },
    {
      question: 'What is AI Supervision?',
      answer: 'AI Supervision is our unique tool that analyzes your session recordings (with client consent) and provides feedback based on ICF competencies. It helps you continuously improve your coaching skills.'
    },
    {
      question: 'How do I get paid?',
      answer: 'We process payments automatically after each session. Funds are transferred to your bank account within 3-5 business days. You can track all earnings in your dashboard.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">CoachSpace</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/coaches')}
            className="text-gray-600 hover:text-gray-900 font-medium hidden sm:block"
          >
            Find a Coach
          </button>
          <button
            onClick={() => navigate('/coach/register')}
            className="px-4 py-2 bg-teal-600 text-white font-medium rounded-xl hover:bg-teal-700 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              For Coaches
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let Clients<br />
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Find You.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stop chasing clients. Join CoachSpace and focus on what you do best — coaching.
              We handle marketing, booking, and payments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/coach/register')}
                className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
              >
                Apply Now - It's Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-gray-500 justify-center sm:justify-start">
                <Clock className="w-5 h-5" />
                <span>Takes 10 minutes to apply</span>
              </div>
            </div>
          </div>

          {/* Earnings Calculator */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <div className="font-semibold">Earnings Calculator</div>
                <div className="text-sm text-gray-400">See your potential income</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-300">Hours per week</label>
                  <span className="text-teal-400 font-medium">{hoursPerWeek} hours</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full accent-teal-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-300">Hourly rate</label>
                  <span className="text-teal-400 font-medium">${hourlyRate}/hour</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full accent-teal-500"
                />
              </div>

              <div className="border-t border-gray-700 pt-6">
                <div className="text-sm text-gray-400 mb-1">Potential monthly earnings</div>
                <div className="text-4xl font-bold text-teal-400">
                  ${monthlyEarnings.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  After 15% platform fee: ${Math.round(monthlyEarnings * 0.85).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-gray-600">Active Coaches</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-1">10,000+</div>
            <div className="text-gray-600">Monthly Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-1">$5,200</div>
            <div className="text-gray-600">Avg. Coach Earnings/mo</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-1">85%</div>
            <div className="text-gray-600">You Keep</div>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Coaches Love CoachSpace</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We built CoachSpace to solve the problems coaches face every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Clients Come to You</h3>
            <p className="text-gray-600 mb-4">
              No more cold outreach or expensive ads. Your SEO-optimized profile brings qualified clients directly to you.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                Searchable profile
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                Google-indexed
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                Verified reviews
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Effortless Scheduling</h3>
            <p className="text-gray-600 mb-4">
              Set your availability once. Clients book directly. No back-and-forth emails.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                Calendar integration
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                Automatic reminders
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                Easy rescheduling
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Growth</h3>
            <p className="text-gray-600 mb-4">
              Our unique AI Supervision tool analyzes your sessions and helps you become a better coach.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                ICF competency feedback
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                Progress tracking
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500" />
                Personalized tips
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* AI Supervision Preview */}
      <section className="px-6 py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Exclusive Feature
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                AI Supervision:<br />
                <span className="text-teal-400">Your Personal Coach Coach</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Unlike any other platform, CoachSpace includes AI-powered supervision that helps you continuously improve your coaching skills based on ICF competencies.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Session Analysis</div>
                    <div className="text-gray-400 text-sm">AI reviews your session recordings and provides detailed feedback</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">ICF Competency Scores</div>
                    <div className="text-gray-400 text-sm">Track your progress across all 8 ICF core competencies</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Growth Over Time</div>
                    <div className="text-gray-400 text-sm">See how your coaching skills improve month over month</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Preview Card */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">AI Supervision</div>
                  <div className="text-sm text-gray-400">Session from yesterday</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-teal-400" />
                    <span className="text-sm font-medium text-white">Feedback</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    "Excellent use of powerful questions at 12:34. Consider giving more silence after reflections to let the client process."
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-teal-400" />
                    <span className="text-sm font-medium text-white">Overall Score</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-white/10 rounded-full h-3">
                      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 h-3 rounded-full" style={{ width: '85%' }} />
                    </div>
                    <span className="text-teal-400 font-bold text-lg">85</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-teal-400" />
                    <span className="text-sm font-medium text-white">Your Progress</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Active listening improved <span className="text-green-400 font-medium">+15%</span> this month!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coaches Thriving on CoachSpace</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              "I was spending 10+ hours a week on marketing. Now I spend that time coaching. My income doubled in 6 months."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-medium">SL</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Sarah L.</div>
                <div className="text-sm text-gray-500">ICF PCC, Executive Coach</div>
                <div className="text-sm text-teal-600 font-medium">$8,400/month avg</div>
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
              "The AI Supervision is incredible. It's like having a mentor review every session. My coaching quality has improved significantly."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-medium">MK</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Michael K.</div>
                <div className="text-sm text-gray-500">Career Transition Coach</div>
                <div className="text-sm text-teal-600 font-medium">$5,200/month avg</div>
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
              "Started as a side gig, now it's my full-time practice. The platform handles everything so I can focus on clients."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-medium">JC</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Jennifer C.</div>
                <div className="text-sm text-gray-500">Leadership Coach</div>
                <div className="text-sm text-teal-600 font-medium">$12,000/month avg</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Coaching in 3 Simple Steps</h2>
            <p className="text-gray-600">Join in 10 minutes. Get your first client this week.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                <Users className="w-8 h-8 text-teal-600" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Create Your Profile</h3>
              <p className="text-gray-600">
                Tell us about your experience, certifications, and coaching specialties.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                <Check className="w-8 h-8 text-teal-600" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get Verified</h3>
              <p className="text-gray-600">
                We review your credentials and certifications. Usually takes 24-48 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                <Calendar className="w-8 h-8 text-teal-600" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Start Coaching</h3>
              <p className="text-gray-600">
                Set your availability, prices, and start accepting bookings.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/coach/register')}
              className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors inline-flex items-center gap-2"
            >
              Apply Now - It's Free
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Grow Your Practice?
          </h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">
            Join 500+ coaches who are building thriving practices on CoachSpace.
            Your next client is waiting.
          </p>
          <button
            onClick={() => navigate('/coach/register')}
            className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            Apply Now - It's Free
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CoachSpace</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white">About</a>
              <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white">Find a Coach</button>
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
