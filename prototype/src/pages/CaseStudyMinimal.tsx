import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Mic, Send } from 'lucide-react';

export default function CaseStudyMinimal() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Prototype</span>
          </button>
          <div className="text-sm text-gray-400">Case Study</div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-gray-400 mb-6 tracking-widest uppercase">Product Design · 2026</p>
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-8">
            AI Coach Mentor
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            I found a gap in a $4.5B market and built a prototype in 4 weeks.
            This is the story of how I designed an AI practice tool for professional coaches.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Role</p>
              <p className="text-gray-900">Product Designer</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Timeline</p>
              <p className="text-gray-900">4 Weeks</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Scope</p>
              <p className="text-gray-900">0→1 Design, Strategy</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Market Size</p>
              <p className="text-gray-900">$5-7M Opportunity</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Spark */}
      <section className="py-24 px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">01 — The Spark</p>
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            Who helps the helpers?
          </h2>

          <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
            <p>
              I was researching the coaching industry when I stumbled on a paradox:
              Coaches help others grow. But who helps the coaches grow?
            </p>
            <p>
              The answer: supervision sessions at <strong className="text-gray-900 font-normal">$150-300/hour</strong>.
              Most coaches can only afford one session per month. By the time they discuss
              a difficult case, it's already weeks old.
            </p>
            <p>
              Then I discovered SimCare AI — a YC-backed startup that lets therapy
              students practice with AI patients. They raised $4.5M and were
              generating $4M in revenue.
            </p>
          </div>

          {/* Insight Card */}
          <div className="mt-16 p-8 bg-[#F2FCE2] rounded-sm">
            <p className="text-sm text-gray-600 mb-2">My Insight</p>
            <p className="text-xl text-gray-900 font-light">
              Everyone builds AI to coach people. Nobody builds AI to coach the coaches.
            </p>
          </div>
        </div>
      </section>

      {/* Market Gap Visual */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">Market Landscape</p>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="text-lg text-gray-900 mb-8">AI for Coachees ✓</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600">Rocky.ai — AI coaching for individuals</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600">Coachello — Enterprise AI coaching</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600">CoachHub — Human + AI hybrid</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg text-gray-900 mb-8">AI for Coaches ?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-400">Practice Tool — Empty market</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-400">Real-time Feedback — Empty market</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-400">Skill Tracking — Limited options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">02 — The Challenge</p>
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            A regulatory wall
          </h2>

          <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
            <p>
              I got excited and started mapping the opportunity. But I quickly hit a wall:
            </p>
          </div>

          {/* Warning */}
          <div className="my-12 py-6 border-l-2 border-red-400 pl-8">
            <p className="text-lg text-gray-900">
              ICF (the coaching certification body) won't count AI hours toward certification.
            </p>
          </div>

          <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
            <p>
              This changed everything. I couldn't build a "replacement" for human supervision.
              The entire product direction needed rethinking.
            </p>
          </div>
        </div>
      </section>

      {/* Decision */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">The Pivot</p>
          <h3 className="text-2xl font-light text-gray-900 mb-12">I had three options</h3>

          <div className="space-y-6">
            <div className="flex gap-6 py-6 border-b border-gray-200">
              <span className="text-gray-300 font-light">A</span>
              <div>
                <p className="text-gray-900">Ignore ICF, target non-certified coaches</p>
                <p className="text-sm text-gray-400 mt-1">Risk: Small market, low willingness to pay</p>
              </div>
            </div>
            <div className="flex gap-6 py-6 border-b border-gray-200">
              <span className="text-gray-300 font-light">B</span>
              <div>
                <p className="text-gray-900">Fight for ICF recognition</p>
                <p className="text-sm text-gray-400 mt-1">Risk: Years of lobbying, uncertain outcome</p>
              </div>
            </div>
            <div className="flex gap-6 py-6 border-b border-gray-200 bg-[#F2FCE2] -mx-6 px-6">
              <span className="text-gray-600 font-light">C</span>
              <div>
                <p className="text-gray-900 font-medium">Reposition as a practice tool</p>
                <p className="text-sm text-gray-600 mt-1">Complement, not compete with human supervision</p>
              </div>
            </div>
          </div>

          <p className="mt-12 text-lg text-gray-600 font-light">
            Don't replace supervision. Give coaches unlimited practice reps between
            their monthly sessions.
          </p>
        </div>
      </section>

      {/* The Strategy */}
      <section className="py-24 px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">03 — The Strategy</p>
          <h2 className="text-3xl font-light text-gray-900 mb-16">
            Positioning
          </h2>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-6">What We Are</h3>
              <ul className="space-y-4 text-gray-900">
                <li>Unlimited practice reps</li>
                <li>Instant AI feedback</li>
                <li>Safe space to fail</li>
                <li>$79/year</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-6">What We're Not</h3>
              <ul className="space-y-4 text-gray-400">
                <li>Certification credit</li>
                <li>Human judgment</li>
                <li>Performance review</li>
                <li>$200/hour</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-100">
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Target Users</p>
            <p className="text-xl text-gray-900 font-light">
              71,000+ ICF Coaches — especially trainees and new ACC coaches
              who are most practice-hungry and price-sensitive.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">04 — The Solution</p>
          <h2 className="text-3xl font-light mb-16">Two core features</h2>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-light mb-4">Simulate Practice</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>→ Practice with AI clients anytime</li>
                <li>→ Real-time feedback as you coach</li>
                <li>→ Based on ICF's 8 Core Competencies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Session Review</h3>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>→ Upload real coaching recordings</li>
                <li>→ AI analyzes your performance</li>
                <li>→ Track progress over time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Decisions */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">05 — Design Decisions</p>
          <h2 className="text-3xl font-light text-gray-900 mb-20">Key decisions</h2>

          {/* Decision 1 */}
          <div className="mb-24">
            <h3 className="text-xl text-gray-900 font-light mb-8">
              Real-time feedback without disruption
            </h3>

            <div className="grid grid-cols-2 gap-16">
              <div className="space-y-6 text-gray-600 font-light">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Problem</p>
                  <p>Coaches need feedback, but interrupting the conversation breaks the flow.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">What I tried</p>
                  <p>Pop-up notifications → Too distracting. Post-session only → Too late.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Solution</p>
                  <p>A collapsible sidebar showing live stats. Coaches can glance without breaking flow.</p>
                </div>
              </div>

              {/* Wireframe */}
              <div className="bg-gray-100 rounded-sm p-6">
                <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                    <div className="text-sm text-gray-600">Practice Session</div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>05:32</span>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-1 p-4 space-y-3">
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded px-3 py-2 text-sm text-gray-600 max-w-[80%]">
                          I feel stuck in my career...
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-gray-900 rounded px-3 py-2 text-sm text-white max-w-[80%]">
                          What does "stuck" mean to you?
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100">
                        <Mic className="w-4 h-4 text-gray-300" />
                        <div className="flex-1 bg-gray-50 rounded px-3 py-2 text-sm text-gray-400">Type...</div>
                        <Send className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="w-36 bg-gray-50 border-l border-gray-100 p-3">
                      <div className="text-xs text-gray-400 mb-3">Live Tips</div>
                      <div className="bg-[#F2FCE2] rounded-sm p-2 text-xs text-gray-700 mb-3">
                        ✓ Great open question
                      </div>
                      <div className="text-xs text-gray-400 mb-1">Talk Ratio</div>
                      <div className="flex h-1 rounded overflow-hidden mb-3">
                        <div className="w-[35%] bg-gray-900"></div>
                        <div className="w-[65%] bg-gray-200"></div>
                      </div>
                      <div className="text-xs text-gray-400">Open Q's: 4/5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision 2 */}
          <div className="mb-24">
            <h3 className="text-xl text-gray-900 font-light mb-8">
              Building trust with skeptical users
            </h3>

            <div className="grid grid-cols-2 gap-16">
              <div className="space-y-6 text-gray-600 font-light">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Problem</p>
                  <p>Coaches are skeptical of AI evaluating their "soft skills."</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">What I tried</p>
                  <p>Generic AI feedback → Felt arbitrary. Star ratings → Too gamified.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Solution</p>
                  <p>Ground everything in ICF's official framework with timestamps and specific quotes.</p>
                </div>
              </div>

              {/* Wireframe */}
              <div className="bg-gray-100 rounded-sm p-6">
                <div className="bg-white rounded-sm shadow-sm p-5">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-600">ICF Core Skills</div>
                    <div className="text-2xl font-light text-gray-900">78</div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Active Listening</span>
                        <span className="text-gray-400">80%</span>
                      </div>
                      <div className="h-1 bg-gray-100 rounded">
                        <div className="h-1 bg-gray-900 rounded w-[80%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Powerful Questions</span>
                        <span className="text-gray-400">60%</span>
                      </div>
                      <div className="h-1 bg-gray-100 rounded">
                        <div className="h-1 bg-gray-900 rounded w-[60%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-5 border-t border-gray-100">
                    <div className="bg-[#F2FCE2] rounded-sm p-3">
                      <div className="text-xs text-gray-600 mb-1">03:28 — Great Use of Silence</div>
                      <div className="text-xs text-gray-500">Client had breakthrough insight after 8s pause</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision 3 */}
          <div>
            <h3 className="text-xl text-gray-900 font-light mb-8">
              Making practice feel real
            </h3>

            <div className="grid grid-cols-2 gap-16">
              <div className="space-y-6 text-gray-600 font-light">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Problem</p>
                  <p>Practicing with AI can feel artificial and repetitive.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">What I tried</p>
                  <p>Single persona → Got boring fast. Random scenarios → No progression.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Solution</p>
                  <p>6 distinct personas with difficulty levels. Customizable emotional states.</p>
                </div>
              </div>

              {/* Wireframe */}
              <div className="bg-gray-100 rounded-sm p-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-sm p-4 border-2 border-gray-900">
                    <div className="text-sm text-gray-900 mb-1">Li Wei</div>
                    <div className="text-xs text-gray-500 mb-2">Career Anxiety</div>
                    <div className="text-xs text-gray-400 bg-gray-50 rounded-sm px-2 py-1 inline-block">Beginner</div>
                  </div>
                  <div className="bg-white rounded-sm p-4">
                    <div className="text-sm text-gray-900 mb-1">Zhang Min</div>
                    <div className="text-xs text-gray-500 mb-2">Leadership</div>
                    <div className="text-xs text-gray-400 bg-gray-50 rounded-sm px-2 py-1 inline-block">Intermediate</div>
                  </div>
                  <div className="bg-white rounded-sm p-4">
                    <div className="text-sm text-gray-900 mb-1">Wang Fang</div>
                    <div className="text-xs text-gray-500 mb-2">Work-Life</div>
                    <div className="text-xs text-gray-400 bg-gray-50 rounded-sm px-2 py-1 inline-block">Beginner</div>
                  </div>
                  <div className="bg-white rounded-sm p-4">
                    <div className="text-sm text-gray-900 mb-1">Zhao Qiang</div>
                    <div className="text-xs text-gray-500 mb-2">Burnout</div>
                    <div className="text-xs text-gray-400 bg-gray-50 rounded-sm px-2 py-1 inline-block">Advanced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">06 — Reflection</p>
          <h2 className="text-3xl font-light text-gray-900 mb-16">What I learned</h2>

          <div className="grid grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-6">What Worked</h3>
              <ul className="space-y-4 text-gray-600 font-light">
                <li>Starting with market research before design</li>
                <li>Finding a comparable business to validate the model</li>
                <li>Repositioning when I hit constraints</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-6">Next Steps</h3>
              <ul className="space-y-4 text-gray-600 font-light">
                <li>Voice interface (coaching is conversational)</li>
                <li>User testing with real coaches</li>
                <li>AI fine-tuning on actual transcripts</li>
              </ul>
            </div>
          </div>

          <div className="p-8 bg-white rounded-sm">
            <p className="text-sm text-gray-400 mb-4">On Working with AI</p>
            <p className="text-lg text-gray-900 font-light">
              This project would take a traditional team 3-4 months. I did it in 4 weeks by
              using AI as a research partner and design accelerator — while keeping the
              strategic thinking that only humans can do.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">See the Prototype</h2>
          <p className="text-gray-500 font-light mb-8">Explore the full interactive prototype</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors"
          >
            View Prototype
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-400">
          Case Study · 2026
        </div>
      </footer>
    </div>
  );
}
