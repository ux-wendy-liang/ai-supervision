import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import {
  ArrowLeft,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Target,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  PieChart,
  ArrowUpRight,
  Zap
} from 'lucide-react';

// 方案5：仪表盘风格 - 适合大厂
// 特点：数字+图表密集，快速传达影响力
// 配色：白底 + 蓝色强调（Google/Meta 风格）

export default function DashboardStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回方案列表</span>
          </button>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md font-medium">仪表盘风格</span>
            <span>适合：大厂</span>
          </div>
        </div>
      </nav>

      {/* Header with Key Metrics */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="text-sm text-blue-600 font-medium mb-2">CASE STUDY · 2026</div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">AI Coach Mentor</h1>
              <p className="text-slate-600">找到 $4.5B 市场空白，4周完成原型</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium flex items-center gap-1">
                <Zap className="w-4 h-4" />
                0→1 设计
              </span>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white">
              <div className="flex items-center justify-between mb-3">
                <DollarSign className="w-5 h-5 opacity-80" />
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="text-3xl font-bold mb-1">{metrics.marketOpportunity}</div>
              <div className="text-blue-100 text-sm">市场机会</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <Clock className="w-5 h-5 text-slate-400" />
                <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">快速</span>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{metrics.timeToPrototype}</div>
              <div className="text-slate-500 text-sm">原型时间（vs {metrics.traditionalTime}）</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <TrendingUp className="w-5 h-5 text-slate-400" />
                <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">验证</span>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{metrics.validationRevenue}</div>
              <div className="text-slate-500 text-sm">{metrics.validationCompany} 年收入</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <Users className="w-5 h-5 text-slate-400" />
                <span className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded">目标</span>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{metrics.targetUsers}</div>
              <div className="text-slate-500 text-sm">ICF 认证教练</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - 2/3 */}
          <div className="col-span-2 space-y-6">
            {/* Problem Discovery Panel */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                <h2 className="font-semibold text-slate-900">问题发现</h2>
              </div>
              <div className="p-6">
                <blockquote className="text-xl text-slate-700 border-l-4 border-blue-500 pl-4 mb-6">
                  "{chapters.spark.question}"
                </blockquote>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="text-sm text-slate-500 mb-1">督导费用</div>
                    <div className="text-2xl font-bold text-slate-900">{metrics.supervisionCost}</div>
                    <div className="text-sm text-slate-500">每小时</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm text-blue-600 mb-1">我们的定价</div>
                    <div className="text-2xl font-bold text-blue-700">{metrics.productPrice}</div>
                    <div className="text-sm text-blue-600">每年无限使用</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Pivot Panel */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h2 className="font-semibold text-slate-900">战略转折</h2>
              </div>
              <div className="p-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 text-red-700 font-medium">
                    <AlertTriangle className="w-4 h-4" />
                    阻碍发现
                  </div>
                  <p className="text-red-600 mt-1">{chapters.conflict.blocker}</p>
                </div>

                <div className="space-y-3">
                  {chapters.conflict.options.map((option, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-lg border ${
                        option.selected
                          ? 'bg-emerald-50 border-emerald-200'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          option.selected
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-200 text-slate-600'
                        }`}>
                          {option.label}
                        </span>
                        <div>
                          <div className={`font-medium ${option.selected ? 'text-emerald-800' : 'text-slate-700'}`}>
                            {option.title}
                          </div>
                          <div className={`text-sm ${option.selected ? 'text-emerald-600' : 'text-slate-500'}`}>
                            {option.risk || option.benefit}
                          </div>
                        </div>
                      </div>
                      {option.selected && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Design Decisions Panel */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                <Target className="w-5 h-5 text-blue-500" />
                <h2 className="font-semibold text-slate-900">关键设计决策</h2>
              </div>
              <div className="divide-y divide-slate-100">
                {chapters.decisions.items.map((decision, index) => (
                  <div key={index} className="p-6">
                    <h3 className="font-medium text-slate-900 mb-3">
                      决策 {index + 1}：{decision.title}
                    </h3>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="bg-slate-50 rounded-lg p-3">
                        <div className="text-slate-500 mb-1">问题</div>
                        <div className="text-slate-700">{decision.problem}</div>
                      </div>
                      <div className="bg-red-50 rounded-lg p-3">
                        <div className="text-red-500 mb-1">尝试失败</div>
                        <div className="text-red-700">{decision.tried[0].approach} → {decision.tried[0].result}</div>
                      </div>
                      <div className="bg-emerald-50 rounded-lg p-3">
                        <div className="text-emerald-500 mb-1">最终方案</div>
                        <div className="text-emerald-700">{decision.solution.split('.')[0]}.</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - 1/3 */}
          <div className="space-y-6">
            {/* Market Comparison Chart */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-slate-400" />
                <h2 className="font-semibold text-slate-900">市场空白</h2>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-sm text-slate-500 mb-2">AI for Coachees (已饱和)</div>
                  <div className="space-y-2">
                    {chapters.spark.marketMap.existing.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full bg-${item.color}-500`}></div>
                        <span className="text-sm text-slate-700">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-2">AI for Coaches (空白市场)</div>
                  <div className="space-y-2">
                    {chapters.spark.marketMap.gap.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${item.status === 'empty' ? 'bg-red-400' : 'bg-amber-400'}`}></div>
                        <span className="text-sm text-slate-700">{item.name}</span>
                        <span className={`text-xs ${item.status === 'empty' ? 'text-red-500' : 'text-amber-500'}`}>
                          {item.status === 'empty' ? '空' : '少'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                <PieChart className="w-5 h-5 text-slate-400" />
                <h2 className="font-semibold text-slate-900">价值定位</h2>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="text-sm font-medium text-emerald-600">我们是</div>
                  {chapters.strategy.positioning.weAre.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-sm font-medium text-slate-400">我们不是</div>
                  {chapters.strategy.positioning.weAreNot.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-4 h-4 rounded-full border-2 border-slate-300"></span>
                      <span className="text-slate-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results & Learnings */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-900">反思总结</h2>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-sm font-medium text-emerald-600 mb-2">成功要素</div>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {chapters.reflection.whatWorked.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-600 mb-2">下一步</div>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {chapters.reflection.whatNext.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ArrowUpRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-slate-500 text-sm">
            Case Study by {caseStudyContent.author} · {caseStudyContent.year}
          </div>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            查看原型
          </button>
        </div>
      </footer>
    </div>
  );
}
