import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// 方案4：书信体叙事 - 适合人性化公司
// 特点："致 Hiring Manager" 开头，有温度
// 配色：奶油白

export default function LetterStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-orange-50/90 backdrop-blur-sm z-50">
        <div className="max-w-2xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm">书信体</span>
        </div>
      </nav>

      {/* Letter */}
      <main className="max-w-2xl mx-auto px-6 pt-24 pb-16">
        <article className="bg-white rounded-lg shadow-lg p-12 border border-orange-100 font-serif">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="text-sm text-orange-400 mb-4">{caseStudyContent.year}</div>
            <h1 className="text-2xl font-bold text-orange-900">AI Coach Mentor</h1>
          </header>

          {/* Letter Body */}
          <div className="space-y-6 text-orange-900 leading-relaxed">
            <p>
              <span className="font-semibold">致未来的 Hiring Manager，</span>
            </p>

            <p>
              感谢你花时间阅读我的作品集。我想和你分享一个项目的故事——不只是结果，而是整个思考过程。
            </p>

            <p>
              故事开始于一个简单的问题：<em>"{chapters.spark.question}"</em>
            </p>

            <p>
              在研究中，我发现教练们依赖督导来提升技能，但每小时 {metrics.supervisionCost} 的费用让大多数人每月只能负担一次。我想，也许 AI 可以帮助解决这个问题。
            </p>

            <p>
              我找到了一个验证案例——SimCare AI，一家做治疗学生 AI 练习工具的公司，年收入 {metrics.validationRevenue}。这给了我信心：这个方向是可行的。
            </p>

            <p>
              但很快，我遇到了一堵墙：<strong>ICF 不承认 AI 督导的学时</strong>。
            </p>

            <p>
              这个发现让我不得不重新思考产品定位。与其试图替代人类督导，不如成为补充——在两次督导之间，给教练提供无限的练习机会。
            </p>

            <p>
              这个战略转型是我在这个项目中最自豪的决定。它展示了我如何在约束中找到创造空间。
            </p>

            <p>
              在设计过程中，我做了三个关键决策：
            </p>

            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>用可折叠侧边栏提供实时反馈，不打断对话流程</li>
              <li>基于 ICF 官方框架提供反馈，建立用户信任</li>
              <li>设计多样化的 AI 客户角色，让练习保持新鲜感</li>
            </ol>

            <p>
              整个项目从研究到原型，只用了 {metrics.timeToPrototype}。传统团队可能需要 3-4 个月。AI 工具帮助我加速了研究和设计流程，但战略思考——理解市场、做出取舍、定义价值——这些仍然是我作为设计师的核心价值。
            </p>

            <p>
              如果你正在寻找一个能够独立发现问题、定义策略、并快速执行的产品设计师，我希望这个项目能展示我的能力。
            </p>

            <p>
              期待有机会与你交流。
            </p>

            <div className="mt-12 pt-8 border-t border-orange-100">
              <p>此致，</p>
              <p className="font-bold text-xl mt-2">{caseStudyContent.author}</p>
              <p className="text-sm text-orange-500 mt-1">Product Designer</p>
            </div>
          </div>

          {/* PS */}
          <div className="mt-8 pt-8 border-t border-orange-100 text-sm text-orange-600">
            <p>
              <strong>P.S.</strong> 如果你想看完整的交互原型，可以点击下方按钮。
              市场机会估计 {metrics.marketOpportunity}，目标用户 {metrics.targetUsers}。
            </p>
          </div>
        </article>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            查看原型 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
