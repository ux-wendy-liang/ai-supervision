import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, MessageSquare, CheckCircle, AlertCircle, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { useState } from 'react';

const skills = [
  {
    name: 'Active Listening',
    score: 80,
    change: '+5%',
    good: ['Allowed client to speak 65% of the time (target >60%)', 'Accurately paraphrased key points 3 times', 'Caught emotional shift at 04:20 and responded'],
    improve: ['Interrupted client at 02:15 and 08:30 (2 times total)', 'Missed exploring feeling when client said "I feel..."'],
    tip: 'Try waiting 3-5 seconds before responding when client pauses mid-thought.',
    definition: 'Fully focusing on what the client is saying and not saying, understanding the meaning in context, and supporting client self-expression.',
  },
  {
    name: 'Powerful Questions',
    score: 60,
    change: '+2%',
    good: ['Used "What" questions effectively', 'Asked about underlying feelings'],
    improve: ['Gave advice at 02:20 instead of asking a question', 'Asked back-to-back questions without pause'],
    tip: 'Transform advice into questions: Instead of "Have you tried..." ask "What have you considered?"',
    definition: 'Asks questions that reveal information needed for maximum benefit to the coaching relationship and the client.',
  },
  {
    name: 'Evoking Awareness',
    score: 70,
    change: '+8%',
    good: ['Helped client discover "fear of disappointing family" pattern', 'Good use of silence at 03:25'],
    improve: ['Could explore the "family disappointment" theme deeper'],
    tip: 'When a pattern emerges, ask "What does this pattern tell you about yourself?"',
    definition: 'Facilitates client insight and learning by using tools and techniques such as powerful questioning, silence, metaphor, or analogy.',
  },
  {
    name: 'Facilitating Growth',
    score: 50,
    change: '+3%',
    good: ['Client showed awareness of deeper issue'],
    improve: ['Did not establish clear action items', 'Session ended without commitment'],
    tip: 'End sessions with: "What\'s one small step you can take this week?"',
    definition: 'Partners with the client to transform learning and insight into action, promoting client autonomy in the coaching process.',
  },
];

const transcript = [
  { time: '00:30', speaker: 'Coach', text: 'What would you like to explore today?', feedback: null },
  { time: '00:35', speaker: 'Client', text: "I've been feeling really stressed about work lately...", feedback: null },
  { time: '00:50', speaker: 'Coach', text: 'It sounds like you\'re carrying a lot. Can you tell me more about what\'s causing this stress?', feedback: { type: 'good', text: 'Great empathy + open question' } },
  { time: '01:20', speaker: 'Client', text: "My boss keeps giving me more tasks but I can't say no...", feedback: null },
  { time: '01:35', speaker: 'Coach', text: 'What does "can\'t say no" mean to you?', feedback: { type: 'good', text: 'Powerful clarifying question' } },
  { time: '02:10', speaker: 'Client', text: "I'm afraid they'll think I can't handle it...", feedback: null },
  { time: '02:20', speaker: 'Coach', text: 'Have you tried talking to your boss about the workload?', feedback: { type: 'improve', text: 'This is advice, not a question. Try: "What options do you see for addressing this?"' } },
  { time: '03:00', speaker: 'Client', text: "No, I'm scared...", feedback: null },
  { time: '03:05', speaker: 'Coach', text: 'What are you scared of?', feedback: null },
  { time: '03:10', speaker: 'Client', text: 'That they\'ll think I\'m not capable...', feedback: null },
  { time: '03:20', speaker: 'Coach', text: '(silence)', feedback: null },
  { time: '03:28', speaker: '', text: '(8 seconds of silence)', feedback: { type: 'good', text: 'Great use of silence - gave client space to think' } },
  { time: '03:33', speaker: 'Client', text: 'Actually... I think I\'ve always cared too much about what others think of me.', feedback: null },
  { time: '03:45', speaker: 'Coach', text: 'That\'s an interesting insight. When did you first notice this pattern?', feedback: { type: 'good', text: 'Powerful question - explores deeper pattern' } },
];

