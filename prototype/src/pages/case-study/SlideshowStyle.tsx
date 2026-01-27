import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// 方案19：互动幻灯片 - 适合重视演示能力
// 特点：像 PPT 一样翻页
// 配色：深色专业

export default function SlideshowStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      content: (
        <div className="text-center">
          <div className="text-sm text-blue-400 mb-4">CASE STUDY · {caseStudyContent.year}</div>
          <h1 className="text-6xl font-bold mb-6">AI Coach Mentor</h1>
          <p className="text-2xl text-slate-400 mb-12">发现 $4.5B 市场空白</p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{metrics.marketOpportunity}</div>
              <div className="text-slate-500">市场机会</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">{metrics.timeToPrototype}</div>
              <div className="text-slate-500">完成时间</div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 2: Problem
    {
      content: (
        <div>
          <div className="text-blue-400 text-sm mb-4">问题</div>
          <h2 className="text-4xl font-bold mb-8">{chapters.spark.question}</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-4xl font-bold text-red-400 mb-2">{metrics.supervisionCost}</div>
              <div className="text-slate-400">督导费用/小时</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-4xl font-bold text-emerald-400 mb-2">{metrics.validationRevenue}</div>
              <div className="text-slate-400">SimCare AI 年收入</div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 3: Insight
    {
      content: (
        <div className="text-center">
          <div className="text-amber-400 text-sm mb-4">关键洞察</div>
          <h2 className="text-5xl font-bold leading-tight">{chapters.spark.insight}</h2>
        </div>
      ),
    },
    // Slide 4: Blocker
    {
      content: (
        <div className="text-center">
          <div className="text-red-400 text-sm mb-4">障碍</div>
          <h2 className="text-4xl font-bold mb-8">{chapters.conflict.blocker}</h2>
          <div className="text-2xl text-slate-400">整个产品方向需要重新思考</div>
        </div>
      ),
    },
    // Slide 5: Pivot
    {
      content: (
        <div className="text-center">
          <div className="text-emerald-400 text-sm mb-4">战略转型</div>
          <h2 className="text-4xl font-bold mb-8">{chapters.conflict.decision}</h2>
          <div className="flex justify-center gap-4 mt-8">
            <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg">补充工具</span>
            <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg">无限练习</span>
            <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg">{metrics.productPrice}/年</span>
          </div>
        </div>
      ),
    },
    // Slide 6: Design Decisions
    {
      content: (
        <div>
          <div className="text-blue-400 text-sm mb-4">关键设计决策</div>
          <div className="space-y-6">
            {chapters.decisions.items.map((d, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="font-bold text-xl mb-1">{d.title}</div>
                  <div className="text-slate-400">{d.solution.split('.')[0]}.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Slide 7: Results
    {
      content: (
        <div className="text-center">
          <div className="text-purple-400 text-sm mb-4">成果</div>
          <h2 className="text-4xl font-bold mb-12">项目影响</h2>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">{metrics.marketOpportunity}</div>
              <div className="text-slate-400">市场机会</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-emerald-400 mb-2">{metrics.timeToPrototype}</div>
              <div className="text-slate-400">完成时间</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-400 mb-2">{metrics.targetUsers}</div>
              <div className="text-slate-400">目标用户</div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 8: Thank you
    {
      content: (
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-8">谢谢观看</h2>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
          >
            探索原型 <ArrowRight className="w-5 h-5" />
          </button>
          <div className="mt-12 text-slate-500">{caseStudyContent.author}</div>
        </div>
      ),
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  return (
    <div className="h-screen bg-slate-950 text-white flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav className="bg-slate-900 border-b border-white/10 flex-shrink-0">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-white/60 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <span className="text-sm text-white/40">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </nav>

      {/* Slide Content */}
      <main className="flex-1 flex items-center justify-center p-12">
        <div className="w-full max-w-4xl">
          {slides[currentSlide].content}
        </div>
      </main>

      {/* Controls */}
      <div className="flex-shrink-0 flex items-center justify-between px-12 py-6 border-t border-white/10">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" /> 上一页
        </button>

        {/* Progress bar */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
        >
          下一页 <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
