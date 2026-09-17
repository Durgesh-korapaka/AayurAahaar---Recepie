import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CircleCheckBig,
  MessageCircle,
  MapPin,
  Mail,
  Phone,
  Leaf,
  Sprout,
  Heart,
  Clock,
  Star,
  Quote,
  Facebook,
  Instagram,
} from 'lucide-react';

// ─── Image assets ──────────────────────────────────────────────
const images = {
  hero: 'https://images.pexels.com/photos/37330104/pexels-photo-37330104.jpeg?auto=compress&cs=tinysrgb&w=1600',
  heroSecondary: 'https://images.pexels.com/photos/7504844/pexels-photo-7504844.jpeg?auto=compress&cs=tinysrgb&w=800',
  about: 'https://images.pexels.com/photos/4993172/pexels-photo-4993172.jpeg?auto=compress&cs=tinysrgb&w=900',
  aboutSecondary: 'https://images.pexels.com/photos/7829483/pexels-photo-7829483.jpeg?auto=compress&cs=tinysrgb&w=500',
  consultationBg: 'https://images.pexels.com/photos/30296301/pexels-photo-30296301.jpeg?auto=compress&cs=tinysrgb&w=1600',
  leaf1: 'https://images.pexels.com/photos/10611115/pexels-photo-10611115.jpeg?auto=compress&cs=tinysrgb&w=400',
  leaf2: 'https://images.pexels.com/photos/1006115/pexels-photo-1006115.jpeg?auto=compress&cs=tinysrgb&w=400',
  founder: 'https://images.pexels.com/photos/37601638/pexels-photo-37601638.jpeg?auto=compress&cs=tinysrgb&w=800',
  programs: {
    diabetes: 'https://images.pexels.com/photos/27959280/pexels-photo-27959280.jpeg?auto=compress&cs=tinysrgb&w=600',
    pcod: 'https://images.pexels.com/photos/7208661/pexels-photo-7208661.jpeg?auto=compress&cs=tinysrgb&w=600',
    gut: 'https://images.pexels.com/photos/20004800/pexels-photo-20004800.jpeg?auto=compress&cs=tinysrgb&w=600',
    detox: 'https://images.pexels.com/photos/9871626/pexels-photo-9871626.jpeg?auto=compress&cs=tinysrgb&w=600',
    organ: 'https://images.pexels.com/photos/12093415/pexels-photo-12093415.jpeg?auto=compress&cs=tinysrgb&w=600',
    antiInflammation: 'https://images.pexels.com/photos/15318488/pexels-photo-15318488.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  services: {
    detox: 'https://images.pexels.com/photos/9871626/pexels-photo-9871626.jpeg?auto=compress&cs=tinysrgb&w=400',
    diabetes: 'https://images.pexels.com/photos/27959280/pexels-photo-27959280.jpeg?auto=compress&cs=tinysrgb&w=400',
    pcod: 'https://images.pexels.com/photos/7208661/pexels-photo-7208661.jpeg?auto=compress&cs=tinysrgb&w=400',
    nutrition: 'https://images.pexels.com/photos/15319021/pexels-photo-15319021.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  testimonials: [
    'https://images.pexels.com/photos/4993172/pexels-photo-4993172.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/9271168/pexels-photo-9271168.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/7397453/pexels-photo-7397453.jpeg?auto=compress&cs=tinysrgb&w=200',
  ],
};

// ─── Navigation ────────────────────────────────────────────────
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'Log In', href: '#login' },
];