export default function Report() {
  const navigate = useNavigate();
  const [expandedSkill, setExpandedSkill] = useState<string | null>('Active Listening');
  const [activeTab, setActiveTab] = useState<'overview' | 'transcript'>('overview');

  const overallScore = Math.round(skills.reduce((acc, s) => acc + s.score, 0) / skills.length);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Practice Report</h1>
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  Career Change Anxiety
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  18 minutes
                </span>
                <span>January 6, 2026</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-indigo-600">{overallScore}</div>
            <div className="text-sm text-gray-500">Overall Score</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${
              activeTab === 'overview'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Overview & Feedback
          </button>
          <button
            onClick={() => setActiveTab('transcript')}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${
              activeTab === 'transcript'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Transcript with Comments
          </button>
        </div>
      </div>

      <div className="p-8">
        {activeTab === 'overview' ? (
          <div className="grid grid-cols-3 gap-6">
            {/* Skills Column */}
            <div className="col-span-2 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">ICF Core Skills Assessment</h2>
              {skills.map((skill) => (
                <div key={skill.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-gray-900">{skill.score}%</div>
                      <div>
                        <div className="font-medium text-gray-900">{skill.name}</div>
                        <div className="text-sm text-green-600">{skill.change} from last time</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                          style={{ width: `${skill.score}%` }}
                        />
                      </div>
                      {expandedSkill === skill.name ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {expandedSkill === skill.name && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-4 grid grid-cols-2 gap-4">
                        {/* Good Points */}
                        <div className="bg-green-50 rounded-xl p-4">
                          <div className="flex items-center gap-2 text-green-700 font-medium mb-3">
                            <CheckCircle className="w-5 h-5" />
                            What You Did Well
                          </div>
                          <ul className="space-y-2">
                            {skill.good.map((item, idx) => (
                              <li key={idx} className="text-sm text-green-800 flex items-start gap-2">
                                <span className="text-green-500 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Improvements */}
                        <div className="bg-amber-50 rounded-xl p-4">
                          <div className="flex items-center gap-2 text-amber-700 font-medium mb-3">
                            <AlertCircle className="w-5 h-5" />
                            Areas to Improve
                          </div>
                          <ul className="space-y-2">
                            {skill.improve.map((item, idx) => (
                              <li key={idx} className="text-sm text-amber-800 flex items-start gap-2">
                                <span className="text-amber-500 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tip */}
                      <div className="mt-4 bg-indigo-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-indigo-700 font-medium mb-2">
                          💡 Try This Next Time
                        </div>
                        <p className="text-sm text-indigo-800">{skill.tip}</p>
                      </div>

                      {/* Definition */}
                      <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
                        <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">ICF Definition:</span> {skill.definition}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Summary Sidebar */}
            <div className="space-y-6">
              {/* Key Moments */}
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Key Moments</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-green-800">03:28 - Great Silence</div>
                      <div className="text-xs text-green-700">Client had breakthrough insight</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-green-800">03:45 - Powerful Question</div>
                      <div className="text-xs text-green-700">Explored deeper pattern</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-amber-800">02:20 - Gave Advice</div>
                      <div className="text-xs text-amber-700">Could have asked a question</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Session Summary */}
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Session Summary</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-gray-500 mb-1">Topic</div>
                    <div className="text-gray-900">Work stress → Fear of judgment</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Client Breakthrough</div>
                    <div className="text-gray-900">Realized pattern of caring too much about others' opinions</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Talk Ratio</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden flex">
                        <div className="w-[35%] bg-indigo-500"></div>
                        <div className="w-[65%] bg-purple-300"></div>
                      </div>
                      <span className="text-gray-900">35/65</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => navigate('/practice')}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                >
                  Practice Again
                </button>
                <button className="w-full py-3 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Transcript Tab */
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Full Transcript with AI Feedback</h2>
            <div className="space-y-4">
              {transcript.map((item, idx) => (
                <div key={idx} className={`flex gap-4 ${item.speaker === '' ? 'justify-center' : ''}`}>
                  {item.speaker !== '' && (
                    <>
                      <div className="w-16 text-sm text-gray-400 font-mono pt-1">{item.time}</div>
                      <div className="flex-1">
                        <div className={`inline-block px-4 py-2 rounded-xl ${
                          item.speaker === 'Coach'
                            ? 'bg-indigo-100 text-indigo-900'
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <div className="text-xs font-medium mb-1 opacity-70">{item.speaker}</div>
                          {item.text}
                        </div>
                        {item.feedback && (
                          <div className={`mt-2 flex items-start gap-2 text-sm ${
                            item.feedback.type === 'good' ? 'text-green-700' : 'text-amber-700'
                          }`}>
                            {item.feedback.type === 'good' ? (
                              <CheckCircle className="w-4 h-4 mt-0.5" />
                            ) : (
                              <AlertCircle className="w-4 h-4 mt-0.5" />
                            )}
                            {item.feedback.text}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                  {item.speaker === '' && (
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-gray-400 font-mono">{item.time}</div>
                      <div className="text-sm text-gray-500 italic">{item.text}</div>
                      {item.feedback && (
                        <div className="text-sm text-green-600 flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          {item.feedback.text}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
