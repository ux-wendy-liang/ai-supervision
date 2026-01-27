import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// 方案17：卡片快速浏览 - 适合移动端
// 特点：5-6张卡片，可滑动浏览
// 配色：多彩卡片

export default function CardSwipeStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      title: "问题",
      content: chapters.spark.question,
      stat: metrics.supervisionCost,
      statLabel: "督导费用/小时",
      bg: "from-rose-500 to-pink-600",
    },
    {
      title: "发现",
      content: chapters.spark.insight,
      stat: metrics.validationRevenue,
      statLabel: "SimCare AI 年收入",
      bg: "from-orange-500 to-amber-600",
    },
    {
      title: "障碍",
      content: chapters.conflict.blocker,
      stat: "ICF",
      statLabel: "不认可 AI 学时",
      bg: "from-red-500 to-rose-600",
    },
    {
      title: "转型",
      content: chapters.conflict.decision,
      stat: metrics.productPrice,
      statLabel: "年费无限练习",
      bg: "from-emerald-500 to-teal-600",
    },
    {
      title: "设计",
      content: "实时反馈侧边栏 • ICF 框架信任 • 多样化角色",
      stat: "3",
      statLabel: "关键设计决策",
      bg: "from-blue-500 to-indigo-600",
    },
    {
      title: "成果",
      content: `发现 ${metrics.marketOpportunity} 市场机会，${metrics.timeToPrototype} 完成原型`,
      stat: metrics.targetUsers,
      statLabel: "目标用户",
      bg: "from-purple-500 to-pink-600",
    },
  ];

  const nextCard = () => setCurrentCard((prev) => (prev + 1) % cards.length);
  const prevCard = () => setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Navigation */}
      <nav className="bg-slate-900 border-b border-white/10">
        <div className="max-w-md mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-white/60 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <span className="text-sm text-white/40">卡片浏览</span>
        </div>
      </nav>

      {/* Header */}
      <header className="text-center py-6">
        <h1 className="text-2xl font-bold text-white">AI Coach Mentor</h1>
        <p className="text-white/50 text-sm mt-1">滑动卡片快速了解项目</p>
      </header>

      {/* Cards */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Progress dots */}
          <div className="flex justify-center gap-2 mb-6">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentCard(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentCard ? 'bg-white w-6' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Current Card */}
          <div className="relative">
            <div
              className={`bg-gradient-to-br ${cards[currentCard].bg} rounded-3xl p-8 text-white min-h-[400px] flex flex-col shadow-2xl`}
            >
              <div className="text-sm font-medium opacity-80 mb-2">
                {currentCard + 1} / {cards.length}
              </div>
              <h2 className="text-3xl font-bold mb-4">{cards[currentCard].title}</h2>
              <p className="text-lg leading-relaxed flex-1 opacity-90">
                {cards[currentCard].content}
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-4xl font-bold">{cards[currentCard].stat}</div>
                <div className="text-sm opacity-80">{cards[currentCard].statLabel}</div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevCard}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextCard}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Swipe hint */}
          <p className="text-center text-white/30 text-sm mt-6">
            点击箭头或圆点切换卡片
          </p>
        </div>
      </main>

      {/* CTA */}
      <div className="text-center py-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-medium rounded-full"
        >
          查看原型 <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-white/30 text-sm">
        {caseStudyContent.author} · {caseStudyContent.year}
      </footer>
    </div>
  );
}
