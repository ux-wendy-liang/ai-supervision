import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import { ArrowLeft } from 'lucide-react';

// 方案18：要点清单风格 - 适合文字派
// 特点：纯 bullet points，极简直接
// 配色：纯白极简

export default function BulletStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-slate-100 z-50">
        <div className="max-w-2xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <span className="text-sm text-slate-400">要点清单</span>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 pt-20 pb-16 font-mono text-sm">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-1">AI Coach Mentor</h1>
          <p className="text-slate-500">Case Study · {caseStudyContent.year}</p>
        </header>

        <section className="mb-8">
          <h2 className="text-slate-400 text-xs uppercase tracking-wider mb-3">关键数据</h2>
          <ul className="space-y-1 text-slate-700">
            <li>• 市场机会: {metrics.marketOpportunity}</li>
            <li>• 完成时间: {metrics.timeToPrototype} (vs 传统 {metrics.traditionalTime})</li>
            <li>• 验证案例: SimCare AI, {metrics.validationRevenue} ARR</li>
            <li>• 目标用户: {metrics.targetUsers}</li>
            <li>• 定价: {metrics.productPrice}/年</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-slate-400 text-xs uppercase tracking-wider mb-3">问题</h2>
          <ul className="space-y-1 text-slate-700">
            <li>• "{chapters.spark.question}"</li>
            <li>• 督导费用: {metrics.supervisionCost}/小时</li>
            <li>• 多数教练每月仅能负担一次督导</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-slate-400 text-xs uppercase tracking-wider mb-3">洞察</h2>
          <ul className="space-y-1 text-slate-700">
            <li>• {chapters.spark.insight}</li>
            <li>• 市场空白: AI for Coaches (非 Coachees)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-slate-400 text-xs uppercase tracking-wider mb-3">障碍</h2>
          <ul className="space-y-1 text-slate-700">
            <li>• {chapters.conflict.blocker}</li>
            <li>• 无法定位为督导替代品</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-slate-400 text-xs uppercase tracking-wider mb-3">战略转型</h2>
          <ul className="space-y-1 text-slate-700">
            <li>• 选项 A: 忽略 ICF → 市场太小</li>
            <li>• 选项 B: 游说 ICF → 太久</li>
            <li>• <strong>选项 C: 重新定位为练习工具 ✓</strong></li>
            <li>• {chapters.conflict.decision}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-slate-400 text-xs uppercase tracking-wider mb-3">设计决策</h2>
          <ul className="space-y-1 text-slate-700">
            {chapters.decisions.items.map((d, i) => (
              <li key={i}>
                • <strong>{d.title}:</strong> {d.solution.split('.')[0]}.
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-slate-400 text-xs uppercase tracking-wider mb-3">价值定位</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-slate-400 text-xs mb-2">我们是</div>
              <ul className="space-y-1 text-slate-700">
                {chapters.strategy.positioning.weAre.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-slate-400 text-xs mb-2">我们不是</div>
              <ul className="space-y-1 text-slate-400">
                {chapters.strategy.positioning.weAreNot.map((item, i) => (
                  <li key={i}>✗ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-slate-400 text-xs uppercase tracking-wider mb-3">反思</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-slate-400 text-xs mb-2">成功要素</div>
              <ul className="space-y-1 text-slate-700">
                {chapters.reflection.whatWorked.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-slate-400 text-xs mb-2">下一步</div>
              <ul className="space-y-1 text-slate-700">
                {chapters.reflection.whatNext.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="pt-8 border-t border-slate-100">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            → 查看原型
          </button>
        </div>

        <footer className="mt-8 text-slate-400">
          — {caseStudyContent.author}
        </footer>
      </main>
    </div>
  );
}
