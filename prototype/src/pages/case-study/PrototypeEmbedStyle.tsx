import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import { ArrowLeft, ArrowRight, Play, ExternalLink } from 'lucide-react';

// 方案20：原型嵌入风格 - 适合技术公司
// 特点：嵌入可交互原型，展示原型能力
// 配色：蓝紫渐变

export default function PrototypeEmbedStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-white/60 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">原型嵌入</span>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-24 pb-8 px-6 text-center text-white">
        <div className="text-sm text-purple-400 mb-4">INTERACTIVE CASE STUDY</div>
        <h1 className="text-4xl font-bold mb-4">AI Coach Mentor</h1>
        <p className="text-xl text-white/60">边看 Case Study，边体验原型</p>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* Section 1: Problem + Prototype Preview */}
        <section className="mb-16">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div className="text-purple-400 text-sm font-bold mb-4">问题发现</div>
              <h2 className="text-2xl font-bold mb-4">{chapters.spark.question}</h2>
              <p className="text-white/70 mb-6">
                督导费用 {metrics.supervisionCost}/小时，多数教练每月仅一次。
                SimCare AI 证明 AI 练习工具模式可行，年收入 {metrics.validationRevenue}。
              </p>
              <div className="bg-purple-500/20 rounded-lg p-4 text-purple-200">
                <strong>洞察：</strong>{chapters.spark.insight}
              </div>
            </div>
            <div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/60 text-sm">市场分析界面</span>
                  <span className="text-xs text-purple-400">概念预览</span>
                </div>
                <div className="bg-slate-800 rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-purple-400" />
                    </div>
                    <p className="text-white/50 text-sm">市场空白分析</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Solution + Embedded Prototype */}
        <section className="mb-16">
          <div className="text-center text-white mb-8">
            <div className="text-emerald-400 text-sm font-bold mb-4">核心功能</div>
            <h2 className="text-2xl font-bold">试试实际的交互原型</h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {chapters.solution.features.map((feature, i) => (
              <div key={i} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                <div className="p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">{feature.name}</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    {feature.points.map((p, j) => (
                      <li key={j}>• {p}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-800 p-4">
                  <button
                    onClick={() => navigate(i === 0 ? '/practice' : '/review')}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    体验 {feature.name} <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Design Decisions */}
        <section className="mb-16">
          <div className="text-white mb-8">
            <div className="text-blue-400 text-sm font-bold mb-4">设计决策</div>
            <h2 className="text-2xl font-bold">关键设计决策与实现</h2>
          </div>

          <div className="space-y-6">
            {chapters.decisions.items.map((d, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 text-white">
                    <h3 className="font-bold mb-2">{d.title}</h3>
                    <p className="text-white/70 text-sm mb-3">{d.solution}</p>
                    <button
                      onClick={() => navigate('/practice/session')}
                      className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      在原型中查看 <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl p-8 border border-purple-500/30 text-white text-center">
          <h2 className="text-2xl font-bold mb-8">项目成果</h2>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">{metrics.marketOpportunity}</div>
              <div className="text-purple-200">市场机会</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{metrics.timeToPrototype}</div>
              <div className="text-purple-200">完成时间</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{metrics.targetUsers}</div>
              <div className="text-purple-200">目标用户</div>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 font-bold rounded-xl hover:bg-white/90 transition-colors"
          >
            进入完整原型 <ArrowRight className="w-5 h-5" />
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-white/40 text-sm">
        {caseStudyContent.author} · {caseStudyContent.year}
      </footer>
    </div>
  );
}
