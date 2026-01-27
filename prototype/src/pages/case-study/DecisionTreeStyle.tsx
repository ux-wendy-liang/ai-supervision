import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';

// 方案15：决策树风格 - 适合产品公司
// 特点：展示每个选择和权衡
// 配色：橙色主题

export default function DecisionTreeStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-orange-50/90 backdrop-blur-sm border-b border-orange-200 z-50">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm">决策树</span>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-24 pb-8 px-6 text-center">
        <h1 className="text-4xl font-bold text-orange-900 mb-4">AI Coach Mentor</h1>
        <p className="text-xl text-orange-600">每个选择背后的思考</p>
      </header>

      {/* Decision Tree */}
      <main className="max-w-5xl mx-auto px-6 pb-16">
        {/* Decision 1: Market Entry */}
        <div className="mb-12">
          <div className="bg-orange-600 text-white rounded-xl p-6 mb-4 text-center">
            <div className="text-sm opacity-80 mb-2">决策点 1</div>
            <h2 className="text-xl font-bold">选择目标市场</h2>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 border-2 border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <X className="w-5 h-5 text-red-500" />
                <span className="font-medium text-slate-600">AI for 普通人</span>
              </div>
              <p className="text-sm text-slate-500 mb-2">做 AI 教练帮助普通人</p>
              <div className="text-xs text-red-500">市场饱和 (Rocky.ai, CoachHub...)</div>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <X className="w-5 h-5 text-red-500" />
                <span className="font-medium text-slate-600">AI 督导替代</span>
              </div>
              <p className="text-sm text-slate-500 mb-2">替代人类督导</p>
              <div className="text-xs text-red-500">ICF 不认可</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 border-2 border-orange-400">
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-5 h-5 text-orange-600" />
                <span className="font-bold text-orange-800">AI 练习工具</span>
              </div>
              <p className="text-sm text-orange-700 mb-2">督导间隔期的练习</p>
              <div className="text-xs text-orange-600">空白市场 ✓</div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center mb-8">
          <div className="w-px h-12 bg-orange-300"></div>
        </div>

        {/* Decision 2: Positioning */}
        <div className="mb-12">
          <div className="bg-orange-500 text-white rounded-xl p-6 mb-4 text-center">
            <div className="text-sm opacity-80 mb-2">决策点 2</div>
            <h2 className="text-xl font-bold">产品定位</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border-2 border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <X className="w-5 h-5 text-red-500" />
                <span className="font-medium text-slate-600">认证学分</span>
              </div>
              <p className="text-sm text-slate-500">提供 ICF 认可的学时</p>
              <div className="text-xs text-red-500 mt-2">需要多年游说</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 border-2 border-orange-400">
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-5 h-5 text-orange-600" />
                <span className="font-bold text-orange-800">练习机会</span>
              </div>
              <p className="text-sm text-orange-700">{metrics.productPrice}/年无限练习</p>
              <div className="text-xs text-orange-600 mt-2">立即可推向市场 ✓</div>
            </div>
          </div>
        </div>

        {/* Design Decisions */}
        {chapters.decisions.items.map((decision, index) => (
          <div key={index} className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="w-px h-12 bg-orange-300"></div>
            </div>

            <div className="bg-orange-400 text-white rounded-xl p-6 mb-4 text-center">
              <div className="text-sm opacity-80 mb-2">设计决策 {index + 1}</div>
              <h2 className="text-xl font-bold">{decision.title}</h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {decision.tried.map((attempt, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border-2 border-slate-200">
                  <div className="flex items-center gap-2 mb-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="font-medium text-slate-600">{attempt.approach}</span>
                  </div>
                  <div className="text-xs text-red-500">{attempt.result}</div>
                </div>
              ))}
              <div className="bg-orange-50 rounded-xl p-5 border-2 border-orange-400">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="w-5 h-5 text-orange-600" />
                  <span className="font-bold text-orange-800">最终方案</span>
                </div>
                <p className="text-sm text-orange-700">{decision.solution.split('.')[0]}.</p>
              </div>
            </div>
          </div>
        ))}

        {/* Result */}
        <div className="bg-orange-600 text-white rounded-xl p-8 text-center mt-12">
          <h2 className="text-2xl font-bold mb-6">决策结果</h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold">{metrics.marketOpportunity}</div>
              <div className="text-orange-200">市场机会</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{metrics.timeToPrototype}</div>
              <div className="text-orange-200">完成时间</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{metrics.targetUsers}</div>
              <div className="text-orange-200">目标用户</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
          >
            查看原型 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-orange-500 text-sm">
        {caseStudyContent.author} · {caseStudyContent.year}
      </footer>
    </div>
  );
}
