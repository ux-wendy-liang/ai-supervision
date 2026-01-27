// 共用的 Case Study 内容数据
// 所有20个方案都会使用这个数据，只是展示方式不同

export const caseStudyContent = {
  // 基本信息
  title: "AI Coach Mentor",
  subtitle: "How I found a gap in a $4.5B market and built a prototype in 4 weeks",
  year: "2026",
  author: "Ru Liang",

  // 关键指标
  metrics: {
    marketOpportunity: "$5-7M",
    timeToPrototype: "4 weeks",
    traditionalTime: "3-4 months",
    validationRevenue: "$4M ARR",
    validationCompany: "SimCare AI",
    supervisionCost: "$150-300/hour",
    productPrice: "$79/year",
    targetUsers: "71,000+ ICF Coaches",
  },

  // 标签
  tags: ["Product Strategy", "0→1 Design", "AI-Powered Workflow"],

  // 章节内容
  chapters: {
    // 第一章：发现机会
    spark: {
      title: "The Spark",
      icon: "lightbulb",
      question: "Coaches help others grow. But who helps the coaches grow?",
      content: [
        "I was researching the coaching industry when I stumbled on a paradox.",
        "The answer: supervision sessions at $150-300/hour. Most coaches can only afford one session per month. By the time they discuss a difficult case, it's already weeks old.",
        "Then I discovered SimCare AI — a YC-backed startup that lets therapy students practice with AI patients. They raised $4.5M and were generating $4M in revenue.",
      ],
      insight: "Everyone builds AI to coach people. Nobody builds AI to coach the coaches.",
      marketMap: {
        existing: [
          { name: "Rocky.ai", description: "AI coaching for individuals", color: "blue" },
          { name: "Coachello", description: "Enterprise AI coaching", color: "purple" },
          { name: "CoachHub", description: "Human + AI hybrid", color: "green" },
        ],
        gap: [
          { name: "Practice Tool", status: "empty" },
          { name: "Real-time Feedback", status: "empty" },
          { name: "Skill Tracking", status: "limited" },
        ],
      },
    },

    // 第二章：遇到障碍
    conflict: {
      title: "The Conflict",
      icon: "warning",
      blocker: "ICF (the coaching certification body) won't count AI hours toward certification.",
      content: [
        "I got excited and started mapping the opportunity. But I quickly hit a wall.",
        "This changed everything. I couldn't build a \"replacement\" for human supervision. The entire product direction needed rethinking.",
      ],
      options: [
        {
          label: "A",
          title: "Ignore ICF, target non-certified coaches",
          risk: "Small market, low willingness to pay",
          selected: false,
        },
        {
          label: "B",
          title: "Fight for ICF recognition",
          risk: "Years of lobbying, uncertain outcome",
          selected: false,
        },
        {
          label: "C",
          title: "Reposition as a practice tool",
          benefit: "Complement, not compete",
          selected: true,
        },
      ],
      decision: "Don't replace supervision. Give coaches unlimited practice reps between their monthly sessions.",
    },

    // 第三章：制定策略
    strategy: {
      title: "The Strategy",
      icon: "target",
      positioning: {
        weAre: [
          "Unlimited practice reps",
          "Instant AI feedback",
          "Safe space to fail",
          "$79/year",
        ],
        weAreNot: [
          "Certification credit",
          "Human judgment",
          "Performance review",
          "$200/hour",
        ],
      },
      targetUsers: {
        count: "71,000+",
        type: "ICF Coaches",
        focus: "Especially trainees & new ACC coaches",
        reason: "Most practice-hungry & price-sensitive",
      },
    },

    // 第四章：解决方案
    solution: {
      title: "The Solution",
      icon: "message",
      features: [
        {
          name: "Simulate Practice",
          description: "Practice with AI clients anytime",
          points: [
            "Practice with AI clients anytime",
            "Real-time feedback as you coach",
            "Based on ICF's 8 Core Competencies",
          ],
        },
        {
          name: "Session Review",
          description: "Upload real coaching recordings",
          points: [
            "Upload real coaching recordings",
            "AI analyzes your performance",
            "Track progress over time",
          ],
        },
      ],
    },

    // 第五章：设计决策
    decisions: {
      title: "Key Design Decisions",
      icon: "trending",
      items: [
        {
          title: "Real-time feedback without disruption",
          problem: "Coaches need feedback, but interrupting the conversation breaks the flow.",
          tried: [
            { approach: "Pop-up notifications", result: "Too distracting", status: "failed" },
            { approach: "Post-session only", result: "Too late", status: "partial" },
          ],
          solution: "A collapsible sidebar showing live stats. Coaches can glance without breaking eye contact.",
        },
        {
          title: "Building trust with skeptical users",
          problem: "Coaches are skeptical of AI evaluating their \"soft skills.\"",
          tried: [
            { approach: "Generic AI feedback", result: "Felt arbitrary", status: "failed" },
            { approach: "Star ratings", result: "Too gamified", status: "partial" },
          ],
          solution: "Ground everything in ICF's official framework. Include timestamps, specific quotes, and ICF definitions. Make it educational, not judgmental.",
        },
        {
          title: "Making practice feel real",
          problem: "Practicing with AI can feel artificial and repetitive.",
          tried: [
            { approach: "Single persona", result: "Got boring fast", status: "failed" },
            { approach: "Random scenarios", result: "No progression", status: "partial" },
          ],
          solution: "6 distinct personas with difficulty levels (Beginner → Advanced). Customizable emotional states. Each session feels different.",
        },
      ],
      personas: [
        { name: "Li Wei", topic: "Career Anxiety", level: "Beginner", color: "indigo" },
        { name: "Zhang Min", topic: "Leadership", level: "Intermediate", color: "purple" },
        { name: "Wang Fang", topic: "Work-Life", level: "Beginner", color: "pink" },
        { name: "Zhao Qiang", topic: "Burnout", level: "Advanced", color: "red" },
      ],
    },

    // 第六章：反思
    reflection: {
      title: "Reflection",
      whatWorked: [
        "Starting with market research before design",
        "Finding a comparable business (SimCare) to validate the model",
        "Repositioning when I hit the ICF constraint",
      ],
      whatNext: [
        "Voice interface (coaching is conversational)",
        "User testing with real coaches",
        "AI fine-tuning on actual coaching transcripts",
      ],
      aiNote: "This project would take a traditional team 3-4 months. I did it in 4 weeks by using AI as a research partner and design accelerator — while keeping the strategic thinking that only humans can do.",
    },
  },

  // 时间线（用于日记/日志风格）
  timeline: [
    {
      week: 1,
      title: "Research & Discovery",
      activities: [
        "Researched coaching industry landscape",
        "Discovered SimCare AI as validation",
        "Identified market gap",
      ],
    },
    {
      week: 2,
      title: "Strategy & Pivot",
      activities: [
        "Hit ICF certification wall",
        "Pivoted to practice tool positioning",
        "Defined value proposition",
      ],
    },
    {
      week: 3,
      title: "Design & Prototype",
      activities: [
        "Designed core features",
        "Iterated on real-time feedback",
        "Created persona system",
      ],
    },
    {
      week: 4,
      title: "Polish & Launch",
      activities: [
        "Refined UI/UX details",
        "Built interactive prototype",
        "Documented case study",
      ],
    },
  ],

  // 用户旅程（用于用户旅程风格）
  userJourney: {
    persona: {
      name: "Sarah",
      role: "New ACC Coach",
      challenge: "Needs practice but can't afford frequent supervision",
    },
    stages: [
      {
        name: "Awareness",
        painPoint: "Feels stuck in growth, supervision is too expensive",
        emotion: "frustrated",
        opportunity: "Discover AI practice tool",
      },
      {
        name: "Consideration",
        painPoint: "Skeptical of AI evaluating soft skills",
        emotion: "hesitant",
        opportunity: "See ICF framework integration",
      },
      {
        name: "Trial",
        painPoint: "Worried practice won't feel real",
        emotion: "curious",
        opportunity: "Experience diverse personas",
      },
      {
        name: "Adoption",
        painPoint: "Needs to track improvement",
        emotion: "engaged",
        opportunity: "View progress over time",
      },
      {
        name: "Advocacy",
        painPoint: "Wants to share with peers",
        emotion: "satisfied",
        opportunity: "Recommend to fellow coaches",
      },
    ],
  },
};

