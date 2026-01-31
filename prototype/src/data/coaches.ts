// Sample coach data for the directory

export interface Coach {
  id: string;
  name: string;
  title: string;
  tagline: string;
  avatar: string;
  certifications: string[];
  yearsExperience: number;
  specialties: string[];
  languages: string[];
  sessionTypes: ('online' | 'in-person')[];
  location: string;
  timezone: string;
  pricePerSession: number;
  sessionDuration: number; // in minutes
  rating: number;
  reviewCount: number;
  bio: string;
  approach: string;
  availableSlots: AvailableSlot[];
  reviews: Review[];
}

export interface AvailableSlot {
  date: string; // YYYY-MM-DD
  times: string[]; // HH:MM format
}

export interface Review {
  id: string;
  clientName: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
}

// Generate available slots for the next 30 days
function generateAvailableSlots(): AvailableSlot[] {
  const slots: AvailableSlot[] = [];
  const today = new Date();

  for (let i = 1; i <= 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // Skip Sundays only
    if (date.getDay() === 0) continue;

    const dateStr = date.toISOString().split('T')[0];

    // Different times based on day of week for variety
    const dayOfWeek = date.getDay();
    let times: string[];

    if (dayOfWeek === 6) {
      // Saturday: fewer times
      times = ['10:00', '11:00', '14:00'];
    } else if (dayOfWeek === 1 || dayOfWeek === 3) {
      // Monday, Wednesday: morning focus
      times = ['09:00', '10:00', '11:00', '14:00'];
    } else {
      // Tuesday, Thursday, Friday: full day
      times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
    }

    slots.push({ date: dateStr, times });
  }

  return slots;
}

