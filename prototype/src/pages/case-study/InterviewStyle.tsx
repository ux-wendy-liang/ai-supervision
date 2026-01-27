import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  User,
  CheckCircle
} from 'lucide-react';

// 方案2：对话式访谈风格 - 适合设计驱动公司
// 特点：Q&A 访谈格式，展示思考深度
// 配色：温暖米色（Notion/Figma 风格）

export default function InterviewStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;

  // Q&A 内容
  const qaContent = [
    {
      question: "这个项目的起点是什么？",
      answer: `我在研究教练行业时，发现了一个有趣的悖论：教练帮助别人成长，但谁来帮助教练成长？答案是督导，每小时 ${metrics.supervisionCost}。大多数教练每月只能负担一次。然后我发现 SimCare AI——一家让治疗学生和 AI 病人练习的创业公司，年收入 ${metrics.validationRevenue}。这让我意识到：所有人都在做 AI 教练来帮助普通人，但没人做 AI 来帮助教练本身。`,
    },
    {
      question: "你遇到的最大挑战是什么？",
      answer: `ICF（国际教练联合会）不承认 AI 督导的学时。这是一个根本性的障碍。我不能把产品定位为人类督导的替代品。整个产品方向需要重新思考。`,
    },
    {
      question: "你是如何解决这个问题的？",
      answer: `我把产品从"替代品"重新定位为"练习工具"。不是取代每月一次的督导，而是在两次督导之间提供无限的练习机会。这样既规避了 ICF 的限制，又真正解决了教练的痛点。`,
    },
    {
      question: "在设计过程中，你做了哪些关键决策？",
      answer: `三个关键决策：第一，实时反馈如何不打断对话——我用了可折叠侧边栏展示实时数据。第二，如何让 AI 评估获得信任——我把所有反馈都基于 ICF 官方框架，包含时间戳和具体引用。第三，如何让练习感觉真实——我设计了 6 个不同性格的 AI 客户，从入门到高级，每次练习都有不同体验。`,
    },
    {
      question: "你如何验证产品方向？",
      answer: `我找到了 SimCare AI 作为类比验证。他们做的是治疗学生的 AI 练习工具，获得了 YC 投资，年收入 ${metrics.validationRevenue}。这证明了"专业人士的 AI 练习工具"这个模式是可行的。`,
    },
    {
      question: "这个项目花了多长时间？",
      answer: `从研究到原型，一共 ${metrics.timeToPrototype}。传统团队可能需要 3-4 个月。我用 AI 作为研究伙伴和设计加速器，但战略思考仍然是人类独有的。`,
    },
    {
      question: "如果可以重来，你会做什么不同的事？",
      answer: `我会更早做用户访谈。虽然市场研究很充分，但和真实教练的对话可能会揭示更多细节需求。下一步我想探索语音界面——毕竟教练对话天然是语音的。`,
    },
    {
      question: "这个项目展示了你什么能力？",
      answer: `首先是产品战略能力——发现市场空白，在遇到障碍时快速调整定位。其次是系统性设计思维——每个设计决策都有明确的问题、尝试和解决方案。最后是高效执行——用 AI 工具加速流程，但不牺牲质量。`,
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-amber-50/90 backdrop-blur-sm border-b border-amber-200 z-50">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回方案列表</span>
          </button>
          <div className="flex items-center gap-2 text-sm text-amber-600">
            <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-md font-medium">访谈风格</span>
            <span>适合：设计公司</span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-sm text-amber-600 font-medium mb-3">CASE STUDY · 2026</div>
          <h1 className="text-4xl font-serif font-bold text-amber-900 mb-4">AI Coach Mentor</h1>
          <p className="text-xl text-amber-700">
            一次关于发现市场空白、战略转型和快速执行的对话
          </p>

          {/* Quick Stats */}
          <div className="flex gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2 text-amber-700">
              <span className="font-semibold">{metrics.marketOpportunity}</span>
              <span className="text-amber-500">市场机会</span>
            </div>
            <div className="flex items-center gap-2 text-amber-700">
              <span className="font-semibold">{metrics.timeToPrototype}</span>
              <span className="text-amber-500">完成时间</span>
            </div>
            <div className="flex items-center gap-2 text-amber-700">
              <span className="font-semibold">{metrics.validationRevenue}</span>
              <span className="text-amber-500">模式验证</span>
            </div>
          </div>
        </div>
      </header>

      {/* Interview Introduction */}
      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 border border-amber-200 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-amber-900">{caseStudyContent.author}</div>
                <div className="text-sm text-amber-600">Product Designer</div>
              </div>
            </div>
            <p className="text-amber-700 italic">
              "这个项目始于一个简单的问题，但答案带我走向了一个全新的产品方向。让我分享这段旅程。"
            </p>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto space-y-8">
          {qaContent.map((qa, index) => (
            <div key={index} className="space-y-4">
              {/* Question */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1 pt-2">
                  <p className="font-semibold text-amber-900 text-lg">
                    {qa.question}
                  </p>
                </div>
              </div>

              {/* Answer */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pt-2">
                  <div className="bg-white rounded-2xl rounded-tl-none p-5 border border-amber-200 shadow-sm">
                    <p className="text-amber-800 leading-relaxed">
                      {qa.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="px-6 py-16 bg-amber-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6 text-center">
            关键收获
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {chapters.reflection.whatWorked.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-amber-200">
                <div className="flex items-center gap-2 text-amber-600 mb-3">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">成功要素 {index + 1}</span>
                </div>
                <p className="text-amber-800 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6 text-center">
            最终解决方案
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {chapters.solution.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-amber-200 shadow-sm">
                <h3 className="font-semibold text-amber-900 mb-3">{feature.name}</h3>
                <ul className="space-y-2">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-amber-700">
                      <span className="text-amber-400 mt-1">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 bg-gradient-to-br from-amber-600 to-orange-500 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            想看完整的交互原型？
          </h2>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-amber-700 font-semibold rounded-xl hover:shadow-xl transition-all"
          >
            探索原型
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-amber-600 text-sm">
        Case Study by {caseStudyContent.author} · {caseStudyContent.year}
      </footer>
    </div>
  );
}
