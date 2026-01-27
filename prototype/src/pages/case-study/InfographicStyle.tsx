import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import { ArrowLeft, ArrowRight, ArrowDown } from 'lucide-react';

// 方案10：信息图表风格 - 适合媒体公司
// 特点：整个页面就是一张大信息图
// 配色：渐变彩色

export default function InfographicStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm z-50">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-white/60 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <span className="text-sm text-cyan-400">信息图表风格</span>
        </div>
      </nav>

      {/* Infographic Content */}
      <main className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        {/* Title Section */}
        <header className="text-center py-16">
          <div className="text-cyan-400 text-sm tracking-widest mb-4">CASE STUDY {caseStudyContent.year}</div>
          <h1 className="text-5xl font-bold text-white mb-4">AI Coach Mentor</h1>
          <p className="text-xl text-white/60">发现市场空白，快速验证原型</p>
        </header>

        {/* Flow Arrow */}
        <div className="flex justify-center mb-8">
          <ArrowDown className="w-8 h-8 text-cyan-400 animate-bounce" />
        </div>

        {/* Problem Section */}
        <section className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl p-8 mb-8 border border-cyan-500/30">
          <div className="text-cyan-400 text-sm font-bold mb-4">问题</div>
          <div className="text-2xl text-white font-light text-center mb-8">
            "{chapters.spark.question}"
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-400">{metrics.supervisionCost}</div>
              <div className="text-white/60 mt-2">督导费用/小时</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400">{metrics.validationRevenue}</div>
              <div className="text-white/60 mt-2">SimCare AI 年收入</div>
            </div>
          </div>
        </section>

        {/* Arrow */}
        <div className="flex justify-center mb-8">
          <ArrowDown className="w-8 h-8 text-amber-400" />
        </div>

        {/* Challenge Section */}
        <section className="bg-gradient-to-r from-amber-500/20 to-red-500/20 rounded-3xl p-8 mb-8 border border-amber-500/30">
          <div className="text-amber-400 text-sm font-bold mb-4">挑战</div>
          <div className="text-xl text-white text-center">
            {chapters.conflict.blocker}
          </div>
        </section>

        {/* Arrow */}
        <div className="flex justify-center mb-8">
          <ArrowDown className="w-8 h-8 text-emerald-400" />
        </div>

        {/* Solution Section */}
        <section className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl p-8 mb-8 border border-emerald-500/30">
          <div className="text-emerald-400 text-sm font-bold mb-4">解决方案</div>
          <div className="text-xl text-white text-center mb-8">
            {chapters.conflict.decision}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {chapters.decisions.items.map((d, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">{i + 1}</div>
                <div className="text-white text-sm">{d.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Arrow */}
        <div className="flex justify-center mb-8">
          <ArrowDown className="w-8 h-8 text-purple-400" />
        </div>

        {/* Results Section */}
        <section className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 mb-8 border border-purple-500/30">
          <div className="text-purple-400 text-sm font-bold mb-4">成果</div>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white">{metrics.marketOpportunity}</div>
              <div className="text-purple-300 mt-2">市场机会</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white">{metrics.timeToPrototype}</div>
              <div className="text-purple-300 mt-2">完成时间</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white">{metrics.targetUsers}</div>
              <div className="text-purple-300 mt-2">目标用户</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            探索原型 <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer */}
        <footer className="text-center pt-16 text-white/40 text-sm">
          {caseStudyContent.author} · {caseStudyContent.year}
        </footer>
      </main>
    </div>
  );
}
