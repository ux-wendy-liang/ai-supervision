import { useNavigate } from 'react-router-dom';
import { caseStudyContent } from '../../data/caseStudyContent';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// 方案11：杂志排版风格 - 适合设计公司
// 特点：图文并茂，精致排版，像杂志文章
// 配色：黑白经典

export default function MagazineStyle() {
  const navigate = useNavigate();
  const { metrics, chapters } = caseStudyContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-slate-900 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/case-study')}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回</span>
          </button>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="px-2 py-1 bg-slate-900 text-white rounded-md font-medium">杂志排版</span>
            <span>适合：设计公司</span>
          </div>
        </div>
      </nav>

      {/* Hero - Magazine Cover Style */}
      <header className="pt-20 pb-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="border-b border-white/20 pb-4 mb-8">
            <span className="text-sm tracking-widest">CASE STUDY</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            AI Coach<br />Mentor
          </h1>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                在 $4.5B 的市场中找到空白，用 4 周时间从概念到原型
              </p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-serif font-bold">{metrics.marketOpportunity}</div>
              <div className="text-sm text-white/50 tracking-widest mt-1">MARKET OPPORTUNITY</div>
            </div>
          </div>
        </div>
      </header>

      {/* Magazine Two-Column Layout */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Drop Cap Opening */}
        <section className="mb-16">
          <p className="text-xl leading-relaxed text-slate-700">
            <span className="float-left text-7xl font-serif font-bold text-slate-900 mr-3 mt-1 leading-none">我</span>
            在研究教练行业时，偶然发现了一个悖论：教练帮助别人成长，但谁来帮助教练成长？这个简单的问题，开启了一段意想不到的产品探索之旅。
          </p>
        </section>

        {/* Pull Quote */}
        <aside className="my-12 py-8 border-t-4 border-b-4 border-slate-900">
          <blockquote className="text-3xl font-serif italic text-center text-slate-900 leading-snug">
            "{chapters.spark.question}"
          </blockquote>
        </aside>

        {/* Two Column Text */}
        <section className="columns-2 gap-12 mb-16 text-slate-700 leading-relaxed">
          <p className="mb-4">
            答案是督导课程，每小时收费 {metrics.supervisionCost}。对于大多数教练来说，每月只能负担一次。等到讨论困难案例时，事情已经过去好几周了。
          </p>
          <p className="mb-4">
            我发现了一家名为 SimCare AI 的公司——YC 支持的创业公司，让治疗学生与 AI 病人练习。他们融资 $4.5M，年收入达到 {metrics.validationRevenue}。
          </p>
          <p className="mb-4">
            这让我意识到：所有人都在做 AI 教练来帮助普通人。没有人做 AI 来帮助教练本身。
          </p>
          <p>
            但当我开始规划产品时，遇到了一个根本性的障碍：ICF（国际教练联合会）不承认 AI 督导的学时。
          </p>
        </section>

        {/* Full Width Divider */}
        <div className="flex items-center gap-4 my-16">
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="text-slate-400 text-sm tracking-widest">THE PIVOT</span>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        {/* The Pivot Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">战略转型</h2>
          <div className="grid grid-cols-3 gap-8">
            {chapters.conflict.options.map((option, index) => (
              <div
                key={index}
                className={`p-6 border-2 ${
                  option.selected
                    ? 'border-slate-900 bg-slate-50'
                    : 'border-slate-200'
                }`}
              >
                <div className={`text-4xl font-serif font-bold mb-2 ${
                  option.selected ? 'text-slate-900' : 'text-slate-300'
                }`}>
                  {option.label}
                </div>
                <h3 className={`font-medium mb-2 ${
                  option.selected ? 'text-slate-900' : 'text-slate-500'
                }`}>
                  {option.title}
                </h3>
                <p className={`text-sm ${
                  option.selected ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {option.risk || option.benefit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pull Quote - Decision */}
        <aside className="my-12 pl-8 border-l-4 border-slate-900">
          <p className="text-2xl font-serif text-slate-900 leading-snug">
            {chapters.conflict.decision}
          </p>
        </aside>

        {/* Full Width Divider */}
        <div className="flex items-center gap-4 my-16">
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="text-slate-400 text-sm tracking-widest">DESIGN DECISIONS</span>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        {/* Design Decisions */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">关键设计决策</h2>

          {chapters.decisions.items.map((decision, index) => (
            <div key={index} className="mb-12 pb-12 border-b border-slate-100 last:border-0">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-5xl font-serif font-bold text-slate-200">0{index + 1}</span>
                <h3 className="text-xl font-medium text-slate-900">{decision.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-700 mb-4">{decision.problem}</p>
                  <div className="text-sm text-slate-500">
                    <span className="font-medium">尝试：</span>
                    {decision.tried.map(t => `${t.approach} (${t.result})`).join('，')}
                  </div>
                </div>
                <div className="bg-slate-50 p-6 border-l-4 border-slate-900">
                  <div className="text-sm text-slate-500 mb-2">解决方案</div>
                  <p className="text-slate-800">{decision.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Stats Bar */}
        <section className="bg-slate-900 text-white p-8 mb-16">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-serif font-bold mb-1">{metrics.marketOpportunity}</div>
              <div className="text-sm text-white/60">市场机会</div>
            </div>
            <div className="border-l border-r border-white/20">
              <div className="text-3xl font-serif font-bold mb-1">{metrics.timeToPrototype}</div>
              <div className="text-sm text-white/60">完成时间</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold mb-1">{metrics.targetUsers}</div>
              <div className="text-sm text-white/60">目标用户</div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="columns-2 gap-12 text-slate-700 leading-relaxed">
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-4">成功要素</h3>
            {chapters.reflection.whatWorked.map((item, i) => (
              <p key={i} className="mb-2">• {item}</p>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-4">下一步</h3>
            {chapters.reflection.whatNext.map((item, i) => (
              <p key={i} className="mb-2">• {item}</p>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-white/50 mb-1">Case Study by</div>
            <div className="font-serif font-bold">{caseStudyContent.author}</div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors"
          >
            查看原型
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
