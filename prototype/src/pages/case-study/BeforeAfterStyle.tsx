import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import {
  ArrowLeft,
  ArrowRight,
  X,
  Check,
  Minus,
  Plus
} from 'lucide-react';

// 方案6：Before/After 对比型 - 适合大厂
// 特点：每个设计决策的前后对比
// 配色：白+绿

export default function BeforeAfterStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;

  return (
    <div className="min-h-screen bg-white">
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
            <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md font-medium">Before/After</span>
            <span>适合：大厂</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-24 pb-16 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm text-emerald-600 font-medium mb-3">CASE STUDY · 2026</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">AI Coach Mentor</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            通过 Before/After 对比，展示每个设计决策的价值
          </p>

          {/* Quick Metrics */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{metrics.marketOpportunity}</div>
              <div className="text-sm text-slate-500">市场机会</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{metrics.timeToPrototype}</div>
              <div className="text-sm text-slate-500">原型时间</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{metrics.validationRevenue}</div>
              <div className="text-sm text-slate-500">模式验证</div>
            </div>
          </div>
        </div>
      </header>

      {/* Strategic Pivot - Before/After */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">战略转型</h2>

          <div className="grid grid-cols-2 gap-0 relative">
            {/* Divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full border border-slate-200 z-10">
              <ArrowRight className="w-5 h-5 text-emerald-500" />
            </div>

            {/* Before */}
            <div className="pr-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <Minus className="w-4 h-4 text-red-500" />
                </div>
                <span className="font-medium text-red-600">BEFORE</span>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="font-semibold text-red-800 mb-4">原始定位</h3>
                <p className="text-red-700 mb-4">"AI 督导替代方案"</p>
                <ul className="space-y-2 text-sm text-red-600">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    ICF 不承认 AI 学时
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    与人类督导直接竞争
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    需要说服监管机构
                  </li>
                </ul>
              </div>
            </div>

            {/* After */}
            <div className="pl-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Plus className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="font-medium text-emerald-600">AFTER</span>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <h3 className="font-semibold text-emerald-800 mb-4">重新定位</h3>
                <p className="text-emerald-700 mb-4">"督导间隔期练习工具"</p>
                <ul className="space-y-2 text-sm text-emerald-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    不需要 ICF 认证
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    与人类督导互补
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    立即可以推向市场
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Decisions - Before/After */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">设计决策对比</h2>

          <div className="space-y-12">
            {chapters.decisions.items.map((decision, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{decision.title}</h3>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-slate-500 mb-2">问题</div>
                  <p className="text-slate-700">{decision.problem}</p>
                </div>

                <div className="grid grid-cols-2 gap-0 relative">
                  {/* Divider */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200"></div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full border border-slate-200 z-10 text-xs text-slate-500">
                    vs
                  </div>

                  {/* Before - Failed attempts */}
                  <div className="pr-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium text-red-600">BEFORE (失败尝试)</span>
                    </div>
                    <div className="space-y-3">
                      {decision.tried.map((attempt, i) => (
                        <div key={i} className="bg-red-50 rounded-lg p-4 border border-red-100">
                          <div className="flex items-center gap-2 mb-1">
                            <X className="w-4 h-4 text-red-500" />
                            <span className="font-medium text-red-700">{attempt.approach}</span>
                          </div>
                          <p className="text-sm text-red-600 pl-6">{attempt.result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* After - Solution */}
                  <div className="pl-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium text-emerald-600">AFTER (最终方案)</span>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200 h-full">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <p className="text-emerald-700">{decision.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Before/After */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">价值创造</h2>

          <div className="grid grid-cols-2 gap-0 relative">
            {/* Divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full border border-slate-200 z-10">
              <ArrowRight className="w-5 h-5 text-emerald-500" />
            </div>

            {/* Before */}
            <div className="pr-8 text-center">
              <div className="text-sm font-medium text-red-600 mb-4">传统督导</div>
              <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                <div className="text-4xl font-bold text-red-700 mb-2">{metrics.supervisionCost}</div>
                <div className="text-red-600">每小时</div>
                <div className="mt-4 text-sm text-red-500">每月只能负担 1 次</div>
              </div>
            </div>

            {/* After */}
            <div className="pl-8 text-center">
              <div className="text-sm font-medium text-emerald-600 mb-4">AI Coach Mentor</div>
              <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-200">
                <div className="text-4xl font-bold text-emerald-700 mb-2">{metrics.productPrice}</div>
                <div className="text-emerald-600">每年</div>
                <div className="mt-4 text-sm text-emerald-500">无限练习次数</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-16 px-6 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">项目成果</h2>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">{metrics.marketOpportunity}</div>
              <div className="text-emerald-200">发现的市场机会</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{metrics.timeToPrototype}</div>
              <div className="text-emerald-200">从研究到原型</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{metrics.targetUsers}</div>
              <div className="text-emerald-200">目标用户群</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors"
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
