import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import {
  ArrowLeft,
  ArrowRight,
  User,
  Frown,
  Meh,
  Smile,
  Heart,
  Lightbulb,
  Target,
  CheckCircle,
  Star
} from 'lucide-react';

// 方案13：用户旅程地图 - 适合 UX 岗位
// 特点：围绕用户旅程展开，展示以用户为中心的思维
// 配色：蓝紫渐变

export default function JourneyMapStyle() {
  const navigate = useNavigate();
  const { userJourney, chapters, metrics } = caseStudyContent;

  // 情绪图标映射
  const emotionIcons: Record<string, React.ReactNode> = {
    frustrated: <Frown className="w-6 h-6 text-red-400" />,
    hesitant: <Meh className="w-6 h-6 text-amber-400" />,
    curious: <Meh className="w-6 h-6 text-blue-400" />,
    engaged: <Smile className="w-6 h-6 text-emerald-400" />,
    satisfied: <Heart className="w-6 h-6 text-pink-400" />,
  };

  // 情绪颜色映射
  const emotionColors: Record<string, { bg: string; border: string; line: string }> = {
    frustrated: { bg: 'bg-red-50', border: 'border-red-200', line: 'bg-red-400' },
    hesitant: { bg: 'bg-amber-50', border: 'border-amber-200', line: 'bg-amber-400' },
    curious: { bg: 'bg-blue-50', border: 'border-blue-200', line: 'bg-blue-400' },
    engaged: { bg: 'bg-emerald-50', border: 'border-emerald-200', line: 'bg-emerald-400' },
    satisfied: { bg: 'bg-pink-50', border: 'border-pink-200', line: 'bg-pink-400' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回方案列表</span>
          </button>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md font-medium">用户旅程</span>
            <span>适合：UX 岗位</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm text-indigo-600 font-medium mb-2">USER JOURNEY CASE STUDY · 2026</div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">AI Coach Mentor</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              通过用户旅程视角，展示如何发现需求、定义问题、设计解决方案
            </p>
          </div>

          {/* Persona Card */}
          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{userJourney.persona.name}</h2>
                <p className="text-slate-600">{userJourney.persona.role}</p>
                <p className="text-sm text-slate-500 mt-1">{userJourney.persona.challenge}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Journey Map Section */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">用户旅程地图</h2>

          {/* Journey Timeline */}
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-slate-200 hidden lg:block"></div>

            {/* Stages */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {userJourney.stages.map((stage, index) => {
                const colors = emotionColors[stage.emotion];
                return (
                  <div key={index} className="relative">
                    {/* Stage Number */}
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-12 h-12 rounded-full ${colors.line} text-white font-bold text-lg flex items-center justify-center relative z-10`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Stage Card */}
                    <div className={`${colors.bg} ${colors.border} border rounded-xl p-5 h-full`}>
                      <h3 className="font-bold text-slate-900 text-center mb-4">{stage.name}</h3>

                      {/* Emotion */}
                      <div className="flex justify-center mb-4">
                        {emotionIcons[stage.emotion]}
                      </div>

                      {/* Pain Point */}
                      <div className="mb-4">
                        <div className="text-xs text-slate-500 mb-1">痛点</div>
                        <p className="text-sm text-slate-700">{stage.painPoint}</p>
                      </div>

                      {/* Opportunity */}
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-indigo-600 mb-1 flex items-center gap-1">
                          <Lightbulb className="w-3 h-3" />
                          机会
                        </div>
                        <p className="text-sm text-indigo-800 font-medium">{stage.opportunity}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Discovery Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">问题发现</h2>
          </div>

          <blockquote className="text-2xl text-slate-700 border-l-4 border-amber-400 pl-6 mb-8 italic">
            "{chapters.spark.question}"
          </blockquote>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="text-sm text-slate-500 mb-2">现状痛点</div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{metrics.supervisionCost}</div>
              <div className="text-slate-600">每小时督导费用，多数教练每月只能负担一次</div>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6">
              <div className="text-sm text-indigo-600 mb-2">市场验证</div>
              <div className="text-3xl font-bold text-indigo-700 mb-2">{metrics.validationRevenue}</div>
              <div className="text-indigo-600">SimCare AI 年收入，证明市场需求</div>
            </div>
          </div>

          {/* Market Insight */}
          <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
            <div className="flex items-center gap-2 text-amber-700 font-medium mb-2">
              <Star className="w-5 h-5" />
              关键洞察
            </div>
            <p className="text-lg text-amber-800">{chapters.spark.insight}</p>
          </div>
        </div>
      </section>

      {/* Pivot Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">用户需求重定义</h2>
          </div>

          {/* The Blocker */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <div className="text-red-700 font-medium mb-2">发现阻碍</div>
            <p className="text-red-800">{chapters.conflict.blocker}</p>
          </div>

          {/* User Need Reframe */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-100 rounded-xl p-6">
              <div className="text-slate-500 text-sm mb-2">用户原始需求</div>
              <p className="text-slate-700">"我需要更多督导时间来提升技能"</p>
              <div className="mt-4 text-red-500 text-sm">→ 无法满足：ICF 不承认 AI 学时</div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <div className="text-emerald-600 text-sm mb-2">重新定义的需求</div>
              <p className="text-emerald-800 font-medium">"我需要在督导之间有更多练习机会"</p>
              <div className="mt-4 text-emerald-600 text-sm flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                可以满足：AI 作为练习工具
              </div>
            </div>
          </div>

          {/* Decision */}
          <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
            <div className="flex items-center gap-2 text-emerald-700 font-medium mb-2">
              <CheckCircle className="w-5 h-5" />
              设计决策
            </div>
            <p className="text-lg text-emerald-800">{chapters.conflict.decision}</p>
          </div>
        </div>
      </section>

      {/* Solution Mapping Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">解决方案与用户旅程对应</h2>

          <div className="space-y-6">
            {userJourney.stages.map((stage, index) => {
              const colors = emotionColors[stage.emotion];
              return (
                <div key={index} className="flex gap-6 items-start">
                  {/* Stage indicator */}
                  <div className={`w-24 flex-shrink-0 text-center`}>
                    <div className={`w-10 h-10 rounded-full ${colors.line} text-white font-bold flex items-center justify-center mx-auto mb-2`}>
                      {index + 1}
                    </div>
                    <div className="text-sm font-medium text-slate-700">{stage.name}</div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center pt-3">
                    <ArrowRight className="w-5 h-5 text-slate-400" />
                  </div>

                  {/* Solution */}
                  <div className={`flex-1 ${colors.bg} ${colors.border} border rounded-xl p-4`}>
                    <div className="text-sm text-slate-500 mb-1">设计响应</div>
                    <p className="text-slate-800">{stage.opportunity}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Decisions Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">关键设计决策</h2>

          <div className="space-y-6">
            {chapters.decisions.items.map((decision, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-bold text-slate-900">{decision.title}</h3>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-slate-500 mb-1">用户问题</div>
                      <div className="text-slate-700">{decision.problem}</div>
                    </div>
                    <div>
                      <div className="text-red-500 mb-1">失败尝试</div>
                      <div className="space-y-1">
                        {decision.tried.map((t, i) => (
                          <div key={i} className="text-red-700">{t.approach} → {t.result}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-emerald-500 mb-1">最终方案</div>
                      <div className="text-emerald-700">{decision.solution.split('.')[0]}.</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Reflection */}
      <section className="py-16 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">成果与反思</h2>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl font-bold mb-2">{metrics.marketOpportunity}</div>
              <div className="text-indigo-200">市场机会</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl font-bold mb-2">{metrics.timeToPrototype}</div>
              <div className="text-indigo-200">原型时间</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-xl">
              <div className="text-3xl font-bold mb-2">{metrics.targetUsers}</div>
              <div className="text-indigo-200">目标用户</div>
            </div>
          </div>

          {/* Reflection */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-medium text-emerald-300 mb-4">UX 方法论亮点</h3>
              <ul className="space-y-2">
                {chapters.reflection.whatWorked.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-medium text-amber-300 mb-4">下一步验证</h3>
              <ul className="space-y-2">
                {chapters.reflection.whatNext.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80">
                    <ArrowRight className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-white text-center">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
        >
          查看交互原型
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-slate-500 text-sm">
        Case Study by {caseStudyContent.author} · {caseStudyContent.year}
      </footer>
    </div>
  );
}
