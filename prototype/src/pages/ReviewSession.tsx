import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, FileText, MessageSquare, CheckCircle, AlertCircle, Download, Share, Edit3, ChevronDown, ChevronUp } from 'lucide-react';

const transcript = [
  { time: '00:30', speaker: 'Coach', text: 'Thanks for coming today. What would you like to focus on?', feedback: null },
  { time: '00:45', speaker: 'Client', text: "I've been struggling with my team lately. They just don't seem to listen to me.", feedback: null },
  { time: '01:05', speaker: 'Coach', text: "That sounds frustrating. Can you tell me more about what's happening?", feedback: { type: 'good', text: 'Empathy + open question' } },
  { time: '01:30', speaker: 'Client', text: "Every time I give instructions, they do things their own way. I've tried being more direct, but nothing works.", feedback: null },
  { time: '02:00', speaker: 'Coach', text: 'What do you think is behind their behavior?', feedback: { type: 'good', text: 'Powerful question - invites reflection' } },
  { time: '02:25', speaker: 'Client', text: "Honestly? I think they don't respect me as a leader.", feedback: null },
  { time: '02:40', speaker: 'Coach', text: 'You should try having one-on-one meetings with each team member.', feedback: { type: 'improve', text: 'Giving advice instead of exploring. Try: "What might help them see you as a leader?"' } },
  { time: '03:10', speaker: 'Client', text: "I've thought about that, but I'm not sure it will help...", feedback: null },
  { time: '03:25', speaker: 'Coach', text: 'What would "being respected as a leader" look like for you?', feedback: { type: 'good', text: 'Recovered with a powerful question' } },
  { time: '03:50', speaker: 'Client', text: "Hmm... I guess it would mean they trust my decisions, even if they disagree.", feedback: null },
  { time: '04:10', speaker: 'Coach', text: 'And how do you currently show them that their input matters?', feedback: { type: 'good', text: 'Great follow-up - explores their role' } },
  { time: '04:30', speaker: 'Client', text: "I... actually, I'm not sure I do. Maybe that's the problem.", feedback: null },
  { time: '04:35', speaker: 'Coach', text: '(silence)', feedback: null },
  { time: '04:43', speaker: '', text: '(8 seconds of silence)', feedback: { type: 'good', text: 'Great use of silence - client is processing' } },
  { time: '04:51', speaker: 'Client', text: "I think I've been so focused on getting them to follow me that I forgot to listen to them.", feedback: null },
];

const sessionNotes = {
  topic: 'Leadership challenges with team',
  clientState: "Frustrated, feeling disrespected by team, initially focused on others' behavior",
  exploration: [
    'Explored feeling of not being respected',
    "Discovered coach wasn't showing that team input matters",
    'Client had breakthrough: realized they need to listen more to earn respect',
  ],
  clientAction: [
    'Schedule 1-on-1 meetings with each team member this week',
    'Ask for their input on an upcoming project decision',
    'Reflect on how to show the team their opinions are valued',
  ],
  followUp: ['Check on action completion', 'Explore how the team responded'],
};

export default function ReviewSession() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'notes' | 'transcript'>('notes');
  const [editingNotes, setEditingNotes] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>('exploration');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/review')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Session Review</h1>
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Li Ming
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  32 minutes
                </span>
                <span>January 3, 2026</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Share className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setActiveTab('notes')}
            className={`flex items-center gap-2 px-4 py-2 font-medium rounded-lg transition-colors ${
              activeTab === 'notes'
                ? 'bg-gray-200 text-gray-900'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            Session Notes
          </button>
          <button
            onClick={() => setActiveTab('transcript')}
            className={`flex items-center gap-2 px-4 py-2 font-medium rounded-lg transition-colors ${
              activeTab === 'transcript'
                ? 'bg-gray-200 text-gray-900'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Transcript + Feedback
          </button>
        </div>
      </div>

      <div className="p-8">
        {activeTab === 'notes' ? (
          <div className="grid grid-cols-3 gap-6">
            {/* Main Notes */}
            <div className="col-span-2 bg-white rounded-xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">AI-Generated Session Notes</h2>
                <button
                  onClick={() => setEditingNotes(!editingNotes)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
                    editingNotes
                      ? 'bg-gray-200 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Edit3 className="w-4 h-4" />
                  {editingNotes ? 'Done Editing' : 'Edit'}
                </button>
              </div>

              <div className="space-y-4">
                {/* Topic */}
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm font-medium text-gray-500 mb-2">Topic</div>
                  {editingNotes ? (
                    <input
                      type="text"
                      defaultValue={sessionNotes.topic}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  ) : (
                    <div className="text-gray-900">{sessionNotes.topic}</div>
                  )}
                </div>

                {/* Client State */}
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm font-medium text-gray-500 mb-2">Client Initial State</div>
                  {editingNotes ? (
                    <textarea
                      defaultValue={sessionNotes.clientState}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  ) : (
                    <div className="text-gray-900">{sessionNotes.clientState}</div>
                  )}
                </div>

                {/* Exploration */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedSection(expandedSection === 'exploration' ? null : 'exploration')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-gray-900">What We Explored</span>
                    {expandedSection === 'exploration' ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {expandedSection === 'exploration' && (
                    <div className="p-4 space-y-2">
                      {sessionNotes.exploration.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-500 mt-1">•</span>
                          {editingNotes ? (
                            <input
                              type="text"
                              defaultValue={item}
                              className="flex-1 px-2 py-1 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                          ) : (
                            item
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Client Actions */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedSection(expandedSection === 'actions' ? null : 'actions')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-gray-900">Client Commitments</span>
                    {expandedSection === 'actions' ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {expandedSection === 'actions' && (
                    <div className="p-4 space-y-2">
                      {sessionNotes.clientAction.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          {editingNotes ? (
                            <input
                              type="text"
                              defaultValue={item}
                              className="flex-1 px-2 py-1 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                          ) : (
                            item
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Follow Up */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedSection(expandedSection === 'followup' ? null : 'followup')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-gray-900">Next Session Follow-up</span>
                    {expandedSection === 'followup' ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {expandedSection === 'followup' && (
                    <div className="p-4 space-y-2">
                      {sessionNotes.followUp.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-gray-500 mt-1">•</span>
                          {editingNotes ? (
                            <input
                              type="text"
                              defaultValue={item}
                              className="flex-1 px-2 py-1 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                          ) : (
                            item
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Score Summary */}
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Session Score</h3>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-teal-600">82</div>
                  <div className="text-sm text-gray-500">Overall Score</div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Active Listening</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Powerful Questions</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-800 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Building Trust</span>
                      <span className="font-medium">88%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Feedback */}
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Key Feedback</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-green-800">Great use of silence at 04:43 - led to client breakthrough</div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-amber-800">Gave advice at 02:40 - try converting to questions</div>
                  </div>
                </div>
              </div>

              {/* Client Growth Link */}
              <button
                onClick={() => navigate('/clients/1')}
                className="w-full p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 text-left hover:from-gray-100 hover:to-gray-200 transition-colors"
              >
                <div className="font-medium text-gray-900">View Li Ming's Growth File</div>
                <div className="text-sm text-teal-600">8 sessions • Track their progress →</div>
              </button>
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
                            ? 'bg-gray-200 text-gray-900'
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
