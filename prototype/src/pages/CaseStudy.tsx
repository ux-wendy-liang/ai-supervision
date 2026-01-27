import { useNavigate } from 'react-router-dom';
import { ArrowRight, Lightbulb, AlertTriangle, CheckCircle, MessageSquare, Target, Users, TrendingUp, Clock, Mic, Send } from 'lucide-react';

export default function CaseStudy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-indigo-300 text-sm font-medium mb-4">CASE STUDY · 2026</div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            AI Coach Mentor
          </h1>
          <p className="text-2xl text-slate-300 mb-8">
            How I found a gap in a $4.5B market and built a prototype in 4 weeks
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl font-bold text-white">$5-7M</div>
              <div className="text-slate-400 text-sm mt-1">Market opportunity identified</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl font-bold text-white">4 weeks</div>
              <div className="text-slate-400 text-sm mt-1">Research → Prototype (vs 3-4 months)</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl font-bold text-white">$4M ARR</div>
              <div className="text-slate-400 text-sm mt-1">Validated by SimCare AI's success</div>
            </div>
          </div>

          <div className="flex gap-4 mt-8 text-sm text-slate-400">
            <span className="px-3 py-1 bg-white/10 rounded-full">Product Strategy</span>
            <span className="px-3 py-1 bg-white/10 rounded-full">0→1 Design</span>
            <span className="px-3 py-1 bg-white/10 rounded-full">AI-Powered Workflow</span>
          </div>
        </div>
      </section>

      {/* Chapter 1: The Spark */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 text-indigo-600 font-medium mb-4">
          <Lightbulb className="w-5 h-5" />
          <span>CHAPTER 1</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Spark</h2>

        <div className="prose prose-lg text-slate-600 mb-12">
          <p>I was researching the coaching industry when I stumbled on a paradox:</p>
        </div>

        <blockquote className="text-2xl font-medium text-slate-800 border-l-4 border-indigo-500 pl-6 my-8">
          "Coaches help others grow. But who helps the coaches grow?"
        </blockquote>

        <div className="prose prose-lg text-slate-600 mb-12">
          <p>
            The answer: supervision sessions at <strong>$150-300/hour</strong>. Most coaches can only
            afford one session per month. By the time they discuss a difficult case, it's already weeks old.
          </p>
          <p>
            Then I discovered <strong>SimCare AI</strong> — a YC-backed startup that lets therapy students
            practice with AI patients. They raised $4.5M and were generating $4M in revenue.
          </p>
        </div>

        {/* Market Map Wireframe */}
        <div className="bg-slate-50 rounded-2xl p-8 my-12">
          <div className="text-sm font-medium text-slate-500 mb-4">MARKET LANDSCAPE</div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-lg font-semibold text-slate-800 mb-4">AI for Coachees ✓</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg"></div>
                  <div>
                    <div className="font-medium text-slate-800">Rocky.ai</div>
                    <div className="text-sm text-slate-500">AI coaching for individuals</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-200">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg"></div>
                  <div>
                    <div className="font-medium text-slate-800">Coachello</div>
                    <div className="text-sm text-slate-500">Enterprise AI coaching</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-200">
                  <div className="w-10 h-10 bg-green-100 rounded-lg"></div>
                  <div>
                    <div className="font-medium text-slate-800">CoachHub</div>
                    <div className="text-sm text-slate-500">Human + AI hybrid</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-800 mb-4">AI for Coaches ?</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-red-50 rounded-lg p-3 border-2 border-dashed border-red-200">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-400">?</div>
                  <div>
                    <div className="font-medium text-red-600">Practice Tool</div>
                    <div className="text-sm text-red-400">Empty market</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-red-50 rounded-lg p-3 border-2 border-dashed border-red-200">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-400">?</div>
                  <div>
                    <div className="font-medium text-red-600">Real-time Feedback</div>
                    <div className="text-sm text-red-400">Empty market</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-amber-50 rounded-lg p-3 border border-amber-200">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-500">~</div>
                  <div>
                    <div className="font-medium text-amber-700">Skill Tracking</div>
                    <div className="text-sm text-amber-500">Limited options</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-indigo-50 rounded-xl text-center">
            <div className="text-indigo-800 font-medium">💡 My Insight</div>
            <div className="text-indigo-600 mt-1">Everyone builds AI to coach people. Nobody builds AI to coach the coaches.</div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Conflict */}
      <section className="bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 text-amber-600 font-medium mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span>CHAPTER 2</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">The Conflict</h2>

          <div className="prose prose-lg text-slate-600 mb-8">
            <p>I got excited and started mapping the opportunity. But I quickly hit a wall:</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <div className="text-red-800 font-medium text-lg">
              ⚠️ ICF (the coaching certification body) won't count AI hours toward certification.
            </div>
          </div>

          <div className="prose prose-lg text-slate-600 mb-12">
            <p>
              This changed everything. I couldn't build a "replacement" for human supervision.
              The entire product direction needed rethinking.
            </p>
          </div>

          {/* Decision Matrix */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-sm font-medium text-slate-500 mb-6">I HAD THREE OPTIONS</div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-medium">A</div>
                <div className="flex-1">
                  <div className="font-medium text-slate-800">Ignore ICF, target non-certified coaches</div>
                  <div className="text-sm text-slate-500 mt-1">Risk: Small market, low willingness to pay</div>
                </div>
                <div className="text-slate-400">✗</div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-medium">B</div>
                <div className="flex-1">
                  <div className="font-medium text-slate-800">Fight for ICF recognition</div>
                  <div className="text-sm text-slate-500 mt-1">Risk: Years of lobbying, uncertain outcome</div>
                </div>
                <div className="text-slate-400">✗</div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border-2 border-green-200">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">C</div>
                <div className="flex-1">
                  <div className="font-medium text-green-800">Reposition as a practice tool</div>
                  <div className="text-sm text-green-600 mt-1">Complement, not compete</div>
                </div>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <div className="mt-6 p-4 bg-indigo-50 rounded-xl">
              <div className="text-indigo-800 font-medium">My Decision</div>
              <div className="text-indigo-600 mt-1">Don't replace supervision. Give coaches unlimited practice reps between their monthly sessions.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Strategy */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 text-indigo-600 font-medium mb-4">
          <Target className="w-5 h-5" />
          <span>CHAPTER 3</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">The Strategy</h2>

        {/* Positioning Table */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-green-50 rounded-2xl p-6">
            <div className="text-green-800 font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              What We Are
            </div>
            <ul className="space-y-3 text-green-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Unlimited practice reps
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Instant AI feedback
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Safe space to fail
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                $79/year
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 rounded-2xl p-6">
            <div className="text-slate-600 font-semibold mb-4 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-slate-400"></div>
              What We're NOT
            </div>
            <ul className="space-y-3 text-slate-500">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                Certification credit
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                Human judgment
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                Performance review
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                $200/hour
              </li>
            </ul>
          </div>
        </div>

        {/* Target Users */}
        <div className="bg-indigo-50 rounded-2xl p-8">
          <div className="text-sm font-medium text-indigo-600 mb-4">TARGET USERS</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-indigo-500" />
              <div>
                <div className="font-semibold text-slate-800">71,000+ ICF Coaches</div>
                <div className="text-sm text-slate-600">Especially trainees & new ACC coaches</div>
              </div>
            </div>
            <div className="text-slate-400">•</div>
            <div className="text-indigo-700">Most practice-hungry & price-sensitive</div>
          </div>
        </div>
      </section>

      {/* Chapter 4: The Solution */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 text-indigo-200 font-medium mb-4">
            <MessageSquare className="w-5 h-5" />
            <span>CHAPTER 4</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">The Solution</h2>

          <div className="grid grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Simulate Practice</h3>
              <ul className="space-y-2 text-indigo-100">
                <li>→ Practice with AI clients anytime</li>
                <li>→ Real-time feedback as you coach</li>
                <li>→ Based on ICF's 8 Core Competencies</li>
              </ul>
            </div>
            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Session Review</h3>
              <ul className="space-y-2 text-indigo-100">
                <li>→ Upload real coaching recordings</li>
                <li>→ AI analyzes your performance</li>
                <li>→ Track progress over time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 5: Design Decisions */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 text-indigo-600 font-medium mb-4">
          <TrendingUp className="w-5 h-5" />
          <span>CHAPTER 5</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Key Design Decisions</h2>

        {/* Decision 1 */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Decision 1: Real-time feedback without disruption
          </h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-slate-600 mb-4">
                <strong className="text-slate-800">The problem:</strong> Coaches need feedback,
                but interrupting the conversation breaks the flow.
              </div>
              <div className="text-slate-600 mb-4">
                <strong className="text-slate-800">What I tried:</strong>
                <span className="text-red-500"> Pop-up notifications → Too distracting.</span>
                <span className="text-amber-500"> Post-session only → Too late.</span>
              </div>
              <div className="text-slate-600">
                <strong className="text-green-600">The solution:</strong> A collapsible sidebar
                showing live stats. Coaches can glance without breaking eye contact.
              </div>
            </div>
            {/* Wireframe */}
            <div className="bg-slate-100 rounded-2xl p-4">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Mini header */}
                <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-200 rounded"></div>
                    <div className="text-sm font-medium text-slate-600">Practice Session</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>05:32</span>
                  </div>
                </div>
                <div className="flex">
                  {/* Chat area */}
                  <div className="flex-1 p-3 space-y-2">
                    <div className="flex justify-start">
                      <div className="bg-slate-100 rounded-lg px-3 py-2 text-xs text-slate-600 max-w-[70%]">
                        I feel stuck in my career...
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-indigo-500 rounded-lg px-3 py-2 text-xs text-white max-w-[70%]">
                        What does "stuck" mean to you?
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-100">
                      <Mic className="w-4 h-4 text-slate-400" />
                      <div className="flex-1 bg-slate-50 rounded px-2 py-1 text-xs text-slate-400">Type...</div>
                      <Send className="w-4 h-4 text-indigo-500" />
                    </div>
                  </div>
                  {/* Sidebar */}
                  <div className="w-32 bg-slate-50 border-l border-slate-200 p-2">
                    <div className="text-xs font-medium text-slate-500 mb-2">Real-time Tips</div>
                    <div className="bg-green-50 rounded p-2 text-xs text-green-700 mb-2">
                      ✓ Great question!
                    </div>
                    <div className="text-xs text-slate-500 mb-1">Talk Ratio</div>
                    <div className="flex h-1.5 rounded overflow-hidden mb-2">
                      <div className="w-[35%] bg-indigo-500"></div>
                      <div className="w-[65%] bg-purple-200"></div>
                    </div>
                    <div className="text-xs text-slate-500 mb-1">Open Q's: 4/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decision 2 */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Decision 2: Building trust with skeptical users
          </h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-slate-600 mb-4">
                <strong className="text-slate-800">The problem:</strong> Coaches are skeptical
                of AI evaluating their "soft skills."
              </div>
              <div className="text-slate-600 mb-4">
                <strong className="text-slate-800">What I tried:</strong>
                <span className="text-red-500"> Generic AI feedback → Felt arbitrary.</span>
                <span className="text-amber-500"> Star ratings → Too gamified.</span>
              </div>
              <div className="text-slate-600">
                <strong className="text-green-600">The solution:</strong> Ground everything in
                ICF's official framework. Include timestamps, specific quotes, and ICF definitions.
              </div>
            </div>
            {/* Wireframe */}
            <div className="bg-slate-100 rounded-2xl p-4">
              <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-medium text-slate-800">ICF Core Skills</div>
                  <div className="text-2xl font-bold text-indigo-600">78</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-slate-600 w-28">Active Listening</div>
                    <div className="flex-1 bg-slate-100 rounded-full h-2">
                      <div className="bg-indigo-500 rounded-full h-2 w-[80%]"></div>
                    </div>
                    <div className="text-sm font-medium text-slate-800">80%</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-slate-600 w-28">Powerful Questions</div>
                    <div className="flex-1 bg-slate-100 rounded-full h-2">
                      <div className="bg-indigo-500 rounded-full h-2 w-[60%]"></div>
                    </div>
                    <div className="text-sm font-medium text-slate-800">60%</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-xs font-medium text-green-700 mb-1">✓ 03:28 - Great Use of Silence</div>
                    <div className="text-xs text-green-600">Client had breakthrough insight after 8s pause</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decision 3 */}
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Decision 3: Making practice feel real
          </h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-slate-600 mb-4">
                <strong className="text-slate-800">The problem:</strong> Practicing with AI
                can feel artificial and repetitive.
              </div>
              <div className="text-slate-600 mb-4">
                <strong className="text-slate-800">What I tried:</strong>
                <span className="text-red-500"> Single persona → Got boring fast.</span>
                <span className="text-amber-500"> Random scenarios → No progression.</span>
              </div>
              <div className="text-slate-600">
                <strong className="text-green-600">The solution:</strong> 6 distinct personas
                with difficulty levels (Beginner → Advanced). Customizable emotional states.
              </div>
            </div>
            {/* Wireframe */}
            <div className="bg-slate-100 rounded-2xl p-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white rounded-lg p-3 border-2 border-indigo-500">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg"></div>
                    <div>
                      <div className="text-xs font-medium text-slate-800">Li Wei</div>
                      <div className="text-xs text-indigo-600">Career Anxiety</div>
                    </div>
                  </div>
                  <div className="text-xs text-green-600 bg-green-50 rounded px-2 py-0.5 inline-block">Beginner</div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg"></div>
                    <div>
                      <div className="text-xs font-medium text-slate-800">Zhang Min</div>
                      <div className="text-xs text-purple-600">Leadership</div>
                    </div>
                  </div>
                  <div className="text-xs text-amber-600 bg-amber-50 rounded px-2 py-0.5 inline-block">Intermediate</div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-pink-100 rounded-lg"></div>
                    <div>
                      <div className="text-xs font-medium text-slate-800">Wang Fang</div>
                      <div className="text-xs text-pink-600">Work-Life</div>
                    </div>
                  </div>
                  <div className="text-xs text-green-600 bg-green-50 rounded px-2 py-0.5 inline-block">Beginner</div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-red-100 rounded-lg"></div>
                    <div>
                      <div className="text-xs font-medium text-slate-800">Zhao Qiang</div>
                      <div className="text-xs text-red-600">Burnout</div>
                    </div>
                  </div>
                  <div className="text-xs text-red-600 bg-red-50 rounded px-2 py-0.5 inline-block">Advanced</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 6: Reflection */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12">Reflection</h2>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-4">What worked</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  Starting with market research before design
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  Finding a comparable business (SimCare) to validate the model
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  Repositioning when I hit the ICF constraint
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-4">What I'd explore next</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  Voice interface (coaching is conversational)
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  User testing with real coaches
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-amber-400 mt-0.5" />
                  AI fine-tuning on actual coaching transcripts
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-500/20 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-indigo-300 mb-3">On Working with AI</h3>
            <p className="text-slate-300">
              This project would take a traditional team 3-4 months. I did it in <strong className="text-white">4 weeks</strong> by
              using AI as a research partner and design accelerator — while keeping the strategic
              thinking that only humans can do.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">See the Prototype</h2>
        <p className="text-slate-600 mb-8">Explore the full interactive prototype</p>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all inline-flex items-center gap-2"
        >
          View Prototype
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-slate-500 text-sm">
          Case Study by [Your Name] · 2026
        </div>
      </footer>
    </div>
  );
}
