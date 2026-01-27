import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  FileText,
  Lightbulb,
  AlertTriangle,
  Target,
  Wrench,
  BarChart3,
  CheckCircle,
  Circle
} from 'lucide-react';
import { useState } from 'react';

// 方案12：Notion 风格 - 适合科技公司
// 特点：像 Notion 页面，简洁有组织，toggle blocks
// 配色：Notion 配色（暖灰）

export default function NotionStyle() {
  const navigate = useNavigate();
  const { metrics, chapters, timeline } = caseStudyContent;

  // Toggle states
  const [openToggles, setOpenToggles] = useState<Set<string>>(new Set(['spark', 'conflict', 'decisions']));

  const toggleSection = (id: string) => {
    const newToggles = new Set(openToggles);
    if (newToggles.has(id)) {
      newToggles.delete(id);
    } else {
      newToggles.add(id);
    }
    setOpenToggles(newToggles);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation - Notion Style */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-stone-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-stone-500 text-sm">
            <button
              onClick={() => navigate('/case-study')}
              className="hover:text-stone-900 transition-colors"
            >
              Case Studies
            </button>
            <span>/</span>
            <span className="text-stone-900">AI Coach Mentor</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-stone-400">
            <span className="px-2 py-0.5 bg-stone-100 rounded text-stone-600">Notion 风格</span>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        {/* Page Title */}
        <header className="py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🎯</span>
            <h1 className="text-4xl font-bold text-stone-900">AI Coach Mentor</h1>
          </div>
          <p className="text-xl text-stone-500">
            发现 $4.5B 市场空白，4 周完成原型
          </p>

          {/* Properties - Notion Database Style */}
          <div className="mt-8 space-y-2 text-sm">
            <div className="flex items-center gap-8">
              <div className="w-32 text-stone-400">Status</div>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded">Completed</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-32 text-stone-400">Timeline</div>
              <span className="text-stone-700">{metrics.timeToPrototype}</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-32 text-stone-400">Market Size</div>
              <span className="text-stone-700">{metrics.marketOpportunity}</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-32 text-stone-400">Validation</div>
              <span className="text-stone-700">{metrics.validationRevenue} (SimCare AI)</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-32 text-stone-400">Tags</div>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded">Product Strategy</span>
                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded">0→1 Design</span>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded">AI-Powered</span>
              </div>
            </div>
          </div>
        </header>

        {/* Divider */}
        <hr className="border-stone-200 my-8" />

        {/* Callout - Summary */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-stone-900 mb-1">核心洞察</div>
              <p className="text-stone-700">{chapters.spark.insight}</p>
            </div>
          </div>
        </div>

        {/* Toggle Sections */}
        <div className="space-y-4">
          {/* Section 1: The Spark */}
          <div className="border border-stone-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('spark')}
              className="w-full flex items-center gap-3 p-4 hover:bg-stone-50 transition-colors text-left"
            >
              {openToggles.has('spark') ? (
                <ChevronDown className="w-5 h-5 text-stone-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-stone-400" />
              )}
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <span className="font-medium text-stone-900">1. 问题发现</span>
            </button>
            {openToggles.has('spark') && (
              <div className="px-12 pb-4 space-y-4">
                <blockquote className="border-l-4 border-stone-300 pl-4 italic text-stone-600">
                  "{chapters.spark.question}"
                </blockquote>
                <p className="text-stone-700">
                  督导费用：<code className="bg-stone-100 px-1 rounded">{metrics.supervisionCost}/小时</code>
                </p>
                <p className="text-stone-700">
                  验证案例：SimCare AI — <code className="bg-stone-100 px-1 rounded">{metrics.validationRevenue} 年收入</code>
                </p>
              </div>
            )}
          </div>

          {/* Section 2: The Conflict */}
          <div className="border border-stone-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('conflict')}
              className="w-full flex items-center gap-3 p-4 hover:bg-stone-50 transition-colors text-left"
            >
              {openToggles.has('conflict') ? (
                <ChevronDown className="w-5 h-5 text-stone-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-stone-400" />
              )}
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="font-medium text-stone-900">2. 战略转型</span>
            </button>
            {openToggles.has('conflict') && (
              <div className="px-12 pb-4 space-y-4">
                {/* Callout - Warning */}
                <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                    <p className="text-red-700 text-sm">{chapters.conflict.blocker}</p>
                  </div>
                </div>

                {/* Options as Todo List */}
                <div className="space-y-2">
                  {chapters.conflict.options.map((option, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {option.selected ? (
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                      ) : (
                        <Circle className="w-5 h-5 text-stone-300 mt-0.5" />
                      )}
                      <div>
                        <span className={option.selected ? 'text-stone-900' : 'text-stone-400 line-through'}>
                          {option.title}
                        </span>
                        <span className="text-stone-400 text-sm ml-2">
                          — {option.risk || option.benefit}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Callout - Success */}
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-3 rounded-r">
                  <div className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-emerald-500 mt-0.5" />
                    <p className="text-emerald-700 text-sm">{chapters.conflict.decision}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 3: Design Decisions */}
          <div className="border border-stone-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('decisions')}
              className="w-full flex items-center gap-3 p-4 hover:bg-stone-50 transition-colors text-left"
            >
              {openToggles.has('decisions') ? (
                <ChevronDown className="w-5 h-5 text-stone-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-stone-400" />
              )}
              <Wrench className="w-5 h-5 text-blue-500" />
              <span className="font-medium text-stone-900">3. 设计决策</span>
            </button>
            {openToggles.has('decisions') && (
              <div className="px-12 pb-4">
                {/* Table Style */}
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200">
                      <th className="text-left py-2 text-stone-500 font-normal">决策</th>
                      <th className="text-left py-2 text-stone-500 font-normal">问题</th>
                      <th className="text-left py-2 text-stone-500 font-normal">解决方案</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chapters.decisions.items.map((decision, i) => (
                      <tr key={i} className="border-b border-stone-100">
                        <td className="py-3 pr-4 text-stone-900 font-medium align-top">{decision.title}</td>
                        <td className="py-3 pr-4 text-stone-600 align-top">{decision.problem}</td>
                        <td className="py-3 text-stone-700 align-top">{decision.solution.split('.')[0]}.</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Section 4: Timeline */}
          <div className="border border-stone-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('timeline')}
              className="w-full flex items-center gap-3 p-4 hover:bg-stone-50 transition-colors text-left"
            >
              {openToggles.has('timeline') ? (
                <ChevronDown className="w-5 h-5 text-stone-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-stone-400" />
              )}
              <BarChart3 className="w-5 h-5 text-purple-500" />
              <span className="font-medium text-stone-900">4. 项目时间线</span>
            </button>
            {openToggles.has('timeline') && (
              <div className="px-12 pb-4">
                <div className="space-y-4">
                  {timeline.map((week, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-20 flex-shrink-0">
                        <span className="text-sm font-medium text-stone-900">Week {week.week}</span>
                      </div>
                      <div>
                        <div className="font-medium text-stone-700 mb-1">{week.title}</div>
                        <ul className="text-sm text-stone-500 space-y-0.5">
                          {week.activities.map((activity, j) => (
                            <li key={j}>• {activity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Section 5: Reflection */}
          <div className="border border-stone-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('reflection')}
              className="w-full flex items-center gap-3 p-4 hover:bg-stone-50 transition-colors text-left"
            >
              {openToggles.has('reflection') ? (
                <ChevronDown className="w-5 h-5 text-stone-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-stone-400" />
              )}
              <FileText className="w-5 h-5 text-stone-500" />
              <span className="font-medium text-stone-900">5. 反思</span>
            </button>
            {openToggles.has('reflection') && (
              <div className="px-12 pb-4 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-sm text-stone-500 mb-2">✓ 成功要素</div>
                  <ul className="space-y-1">
                    {chapters.reflection.whatWorked.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                        <span className="text-emerald-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm text-stone-500 mb-2">→ 下一步</div>
                  <ul className="space-y-1">
                    {chapters.reflection.whatNext.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                        <span className="text-blue-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-stone-200 my-12" />

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            查看交互原型
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-6 text-center text-stone-400 text-sm">
        Made with Notion-style by {caseStudyContent.author} · {caseStudyContent.year}
      </footer>
    </div>
  );
}
