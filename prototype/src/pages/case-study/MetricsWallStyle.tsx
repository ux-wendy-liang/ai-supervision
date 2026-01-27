import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import { ArrowLeft, ArrowRight, Users, Clock, DollarSign, Target, Zap, CheckCircle } from 'lucide-react';

// 方案7：指标卡片墙 - 适合大厂
// 特点：大数字醒目展示
// 配色：深灰+彩色

export default function MetricsWallStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-white/60 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <span className="px-2 py-1 bg-white/10 text-white/80 rounded text-sm">指标卡片墙</span>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-24 pb-8 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">AI Coach Mentor</h1>
        <p className="text-white/60">一目了然的项目成果</p>
      </header>

      {/* Metrics Wall */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* Hero Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-center">
            <DollarSign className="w-8 h-8 mx-auto mb-4 opacity-80" />
            <div className="text-5xl font-bold mb-2">{metrics.marketOpportunity}</div>
            <div className="text-blue-100">市场机会</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-center">
            <Clock className="w-8 h-8 mx-auto mb-4 opacity-80" />
            <div className="text-5xl font-bold mb-2">{metrics.timeToPrototype}</div>
            <div className="text-emerald-100">完成时间</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-center">
            <Users className="w-8 h-8 mx-auto mb-4 opacity-80" />
            <div className="text-5xl font-bold mb-2">{metrics.targetUsers}</div>
            <div className="text-purple-100">目标用户</div>
          </div>
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-amber-400">{metrics.validationRevenue}</div>
            <div className="text-white/50 text-sm">SimCare AI 年收入</div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-red-400">{metrics.supervisionCost}</div>
            <div className="text-white/50 text-sm">传统督导费用/小时</div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-emerald-400">{metrics.productPrice}</div>
            <div className="text-white/50 text-sm">我们的年费</div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-2xl font-bold text-blue-400">{metrics.traditionalTime}</div>
            <div className="text-white/50 text-sm">传统团队时间</div>
          </div>
        </div>

        {/* Key Decisions */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-amber-400" />
            关键决策
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {chapters.decisions.items.map((decision, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-5">
                <div className="text-4xl font-bold text-white/20 mb-2">0{i + 1}</div>
                <h3 className="font-medium mb-2">{decision.title}</h3>
                <p className="text-sm text-white/50">{decision.solution.split('.')[0]}.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-emerald-500/20 rounded-xl p-6 border border-emerald-500/30">
            <h3 className="font-medium text-emerald-400 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> 成功要素
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              {chapters.reflection.whatWorked.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-500/30">
            <h3 className="font-medium text-blue-400 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" /> 下一步
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              {chapters.reflection.whatNext.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-white/90"
          >
            查看原型 <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-white/40 text-sm border-t border-white/10">
        {caseStudyContent.author} · {caseStudyContent.year}
      </footer>
    </div>
  );
}
