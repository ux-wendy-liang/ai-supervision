import { useNavigate } from 'react-router-dom';
import { caseStudyVariants, caseStudyCategories } from '../../data/caseStudyContent';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

export default function CaseStudyIndex() {
  const navigate = useNavigate();

  // 获取分类下的方案
  const getVariantsForCategory = (variantIds: number[]) => {
    return caseStudyVariants.filter(v => variantIds.includes(v.id));
  };

  // 颜色映射
  const getColorClasses = (colorScheme: string) => {
    const colorMap: Record<string, { bg: string; border: string; text: string }> = {
      'purple-blue-gradient': { bg: 'bg-gradient-to-br from-purple-500 to-indigo-600', border: 'border-purple-300', text: 'text-white' },
      'warm-beige': { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-900' },
      'cream-white': { bg: 'bg-stone-50', border: 'border-stone-200', text: 'text-stone-800' },
      'soft-cream': { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-900' },
      'white-blue': { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-900' },
      'white-green': { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-900' },
      'dark-colorful': { bg: 'bg-slate-800', border: 'border-slate-600', text: 'text-white' },
      'navy-white': { bg: 'bg-slate-900', border: 'border-slate-700', text: 'text-white' },
      'colorful-playful': { bg: 'bg-gradient-to-br from-pink-400 to-yellow-400', border: 'border-pink-300', text: 'text-white' },
      'gradient-colorful': { bg: 'bg-gradient-to-br from-cyan-400 to-purple-500', border: 'border-cyan-300', text: 'text-white' },
      'black-white-classic': { bg: 'bg-white', border: 'border-slate-900', text: 'text-slate-900' },
      'notion-theme': { bg: 'bg-stone-100', border: 'border-stone-300', text: 'text-stone-800' },
      'blue-purple-gradient': { bg: 'bg-gradient-to-br from-blue-500 to-purple-600', border: 'border-blue-300', text: 'text-white' },
      'green-theme': { bg: 'bg-emerald-100', border: 'border-emerald-300', text: 'text-emerald-900' },
      'orange-theme': { bg: 'bg-orange-100', border: 'border-orange-300', text: 'text-orange-900' },
      'minimal-white': { bg: 'bg-white', border: 'border-slate-200', text: 'text-slate-900' },
      'multi-color-cards': { bg: 'bg-gradient-to-br from-rose-400 to-orange-400', border: 'border-rose-300', text: 'text-white' },
      'pure-minimal': { bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-800' },
      'dark-professional': { bg: 'bg-slate-950', border: 'border-slate-800', text: 'text-white' },
    };
    return colorMap[colorScheme] || { bg: 'bg-slate-100', border: 'border-slate-300', text: 'text-slate-800' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Case Study Gallery</h1>
              <p className="text-slate-500 text-sm mt-1">20种不同风格，给不同类型的公司</p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              返回首页
            </button>
          </div>
        </div>
      </header>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-indigo-600">20</div>
            <div className="text-slate-600 text-sm mt-1">种展示方案</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-emerald-600">6</div>
            <div className="text-slate-600 text-sm mt-1">大分类</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-3xl font-bold text-purple-600">3</div>
            <div className="text-slate-600 text-sm mt-1">推荐首选</div>
          </div>
        </div>

        {/* Recommended Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h2 className="text-xl font-bold text-slate-900">推荐首选</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {caseStudyVariants.filter(v => v.recommended).map(variant => {
              const colors = getColorClasses(variant.colorScheme);
              return (
                <button
                  key={variant.id}
                  onClick={() => navigate(variant.path)}
                  className="group text-left"
                >
                  <div className={`${colors.bg} ${colors.text} rounded-2xl p-6 h-40 flex flex-col justify-between transition-all hover:scale-[1.02] hover:shadow-xl border-2 ${colors.border}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium opacity-75">#{variant.id}</span>
                        <Sparkles className="w-4 h-4 text-amber-400" />
                      </div>
                      <h3 className="text-lg font-bold">{variant.title}</h3>
                      <p className="text-sm opacity-80 mt-1">{variant.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs px-2 py-1 bg-white/20 rounded-full">{variant.targetCompany}</span>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories */}
        {caseStudyCategories.map(category => (
          <div key={category.name} className="mb-12">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">{category.name}</h2>
              <p className="text-slate-500 text-sm mt-1">{category.description}</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {getVariantsForCategory(category.variants).map(variant => {
                const colors = getColorClasses(variant.colorScheme);
                return (
                  <button
                    key={variant.id}
                    onClick={() => navigate(variant.path)}
                    className="group text-left"
                  >
                    <div className={`${colors.bg} ${colors.text} rounded-xl p-4 h-32 flex flex-col justify-between transition-all hover:scale-[1.02] hover:shadow-lg border ${colors.border}`}>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium opacity-60">#{variant.id}</span>
                          {variant.recommended && <Star className="w-3 h-3 text-amber-400 fill-amber-400" />}
                        </div>
                        <h3 className="font-semibold text-sm">{variant.title}</h3>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs opacity-60">{variant.targetCompany}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="text-center py-12 text-slate-500 text-sm">
          <p>点击任意方案查看完整 Case Study</p>
          <p className="mt-2">AI Coach Mentor · Ru Liang · 2026</p>
        </div>
      </div>
    </div>
  );
}