// ─── Programs data ─────────────────────────────────────────────
const programs = [
  {
    name: 'Diabetes Reversal Program',
    duration: '6–12 months',
    description: 'A structured, science-backed program to reduce blood sugar levels and regain metabolic health naturally.',
    category: 'Diabetes',
    image: images.programs.diabetes,
  },
  {
    name: 'PCOD & PCOS Healing',
    duration: '6 months',
    description: 'Restore hormonal balance through personalized nutrition and Ayurvedic healing for lasting wellness.',
    category: "Women's Health",
    image: images.programs.pcod,
  },
  {
    name: 'Gut Cleansing & Healing',
    duration: '4–6 weeks',
    description: 'Reset your digestive system with a targeted gut-healing protocol for better absorption and energy.',
    category: 'Nutrition',
    image: images.programs.gut,
  },
  {
    name: 'Detox & Destress',
    duration: '21 days',
    description: 'A focused three-week program to cleanse your body, calm your mind, and build sustainable habits.',
    category: 'Detox',
    image: images.programs.detox,
  },
  {
    name: 'Organ Healing Program',
    duration: '6–12 months',
    description: 'Deep, sustained support for organ-level healing through holistic nutrition and mindful living.',
    category: 'Nutrition',
    image: images.programs.organ,
  },
  {
    name: 'Anti-Inflammation Program',
    duration: '3 months',
    description: 'Reduce chronic inflammation with an anti-inflammatory diet tailored to your body\u2019s unique needs.',
    category: 'Nutrition',
    image: images.programs.antiInflammation,
  },
];

// ─── Services data ──────────────────────────────────────────────
const services = [
  {
    title: 'Detox and Destress Program',
    category: 'Detox',
    description: 'A 21-day reset to cleanse, calm, and recharge your body and mind.',
    image: images.services.detox,
  },
  {
    title: 'Diabetes Reversal Program',
    category: 'Diabetes',
    description: 'Reduce blood sugar naturally with a personalized, science-backed plan.',
    image: images.services.diabetes,
  },
  {
    title: 'PCOD & PCOS Healing',
    category: "Women's Health",
    description: 'Balance hormones and reclaim your health through mindful nutrition.',
    image: images.services.pcod,
  },
  {
    title: 'Nutritional Consultation',
    category: 'Nutrition',
    description: 'One-on-one personalized nutrition guidance from \u20b95,000 per session.',
    image: images.services.nutrition,
  },
];

// ─── Why AayurAahaar features ───────────────────────────────────
const whyFeatures = [
  {
    title: 'Personalized Approach',
    description: 'Every plan is tailored to your unique body and lifestyle.',
    icon: CircleCheckBig,
  },
  {
    title: 'Ayurvedic Wisdom',
    description: 'Rooted in centuries of holistic healing knowledge.',
    icon: Leaf,
  },
  {
    title: 'Mindful Nutrition',
    description: 'Food as medicine \u2014 nourishing body, mind, and spirit.',
    icon: Heart,
  },
  {
    title: 'Long-Term Wellness',
    description: 'No crash diets or quick fixes. We focus on lasting habits that keep you well long after the program ends.',
    icon: Sprout,
  },
];

// ─── Why AayurAahaar detailed ───────────────────────────────────
const whyDetails = [
  {
    title: 'Personalized Guidance',
    description: 'Every program is built around your unique body type, lifestyle, and health goals \u2014 never a one-size-fits-all template.',
  },
  {
    title: 'Ayurvedic Principles',
    description: 'Rooted in time-tested Ayurvedic wisdom, our approach balances your doshas and supports natural, sustainable healing.',
  },
  {
    title: 'Mindful Nutrition',
    description: 'We help you build a healthy relationship with food \u2014 one that nourishes both body and mind without restriction or guilt.',
  },
  {
    title: 'Sustainable Lifestyle Changes',
    description: 'No crash diets or quick fixes. We focus on lasting habits that keep you well long after the program ends.',
  },
];

// ─── Testimonials ──────────────────────────────────────────────
const testimonials = [
  {
    name: 'Priya Sharma',
    text: "After struggling with PCOD for years, Prajakta\u2019s holistic approach changed my life. Her personalized nutrition plan was easy to follow and actually enjoyable. Within months, my cycles became regular and my energy levels soared. I finally feel in control of my body.",
    image: images.testimonials[0],
    rating: 5,
  },
  {
    name: 'Mahesh Maloo',
    text: "Prajakta provided me with a personalized diet plan and guided me in monitoring my blood sugar regularly. She consistently checked in to offer support and advice over the phone. Her extensive knowledge of food, nutrition, and diabetes management truly shines. When we began in mid-July, I was on a high dose of medication, but within a month, my dosage was reduced by half, and I even stopped one tablet\u2014my sugar levels are now normal! Prajakta is polite, soft-spoken, and an incredible guide. I\u2019m deeply grateful for this wonderful experience.",
    image: images.testimonials[2],
    rating: 5,
  },
  {
    name: 'Anjali Deshpande',
    text: "The gut healing program was a revelation. I had dealt with bloating and digestive issues for years, and within just a few weeks, I felt lighter and more energetic. Prajakta\u2019s guidance is compassionate, practical, and deeply knowledgeable.",
    image: images.testimonials[1],
    rating: 5,
  },
];