export const coaches: Coach[] = [
  {
    id: 'coach-1',
    name: 'Sarah Chen',
    title: 'Executive Leadership Coach',
    tagline: 'Helping leaders unlock their authentic potential',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    certifications: ['ICF PCC', 'CTI CPCC'],
    yearsExperience: 8,
    specialties: ['Executive Coaching', 'Leadership Development', 'Career Transition', 'Team Dynamics'],
    languages: ['English', 'Mandarin'],
    sessionTypes: ['online', 'in-person'],
    location: 'San Francisco, CA',
    timezone: 'America/Los_Angeles',
    pricePerSession: 250,
    sessionDuration: 60,
    rating: 4.9,
    reviewCount: 47,
    bio: `With 8 years of experience coaching C-suite executives and emerging leaders, I specialize in helping professionals navigate complex organizational dynamics while staying true to their values.

Before becoming a coach, I spent 12 years in tech leadership roles at companies like Google and Stripe, where I led teams of 50+ engineers and experienced firsthand the challenges of leadership.`,
    approach: `My coaching approach combines deep listening, powerful questioning, and practical frameworks. I believe that every leader has the answers within them—my role is to help you access your inner wisdom and translate it into action.

I draw from ICF core competencies, adult development theory, and systems thinking to support sustainable transformation.`,
    availableSlots: generateAvailableSlots(),
    reviews: [
      {
        id: 'r1',
        clientName: 'Michael T.',
        rating: 5,
        date: '2026-01-15',
        comment: 'Sarah helped me navigate a difficult transition to VP. Her questions cut through my assumptions and helped me find clarity. Highly recommend!',
        helpful: 12
      },
      {
        id: 'r2',
        clientName: 'Jennifer L.',
        rating: 5,
        date: '2026-01-08',
        comment: 'Working with Sarah transformed how I show up as a leader. She creates a safe space while challenging me to grow.',
        helpful: 8
      },
      {
        id: 'r3',
        clientName: 'David K.',
        rating: 4,
        date: '2025-12-20',
        comment: 'Great coaching sessions. Sarah is insightful and helps you see blind spots you didn\'t know you had.',
        helpful: 5
      }
    ]
  },
  {
    id: 'coach-2',
    name: 'Marcus Johnson',
    title: 'Career Transition Specialist',
    tagline: 'Your partner in navigating meaningful career change',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    certifications: ['ICF ACC', 'SHRM-SCP'],
    yearsExperience: 5,
    specialties: ['Career Transition', 'Job Search Strategy', 'Personal Branding', 'Work-Life Balance'],
    languages: ['English', 'Spanish'],
    sessionTypes: ['online'],
    location: 'Austin, TX',
    timezone: 'America/Chicago',
    pricePerSession: 150,
    sessionDuration: 60,
    rating: 4.8,
    reviewCount: 32,
    bio: `I help professionals who feel stuck in their careers find clarity and make meaningful transitions. Having made my own pivot from corporate finance to coaching, I understand the fear, excitement, and uncertainty that comes with career change.

My clients include mid-career professionals looking to pivot, new graduates finding their path, and executives seeking more fulfilling work.`,
    approach: `I use a blend of coaching, career counseling, and practical strategy. We'll explore your values, strengths, and aspirations while building concrete action plans.

My goal is to help you not just land a new job, but design a career that aligns with who you really are.`,
    availableSlots: generateAvailableSlots(),
    reviews: [
      {
        id: 'r4',
        clientName: 'Amy R.',
        rating: 5,
        date: '2026-01-12',
        comment: 'Marcus helped me land my dream job in just 3 months! His practical approach combined with deep coaching made all the difference.',
        helpful: 15
      },
      {
        id: 'r5',
        clientName: 'Chris P.',
        rating: 5,
        date: '2025-12-28',
        comment: 'Best investment I made in my career. Marcus asks the right questions and provides actionable guidance.',
        helpful: 9
      }
    ]
  },
  {
    id: 'coach-3',
    name: 'Dr. Emily Watson',
    title: 'Life & Wellness Coach',
    tagline: 'Creating harmony between ambition and well-being',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    certifications: ['ICF MCC', 'NBC-HWC', 'PhD Psychology'],
    yearsExperience: 15,
    specialties: ['Life Balance', 'Stress Management', 'Health & Wellness', 'Mindfulness', 'Burnout Recovery'],
    languages: ['English'],
    sessionTypes: ['online', 'in-person'],
    location: 'New York, NY',
    timezone: 'America/New_York',
    pricePerSession: 300,
    sessionDuration: 90,
    rating: 5.0,
    reviewCount: 89,
    bio: `As a Master Certified Coach with a PhD in Psychology and 15 years of experience, I specialize in helping high achievers create sustainable success without sacrificing their health and relationships.

I've worked with executives from Fortune 500 companies, entrepreneurs, and healthcare professionals who struggle with burnout and work-life integration.`,
    approach: `My approach integrates evidence-based coaching with mindfulness practices and positive psychology. I help clients build awareness of their patterns, develop healthier habits, and create lasting change.

Sessions include reflection, skill-building, and practical experiments to try between our meetings.`,
    availableSlots: generateAvailableSlots(),
    reviews: [
      {
        id: 'r6',
        clientName: 'Robert M.',
        rating: 5,
        date: '2026-01-18',
        comment: 'Dr. Watson literally saved my career and marriage. Her wisdom and compassion helped me rebuild from burnout.',
        helpful: 28
      },
      {
        id: 'r7',
        clientName: 'Lisa H.',
        rating: 5,
        date: '2026-01-05',
        comment: 'The best coach I\'ve ever worked with. Emily combines deep expertise with genuine care.',
        helpful: 16
      },
      {
        id: 'r8',
        clientName: 'James W.',
        rating: 5,
        date: '2025-12-15',
        comment: 'Transformative experience. I finally understand what work-life balance means for me.',
        helpful: 11
      }
    ]
  },
  {
    id: 'coach-4',
    name: 'Aisha Patel',
    title: 'Startup Founder Coach',
    tagline: 'Supporting founders through the startup journey',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face',
    certifications: ['ICF PCC', 'Reboot Certified'],
    yearsExperience: 6,
    specialties: ['Entrepreneurship', 'Founder Wellness', 'Leadership', 'Decision Making', 'Team Building'],
    languages: ['English', 'Hindi'],
    sessionTypes: ['online'],
    location: 'Remote',
    timezone: 'America/New_York',
    pricePerSession: 200,
    sessionDuration: 60,
    rating: 4.9,
    reviewCount: 28,
    bio: `As a former 2x founder (one exit, one failure), I understand the unique challenges of building a company from scratch. The loneliness, the constant decision-making, the pressure—I've been there.

Now I coach founders at all stages, from pre-seed to Series C, helping them lead with clarity and maintain their humanity while building their dreams.`,
    approach: `I combine founder-specific coaching with practical business strategy. We'll work on both your inner game (mindset, resilience, self-awareness) and outer game (leadership, team, decisions).

I'm direct and supportive—you'll get honest feedback in a space of trust.`,
    availableSlots: generateAvailableSlots(),
    reviews: [
      {
        id: 'r9',
        clientName: 'Kevin Z.',
        rating: 5,
        date: '2026-01-10',
        comment: 'Aisha gets the founder journey like no other coach I\'ve met. She helped me through a tough co-founder situation.',
        helpful: 14
      },
      {
        id: 'r10',
        clientName: 'Priya S.',
        rating: 5,
        date: '2025-12-22',
        comment: 'Invaluable support during our Series A. Aisha helps you think clearly when everything feels chaotic.',
        helpful: 10
      }
    ]
  },
  {
    id: 'coach-5',
    name: 'Thomas Brown',
    title: 'New Manager Coach',
    tagline: 'Making the leap from individual contributor to leader',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    certifications: ['ICF ACC'],
    yearsExperience: 3,
    specialties: ['New Managers', 'First-time Leaders', 'Communication', 'Delegation', 'Feedback Skills'],
    languages: ['English'],
    sessionTypes: ['online'],
    location: 'Seattle, WA',
    timezone: 'America/Los_Angeles',
    pricePerSession: 100,
    sessionDuration: 45,
    rating: 4.7,
    reviewCount: 18,
    bio: `I specialize in helping new managers succeed in their first leadership role. The transition from doing the work to leading the work is one of the hardest shifts in a career—and I'm here to help you navigate it.

My clients are typically 6-18 months into their first management role and looking to build confidence and competence.`,
    approach: `Practical and action-oriented. Each session focuses on real challenges you're facing—difficult conversations, delegation, giving feedback, managing up.

You'll leave with specific things to try before our next session.`,
    availableSlots: generateAvailableSlots(),
    reviews: [
      {
        id: 'r11',
        clientName: 'Samantha J.',
        rating: 5,
        date: '2026-01-08',
        comment: 'Tom helped me build confidence as a new engineering manager. His practical tips made an immediate difference.',
        helpful: 7
      },
      {
        id: 'r12',
        clientName: 'Brian L.',
        rating: 4,
        date: '2025-12-30',
        comment: 'Great for new managers. Tom is easy to talk to and gives actionable advice.',
        helpful: 4
      }
    ]
  },
  {
    id: 'coach-6',
    name: 'Maria Garcia',
    title: 'Women in Leadership Coach',
    tagline: 'Empowering women to lead with confidence and authenticity',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
    certifications: ['ICF PCC', 'CCE', 'WBENC Certified'],
    yearsExperience: 10,
    specialties: ['Women in Leadership', 'Executive Presence', 'Negotiation', 'Work-Life Integration', 'Imposter Syndrome'],
    languages: ['English', 'Spanish', 'Portuguese'],
    sessionTypes: ['online', 'in-person'],
    location: 'Miami, FL',
    timezone: 'America/New_York',
    pricePerSession: 225,
    sessionDuration: 60,
    rating: 4.9,
    reviewCount: 56,
    bio: `I coach women leaders who are ready to claim their seat at the table. With 10 years of coaching experience and 15 years in corporate leadership, I understand the unique challenges women face in male-dominated industries.

My clients include directors, VPs, and C-suite executives at Fortune 500 companies, as well as women entrepreneurs building their own path.`,
    approach: `I create a supportive yet challenging space where you can explore what's holding you back and develop strategies to move forward. We'll work on mindset, skills, and practical tactics.

My coaching draws from feminist leadership theory, somatic practices, and ICF core competencies.`,
    availableSlots: generateAvailableSlots(),
    reviews: [
      {
        id: 'r13',
        clientName: 'Catherine W.',
        rating: 5,
        date: '2026-01-14',
        comment: 'Maria helped me find my voice in the boardroom. I negotiated a 40% raise after working with her!',
        helpful: 22
      },
      {
        id: 'r14',
        clientName: 'Rachel M.',
        rating: 5,
        date: '2026-01-02',
        comment: 'Finally a coach who understands what women leaders face. Maria is both supportive and direct.',
        helpful: 15
      }
    ]
  }
];

