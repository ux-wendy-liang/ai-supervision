import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Zap,
  AlertTriangle,
  Target,
  Rocket,
  Trophy,
  Quote
} from 'lucide-react';

// 方案1：电影式章节叙事 - 适合创业公司
// 特点：像电影一样分幕展开，情感节奏明确
// 配色：紫蓝渐变（Stripe 风格）

export default function MovieStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回方案列表</span>
          </button>
          <div className="flex items-center gap-2 text-sm text-white/40">
            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md">电影式章节</span>
            <span>适合：创业公司</span>
          </div>
        </div>
      </nav>

      {/* ACT 1: The Setup - Opening */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-950 to-indigo-900/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          <div className="text-purple-400 text-sm font-medium tracking-widest mb-6">ACT I</div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent leading-tight">
            The Spark
          </h1>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            每个伟大的故事都始于一个问题
          </p>

          {/* The Question - Dramatic Quote */}
          <div className="relative my-16">
            <Quote className="w-12 h-12 text-purple-500/30 absolute -top-6 -left-4" />
            <blockquote className="text-3xl md:text-4xl font-light text-white/90 italic">
              {chapters.spark.question}
            </blockquote>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 1 Content */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-xl text-white/70 leading-relaxed">
              我在研究教练行业时，偶然发现了一个悖论。
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
              答案是：督导课程，每小时 <span className="text-purple-400 font-semibold">{metrics.supervisionCost}</span>。
              大多数教练每月只能负担一次。等到讨论困难案例时，已经是几周前的事了。
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
              然后我发现了 <span className="text-white font-semibold">SimCare AI</span> — 一家 YC 支持的创业公司，
              让治疗学生与 AI 病人练习。他们融资 $4.5M，年收入达到 <span className="text-emerald-400 font-semibold">{metrics.validationRevenue}</span>。
            </p>
          </div>

          {/* The Insight - Big Reveal */}
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl border border-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400 font-medium">灵光一现</span>
            </div>
            <p className="text-2xl text-white font-medium">
              {chapters.spark.insight}
            </p>
          </div>
        </div>
      </section>

      {/* ACT 2: The Conflict */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-red-950/20 to-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-sm font-medium tracking-widest mb-4">ACT II</div>
            <h2 className="text-5xl font-bold mb-4">The Conflict</h2>
            <p className="text-white/60">每个英雄都会遇到试炼</p>
          </div>

          {/* The Wall */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-medium">前方障碍</span>
            </div>
            <p className="text-2xl text-red-200">
              {chapters.conflict.blocker}
            </p>
            <p className="text-white/60 mt-4">
              这改变了一切。我无法构建人类督导的"替代品"。整个产品方向需要重新思考。
            </p>
          </div>

          {/* The Choices */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white/80 mb-6">我有三个选择：</h3>
            {chapters.conflict.options.map((option, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all ${
                  option.selected
                    ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40'
                    : 'bg-white/5 border border-white/10 opacity-60'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    option.selected
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white/10 text-white/40'
                  }`}>
                    {option.label}
                  </span>
                  <div className="flex-1">
                    <div className={`font-medium text-lg ${option.selected ? 'text-emerald-300' : 'text-white/60'}`}>
                      {option.title}
                    </div>
                    <div className={`text-sm mt-1 ${option.selected ? 'text-emerald-400/80' : 'text-white/40'}`}>
                      {option.risk || option.benefit}
                    </div>
                  </div>
                  {option.selected && (
                    <Zap className="w-6 h-6 text-emerald-400" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* The Decision */}
          <div className="mt-12 text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-500/20">
              <Target className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
              <p className="text-xl text-white font-medium">
                {chapters.conflict.decision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 3: The Journey */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-indigo-400 text-sm font-medium tracking-widest mb-4">ACT III</div>
            <h2 className="text-5xl font-bold mb-4">The Journey</h2>
            <p className="text-white/60">克服挑战，创造解决方案</p>
          </div>

          {/* Design Decisions as Story Beats */}
          <div className="space-y-16">
            {chapters.decisions.items.map((decision, index) => (
              <div key={index} className="relative">
                {/* Connecting line */}
                {index < chapters.decisions.items.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
                )}

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{decision.title}</h3>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="mb-4">
                        <span className="text-white/40 text-sm">问题</span>
                        <p className="text-white/80 mt-1">{decision.problem}</p>
                      </div>
                      <div className="mb-4">
                        <span className="text-red-400/80 text-sm">尝试与失败</span>
                        <div className="flex gap-2 mt-1 flex-wrap">
                          {decision.tried.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-red-500/10 text-red-300 rounded-full text-sm">
                              {t.approach} → {t.result}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-emerald-400 text-sm">解决方案</span>
                        <p className="text-white mt-1">{decision.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACT 4: The Resolution */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-purple-950/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-amber-400 text-sm font-medium tracking-widest mb-4">ACT IV</div>
            <h2 className="text-5xl font-bold mb-4">The Resolution</h2>
            <p className="text-white/60">故事的结局，新的开始</p>
          </div>

          {/* Impact Stats - Dramatic */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl border border-purple-500/20">
              <div className="text-4xl font-bold text-white mb-2">{metrics.marketOpportunity}</div>
              <div className="text-purple-300">市场机会</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-500/20">
              <div className="text-4xl font-bold text-white mb-2">{metrics.timeToPrototype}</div>
              <div className="text-emerald-300">完成原型</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl border border-amber-500/20">
              <div className="text-4xl font-bold text-white mb-2">{metrics.validationRevenue}</div>
              <div className="text-amber-300">模式验证</div>
            </div>
          </div>

          {/* Reflection */}
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <Trophy className="w-6 h-6 text-emerald-400 mb-4" />
              <h3 className="text-lg font-medium text-emerald-300 mb-4">成功要素</h3>
              <ul className="space-y-3">
                {chapters.reflection.whatWorked.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <span className="text-emerald-400">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
              <Rocket className="w-6 h-6 text-indigo-400 mb-4" />
              <h3 className="text-lg font-medium text-indigo-300 mb-4">下一步探索</h3>
              <ul className="space-y-3">
                {chapters.reflection.whatNext.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <span className="text-indigo-400">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI Note */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl border border-purple-500/20 text-center">
            <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {chapters.reflection.aiNote}
            </p>
          </div>
        </div>
      </section>

      {/* Ending */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-white/40 text-sm font-medium tracking-widest mb-6">THE END</div>
          <h2 className="text-3xl font-bold mb-8">故事还在继续...</h2>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transition-all"
          >
            探索原型
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-white/40 text-sm">
          Case Study by {caseStudyContent.author} · {caseStudyContent.year}
        </div>
      </footer>
    </div>
  );
}
