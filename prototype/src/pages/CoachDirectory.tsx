import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Star, MapPin, Clock, Globe, ChevronDown, X, Sparkles } from 'lucide-react';
import { coaches, allSpecialties, allCertifications, allLanguages, type Coach } from '../data/coaches';

export default function CoachDirectory() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    specialty: '',
    priceRange: '' as '' | 'budget' | 'mid' | 'premium',
    certification: '',
    language: '',
    sessionType: '' as '' | 'online' | 'in-person'
  });

  // Filter coaches based on search and filters
  const filteredCoaches = coaches.filter(coach => {
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        coach.name.toLowerCase().includes(query) ||
        coach.title.toLowerCase().includes(query) ||
        coach.tagline.toLowerCase().includes(query) ||
        coach.specialties.some(s => s.toLowerCase().includes(query)) ||
        coach.bio.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // Specialty filter
    if (filters.specialty && !coach.specialties.some(s =>
      s.toLowerCase().includes(filters.specialty.toLowerCase())
    )) {
      return false;
    }

    // Price range filter
    if (filters.priceRange) {
      if (filters.priceRange === 'budget' && coach.pricePerSession > 150) return false;
      if (filters.priceRange === 'mid' && (coach.pricePerSession < 150 || coach.pricePerSession > 250)) return false;
      if (filters.priceRange === 'premium' && coach.pricePerSession < 250) return false;
    }

    // Certification filter
    if (filters.certification && !coach.certifications.some(c =>
      c.toLowerCase().includes(filters.certification.toLowerCase())
    )) {
      return false;
    }

    // Language filter
    if (filters.language && !coach.languages.some(l =>
      l.toLowerCase().includes(filters.language.toLowerCase())
    )) {
      return false;
    }

    // Session type filter
    if (filters.sessionType && !coach.sessionTypes.includes(filters.sessionType)) {
      return false;
    }

    return true;
  });

  const clearFilters = () => {
    setFilters({
      specialty: '',
      priceRange: '',
      certification: '',
      language: '',
      sessionType: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(v => v !== '');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              onClick={() => navigate('/')}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">CoachSpace</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/login')}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Log in
              </button>
              <button
                onClick={() => navigate('/coach/register')}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                Join as Coach
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 to-emerald-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Perfect Coach
          </h1>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl">
            Browse certified coaches who can help you achieve your goals.
            All coaches are verified and reviewed by real clients.
          </p>

          {/* Search Bar */}
          <div className="flex gap-3 max-w-2xl">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, specialty, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-3 rounded-xl flex items-center gap-2 transition-colors ${
                showFilters || hasActiveFilters
                  ? 'bg-white text-teal-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Filter className="w-5 h-5" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-teal-600 rounded-full" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4">
              {/* Specialty */}
              <div className="relative">
                <select
                  value={filters.specialty}
                  onChange={(e) => setFilters({ ...filters, specialty: e.target.value })}
                  className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">All Specialties</option>
                  {allSpecialties.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Price Range */}
              <div className="relative">
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters({ ...filters, priceRange: e.target.value as typeof filters.priceRange })}
                  className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Any Price</option>
                  <option value="budget">Under $150</option>
                  <option value="mid">$150 - $250</option>
                  <option value="premium">$250+</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Certification */}
              <div className="relative">
                <select
                  value={filters.certification}
                  onChange={(e) => setFilters({ ...filters, certification: e.target.value })}
                  className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">All Certifications</option>
                  {allCertifications.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Language */}
              <div className="relative">
                <select
                  value={filters.language}
                  onChange={(e) => setFilters({ ...filters, language: e.target.value })}
                  className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Any Language</option>
                  {allLanguages.map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Session Type */}
              <div className="relative">
                <select
                  value={filters.sessionType}
                  onChange={(e) => setFilters({ ...filters, sessionType: e.target.value as typeof filters.sessionType })}
                  className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Online & In-Person</option>
                  <option value="online">Online Only</option>
                  <option value="in-person">In-Person Only</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear all
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            {filteredCoaches.length} coach{filteredCoaches.length !== 1 ? 'es' : ''} found
          </p>
          <select className="appearance-none px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>Sort by: Recommended</option>
            <option>Sort by: Price (Low to High)</option>
            <option>Sort by: Price (High to Low)</option>
            <option>Sort by: Rating</option>
            <option>Sort by: Experience</option>
          </select>
        </div>

        {/* Coach Cards */}
        <div className="grid gap-6">
          {filteredCoaches.map(coach => (
            <CoachCard
              key={coach.id}
              coach={coach}
              onClick={() => navigate(`/coaches/${coach.id}`)}
            />
          ))}

          {filteredCoaches.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No coaches found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
              <button
                onClick={clearFilters}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CoachCard({ coach, onClick }: { coach: Coach; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer"
    >
      <div className="flex gap-6">
        {/* Avatar */}
        <div className="shrink-0">
          <img
            src={coach.avatar}
            alt={coach.name}
            className="w-24 h-24 rounded-2xl object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{coach.name}</h3>
              <p className="text-gray-600">{coach.title}</p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-2xl font-bold text-gray-900">${coach.pricePerSession}</div>
              <div className="text-sm text-gray-500">per {coach.sessionDuration} min</div>
            </div>
          </div>

          <p className="text-gray-700 mt-2 line-clamp-2">{coach.tagline}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-medium text-gray-900">{coach.rating}</span>
              <span>({coach.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {coach.location}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {coach.yearsExperience} years exp.
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              {coach.languages.join(', ')}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {coach.certifications.map(cert => (
              <span
                key={cert}
                className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full"
              >
                {cert}
              </span>
            ))}
            {coach.specialties.slice(0, 3).map(specialty => (
              <span
                key={specialty}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
              >
                {specialty}
              </span>
            ))}
            {coach.specialties.length > 3 && (
              <span className="px-2 py-1 text-gray-500 text-xs">
                +{coach.specialties.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
