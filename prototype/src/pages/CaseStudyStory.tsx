import { useNavigate } from 'react-router-dom';
import {
  Lightbulb,
  AlertTriangle,
  Target,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  X,
  Quote,
  Users,
  Zap,
  Play,
  ChevronDown
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CaseStudyStory() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Full Screen with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            CASE STUDY 2026
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Coach Mentor
          </h1>

          <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
            How I found a gap in a{' '}
            <span className="text-indigo-400 font-semibold">$4.5B market</span>
          </p>
          <p className="text-xl text-slate-400 mb-12">
            and built a prototype in <span className="text-white font-semibold">4 weeks</span>
          </p>

          {/* Quick Stats Row */}
          <div className="flex justify-center gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">$5-7M</div>
              <div className="text-slate-400 text-sm">Market Opportunity</div>
            </div>
            <div className="w-px bg-slate-700" />
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">4 weeks</div>
              <div className="text-slate-400 text-sm">Research to Prototype</div>
            </div>
            <div className="w-px bg-slate-700" />
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">$4M ARR</div>
              <div className="text-slate-400 text-sm">Model Validated by SimCare</div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex justify-center gap-3 mb-16">
            <span className="px-4 py-2 bg-white/5 backdrop-blur border border-white/10 rounded-full text-slate-300 text-sm">
              Product Strategy
            </span>
            <span className="px-4 py-2 bg-white/5 backdrop-blur border border-white/10 rounded-full text-slate-300 text-sm">
              0→1 Design
            </span>
            <span className="px-4 py-2 bg-white/5 backdrop-blur border border-white/10 rounded-full text-slate-300 text-sm">
              AI-Powered Workflow
            </span>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Chapter 1: The Spark */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Chapter Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <div className="text-amber-600 text-sm font-semibold tracking-wider">CHAPTER 1</div>
              <h2 className="text-3xl font-bold text-slate-900">The Spark</h2>
            </div>
          </div>

          {/* Opening Text */}
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            I was researching the coaching industry when I stumbled on a paradox:
          </p>

          {/* Big Quote */}
          <div className="relative py-12 mb-12">
            <Quote className="absolute -top-2 -left-4 w-16 h-16 text-slate-100" />
            <blockquote className="relative text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Coaches help others grow.
              <br />
              <span className="text-indigo-600">But who helps the coaches grow?</span>
            </blockquote>
          </div>

          {/* The Problem */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              The answer: <strong>supervision sessions at $150-300/hour</strong>.
              Most coaches can only afford one session per month.
              By the time they discuss a difficult case, it's already weeks old.
            </p>
          </div>

          {/* Discovery */}
          <div className="flex items-start gap-6 mb-12">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Then I discovered SimCare AI</h3>
              <p className="text-slate-600 leading-relaxed">
                A YC-backed startup that lets therapy students practice with AI patients.
                They raised <strong>$4.5M</strong> and were generating <strong>$4M in revenue</strong>.
              </p>
            </div>
          </div>

          {/* Market Map */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
            <h3 className="text-lg font-semibold mb-6 text-slate-300">MARKET LANDSCAPE</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Existing */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">AI for Coachees</span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Crowded</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Rocky.ai', desc: 'AI coaching for individuals' },
                    { name: 'Coachello', desc: 'Enterprise AI coaching' },
                    { name: 'CoachHub', desc: 'Human + AI hybrid' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                      <div className="w-8 h-8 bg-white/10 rounded-lg" />
                      <div>
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-slate-400">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gap */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-red-400" />
                  <span className="font-semibold">AI for Coaches</span>
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">Empty</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Practice Tool', status: 'empty' },
                    { name: 'Real-time Feedback', status: 'empty' },
                    { name: 'Skill Tracking', status: 'limited' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 border-dashed rounded-lg p-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 text-lg">?</div>
                      <div>
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-red-400/70">{item.status === 'empty' ? 'No one building this' : 'Limited options'}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Insight Box */}
            <div className="mt-8 bg-indigo-500/20 rounded-xl p-6 text-center">
              <div className="text-indigo-300 text-sm font-semibold mb-2">THE INSIGHT</div>
              <p className="text-xl font-semibold">
                Everyone builds AI to coach people.
                <br />
                Nobody builds AI to coach the coaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Conflict */}
      <section className="py-32 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-4xl mx-auto px-6">
          {/* Chapter Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <div className="text-red-600 text-sm font-semibold tracking-wider">CHAPTER 2</div>
              <h2 className="text-3xl font-bold text-slate-900">The Conflict</h2>
            </div>
          </div>

          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            I got excited and started mapping the opportunity. But I quickly hit a wall:
          </p>

          {/* Blocker Alert */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-2">The Blocker</h3>
                <p className="text-lg text-red-800">
                  ICF (the coaching certification body) <strong>won't count AI hours</strong> toward certification.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-600 mb-12">
            This changed everything. I couldn't build a "replacement" for human supervision.
            The entire product direction needed rethinking.
          </p>

          {/* Three Options */}
          <h3 className="text-xl font-semibold text-slate-900 mb-6">I had three options:</h3>

          <div className="space-y-4 mb-12">
            {/* Option A */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold">A</div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Ignore ICF, target non-certified coaches</div>
                <div className="text-sm text-slate-500">Risk: Small market, low willingness to pay</div>
              </div>
              <X className="w-6 h-6 text-slate-300" />
            </div>

            {/* Option B */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold">B</div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900">Fight for ICF recognition</div>
                <div className="text-sm text-slate-500">Risk: Years of lobbying, uncertain outcome</div>
              </div>
              <X className="w-6 h-6 text-slate-300" />
            </div>

            {/* Option C - Selected */}
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300 flex items-center gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-3 py-1 rounded-bl-lg font-semibold">
                CHOSEN
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">C</div>
              <div className="flex-1">
                <div className="font-semibold text-green-900">Reposition as a practice tool</div>
                <div className="text-sm text-green-700">Complement, not compete</div>
              </div>
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
          </div>

          {/* Decision Box */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-indigo-200 text-sm font-semibold mb-3">MY DECISION</div>
            <p className="text-2xl font-semibold leading-snug">
              Don't replace supervision.
              <br />
              Give coaches unlimited practice reps between their monthly sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Strategy */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Chapter Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <div className="text-indigo-600 text-sm font-semibold tracking-wider">CHAPTER 3</div>
              <h2 className="text-3xl font-bold text-slate-900">The Strategy</h2>
            </div>
          </div>

          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            With positioning clear, I defined the value proposition:
          </p>

          {/* Positioning Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* We Are */}
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-green-900">What We Are</h3>
              </div>
              <ul className="space-y-4">
                {['Unlimited practice reps', 'Instant AI feedback', 'Safe space to fail', '$79/year'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-green-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* We're Not */}
            <div className="bg-slate-100 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <X className="w-6 h-6 text-slate-400" />
                <h3 className="text-lg font-bold text-slate-600">What We're NOT</h3>
              </div>
              <ul className="space-y-4">
                {['Certification credit', 'Human judgment', 'Performance review', '$200/hour'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full" />
                    <span className="text-slate-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Target Users */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 flex items-center gap-8">
            <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Users className="w-10 h-10 text-indigo-600" />
            </div>
            <div>
              <div className="text-indigo-600 text-sm font-semibold mb-1">TARGET USERS</div>
              <div className="text-3xl font-bold text-slate-900 mb-2">71,000+ ICF Coaches</div>
              <p className="text-slate-600">
                Especially <strong>trainees & new ACC coaches</strong> — most practice-hungry & price-sensitive
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: The Solution */}
      <section className="py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Chapter Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-indigo-200 text-sm font-semibold tracking-wider">CHAPTER 4</div>
              <h2 className="text-3xl font-bold">The Solution</h2>
            </div>
          </div>

          <p className="text-xl text-indigo-100 mb-12">
            Two features that work together:
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Play className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Simulate Practice</h3>
              <ul className="space-y-3 text-indigo-100">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Practice with AI clients anytime</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Real-time feedback as you coach</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Based on ICF's 8 Core Competencies</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Session Review</h3>
              <ul className="space-y-3 text-indigo-100">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Upload real coaching recordings</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>AI analyzes your performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Track progress over time</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA to Prototype */}
          <div className="text-center">
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:shadow-2xl hover:shadow-white/20 transition-all"
            >
              <Play className="w-5 h-5" />
              Try the Prototype
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Chapter 5: Design Decisions */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          {/* Chapter Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-purple-600 text-sm font-semibold tracking-wider">CHAPTER 5</div>
              <h2 className="text-3xl font-bold text-slate-900">Key Design Decisions</h2>
            </div>
          </div>

          <p className="text-xl text-slate-600 mb-12">
            Every feature had trade-offs. Here's how I navigated them:
          </p>

          {/* Decision Cards */}
          <div className="space-y-8">
            {/* Decision 1 */}
            <DesignDecisionCard
              number={1}
              title="Real-time feedback without disruption"
              problem="Coaches need feedback, but interrupting the conversation breaks the flow."
              attempts={[
                { approach: 'Pop-up notifications', result: 'Too distracting', failed: true },
                { approach: 'Post-session only', result: 'Too late', failed: false },
              ]}
              solution="A collapsible sidebar showing live stats. Coaches can glance without breaking eye contact."
            />

            {/* Decision 2 */}
            <DesignDecisionCard
              number={2}
              title="Building trust with skeptical users"
              problem="Coaches are skeptical of AI evaluating their 'soft skills.'"
              attempts={[
                { approach: 'Generic AI feedback', result: 'Felt arbitrary', failed: true },
                { approach: 'Star ratings', result: 'Too gamified', failed: false },
              ]}
              solution="Ground everything in ICF's official framework. Include timestamps, specific quotes, and ICF definitions. Make it educational, not judgmental."
            />

            {/* Decision 3 */}
            <DesignDecisionCard
              number={3}
              title="Making practice feel real"
              problem="Practicing with AI can feel artificial and repetitive."
              attempts={[
                { approach: 'Single persona', result: 'Got boring fast', failed: true },
                { approach: 'Random scenarios', result: 'No progression', failed: false },
              ]}
              solution="6 distinct personas with difficulty levels (Beginner → Advanced). Customizable emotional states. Each session feels different."
            />
          </div>
        </div>
      </section>

      {/* Chapter 6: Reflection */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Reflection</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* What Worked */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">What Worked</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Starting with market research before design',
                  'Finding a comparable business (SimCare) to validate the model',
                  'Repositioning when I hit the ICF constraint',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Next */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-amber-400">What I'd Explore Next</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Voice interface (coaching is conversational)',
                  'User testing with real coaches',
                  'AI fine-tuning on actual coaching transcripts',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI Note */}
          <div className="bg-indigo-500/20 rounded-3xl p-8 border border-indigo-500/30">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-indigo-400" />
              <h3 className="text-lg font-semibold text-indigo-300">On Working with AI</h3>
            </div>
            <p className="text-xl text-slate-200 leading-relaxed">
              This project would take a traditional team <strong className="text-white">3-4 months</strong>.
              I did it in <strong className="text-white">4 weeks</strong> by using AI as a research partner
              and design accelerator — while keeping the strategic thinking that only humans can do.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">See It In Action</h2>
          <p className="text-xl text-slate-600 mb-12">
            Explore the full interactive prototype
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
            >
              <Play className="w-5 h-5" />
              View Prototype
            </button>
            <button
              onClick={() => navigate('/case-study')}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              See All 20 Styles
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-slate-500">
            Case Study by <strong className="text-slate-700">Ru Liang</strong> · 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

// Design Decision Card Component
function DesignDecisionCard({
  number,
  title,
  problem,
  attempts,
  solution
}: {
  number: number;
  title: string;
  problem: string;
  attempts: Array<{ approach: string; result: string; failed: boolean }>;
  solution: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
      <div className="flex items-start gap-6">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-xl font-bold text-purple-600">{number}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>

          {/* Problem */}
          <div className="mb-6">
            <div className="text-sm font-semibold text-slate-500 mb-2">THE PROBLEM</div>
            <p className="text-slate-700">{problem}</p>
          </div>

          {/* What I Tried */}
          <div className="mb-6">
            <div className="text-sm font-semibold text-slate-500 mb-2">WHAT I TRIED</div>
            <div className="flex flex-wrap gap-3">
              {attempts.map((attempt, i) => (
                <div
                  key={i}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    attempt.failed
                      ? 'bg-red-50 text-red-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  <strong>{attempt.approach}</strong> → {attempt.result}
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <div className="flex items-center gap-2 text-green-700 font-semibold text-sm mb-2">
              <CheckCircle className="w-4 h-4" />
              THE SOLUTION
            </div>
            <p className="text-green-800">{solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