// 20个方案的元数据
export const caseStudyVariants = [
  {
    id: 1,
    name: "Movie Style",
    title: "电影式章节",
    description: "像电影一样分幕展开，有开场、冲突、高潮、结局",
    targetCompany: "创业公司",
    colorScheme: "purple-blue-gradient",
    path: "/case-study/movie",
  },
  {
    id: 2,
    name: "Interview Style",
    title: "访谈风格",
    description: "Q&A 访谈格式，展示思考深度",
    targetCompany: "设计公司",
    colorScheme: "warm-beige",
    path: "/case-study/interview",
  },
  {
    id: 3,
    name: "Journal Style",
    title: "日记风格",
    description: "按 Week 1, 2, 3... 记录，真实感强",
    targetCompany: "中小公司",
    colorScheme: "cream-white",
    path: "/case-study/journal",
  },
  {
    id: 4,
    name: "Letter Style",
    title: "书信体",
    description: "'致 Hiring Manager' 开头，有温度",
    targetCompany: "人性化公司",
    colorScheme: "soft-cream",
    path: "/case-study/letter",
  },
  {
    id: 5,
    name: "Dashboard Style",
    title: "仪表盘风格",
    description: "数字+图表，快速传达影响力",
    targetCompany: "大厂",
    colorScheme: "white-blue",
    recommended: true,
    path: "/case-study/dashboard",
  },
  {
    id: 6,
    name: "Before/After Style",
    title: "Before/After",
    description: "每个设计决策的前后对比",
    targetCompany: "大厂",
    colorScheme: "white-green",
    path: "/case-study/before-after",
  },
  {
    id: 7,
    name: "Metrics Wall Style",
    title: "指标卡片墙",
    description: "大数字醒目展示",
    targetCompany: "大厂",
    colorScheme: "dark-colorful",
    path: "/case-study/metrics-wall",
  },
  {
    id: 8,
    name: "Research Style",
    title: "研究报告",
    description: "学术风格，专业严谨",
    targetCompany: "咨询公司",
    colorScheme: "navy-white",
    path: "/case-study/research",
  },
  {
    id: 9,
    name: "Comic Style",
    title: "漫画叙事",
    description: "简笔画讲故事，展示创意",
    targetCompany: "创意公司",
    colorScheme: "colorful-playful",
    path: "/case-study/comic",
  },
  {
    id: 10,
    name: "Infographic Style",
    title: "信息图表",
    description: "整个页面就是一张大信息图",
    targetCompany: "媒体公司",
    colorScheme: "gradient-colorful",
    path: "/case-study/infographic",
  },
  {
    id: 11,
    name: "Magazine Style",
    title: "杂志排版",
    description: "图文并茂，精致排版",
    targetCompany: "设计公司",
    colorScheme: "black-white-classic",
    path: "/case-study/magazine",
  },
  {
    id: 12,
    name: "Notion Style",
    title: "Notion 风格",
    description: "简洁有组织，像 Notion 页面",
    targetCompany: "科技公司",
    colorScheme: "notion-theme",
    path: "/case-study/notion",
  },
  {
    id: 13,
    name: "Journey Map Style",
    title: "用户旅程",
    description: "围绕用户旅程展开",
    targetCompany: "UX 岗位",
    colorScheme: "blue-purple-gradient",
    recommended: true,
    path: "/case-study/journey-map",
  },
  {
    id: 14,
    name: "Hypothesis Style",
    title: "假设验证",
    description: "问题→假设→验证的科学方法",
    targetCompany: "UX 岗位",
    colorScheme: "green-theme",
    path: "/case-study/hypothesis",
  },
  {
    id: 15,
    name: "Decision Tree Style",
    title: "决策树",
    description: "展示每个选择和权衡",
    targetCompany: "产品公司",
    colorScheme: "orange-theme",
    path: "/case-study/decision-tree",
  },
  {
    id: 16,
    name: "One Pager Style",
    title: "一页总结",
    description: "所有内容压缩到一页，30秒传达价值",
    targetCompany: "忙碌 Recruiter",
    colorScheme: "minimal-white",
    recommended: true,
    path: "/case-study/one-pager",
  },
  {
    id: 17,
    name: "Card Swipe Style",
    title: "卡片快速浏览",
    description: "5-6张卡片，移动端友好",
    targetCompany: "移动端",
    colorScheme: "multi-color-cards",
    path: "/case-study/card-swipe",
  },
  {
    id: 18,
    name: "Bullet Style",
    title: "要点清单",
    description: "纯 bullet points，极简直接",
    targetCompany: "文字派",
    colorScheme: "pure-minimal",
    path: "/case-study/bullet",
  },
  {
    id: 19,
    name: "Slideshow Style",
    title: "互动幻灯片",
    description: "像 PPT 一样翻页，展示演示能力",
    targetCompany: "重视演示能力",
    colorScheme: "dark-professional",
    path: "/case-study/slideshow",
  },
  {
    id: 20,
    name: "Prototype Embed Style",
    title: "原型嵌入",
    description: "嵌入可交互原型，展示原型能力",
    targetCompany: "技术公司",
    colorScheme: "blue-purple-gradient",
    path: "/case-study/prototype-embed",
  },
];

// 分类
export const caseStudyCategories = [
  {
    name: "叙事驱动型",
    description: "适合讲故事能力强的展示",
    variants: [1, 2, 3, 4],
  },
  {
    name: "数据驱动型",
    description: "适合大厂和数据敏感公司",
    variants: [5, 6, 7, 8],
  },
  {
    name: "视觉叙事型",
    description: "适合创意和设计驱动公司",
    variants: [9, 10, 11, 12],
  },
  {
    name: "用户体验驱动型",
    description: "适合 UX 岗位",
    variants: [13, 14, 15],
  },
  {
    name: "极简型",
    description: "适合时间紧迫的 Recruiter",
    variants: [16, 17, 18],
  },
  {
    name: "互动体验型",
    description: "展示技术能力",
    variants: [19, 20],
  },
];
