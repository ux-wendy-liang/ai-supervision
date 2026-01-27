import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// 方案9：漫画/插图叙事 - 适合创意公司
// 特点：简笔画讲故事，展示创意
// 配色：彩色活泼

export default function ComicStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;

  const panels = [
    {
      emoji: "🤔",
      title: "开篇",
      text: "有一天，我在想...",
      quote: chapters.spark.question,
      bg: "from-pink-400 to-rose-500",
    },
    {
      emoji: "💸",
      title: "发现",
      text: "督导太贵了！",
      quote: `${metrics.supervisionCost}/小时`,
      bg: "from-orange-400 to-amber-500",
    },
    {
      emoji: "💡",
      title: "灵感",
      text: "为什么不用 AI？",
      quote: `SimCare AI 年赚 ${metrics.validationRevenue}`,
      bg: "from-yellow-400 to-orange-400",
    },
    {
      emoji: "🚧",
      title: "障碍",
      text: "但是...",
      quote: "ICF 不认 AI 学时！",
      bg: "from-red-400 to-rose-500",
    },
    {
      emoji: "🔄",
      title: "转折",
      text: "换个思路！",
      quote: "不做替代，做练习工具",
      bg: "from-emerald-400 to-teal-500",
    },
    {
      emoji: "🎯",
      title: "解决",
      text: "三个关键设计",
      quote: "实时反馈 • 信任框架 • 多样角色",
      bg: "from-blue-400 to-indigo-500",
    },
    {
      emoji: "🚀",
      title: "成果",
      text: `${metrics.timeToPrototype} 完成原型`,
      quote: `市场机会 ${metrics.marketOpportunity}`,
      bg: "from-purple-400 to-pink-500",
    },
    {
      emoji: "🎉",
      title: "完结",
      text: "故事还在继续...",
      quote: "等你来探索！",
      bg: "from-indigo-400 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <span className="px-2 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm">
            漫画风格
          </span>
        </div>
      </nav>

      {/* Comic Title */}
      <header className="pt-24 pb-8 px-6 text-center">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
          AI Coach Mentor
        </h1>
        <p className="text-xl text-purple-600 mt-2 font-medium">一个产品设计师的冒险故事</p>
      </header>

      {/* Comic Panels */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {panels.map((panel, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${panel.bg} rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform`}
              style={{ minHeight: '280px' }}
            >
              <div className="text-6xl mb-4">{panel.emoji}</div>
              <div className="text-xs font-bold opacity-80 mb-1">#{i + 1} {panel.title}</div>
              <div className="text-lg font-bold mb-3">{panel.text}</div>
              <div className="bg-white/20 rounded-lg p-3 text-sm backdrop-blur-sm">
                "{panel.quote}"
              </div>
            </div>
          ))}
        </div>

        {/* Story Summary */}
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-purple-800">故事总结</h2>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-black text-pink-500">{metrics.marketOpportunity}</div>
              <div className="text-purple-600">市场机会</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-black text-orange-500">{metrics.timeToPrototype}</div>
              <div className="text-purple-600">完成时间</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-black text-emerald-500">{metrics.targetUsers}</div>
              <div className="text-purple-600">目标用户</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
          >
            进入原型世界 <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-purple-500">
        {caseStudyContent.author} · {caseStudyContent.year}
      </footer>
    </div>
  );
}