// Helper functions
export function getCoachById(id: string): Coach | undefined {
  return coaches.find(coach => coach.id === id);
}

export function filterCoaches(filters: {
  specialty?: string;
  priceRange?: [number, number];
  certification?: string;
  language?: string;
  sessionType?: 'online' | 'in-person';
}): Coach[] {
  return coaches.filter(coach => {
    if (filters.specialty && !coach.specialties.some(s =>
      s.toLowerCase().includes(filters.specialty!.toLowerCase())
    )) {
      return false;
    }
    if (filters.priceRange) {
      if (coach.pricePerSession < filters.priceRange[0] ||
          coach.pricePerSession > filters.priceRange[1]) {
        return false;
      }
    }
    if (filters.certification && !coach.certifications.some(c =>
      c.toLowerCase().includes(filters.certification!.toLowerCase())
    )) {
      return false;
    }
    if (filters.language && !coach.languages.some(l =>
      l.toLowerCase().includes(filters.language!.toLowerCase())
    )) {
      return false;
    }
    if (filters.sessionType && !coach.sessionTypes.includes(filters.sessionType)) {
      return false;
    }
    return true;
  });
}

// All unique specialties for filter options
export const allSpecialties = [...new Set(coaches.flatMap(c => c.specialties))].sort();

// All unique certifications
export const allCertifications = [...new Set(coaches.flatMap(c => c.certifications))].sort();

// All unique languages
export const allLanguages = [...new Set(coaches.flatMap(c => c.languages))].sort();
