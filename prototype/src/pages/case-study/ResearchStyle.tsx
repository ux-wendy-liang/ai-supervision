import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// 方案8：研究报告风格 - 适合咨询公司
// 特点：学术风格，专业严谨
// 配色：深蓝+白

export default function ResearchStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900 text-white z-50">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-white/60 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <span className="text-sm text-white/60">研究报告风格 | 咨询公司</span>
        </div>
      </nav>

      {/* Paper Style Content */}
      <main className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <article className="bg-white shadow-lg border border-slate-200">
          {/* Header */}
          <header className="bg-slate-900 text-white p-8">
            <div className="text-sm text-slate-400 mb-4">DESIGN RESEARCH REPORT · {caseStudyContent.year}</div>
            <h1 className="text-3xl font-bold mb-4">
              AI Coach Mentor: 教练行业 AI 练习工具的市场机会与产品设计研究
            </h1>
            <div className="text-slate-300">
              <span>{caseStudyContent.author}</span>
              <span className="mx-2">|</span>
              <span>Product Designer</span>
            </div>
          </header>

          {/* Abstract */}
          <section className="p-8 border-b border-slate-200">
            <h2 className="text-sm font-bold text-slate-500 tracking-wider mb-4">摘要 ABSTRACT</h2>
            <p className="text-slate-700 leading-relaxed">
              本研究聚焦于专业教练行业的技能提升需求，识别了价值 {metrics.marketOpportunity} 的市场空白。
              通过对标 SimCare AI（年收入 {metrics.validationRevenue}）的商业模式验证，
              本报告提出了 AI 驱动的教练练习工具解决方案，并在 {metrics.timeToPrototype} 内完成从研究到原型的全过程。
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded">产品战略</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded">0→1 设计</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded">AI 应用</span>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="p-8 border-b border-slate-200">
            <h2 className="text-sm font-bold text-slate-500 tracking-wider mb-4">1. 问题陈述</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>研究问题：</strong> "{chapters.spark.question}"
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>市场现状：</strong> 专业教练依赖督导课程提升技能，费用为 {metrics.supervisionCost}/小时，
              导致大多数教练每月仅能接受一次督导，反馈延迟问题严重。
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>对标验证：</strong> SimCare AI 通过 AI 患者模拟为治疗学生提供练习工具，
              获得 YC 投资，年收入达 {metrics.validationRevenue}，证明该商业模式可行。
            </p>
          </section>

          {/* Methodology */}
          <section className="p-8 border-b border-slate-200">
            <h2 className="text-sm font-bold text-slate-500 tracking-wider mb-4">2. 研究方法</h2>
            <div className="grid grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-medium text-slate-800 mb-2">2.1 市场分析</h3>
                <ul className="text-slate-600 space-y-1">
                  <li>• 竞品景观研究</li>
                  <li>• 用户痛点识别</li>
                  <li>• 市场规模估算</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-2">2.2 约束分析</h3>
                <ul className="text-slate-600 space-y-1">
                  <li>• 监管要求研究</li>
                  <li>• ICF 认证规则</li>
                  <li>• 战略选项评估</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-2">2.3 设计迭代</h3>
                <ul className="text-slate-600 space-y-1">
                  <li>• 概念验证</li>
                  <li>• 交互原型</li>
                  <li>• 用户反馈循环</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Findings */}
          <section className="p-8 border-b border-slate-200">
            <h2 className="text-sm font-bold text-slate-500 tracking-wider mb-4">3. 关键发现</h2>
            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium text-red-800 mb-2">3.1 关键约束</h3>
              <p className="text-red-700">{chapters.conflict.blocker}</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-medium text-emerald-800 mb-2">3.2 战略转型</h3>
              <p className="text-emerald-700">{chapters.conflict.decision}</p>
            </div>
          </section>

          {/* Design Decisions */}
          <section className="p-8 border-b border-slate-200">
            <h2 className="text-sm font-bold text-slate-500 tracking-wider mb-4">4. 设计决策</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 text-slate-500 font-medium">决策</th>
                  <th className="text-left py-3 text-slate-500 font-medium">问题</th>
                  <th className="text-left py-3 text-slate-500 font-medium">解决方案</th>
                </tr>
              </thead>
              <tbody>
                {chapters.decisions.items.map((d, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-3 text-slate-800 font-medium">{d.title}</td>
                    <td className="py-3 text-slate-600">{d.problem}</td>
                    <td className="py-3 text-slate-700">{d.solution.split('.')[0]}.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Conclusion */}
          <section className="p-8">
            <h2 className="text-sm font-bold text-slate-500 tracking-wider mb-4">5. 结论与建议</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-slate-800 mb-3">研究成果</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  {chapters.reflection.whatWorked.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-slate-800 mb-3">后续研究方向</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  {chapters.reflection.whatNext.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </article>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded hover:bg-slate-800"
          >
            查看交互原型 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
