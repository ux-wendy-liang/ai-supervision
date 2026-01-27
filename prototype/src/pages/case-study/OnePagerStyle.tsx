import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
  Zap
} from 'lucide-react';

// 方案16：一页总结 - 适合忙碌的 Recruiter
// 特点：所有内容压缩到一页，30秒传达价值
// 配色：极简白

export default function OnePagerStyle() {
  const navigate = useNavigate();
  const { metrics, chapters, tags } = caseStudyContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-slate-100 z-50 print:hidden">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-400 px-2 py-1 bg-slate-50 rounded">一页总结</span>
            <button
              onClick={() => window.print()}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              打印 / 导出 PDF
            </button>
          </div>
        </div>
      </nav>

      {/* One Page Content */}
      <main className="max-w-4xl mx-auto px-6 pt-20 pb-8 print:pt-0 print:pb-0">
        {/* Header - Compact */}
        <header className="mb-6 pb-4 border-b border-slate-200">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs text-blue-600 font-medium mb-1">CASE STUDY · 2026</div>
              <h1 className="text-2xl font-bold text-slate-900">AI Coach Mentor</h1>
              <p className="text-slate-500 text-sm mt-1">发现 $4.5B 市场空白，4周完成原型</p>
            </div>
            <div className="flex gap-2">
              {tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Key Metrics - Horizontal Bar */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-xl font-bold text-blue-700">{metrics.marketOpportunity}</div>
            <div className="text-xs text-blue-600">市场机会</div>
          </div>
          <div className="text-center p-3 bg-emerald-50 rounded-lg">
            <div className="text-xl font-bold text-emerald-700">{metrics.timeToPrototype}</div>
            <div className="text-xs text-emerald-600">原型时间</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-xl font-bold text-purple-700">{metrics.validationRevenue}</div>
            <div className="text-xs text-purple-600">模式验证</div>
          </div>
          <div className="text-center p-3 bg-amber-50 rounded-lg">
            <div className="text-xl font-bold text-amber-700">{metrics.targetUsers}</div>
            <div className="text-xs text-amber-600">目标用户</div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Problem & Insight */}
            <section>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <h2 className="font-semibold text-slate-900 text-sm">问题与洞察</h2>
              </div>
              <div className="text-sm text-slate-600 space-y-2">
                <p className="italic border-l-2 border-amber-300 pl-3">
                  "{chapters.spark.question}"
                </p>
                <p>
                  督导费用 <span className="font-medium">{metrics.supervisionCost}/小时</span>，
                  教练每月只能负担一次。等讨论案例时，已经是几周前的事了。
                </p>
                <div className="bg-amber-50 p-2 rounded text-amber-800 text-xs">
                  <strong>洞察：</strong>{chapters.spark.insight}
                </div>
              </div>
            </section>

            {/* Pivot */}
            <section>
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-red-500" />
                <h2 className="font-semibold text-slate-900 text-sm">关键转折</h2>
              </div>
              <div className="text-sm">
                <div className="bg-red-50 p-2 rounded text-red-700 text-xs mb-2">
                  <strong>阻碍：</strong>ICF 不承认 AI 督导学时
                </div>
                <div className="bg-emerald-50 p-2 rounded text-emerald-700 text-xs">
                  <strong>决策：</strong>{chapters.conflict.decision}
                </div>
              </div>
            </section>

            {/* Solution */}
            <section>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-blue-500" />
                <h2 className="font-semibold text-slate-900 text-sm">解决方案</h2>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {chapters.solution.features.map((feature, i) => (
                  <div key={i} className="bg-slate-50 p-2 rounded">
                    <div className="font-medium text-slate-800 mb-1">{feature.name}</div>
                    <ul className="text-slate-600 space-y-0.5">
                      {feature.points.slice(0, 2).map((point, j) => (
                        <li key={j} className="flex items-start gap-1">
                          <span className="text-blue-500">→</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Design Decisions - Compact */}
            <section>
              <h2 className="font-semibold text-slate-900 text-sm mb-2">设计决策</h2>
              <div className="space-y-2">
                {chapters.decisions.items.map((decision, i) => (
                  <div key={i} className="bg-slate-50 p-2 rounded text-xs">
                    <div className="font-medium text-slate-800 flex items-center gap-2">
                      <span className="w-5 h-5 bg-blue-100 text-blue-700 rounded flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      {decision.title}
                    </div>
                    <div className="mt-1 text-slate-600 pl-7">
                      <span className="text-emerald-600">解决：</span>
                      {decision.solution.split('.')[0]}.
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Value Proposition - Compact */}
            <section>
              <h2 className="font-semibold text-slate-900 text-sm mb-2">价值定位</h2>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-emerald-50 p-2 rounded">
                  <div className="text-emerald-700 font-medium mb-1">我们是</div>
                  <ul className="text-emerald-600 space-y-0.5">
                    {chapters.strategy.positioning.weAre.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-100 p-2 rounded">
                  <div className="text-slate-600 font-medium mb-1">我们不是</div>
                  <ul className="text-slate-500 space-y-0.5">
                    {chapters.strategy.positioning.weAreNot.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-1">
                        <span className="w-3 h-3 border border-slate-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Reflection - Compact */}
            <section>
              <h2 className="font-semibold text-slate-900 text-sm mb-2">反思</h2>
              <div className="text-xs space-y-2">
                <div>
                  <span className="text-emerald-600 font-medium">成功要素：</span>
                  <span className="text-slate-600">
                    {chapters.reflection.whatWorked.slice(0, 2).join('；')}
                  </span>
                </div>
                <div>
                  <span className="text-blue-600 font-medium">下一步：</span>
                  <span className="text-slate-600">
                    {chapters.reflection.whatNext.slice(0, 2).join('；')}
                  </span>
                </div>
              </div>
            </section>

            {/* AI Note */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg text-xs text-slate-700">
              <div className="font-medium text-slate-800 mb-1">AI 加速</div>
              传统团队需要 3-4 个月。我用 AI 作为研究伙伴，4周完成——同时保持只有人类能做的战略思考。
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400 print:mt-4">
          <span>Case Study by {caseStudyContent.author} · {caseStudyContent.year}</span>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1 print:hidden"
          >
            查看原型 <ArrowRight className="w-3 h-3" />
          </button>
        </footer>
      </main>

      {/* Print Styles */}
      <style>{`
        @media print {
          nav { display: none !important; }
          main { padding-top: 0 !important; }
          @page { margin: 1cm; }
        }
      `}</style>
    </div>
  );
}