// ─── Contact info ──────────────────────────────────────────────
const contactInfo = {
  location: 'Pune | Mumbai',
  email: 'aayuraahaar@gmail.com',
  phone: '+91 96899 51305',
  whatsapp: '919689951305',
  facebook: 'https://www.facebook.com/aayuraahaar',
  instagram: 'https://www.instagram.com/aayuraahaar/',
};

// ═══════════════════════════════════════════════════════════════
// ANIMATION HOOKS
// ═══════════════════════════════════════════════════════════════

/** Intersection Observer that adds .is-visible to [data-reveal] and [data-image-reveal] elements. */
function useScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('[data-reveal], [data-image-reveal]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/** Subtle parallax via scroll listener — only on non-mobile, non-reduced-motion. */
function useParallax() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (reduceMotion || isMobile) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        document.querySelectorAll('[data-parallax]').forEach((el) => {
          const speed = parseFloat(el.getAttribute('data-parallax') || '0');
          const rect = el.getBoundingClientRect();
          const elementTop = rect.top + scrolled;
          const offset = (scrolled - elementTop) * speed;
          (el as HTMLElement).style.transform = `translate3d(0, ${offset}px, 0)`;
        });
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

// ═══════════════════════════════════════════════════════════════
// REUSABLE COMPONENTS
// ═══════════════════════════════════════════════════════════════

interface RevealProps {
  children: ReactNode;
  variant?: 'up' | 'left' | 'right' | 'scale' | 'fade';
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

function Reveal({ children, variant = 'up', delay, className = '' }: RevealProps) {
  return (
    <div
      data-reveal={variant}
      data-delay={delay}
      className={className}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// HEADER
// ═══════════════════════════════════════════════════════════════

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory-50/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 hero-anim hero-anim-1">
            <img
              src="/aayuraahaar-logo.png"
              alt="AayurAahaar"
              className="h-11 w-11 object-contain md:h-14 md:w-14"
            />
            <span
              className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-forest-800' : 'text-ivory-50'
              }`}
            >
              AayurAahaar
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link transition-colors duration-300 ${
                  item.label === 'Log In' ? 'text-base font-semibold' : 'text-sm font-medium'
                } ${
                  scrolled
                    ? 'text-forest-700 hover:text-forest-500'
                    : 'text-ivory-100 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${contactInfo.phone}`}
            className={`hidden md:inline-flex btn-premium items-center px-7 py-3.5 rounded-full text-base font-semibold ${
              scrolled
                ? 'bg-forest-600 text-ivory-50 hover:bg-forest-700'
                : 'bg-ivory-50/20 text-ivory-50 border border-ivory-50/40 hover:bg-ivory-50/30'
            }`}
          >
            Call Now
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden w-10 h-10 flex items-center justify-center transition-colors ${
              scrolled ? 'text-forest-700' : 'text-ivory-50'
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-forest-900/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-ivory-50 shadow-2xl flex flex-col transition-transform duration-500">
            <div className="flex items-center justify-between px-6 py-5 border-b border-forest-200/30">
              <span className="font-serif text-lg font-semibold text-forest-800">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center text-forest-700"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-6 gap-1">
              {navItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-serif text-forest-700 py-3 border-b border-forest-200/20 hover:text-forest-500 transition-colors"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto px-6 pb-8">
              <a
                href={`tel:${contactInfo.phone}`}
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center py-3.5 bg-forest-600 text-ivory-50 text-sm font-medium rounded-full hover:bg-forest-700 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ═══════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════

function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (reduceMotion || isMobile) return;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const bg = heroRef.current?.querySelector('[data-hero-parallax]') as HTMLElement | null;
        if (bg) {
          bg.style.transform = `translate3d(0, ${scrolled * 0.25}px, 0) scale(1.05)`;
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div data-hero-parallax className="absolute inset-0 hero-image-anim">
          <img
            src={images.hero}
            alt="Indian woman preparing fresh healthy food in a bright kitchen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Floating leaf decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-10 w-72 h-72 opacity-[0.07] animate-float-slow">
          <img src={images.leaf1} alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute bottom-10 right-0 w-96 h-96 opacity-[0.05] animate-float">
          <img src={images.leaf2} alt="" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="max-w-2xl">
          <p className="hero-anim hero-anim-1 text-ivory-100/90 text-sm font-medium tracking-widest uppercase mb-6">
            Holistic Nutrition • Ayurveda • Mindful Healing
          </p>
          <h1 className="hero-anim hero-anim-2 font-serif text-5xl sm:text-6xl lg:text-7xl text-ivory-50 leading-[1.1] mb-6">
            Ancient Wisdom for Your
            <br />
            <span className="italic text-golden-300">Modern Lifestyle</span>
          </h1>
          <p className="hero-anim hero-anim-3 text-ivory-100/80 text-lg leading-relaxed max-w-xl mb-8">
            Personalized nutrition and holistic wellness programs designed to help you nourish your body, restore balance, and feel your best.
          </p>
          <div className="hero-anim hero-anim-4 flex flex-wrap gap-4">
            <a
              href="#programs"
              className="btn-premium inline-flex items-center gap-2 px-7 py-3.5 bg-forest-600 text-ivory-50 text-sm font-medium rounded-full hover:bg-forest-700"
            >
              Explore Programs
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="btn-premium inline-flex items-center px-7 py-3.5 bg-ivory-50/15 text-ivory-50 border border-ivory-50/40 text-sm font-medium rounded-full hover:bg-ivory-50/25"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-anim hero-anim-5 absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-ivory-50/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-ivory-50/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// ABOUT / ORIGIN STORY
// ═══════════════════════════════════════════════════════════════

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image composition — layered editorial layout */}
          <Reveal variant="up">
            <div className="relative pb-12 pr-8 sm:pb-10 sm:pr-10">
              {/* Large primary image */}
              <div className="relative rounded-2xl overflow-hidden card-shadow z-10">
                <img
                  src={images.about}
                  alt="Indian woman in a natural wellness environment"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                />
              </div>

              {/* Small secondary image — overlapping lower-right, fully visible */}
              <div
                data-reveal="scale"
                data-delay="2"
                className="absolute -bottom-2 -right-2 sm:-right-6 w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-ivory-50 shadow-xl z-20"
              >
                <img
                  src={images.aboutSecondary}
                  alt="Ayurvedic herbs, spices, and natural wellness ingredients"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </Reveal>

          {/* Content — slide from right */}
          <div className="mt-8 lg:mt-0">
            <Reveal variant="right">
              <p className="text-golden-600 text-sm font-medium tracking-widest uppercase mb-4">
                Our Origin Story
              </p>
            </Reveal>
            <Reveal variant="up" delay={1}>
              <h2 className="font-serif text-4xl sm:text-5xl text-forest-800 leading-tight mb-6">
                Food can be more than fuel.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={2}>
              <p className="text-forest-700/80 text-lg leading-relaxed mb-6">
                AayurAahaar was born out of Prajakta's deep desire to help people discover peace and healing through their relationship with food.
              </p>
            </Reveal>
            <Reveal variant="up" delay={3}>
              <p className="text-forest-700/70 leading-relaxed mb-6">
                Drawing from her own journey of overcoming PCOD and hormonal imbalances, Prajakta combines Ayurvedic wisdom with mindful nutrition to empower young women to nourish their bodies without the pressures of diet culture.
              </p>
            </Reveal>
            <Reveal variant="up" delay={4}>
              <p className="text-forest-700/70 leading-relaxed mb-8">
                With AayurAahaar, she invites you to embrace food as a source of joy and nourishment.
              </p>
            </Reveal>
            <Reveal variant="up" delay={5}>
              <a
                href="#programs"
                className="link-underline inline-flex items-center gap-2 text-forest-600 font-medium text-sm"
              >
                Meet Prajakta
                <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// WHY AAYURAAHAAR (features strip)
// ═══════════════════════════════════════════════════════════════

function WhyStrip() {
  return (
    <section className="py-20 bg-forest-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src={images.leaf2} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-14">
          <Reveal variant="up">
            <p className="text-golden-300 text-sm font-medium tracking-widest uppercase mb-4">
              Why AayurAahaar?
            </p>
          </Reveal>
          <Reveal variant="up" delay={1}>
            <h2 className="font-serif text-4xl sm:text-5xl text-ivory-50">
              The AayurAahaar Difference
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} variant="up" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="text-center">
                  <div className="feature-icon w-14 h-14 mx-auto mb-5 rounded-full bg-forest-700/50 border border-golden-300/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-golden-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-ivory-50 mb-3">{feature.title}</h3>
                  <p className="text-ivory-100/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// PROGRAMS
// ═══════════════════════════════════════════════════════════════

function Programs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Diabetes', "Women's Health", 'Nutrition', 'Detox'];
  const filtered = activeCategory === 'All' ? programs : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-24 sm:py-32 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <Reveal variant="up">
            <p className="text-golden-600 text-sm font-medium tracking-widest uppercase mb-4">
              Our Offerings
            </p>
          </Reveal>
          <Reveal variant="up" delay={1}>
            <h2 className="font-serif text-4xl sm:text-5xl text-forest-800 mb-4">
              Wellness Programs Designed Around You
            </h2>
          </Reveal>
          <Reveal variant="up" delay={2}>
            <p className="text-forest-700/70 text-lg max-w-2xl mx-auto">
              Well-researched programs that enable you to experience lasting wellness through holistic nutrition and mindful healing.
            </p>
          </Reveal>
        </div>

        {/* Category filter */}
        <Reveal variant="fade" delay={2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-forest-600 text-ivory-50'
                    : 'bg-ivory-50 text-forest-600 hover:bg-sage-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Program cards — staggered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((program, i) => (
            <Reveal
              key={program.name}
              variant="up"
              delay={((i % 3) + 1) as 1 | 2 | 3}
            >
              <div className="group bg-ivory-50 rounded-2xl overflow-hidden card-shadow card-lift">
                <div className="img-zoom relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-ivory-50/90 backdrop-blur-sm rounded-full text-xs font-medium text-forest-700">
                    {program.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-golden-600 text-xs font-medium mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    {program.duration}
                  </div>
                  <h3 className="font-serif text-xl text-forest-800 mb-3">{program.name}</h3>
                  <p className="text-forest-700/70 text-sm leading-relaxed mb-5">{program.description}</p>
                  <a
                    href="#contact"
                    className="link-underline inline-flex items-center gap-2 text-forest-600 text-sm font-medium"
                  >
                    Explore Program
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SERVICES
// ═══════════════════════════════════════════════════════════════

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <Reveal variant="up">
            <p className="text-golden-600 text-sm font-medium tracking-widest uppercase mb-4">
              What We Offer
            </p>
          </Reveal>
          <Reveal variant="up" delay={1}>
            <h2 className="font-serif text-4xl sm:text-5xl text-forest-800 mb-4">
              Our Featured Services
            </h2>
          </Reveal>
          <Reveal variant="up" delay={2}>
            <p className="text-forest-700/70 text-lg max-w-2xl mx-auto">
              Because Life's Too Short and You Deserve a Diet That Works for You
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              variant="up"
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            >
              <div className="group rounded-2xl overflow-hidden card-shadow card-lift bg-ivory-50">
                <div className="img-zoom relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-golden-500/90 backdrop-blur-sm rounded-full text-xs font-medium text-forest-900">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-forest-800 mb-3">{service.title}</h3>
                  <p className="text-forest-700/70 text-sm leading-relaxed mb-4">{service.description}</p>
                  <a
                    href="#contact"
                    className="link-underline inline-flex items-center gap-2 text-forest-600 text-sm font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// WHY AAYURAAHAAR (detailed / founder)
// ═══════════════════════════════════════════════════════════════

function WhyDetailed() {
  return (
    <section className="py-24 sm:py-32 bg-sage-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.04] animate-float-slow">
        <img src={images.leaf1} alt="" className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait — slide from left */}
          <Reveal variant="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden card-shadow">
                <img
                  src={images.founder}
                  alt="Indian woman wellness professional portrait"
                  className="w-full h-[480px] sm:h-[540px] object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 sm:-left-6 max-w-xs bg-forest-800 text-ivory-50 p-6 rounded-2xl shadow-xl">
                <Quote className="w-8 h-8 text-golden-300 mb-3" strokeWidth={1} />
                <p className="font-serif text-lg italic leading-snug">
                  The healer you have been looking for is your own courage to know and love yourself completely
                </p>
                <p className="text-golden-300 text-sm mt-3">— Yung Pueblo</p>
              </div>
            </div>
          </Reveal>

          {/* Text — slide from right with staggered items */}
          <div>
            <Reveal variant="right">
              <p className="text-golden-600 text-sm font-medium tracking-widest uppercase mb-4">
                Why AayurAahaar?
              </p>
            </Reveal>
            <Reveal variant="right" delay={1}>
              <h2 className="font-serif text-4xl sm:text-5xl text-forest-800 leading-tight mb-10">
                The AayurAahaar Difference
              </h2>
            </Reveal>
            <div className="space-y-8">
              {whyDetails.map((item, i) => (
                <Reveal
                  key={item.title}
                  variant="right"
                  delay={((i % 4) + 2) as 2 | 3 | 4 | 5}
                >
                  <div className="flex gap-5">
                    <div className="feature-icon flex-shrink-0 w-12 h-12 rounded-full bg-sage-100 border border-sage-200 flex items-center justify-center">
                      <CircleCheckBig className="w-5 h-5 text-forest-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-forest-800 mb-2">{item.title}</h3>
                      <p className="text-forest-700/70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// CONSULTATION CTA
// ═══════════════════════════════════════════════════════════════

function ConsultationCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (reduceMotion || isMobile) return;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const bg = sectionRef.current?.querySelector('[data-cta-parallax]') as HTMLElement | null;
        if (bg) {
          const rect = sectionRef.current!.getBoundingClientRect();
          const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
          bg.style.transform = `translate3d(0, ${progress * -30}px, 0) scale(1.1)`;
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div data-cta-parallax className="absolute inset-0">
          <img
            src={images.consultationBg}
            alt="Indian spices and natural wellness ingredients"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 consultation-gradient" />
      </div>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <Reveal variant="up">
          <h2 className="font-serif text-4xl sm:text-5xl text-ivory-50 leading-tight mb-6">
            Ready to Build a Healthier Relationship With Food?
          </h2>
        </Reveal>
        <Reveal variant="up" delay={1}>
          <p className="text-ivory-100/80 text-lg mb-8">
            Start your personalized wellness journey with AayurAahaar.
          </p>
        </Reveal>
        <Reveal variant="up" delay={2}>
          <a
            href="#contact"
            className="btn-premium inline-flex items-center gap-2 px-8 py-4 bg-golden-500 text-forest-900 text-sm font-semibold rounded-full hover:bg-golden-400"
          >
            Book Your Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════════

function Testimonials() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const changeTestimonial = (newIndex: number) => {
    if (newIndex === active) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(newIndex);
      setIsTransitioning(false);
    }, 250);
  };

  const next = () => changeTestimonial((active + 1) % testimonials.length);
  const prev = () => changeTestimonial((active - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[active];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-ivory-100">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <Reveal variant="up">
            <p className="text-golden-600 text-sm font-medium tracking-widest uppercase mb-4">
              Testimonials
            </p>
          </Reveal>
          <Reveal variant="up" delay={1}>
            <h2 className="font-serif text-4xl sm:text-5xl text-forest-800">
              What People Are Saying
            </h2>
          </Reveal>
        </div>

        <Reveal variant="up" delay={2}>
          <div className="relative">
            <div className="bg-ivory-50 rounded-2xl p-8 sm:p-12 card-shadow">
              <div
                className={`transition-opacity duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-golden-500 text-golden-500" />
                  ))}
                </div>
                <div className="flex items-start gap-5 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-sage-200"
                  />
                  <div>
                    <p className="text-forest-700 leading-relaxed text-lg italic font-serif">
                      "{testimonial.text}"
                    </p>
                    <p className="text-forest-600 font-medium mt-4">— {testimonial.name}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-ivory-50 border border-sage-200 flex items-center justify-center text-forest-600 hover:bg-sage-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => changeTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 bg-forest-600' : 'w-2 bg-sage-300'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-ivory-50 border border-sage-200 flex items-center justify-center text-forest-600 hover:bg-sage-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// CONTACT
// ═══════════════════════════════════════════════════════════════

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <Reveal variant="up">
            <p className="text-golden-600 text-sm font-medium tracking-widest uppercase mb-4">
              Get In Touch
            </p>
          </Reveal>
          <Reveal variant="up" delay={1}>
            <h2 className="font-serif text-4xl sm:text-5xl text-forest-800 mb-4">
              Contact Me
            </h2>
          </Reveal>
          <Reveal variant="up" delay={2}>
            <p className="text-forest-700/70 text-lg max-w-2xl mx-auto">
              Have a question or ready to start your wellness journey? Reach out and I'll get back to you soon.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info — slide from left */}
          <Reveal variant="left">
            <div className="space-y-6">
              <div className="contact-card flex items-start gap-4 p-5 bg-ivory-100 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-forest-600" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-forest-600 mb-1">Location</p>
                  <p className="text-forest-700/70">{contactInfo.location}</p>
                </div>
              </div>

              <div className="contact-card flex items-start gap-4 p-5 bg-ivory-100 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-forest-600" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-forest-600 mb-1">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-forest-700/70 hover:text-forest-600 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-card flex items-start gap-4 p-5 bg-ivory-100 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-forest-600" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-forest-600 mb-1">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-forest-700/70 hover:text-forest-600 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact-card flex items-start gap-4 p-5 bg-ivory-100 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-forest-600" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-forest-600 mb-1">WhatsApp</p>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    className="text-forest-700/70 hover:text-forest-600 transition-colors"
                  >
                    Chat with us directly
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form — slide from right */}
          <Reveal variant="right" delay={1}>
            <form onSubmit={handleSubmit} className="bg-ivory-100 rounded-2xl p-8 card-shadow">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage-100 flex items-center justify-center">
                    <CircleCheckBig className="w-8 h-8 text-forest-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-forest-800 mb-2">Thanks for submitting!</h3>
                  <p className="text-forest-700/70">I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="input-glow w-full px-4 py-3 bg-ivory-50 border border-sage-200 rounded-lg text-forest-800 placeholder-forest-400 focus:outline-none focus:border-forest-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="input-glow w-full px-4 py-3 bg-ivory-50 border border-sage-200 rounded-lg text-forest-800 placeholder-forest-400 focus:outline-none focus:border-forest-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="input-glow w-full px-4 py-3 bg-ivory-50 border border-sage-200 rounded-lg text-forest-800 placeholder-forest-400 focus:outline-none focus:border-forest-500"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="input-glow w-full px-4 py-3 bg-ivory-50 border border-sage-200 rounded-lg text-forest-800 placeholder-forest-400 focus:outline-none focus:border-forest-500 resize-none"
                      placeholder="Tell me about your wellness goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-premium w-full py-3.5 bg-forest-600 text-ivory-50 text-sm font-medium rounded-full hover:bg-forest-700"
                  >
                    Send Message
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════════

function Footer() {
  return (
    <footer className="bg-forest-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-serif text-2xl text-ivory-50 mb-4">AayurAahaar</h3>
            <p className="text-ivory-100/60 text-sm leading-relaxed max-w-xs">
              Personalized nutrition and holistic wellness programs combining Ayurvedic wisdom, mindful healing, and women's wellness.
            </p>
          </div>

          <div>
            <h4 className="text-ivory-50 text-sm font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link text-ivory-100/60 text-sm hover:text-golden-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-ivory-50 text-sm font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="text-ivory-100/60 text-sm">{contactInfo.location}</p>
              <a href={`mailto:${contactInfo.email}`} className="block text-ivory-100/60 text-sm hover:text-golden-300 transition-colors">
                {contactInfo.email}
              </a>
              <a href={`tel:${contactInfo.phone}`} className="block text-ivory-100/60 text-sm hover:text-golden-300 transition-colors">
                {contactInfo.phone}
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat with AayurAahaar on WhatsApp"
                  className="text-ivory-100/60 hover:text-golden-300 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
                </a>
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="AayurAahaar on Facebook"
                  className="text-ivory-100/60 hover:text-golden-300 transition-colors"
                >
                  <Facebook className="h-5 w-5" strokeWidth={1.8} />
                </a>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="AayurAahaar on Instagram"
                  className="text-ivory-100/60 hover:text-golden-300 transition-colors"
                >
                  <Instagram className="h-5 w-5" strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-forest-800 text-center">
          <p className="text-ivory-100/40 text-sm">
            © 2024 AayurAahaar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════
// LOGIN
// ═══════════════════════════════════════════════════════════════

function LoginPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email') ?? '').trim().toLowerCase();

    if (mode === 'signup') {
      if (!email.endsWith('@gmail.com')) {
        setMessage('Please use a valid Gmail address to sign up.');
        return;
      }

      localStorage.setItem('aayuraahaar-account', JSON.stringify({
        name: formData.get('name'),
        email,
      }));
      setMessage('Your account was created successfully. You can sign in now.');
      setMode('signin');
      event.currentTarget.reset();
    }
  };

  return (
    <main className="min-h-screen bg-ivory-50 flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md">
        <a href="#home" className="flex items-center justify-center gap-2 mb-8">
          <img src="/aayuraahaar-logo.png" alt="AayurAahaar" className="h-14 w-14 object-contain" />
          <span className="font-serif text-2xl font-bold tracking-tight text-forest-800">AayurAahaar</span>
        </a>

        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-forest-900/10">
          <div className="text-center mb-7">
            <h1 className="font-serif text-3xl font-semibold text-forest-900">
              {mode === 'signin' ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="text-sm text-forest-700/65 mt-2">
              {mode === 'signin' ? 'Sign in to continue your wellness journey.' : 'Join AayurAahaar and begin your wellness journey.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-1 p-1 bg-ivory-100 rounded-lg mb-6">
            <button
              type="button"
              onClick={() => setMode('signin')}
              className={`py-2.5 rounded-md text-sm font-medium transition-colors ${
                mode === 'signin' ? 'bg-forest-600 text-ivory-50' : 'text-forest-700 hover:bg-white'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={`py-2.5 rounded-md text-sm font-medium transition-colors ${
                mode === 'signup' ? 'bg-forest-600 text-ivory-50' : 'text-forest-700 hover:bg-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <label className="block text-sm font-medium text-forest-800">
                Full name
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  className="input-glow mt-1.5 w-full rounded-lg border border-forest-200 bg-ivory-50 px-4 py-3 font-normal outline-none focus:border-forest-500"
                />
              </label>
            )}
            <label className="block text-sm font-medium text-forest-800">
              Email address
              <input
                type="email"
                name="email"
                autoComplete="email"
                pattern={mode === 'signup' ? '[^@\\s]+@gmail\\.com' : undefined}
                title={mode === 'signup' ? 'Use a Gmail address ending in @gmail.com' : undefined}
                required
                className="input-glow mt-1.5 w-full rounded-lg border border-forest-200 bg-ivory-50 px-4 py-3 font-normal outline-none focus:border-forest-500"
              />
            </label>
            <label className="block text-sm font-medium text-forest-800">
              Password
              <input
                type="password"
                name="password"
                autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                required
                className="input-glow mt-1.5 w-full rounded-lg border border-forest-200 bg-ivory-50 px-4 py-3 font-normal outline-none focus:border-forest-500"
              />
            </label>
            <button
              type="submit"
              className="btn-premium w-full rounded-lg bg-forest-600 py-3.5 text-sm font-semibold text-ivory-50 hover:bg-forest-700"
            >
              {mode === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-forest-700" role="status">
              {message}
            </p>
          )}

          <a href="#home" className="mt-6 flex items-center justify-center gap-1 text-sm text-forest-700/70 hover:text-forest-600">
            <ChevronLeft className="h-4 w-4" />
            Back to website
          </a>
        </section>
      </div>
    </main>
  );
}

// ═══════════════════════════════════════════════════════════════
// APP
// ═══════════════════════════════════════════════════════════════

function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);
  useScrollReveal();
  useParallax();

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#login') {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-ivory-50">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyStrip />
        <Programs />
        <Services />
        <WhyDetailed />
        <ConsultationCTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
