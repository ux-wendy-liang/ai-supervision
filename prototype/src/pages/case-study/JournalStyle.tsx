import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';

// 方案3：日记/日志风格 - 适合中小公司
// 特点：按 Week 1, 2, 3... 记录，真实感强
// 配色：米白色

export default function JournalStyle() {
  const navigate = useNavigate();
  const { chapters, metrics } = caseStudyContent;

  const journalEntries = [
    {
      date: "Week 1 · Day 1",
      title: "发现了一个有趣的问题",
      content: `今天在研究教练行业时，我问了自己一个问题："${chapters.spark.question}" 这个问题让我兴奋不已。`,
      mood: "curious",
    },
    {
      date: "Week 1 · Day 3",
      title: "督导成本让我震惊",
      content: `做了市场调研。督导费用 ${metrics.supervisionCost}/小时！大多数教练每月只能负担一次。这是一个明显的痛点。`,
      mood: "excited",
    },
    {
      date: "Week 1 · Day 5",
      title: "找到了验证案例",
      content: `发现了 SimCare AI —— YC 支持的创业公司，做治疗学生 AI 练习工具，年收入 ${metrics.validationRevenue}。这证明模式可行！`,
      mood: "hopeful",
    },
    {
      date: "Week 2 · Day 1",
      title: "遇到了一堵墙",
      content: `今天是沮丧的一天。发现 ICF 不承认 AI 督导学时。我的整个产品方向需要重新思考...`,
      mood: "frustrated",
    },
    {
      date: "Week 2 · Day 3",
      title: "转机！重新定位",
      content: `想通了！不做替代品，做练习工具。${chapters.conflict.decision} 这个重新定位让一切变得清晰。`,
      mood: "breakthrough",
    },
    {
      date: "Week 3 · Day 2",
      title: "设计实时反馈",
      content: `尝试了弹窗通知 —— 太打断对话了。尝试了只做事后总结 —— 太晚了。最后决定用可折叠侧边栏。`,
      mood: "working",
    },
    {
      date: "Week 3 · Day 4",
      title: "解决信任问题",
      content: `教练不信任 AI 评估软技能。解决方案：把所有反馈都基于 ICF 官方框架，加上时间戳和具体引用。`,
      mood: "working",
    },
    {
      date: "Week 4 · Day 2",
      title: "让练习感觉真实",
      content: `单一角色太无聊。随机场景没有进度感。设计了 6 个不同性格的 AI 客户，从入门到高级。`,
      mood: "creative",
    },
    {
      date: "Week 4 · Day 5",
      title: "原型完成！",
      content: `4 周完成了从研究到原型的全过程。传统团队可能需要 3-4 个月。AI 真的加速了流程。`,
      mood: "proud",
    },
  ];

  const moodEmojis: Record<string, string> = {
    curious: "🤔",
    excited: "✨",
    hopeful: "🌱",
    frustrated: "😤",
    breakthrough: "💡",
    working: "🔧",
    creative: "🎨",
    proud: "🎉",
  };

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-stone-100/90 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-2xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-stone-500 hover:text-stone-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <span className="px-2 py-1 bg-stone-200 text-stone-600 rounded text-sm">日记风格</span>
        </div>
      </nav>

      {/* Journal Cover */}
      <header className="pt-24 pb-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
              <Calendar className="w-10 h-10 text-amber-600" />
            </div>
          </div>
          <h1 className="text-3xl font-serif font-bold text-stone-800 mb-2">
            AI Coach Mentor
          </h1>
          <p className="text-stone-500 font-serif italic">
            一本关于产品探索的工作日志
          </p>
          <div className="mt-6 text-sm text-stone-400">
            {metrics.timeToPrototype} · {caseStudyContent.year}
          </div>
        </div>
      </header>

      {/* Journal Entries */}
      <main className="max-w-2xl mx-auto px-6 pb-16">
        <div className="space-y-6">
          {journalEntries.map((entry, index) => (
            <article
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-stone-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-stone-400 font-mono">{entry.date}</div>
                <span className="text-2xl">{moodEmojis[entry.mood]}</span>
              </div>
              <h2 className="text-lg font-serif font-semibold text-stone-800 mb-3">
                {entry.title}
              </h2>
              <p className="text-stone-600 leading-relaxed font-serif">
                {entry.content}
              </p>
            </article>
          ))}
        </div>

        {/* Summary Page */}
        <div className="mt-12 bg-amber-50 rounded-xl p-8 border border-amber-200">
          <h2 className="text-xl font-serif font-bold text-amber-900 mb-6 text-center">
            回顾与收获
          </h2>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-medium text-amber-800 mb-2">成功要素</h3>
              <ul className="space-y-1 text-amber-700">
                {chapters.reflection.whatWorked.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-amber-800 mb-2">下一步</h3>
              <ul className="space-y-1 text-amber-700">
                {chapters.reflection.whatNext.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700"
          >
            查看原型 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-stone-400 text-sm">
        {caseStudyContent.author} · {caseStudyContent.year}
      </footer>
    </div>
  );
}
