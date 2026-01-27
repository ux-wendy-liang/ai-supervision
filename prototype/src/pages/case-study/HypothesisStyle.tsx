import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

// 方案14：假设验证风格 - 适合 UX 岗位
// 特点：问题→假设→验证的科学方法
// 配色：绿色主题

export default function HypothesisStyle() {
  const navigate = useNavigate();
  const { metrics } = caseStudyContent;

  const hypotheses = [
    {
      id: 1,
      hypothesis: "教练行业存在未被满足的技能提升需求",
      method: "市场研究 + 竞品分析",
      evidence: `督导费用 ${metrics.supervisionCost}/小时，多数教练每月仅一次`,
      result: "verified",
    },
    {
      id: 2,
      hypothesis: "AI 练习工具的商业模式可行",
      method: "对标分析 (SimCare AI)",
      evidence: `SimCare AI 年收入 ${metrics.validationRevenue}，YC 支持`,
      result: "verified",
    },
    {
      id: 3,
      hypothesis: "可以替代人类督导",
      method: "监管规则研究",
      evidence: "ICF 不承认 AI 督导学时",
      result: "invalidated",
    },
    {
      id: 4,
      hypothesis: "重新定位为练习工具能规避监管",
      method: "逻辑验证 + 价值定位",
      evidence: "作为补充工具不需要认证",
      result: "verified",
    },
    {
      id: 5,
      hypothesis: "实时反馈不会打断对话",
      method: "设计原型测试",
      evidence: "可折叠侧边栏方案成功",
      result: "verified",
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-emerald-50/90 backdrop-blur-sm border-b border-emerald-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-sm">假设验证</span>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-24 pb-12 px-6 text-center">
        <div className="text-sm text-emerald-600 mb-4">HYPOTHESIS-DRIVEN DESIGN</div>
        <h1 className="text-4xl font-bold text-emerald-900 mb-4">AI Coach Mentor</h1>
        <p className="text-xl text-emerald-600">通过假设驱动的方法验证产品方向</p>
      </header>

      {/* Hypotheses List */}
      <main className="max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-6">
          {hypotheses.map((h) => (
            <div
              key={h.id}
              className={`bg-white rounded-xl p-6 border-2 ${
                h.result === 'verified'
                  ? 'border-emerald-300'
                  : h.result === 'invalidated'
                  ? 'border-red-300'
                  : 'border-amber-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  {h.result === 'verified' ? (
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                  ) : h.result === 'invalidated' ? (
                    <XCircle className="w-6 h-6 text-red-500" />
                  ) : (
                    <HelpCircle className="w-6 h-6 text-amber-500" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">
                      假设 #{h.id}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      h.result === 'verified'
                        ? 'bg-emerald-100 text-emerald-700'
                        : h.result === 'invalidated'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {h.result === 'verified' ? '已验证' : h.result === 'invalidated' ? '已否定' : '待验证'}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-3">{h.hypothesis}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">验证方法：</span>
                      <span className="text-slate-700 ml-1">{h.method}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">证据：</span>
                      <span className="text-slate-700 ml-1">{h.evidence}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 bg-emerald-600 text-white rounded-xl p-8">
          <h2 className="text-xl font-bold mb-6 text-center">验证总结</h2>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold">4/5</div>
              <div className="text-emerald-200">假设验证通过</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{metrics.timeToPrototype}</div>
              <div className="text-emerald-200">完成验证周期</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{metrics.marketOpportunity}</div>
              <div className="text-emerald-200">验证的市场机会</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
          >
            查看原型 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-emerald-500 text-sm">
        {caseStudyContent.author} · {caseStudyContent.year}
      </footer>
    </div>
  );
}
