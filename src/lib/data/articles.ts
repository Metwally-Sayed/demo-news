import { Article } from '@/types/article';
import { categories } from './categories';

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'The Future of Artificial Intelligence in Healthcare',
    titleAr: 'مستقبل الذكاء الاصطناعي في الرعاية الصحية',
    slug: 'future-ai-healthcare',
    excerpt:
      'Exploring how AI is revolutionizing medical diagnosis and treatment, from machine learning algorithms to robotic surgery.',
    excerptAr:
      'استكشاف كيف يحدث الذكاء الاصطناعي ثورة في التشخيص الطبي والعلاج، من خوارزميات التعلم الآلي إلى الجراحة الروبوتية.',
    content: `
      <p>Artificial Intelligence is transforming healthcare in unprecedented ways. From diagnostic imaging to drug discovery, AI technologies are enabling medical professionals to provide more accurate, efficient, and personalized care.</p>
      
      <h2>Machine Learning in Diagnosis</h2>
      <p>Machine learning algorithms can now analyze medical images with accuracy that rivals or exceeds human specialists. This technology is particularly promising in radiology, pathology, and dermatology.</p>
      
      <h2>Robotic Surgery</h2>
      <p>AI-powered robotic systems are enabling surgeons to perform complex procedures with greater precision and minimal invasiveness, leading to better patient outcomes and faster recovery times.</p>
      
      <h2>Drug Discovery</h2>
      <p>AI is accelerating the drug discovery process by predicting molecular behavior and identifying potential therapeutic compounds, potentially reducing development time from decades to years.</p>
    `,
    contentAr: `
      <p>يحدث الذكاء الاصطناعي تحولاً في الرعاية الصحية بطرق لم يسبق لها مثيل. من التصوير التشخيصي إلى اكتشاف الأدوية، تمكن تقنيات الذكاء الاصطناعي المهنيين الطبيين من تقديم رعاية أكثر دقة وكفاءة وتخصيصاً.</p>
      
      <h2>التعلم الآلي في التشخيص</h2>
      <p>يمكن لخوارزميات التعلم الآلي الآن تحليل الصور الطبية بدقة تنافس أو تتفوق على المتخصصين البشريين. هذه التقنية واعدة بشكل خاص في الأشعة وعلم الأمراض وطب الجلدية.</p>
      
      <h2>الجراحة الروبوتية</h2>
      <p>تمكن الأنظمة الروبوتية المدعومة بالذكاء الاصطناعي الجراحين من إجراء عمليات معقدة بدقة أكبر وبأقل تدخل جراحي، مما يؤدي إلى نتائج أفضل للمرضى وأوقات تعافي أسرع.</p>
      
      <h2>اكتشاف الأدوية</h2>
      <p>يسرع الذكاء الاصطناعي عملية اكتشاف الأدوية من خلال التنبؤ بسلوك الجزيئات وتحديد المركبات العلاجية المحتملة، مما قد يقلل وقت التطوير من عقود إلى سنوات.</p>
    `,
    coverImage:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0',
    author: {
      name: 'Dr. Sarah Johnson',
      nameAr: 'د. سارة جونسون',
      avatar:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.1.0',
      bio: 'Medical AI researcher and healthcare technology expert',
      bioAr: 'باحثة في الذكاء الاصطناعي الطبي وخبيرة في تكنولوجيا الرعاية الصحية',
    },
    category: categories[0], // Technology
    tags: ['AI', 'Healthcare', 'Machine Learning', 'Innovation'],
    tagsAr: ['الذكاء الاصطناعي', 'الرعاية الصحية', 'التعلم الآلي', 'الابتكار'],
    publishedAt: '2024-01-15T10:00:00Z',
    readingTime: 5,
    featured: true,
  },
  {
    id: '2',
    title: 'Global Markets React to New Economic Policies',
    titleAr: 'الأسواق العالمية تتفاعل مع السياسات الاقتصادية الجديدة',
    slug: 'global-markets-economic-policies',
    excerpt:
      'Stock markets worldwide show mixed reactions to the latest economic policy announcements from major economies.',
    excerptAr:
      'تظهر أسواق الأسهم في جميع أنحاء العالم ردود فعل متباينة على أحدث إعلانات السياسة الاقتصادية من الاقتصادات الكبرى.',
    content: `
      <p>Financial markets across the globe are experiencing volatility following recent economic policy announcements from central banks and governments worldwide.</p>
      
      <h2>Market Performance</h2>
      <p>The Dow Jones Industrial Average closed up 2.3%, while European markets showed more cautious gains. Asian markets opened mixed in early trading.</p>
      
      <h2>Policy Impact</h2>
      <p>Analysts suggest that the new policies could have long-term implications for inflation rates and employment levels across major economies.</p>
    `,
    contentAr: `
      <p>تشهد الأسواق المالية في جميع أنحاء العالم تقلبات في أعقاب إعلانات السياسة الاقتصادية الأخيرة من البنوك المركزية والحكومات في جميء العالم.</p>
      
      <h2>أداء السوق</h2>
      <p>أغلق مؤشر داو جونز الصناعي مرتفعاً بنسبة 2.3%، بينما أظهرت الأسواق الأوروبية مكاسب أكثر حذراً. افتتحت الأسواق الآسيوية متباينة في التداولات المبكرة.</p>
      
      <h2>تأثير السياسة</h2>
      <p>يشير المحللون إلى أن السياسات الجديدة قد يكون لها آثار طويلة المدى على معدلات التضخم ومستويات التوظيف عبر الاقتصادات الكبرى.</p>
    `,
    coverImage:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0',
    author: {
      name: 'Michael Chen',
      nameAr: 'مايكل تشين',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.1.0',
      bio: 'Financial markets analyst and economic policy expert',
      bioAr: 'محلل الأسواق المالية وخبير السياسة الاقتصادية',
    },
    category: categories[1], // Business
    tags: ['Economics', 'Markets', 'Finance', 'Policy'],
    tagsAr: ['الاقتصاد', 'الأسواق', 'المالية', 'السياسة'],
    publishedAt: '2024-01-14T14:30:00Z',
    readingTime: 3,
  },
  {
    id: '3',
    title: 'Championship Finals Set Record Viewership',
    titleAr: 'نهائيات البطولة تحقق أرقاماً قياسية في المشاهدة',
    slug: 'championship-finals-record-viewership',
    excerpt:
      'The latest championship finals broke all previous viewership records, attracting millions of fans worldwide.',
    excerptAr:
      'حطمت نهائيات البطولة الأخيرة جميع أرقام المشاهدة السابقة، جاذبة ملايين المعجبين في جميء العالم.',
    content: `
      <p>Last night's championship finals made history with unprecedented viewership numbers, cementing its place as one of the most-watched sporting events of the year.</p>
      
      <h2>Viewership Numbers</h2>
      <p>The event attracted over 50 million viewers globally, representing a 25% increase from last year's finals.</p>
      
      <h2>Social Media Impact</h2>
      <p>Social media engagement reached new heights, with millions of posts, shares, and comments across all major platforms.</p>
    `,
    contentAr: `
      <p>حققت نهائيات البطولة ليلة أمس التاريخ بأرقام مشاهدة لم يسبق لها مثيل، مما رسخ مكانتها كواحدة من أكثر الأحداث الرياضية مشاهدة في العام.</p>
      
      <h2>أرقام المشاهدة</h2>
      <p>جذب الحدث أكثر من 50 مليون مشاهد عالمياً، مما يمثل زيادة بنسبة 25% عن نهائيات العام الماضي.</p>
      
      <h2>تأثير وسائل التواصل الاجتماعي</h2>
      <p>وصلت المشاركة على وسائل التواصل الاجتماعي إلى آفاق جديدة، مع ملايين المنشورات والمشاركات والتعليقات عبر جميع المنصات الرئيسية.</p>
    `,
    coverImage:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0',
    author: {
      name: 'Alex Rodriguez',
      nameAr: 'أليكس رودريغيز',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.1.0',
      bio: 'Sports journalist and broadcasting expert',
      bioAr: 'صحفي رياضي وخبير في البث',
    },
    category: categories[2], // Sports
    tags: ['Sports', 'Championship', 'Viewership', 'Records'],
    tagsAr: ['الرياضة', 'البطولة', 'المشاهدة', 'الأرقام القياسية'],
    publishedAt: '2024-01-13T20:15:00Z',
    readingTime: 4,
  },
  {
    id: '4',
    title: 'New Streaming Platform Launches with Exclusive Content',
    titleAr: 'منصة بث جديدة تنطلق بمحتوى حصري',
    slug: 'new-streaming-platform-exclusive-content',
    excerpt:
      'A major entertainment company unveils its new streaming service featuring original series and blockbuster movies.',
    excerptAr:
      'شركة ترفيه كبرى تكشف النقاب عن خدمة البث الجديدة التي تضم مسلسلات أصلية وأفلام رائجة.',
    content: `
      <p>The entertainment industry welcomes a new player as a major studio launches its streaming platform with an impressive lineup of exclusive content.</p>
      
      <h2>Original Programming</h2>
      <p>The platform debuts with five original series and three exclusive movies, featuring A-list actors and renowned directors.</p>
      
      <h2>Market Competition</h2>
      <p>Industry analysts predict intense competition in the already crowded streaming market, with consumers benefiting from increased content variety.</p>
    `,
    contentAr: `
      <p>ترحب صناعة الترفيه بلاعب جديد حيث تطلق استوديو كبير منصة البث الخاصة بها مع تشكيلة مثيرة للإعجاب من المحتوى الحصري.</p>
      
      <h2>البرمجة الأصلية</h2>
      <p>تبدأ المنصة بخمسة مسلسلات أصلية وثلاثة أفلام حصرية، تضم ممثلين من الدرجة الأولى ومخرجين مشهورين.</p>
      
      <h2>منافسة السوق</h2>
      <p>يتوقع محللو الصناعة منافسة شديدة في سوق البث المزدحم بالفعل، مع استفادة المستهلكين من زيادة تنوع المحتوى.</p>
    `,
    coverImage:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0',
    author: {
      name: 'Emma Thompson',
      nameAr: 'إيما طومسون',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.1.0',
      bio: 'Entertainment industry analyst and media critic',
      bioAr: 'محللة صناعة الترفيه وناقدة إعلامية',
    },
    category: categories[3], // Entertainment
    tags: ['Streaming', 'Entertainment', 'Movies', 'TV Shows'],
    tagsAr: ['البث', 'الترفيه', 'الأفلام', 'البرامج التلفزيونية'],
    publishedAt: '2024-01-12T16:45:00Z',
    readingTime: 3,
  },
  {
    id: '5',
    title: 'Breakthrough in Cancer Research Shows Promise',
    titleAr: 'اختراق في أبحاث السرطان يظهر نتائج واعدة',
    slug: 'cancer-research-breakthrough-promise',
    excerpt:
      'Scientists announce a significant breakthrough in cancer treatment that could revolutionize patient care.',
    excerptAr:
      'يعلن العلماء عن اختراق مهم في علاج السرطان يمكن أن يحدث ثورة في رعاية المرضى.',
    content: `
      <p>Researchers at leading medical institutions have announced a groundbreaking discovery in cancer treatment that shows remarkable promise in early trials.</p>
      
      <h2>Research Findings</h2>
      <p>The new treatment approach targets cancer cells with unprecedented precision while leaving healthy cells unharmed.</p>
      
      <h2>Clinical Trials</h2>
      <p>Phase II clinical trials are scheduled to begin next quarter, with results expected within 18 months.</p>
    `,
    contentAr: `
      <p>أعلن الباحثون في المؤسسات الطبية الرائدة عن اكتشاف رائد في علاج السرطان يظهر نتائج واعدة ملحوظة في التجارب المبكرة.</p>
      
      <h2>نتائج البحث</h2>
      <p>يستهدف نهج العلاج الجديد خلايا السرطان بدقة لم يسبق لها مثيل مع ترك الخلايا السليمة دون ضرر.</p>
      
      <h2>التجارب السريرية</h2>
      <p>من المقرر أن تبدأ التجارب السريرية للمرحلة الثانية في الربع القادم، مع توقع النتائج خلال 18 شهراً.</p>
    `,
    coverImage:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0',
    author: {
      name: 'Dr. Robert Kim',
      nameAr: 'د. روبرت كيم',
      avatar:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.1.0',
      bio: 'Oncology researcher and clinical trials specialist',
      bioAr: 'باحث في علم الأورام ومتخصص في التجارب السريرية',
    },
    category: categories[4], // Health
    tags: ['Health', 'Cancer', 'Research', 'Medical'],
    tagsAr: ['الصحة', 'السرطان', 'البحث', 'الطب'],
    publishedAt: '2024-01-11T09:20:00Z',
    readingTime: 6,
  },
  {
    id: '6',
    title: 'Space Mission Discovers New Exoplanets',
    titleAr: 'مهمة فضائية تكتشف كواكب خارجية جديدة',
    slug: 'space-mission-discovers-exoplanets',
    excerpt:
      'Latest space telescope data reveals several potentially habitable exoplanets in nearby star systems.',
    excerptAr:
      'تكشف أحدث بيانات التلسكوب الفضائي عن عدة كواكب خارجية قابلة للسكن في أنظمة نجمية قريبة.',
    content: `
      <p>The latest data from advanced space telescopes has revealed the existence of several exoplanets that could potentially harbor life.</p>
      
      <h2>Discovery Details</h2>
      <p>Three of the newly discovered planets are located in the habitable zone of their respective star systems, where liquid water could exist.</p>
      
      <h2>Future Research</h2>
      <p>Scientists plan to conduct detailed atmospheric analysis to determine the composition and potential habitability of these worlds.</p>
    `,
    contentAr: `
      <p>كشفت أحدث البيانات من التلسكوبات الفضائية المتقدمة عن وجود عدة كواكب خارجية يمكن أن تؤوي الحياة.</p>
      
      <h2>تفاصيل الاكتشاف</h2>
      <p>تقع ثلاثة من الكواكب المكتشفة حديثاً في المنطقة الصالحة للسكن في أنظمتها النجمية، حيث يمكن أن توجد المياه السائلة.</p>
      
      <h2>البحث المستقبلي</h2>
      <p>يخطط العلماء لإجراء تحليل جوي مفصل لتحديد تركيب وإمكانية سكن هذه العوالم.</p>
    `,
    coverImage:
      'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0',
    author: {
      name: 'Dr. Lisa Wang',
      nameAr: 'د. ليزا وانغ',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.1.0',
      bio: 'Astrophysicist and space exploration researcher',
      bioAr: 'عالمة فيزياء فلكية وباحثة في استكشاف الفضاء',
    },
    category: categories[5], // Science
    tags: ['Space', 'Exoplanets', 'Astronomy', 'Discovery'],
    tagsAr: ['الفضاء', 'الكواكب الخارجية', 'علم الفلك', 'الاكتشاف'],
    publishedAt: '2024-01-10T12:00:00Z',
    readingTime: 4,
  },
  {
    id: '7',
    title: 'Climate Summit Reaches Historic Agreement',
    titleAr: 'قمة المناخ تتوصل إلى اتفاق تاريخي',
    slug: 'climate-summit-historic-agreement',
    excerpt:
      'World leaders unite in unprecedented climate action plan with binding commitments for carbon reduction.',
    excerptAr:
      'قادة العالم يتحدون في خطة عمل مناخية غير مسبوقة مع التزامات ملزمة لتقليل الكربون.',
    content: `
      <p>The international climate summit concluded with a historic agreement that sets ambitious targets for global carbon reduction.</p>
      
      <h2>Key Commitments</h2>
      <p>Over 190 countries have committed to achieving net-zero emissions by 2050, with interim targets for 2030.</p>
      
      <h2>Implementation Plan</h2>
      <p>The agreement includes detailed implementation strategies and financial mechanisms to support developing nations.</p>
    `,
    contentAr: `
      <p>اختتمت قمة المناخ الدولية باتفاق تاريخي يضع أهدافاً طموحة لتقليل الكربون عالمياً.</p>
      
      <h2>الالتزامات الرئيسية</h2>
      <p>التزمت أكثر من 190 دولة بتحقيق صافي انبعاثات صفر بحلول 2050، مع أهداف مؤقتة لعام 2030.</p>
      
      <h2>خطة التنفيذ</h2>
      <p>يتضمن الاتفاق استراتيجيات تنفيذ مفصلة وآليات مالية لدعم الدول النامية.</p>
    `,
    coverImage:
      'https://images.unsplash.com/photo-1687610877269-9c051d3d254e?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      name: 'Maria Garcia',
      nameAr: 'ماريا غارسيا',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.1.0',
      bio: 'Environmental policy expert and climate journalist',
      bioAr: 'خبيرة السياسة البيئية وصحفية المناخ',
    },
    category: categories[6], // Politics
    tags: ['Climate', 'Environment', 'Politics', 'Global'],
    tagsAr: ['المناخ', 'البيئة', 'السياسة', 'عالمي'],
    publishedAt: '2024-01-09T18:30:00Z',
    readingTime: 5,
  },
  {
    id: '8',
    title: 'International Trade Relations Show Signs of Recovery',
    titleAr: 'العلاقات التجارية الدولية تظهر علامات التعافي',
    slug: 'international-trade-relations-recovery',
    excerpt:
      'Recent diplomatic efforts lead to improved trade relationships between major economic powers.',
    excerptAr:
      'الجهود الدبلوماسية الأخيرة تؤدي إلى تحسن العلاقات التجارية بين القوى الاقتصادية الكبرى.',
    content: `
      <p>Diplomatic initiatives over the past quarter have resulted in significant improvements in international trade relations.</p>
      
      <h2>Trade Volume Increase</h2>
      <p>Bilateral trade between major economies has increased by 15% compared to the same period last year.</p>
      
      <h2>Future Outlook</h2>
      <p>Economists predict continued growth in international trade as diplomatic relations continue to strengthen.</p>
    `,
    contentAr: `
      <p>أدت المبادرات الدبلوماسية خلال الربع الماضي إلى تحسينات كبيرة في العلاقات التجارية الدولية.</p>
      
      <h2>زيادة حجم التجارة</h2>
      <p>زادت التجارة الثنائية بين الاقتصادات الكبرى بنسبة 15% مقارنة بنفس الفترة من العام الماضي.</p>
      
      <h2>النظرة المستقبلية</h2>
      <p>يتوقع الاقتصاديون نمواً مستمراً في التجارة الدولية مع استمرار تعزز العلاقات الدبلوماسية.</p>
    `,
    coverImage:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0',
    author: {
      name: 'James Wilson',
      nameAr: 'جيمس ويلسون',
      avatar:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.1.0',
      bio: 'International trade correspondent and economic analyst',
      bioAr: 'مراسل التجارة الدولية ومحلل اقتصادي',
    },
    category: categories[7], // World
    tags: ['Trade', 'International', 'Economy', 'Diplomacy'],
    tagsAr: ['التجارة', 'دولي', 'الاقتصاد', 'الدبلوماسية'],
    publishedAt: '2024-01-08T11:15:00Z',
    readingTime: 4,
  },
  {
    id: '9',
    title: 'Revolutionary Battery Technology Announced',
    titleAr: 'الإعلان عن تقنية بطارية ثورية',
    slug: 'revolutionary-battery-technology',
    excerpt:
      'New battery technology promises 10x longer life and faster charging for electric vehicles and devices.',
    excerptAr:
      'تقنية البطارية الجديدة تعد بعمر أطول 10 مرات وشحن أسرع للمركبات الكهربائية والأجهزة.',
    content: `
      <p>A breakthrough in battery technology could revolutionize electric vehicles and portable electronics with unprecedented performance improvements.</p>
      
      <h2>Technical Specifications</h2>
      <p>The new batteries offer 10 times longer life cycles and can charge to 80% capacity in under 5 minutes.</p>
      
      <h2>Commercial Applications</h2>
      <p>The technology is expected to be commercially available within 3 years, starting with electric vehicles.</p>
    `,
    contentAr: `
      <p>يمكن لاختراق في تقنية البطارية أن يحدث ثورة في المركبات الكهربائية والإلكترونيات المحمولة مع تحسينات أداء لم يسبق لها مثيل.</p>
      
      <h2>المواصفات التقنية</h2>
      <p>تقدم البطاريات الجديدة دورات حياة أطول 10 مرات ويمكن شحنها إلى 80% من السعة في أقل من 5 دقائق.</p>
      
      <h2>التطبيقات التجارية</h2>
      <p>من المتوقع أن تكون التقنية متاحة تجارياً خلال 3 سنوات، بدءاً من المركبات الكهربائية.</p>
    `,
    coverImage:
      'https://images.unsplash.com/photo-1599556021357-4d06fb44f639?q=80&w=2819&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      name: 'Dr. Jennifer Lee',
      nameAr: 'د. جينيفر لي',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.1.0',
      bio: 'Materials scientist and battery technology researcher',
      bioAr: 'عالمة مواد وباحثة في تقنية البطاريات',
    },
    category: categories[0], // Technology
    tags: ['Technology', 'Battery', 'Electric Vehicles', 'Innovation'],
    tagsAr: ['التكنولوجيا', 'البطارية', 'المركبات الكهربائية', 'الابتكار'],
    publishedAt: '2024-01-07T15:45:00Z',
    readingTime: 3,
  },
  {
    id: '10',
    title: 'Startup Ecosystem Sees Record Investment',
    titleAr: 'نظام الشركات الناشئة يشهد استثماراً قياسياً',
    slug: 'startup-ecosystem-record-investment',
    excerpt:
      'Venture capital funding reaches all-time highs as investors show confidence in emerging technologies.',
    excerptAr:
      'تمويل رأس المال المخاطر يصل إلى أعلى مستوياته على الإطلاق حيث يظهر المستثمرون ثقة في التقنيات الناشئة.',
    content: `
      <p>The startup ecosystem is experiencing unprecedented growth with venture capital investments reaching record levels across multiple sectors.</p>
      
      <h2>Investment Trends</h2>
      <p>AI, fintech, and healthcare startups are leading the funding rounds, with several unicorn companies emerging this quarter.</p>
      
      <h2>Market Outlook</h2>
      <p>Industry experts predict continued growth in startup investments as digital transformation accelerates globally.</p>
    `,
    contentAr: `
      <p>يشهد نظام الشركات الناشئة نمواً لم يسبق له مثيل مع وصول استثمارات رأس المال المخاطر إلى مستويات قياسية عبر قطاعات متعددة.</p>
      
      <h2>اتجاهات الاستثمار</h2>
      <p>تقود الشركات الناشئة في الذكاء الاصطناعي والتكنولوجيا المالية والرعاية الصحية جولات التمويل، مع ظهور عدة شركات يونيكورن هذا الربع.</p>
      
      <h2>نظرة السوق</h2>
      <p>يتوقع خبراء الصناعة نمواً مستمراً في استثمارات الشركات الناشئة مع تسارع التحول الرقمي عالمياً.</p>
    `,
    coverImage:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0',
    author: {
      name: 'David Park',
      nameAr: 'ديفيد بارك',
      avatar:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.1.0',
      bio: 'Venture capital analyst and startup ecosystem expert',
      bioAr: 'محلل رأس المال المخاطر وخبير نظام الشركات الناشئة',
    },
    category: categories[1], // Business
    tags: ['Startups', 'Investment', 'Venture Capital', 'Technology'],
    tagsAr: ['الشركات الناشئة', 'الاستثمار', 'رأس المال المخاطر', 'التكنولوجيا'],
    publishedAt: '2024-01-06T13:20:00Z',
    readingTime: 4,
  },
  {
    id: '11',
    title: 'Olympic Preparations Underway for Next Games',
    titleAr: 'التحضيرات الأولمبية جارية للألعاب القادمة',
    slug: 'olympic-preparations-next-games',
    excerpt:
      'Host city makes final preparations as athletes from around the world gear up for the upcoming Olympic Games.',
    excerptAr:
      'المدينة المضيفة تقوم بالتحضيرات الأخيرة بينما يستعد الرياضيون من جميع أنحاء العالم للألعاب الأولمبية القادمة.',
    content: `
      <p>With just months to go, preparations for the upcoming Olympic Games are in full swing as the host city puts finishing touches on venues and infrastructure.</p>
      
      <h2>Venue Readiness</h2>
      <p>All major venues have completed construction and are undergoing final testing phases with trial events.</p>
      
      <h2>Athlete Preparations</h2>
      <p>Athletes worldwide are making final preparations, with many setting new personal records in qualifying events.</p>
    `,
    contentAr: `
      <p>مع بقاء أشهر قليلة فقط، التحضيرات للألعاب الأولمبية القادمة في أوجها حيث تضع المدينة المضيفة اللمسات الأخيرة على الأماكن والبنية التحتية.</p>
      
      <h2>جاهزية الأماكن</h2>
      <p>أكملت جميع الأماكن الرئيسية البناء وتخضع لمراحل الاختبار النهائية مع الأحداث التجريبية.</p>
      
      <h2>تحضيرات الرياضيين</h2>
      <p>يقوم الرياضيون في جميع أنحاء العالم بالتحضيرات الأخيرة، مع تحقيق العديد منهم أرقاماً شخصية جديدة في الأحداث المؤهلة.</p>
    `,
    coverImage:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0',
    author: {
      name: 'Sophie Martin',
      nameAr: 'صوفي مارتن',
      avatar:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.1.0',
      bio: 'Olympic sports correspondent and athletics expert',
      bioAr: 'مراسلة الرياضة الأولمبية وخبيرة ألعاب القوى',
    },
    category: categories[2], // Sports
    tags: ['Olympics', 'Sports', 'Athletes', 'International'],
    tagsAr: ['الأولمبياد', 'الرياضة', 'الرياضيون', 'دولي'],
    publishedAt: '2024-01-05T10:30:00Z',
    readingTime: 5,
  },
  {
    id: '12',
    title: 'Film Festival Showcases Independent Cinema',
    titleAr: 'مهرجان الأفلام يعرض السينما المستقلة',
    slug: 'film-festival-independent-cinema',
    excerpt:
      'Annual film festival highlights the best in independent filmmaking with diverse stories from emerging directors.',
    excerptAr:
      'مهرجان الأفلام السنوي يسلط الضوء على أفضل ما في صناعة الأفلام المستقلة مع قصص متنوعة من المخرجين الناشئين.',
    content: `
      <p>This year's film festival celebrates independent cinema with a diverse lineup of films from emerging directors around the world.</p>
      
      <h2>Featured Films</h2>
      <p>The festival showcases 50 films across various genres, with a focus on underrepresented voices and innovative storytelling.</p>
      
      <h2>Industry Impact</h2>
      <p>Several films have already secured distribution deals, highlighting the festival's role in launching careers and bringing unique stories to wider audiences.</p>
    `,
    contentAr: `
      <p>يحتفل مهرجان الأفلام هذا العام بالسينما المستقلة مع تشكيلة متنوعة من الأفلام من المخرجين الناشئين حول العالم.</p>
      
      <h2>الأفلام المميزة</h2>
      <p>يعرض المهرجان 50 فيلماً عبر أنواع مختلفة، مع التركيز على الأصوات غير الممثلة والسرد المبتكر.</p>
      
      <h2>تأثير الصناعة</h2>
      <p>حصلت عدة أفلام بالفعل على صفقات توزيع، مما يبرز دور المهرجان في إطلاق المهن وجلب القصص الفريدة لجماهير أوسع.</p>
    `,
    coverImage:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0',
    author: {
      name: 'Carlos Rodriguez',
      nameAr: 'كارلوس رودريغيز',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop&ixlib=rb-4.1.0',
      bio: 'Film critic and independent cinema advocate',
      bioAr: 'ناقد أفلام ومدافع عن السينما المستقلة',
    },
    category: categories[3], // Entertainment
    tags: ['Film', 'Festival', 'Independent', 'Cinema'],
    tagsAr: ['الأفلام', 'المهرجان', 'مستقل', 'السينما'],
    publishedAt: '2024-01-04T17:00:00Z',
    readingTime: 3,
  },
];

// Utility functions for data manipulation
export const getArticleById = (id: string): Article | undefined => {
  return mockArticles.find((article) => article.id === id);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return mockArticles.find((article) => article.slug === slug);
};

export const getArticlesByCategory = (categorySlug: string): Article[] => {
  return mockArticles.filter(
    (article) => article.category.slug === categorySlug
  );
};

export const getFeaturedArticles = (): Article[] => {
  return mockArticles.filter((article) => article.featured);
};

export const getRelatedArticles = (
  article: Article,
  limit: number = 3
): Article[] => {
  return mockArticles
    .filter((a) => a.id !== article.id && a.category.id === article.category.id)
    .slice(0, limit);
};

export const searchArticles = (query: string): Article[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.excerpt.toLowerCase().includes(lowercaseQuery) ||
      article.content.toLowerCase().includes(lowercaseQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getAllArticleSlugs = (): string[] => {
  return mockArticles.map((article) => article.slug);
};

export const getAllArticles = (): Article[] => {
  return mockArticles;
};
