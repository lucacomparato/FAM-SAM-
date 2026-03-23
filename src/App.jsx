import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronRight, Shield, Globe, TrendingUp, Building2, Scale, FileText, Users, BarChart3, Briefcase, CheckCircle, MapPin, Phone, Mail } from 'lucide-react'
import './App.css'

/* ── Scroll Reveal Hook ── */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = ref.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

/* ── NAV ── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        FAM<span>Monaco Multi Family Office</span>
      </a>
      <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
        <a href="#team" onClick={() => setMobileOpen(false)}>The Firm</a>
        <a href="#monaco" onClick={() => setMobileOpen(false)}>Monaco</a>
        <a href="#perspectives" onClick={() => setMobileOpen(false)}>Perspectives</a>
        <a href="#contact" className="nav-cta" onClick={() => setMobileOpen(false)}>Begin a Conversation</a>
      </div>
      <button className="nav-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  )
}

/* ── HERO ── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Protecting<br />
          <em>Wealth.</em><br />
          Building<br />
          Legacies.
        </h1>
        <p className="hero-subtitle">Empowering Future.</p>
        <div className="hero-line"></div>
        <p className="hero-desc">
          A Monaco-based Multi Family Office dedicated to preserving and growing generational wealth with discretion, expertise, and a long-term vision.
        </p>
      </div>
    </section>
  )
}

/* ── TAGLINE BAR ── */
function TaglineBar() {
  const ref = useReveal()
  return (
    <section className="tagline-bar" ref={ref}>
      <p className="tagline-text reveal">
        "In a complex world, we offer new eyes on how to organise wealth."
      </p>
      <div className="tagline-pills reveal reveal-delay-1">
        <span className="pill">Licensed MFO</span>
        <span className="pill">Act 1439/2016</span>
        <span className="pill">Monaco Economic Board</span>
      </div>
    </section>
  )
}

/* ── INTRO SPLIT ── */
function IntroSplit() {
  const ref = useReveal()
  return (
    <section className="intro-split" ref={ref}>
      <div className="intro-image" role="img" aria-label="Monaco coastline"></div>
      <div className="intro-content">
        <span className="intro-label reveal">About FAM</span>
        <h2 className="reveal reveal-delay-1">
          A Partner for<br />Generational Wealth
        </h2>
        <p className="reveal reveal-delay-2">
          Founded in 2018 and licensed under Monegasque Law n° 1439, FAM is an independent Multi Family Office serving UHNW families, entrepreneurs, and institutional investors. We combine the rigour of Swiss private banking with the strategic advantages of Monaco.
        </p>
        <div className="stats-grid reveal reveal-delay-3">
          <div className="stat">
            <div className="stat-number">€500M+</div>
            <div className="stat-label">Assets advised</div>
          </div>
          <div className="stat">
            <div className="stat-number">200+</div>
            <div className="stat-label">Client families</div>
          </div>
          <div className="stat">
            <div className="stat-number">20+</div>
            <div className="stat-label">Years experience</div>
          </div>
          <div className="stat">
            <div className="stat-number">2018</div>
            <div className="stat-label">Founded in Monaco</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── SERVICES ── */
function Services() {
  const ref = useReveal()
  const services = [
    {
      num: '01',
      name: 'Wealth Planning',
      pillars: [
        { title: 'Succession & Estate', desc: 'Multi-jurisdictional estate planning, trust structuring, and intergenerational wealth transfer strategies.' },
        { title: 'Tax Advisory', desc: 'Cross-border tax optimisation aligned with OECD standards and CRS compliance frameworks.' },
        { title: 'Governance & Family', desc: 'Family charter drafting, governance frameworks, and next-generation education programmes.' },
      ],
    },
    {
      num: '02',
      name: 'Wealth Monitoring',
      pillars: [
        { title: 'Portfolio Oversight', desc: 'Independent monitoring of custodian banks, asset managers, and consolidated performance reporting.' },
        { title: 'Risk Management', desc: 'Scenario analysis, stress testing, and dynamic asset allocation adjusted to evolving market conditions.' },
        { title: 'Reporting & Analytics', desc: 'Institutional-grade consolidated reporting across all asset classes, jurisdictions, and entities.' },
      ],
    },
    {
      num: '03',
      name: 'Deal Structuring',
      pillars: [
        { title: 'Private Equity', desc: 'Co-investment opportunities, direct deal sourcing, and fund selection across European and global markets.' },
        { title: 'Real Estate', desc: 'Monaco and international property acquisition, structuring, and ongoing asset management.' },
        { title: 'Corporate Advisory', desc: 'M&A advisory, holding company structuring, and operational support for family-owned enterprises.' },
      ],
    },
  ]

  return (
    <section className="services" id="services" ref={ref}>
      <div className="section-header reveal">
        <span className="section-label">Our Expertise</span>
        <h2>Three Pillars of Service</h2>
      </div>
      {services.map((s) => (
        <div className="service-row reveal" key={s.num}>
          <div className="service-name">
            <span className="service-number">{s.num}</span>
            {s.name}
          </div>
          <div className="service-pillars">
            {s.pillars.map((p) => (
              <div className="pillar" key={p.title}>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

/* ── PHOTO BREAK ── */
function PhotoBreak() {
  const ref = useReveal()
  return (
    <section className="photo-break" ref={ref}>
      <div className="photo-break-bg"></div>
      <div className="photo-break-content reveal">
        <blockquote>
          "True wealth is not measured by what you accumulate, but by what endures across generations."
        </blockquote>
        <cite>FAM Philosophy</cite>
      </div>
    </section>
  )
}

/* ── TEAM ── */
function Team() {
  const ref = useReveal()
  return (
    <section className="team" id="team" ref={ref}>
      <div className="section-header reveal">
        <span className="section-label">Leadership</span>
        <h2>The Firm</h2>
      </div>
      <div className="team-grid">
        <div className="team-card reveal">
          <div className="team-card-header">
            <div className="team-avatar">LC</div>
            <div>
              <h3>Luca Comparato</h3>
              <span className="team-role">Chief Executive Officer</span>
            </div>
          </div>
          <p>
            Swiss national and graduate of HEC Geneva (2003), Luca brings over 20 years of experience in private banking, wealth structuring, and family office advisory. Before founding FAM, he held senior positions at leading Swiss and Monegasque private banks, developing deep expertise in cross-border wealth management for UHNW clients. His vision: to create an independent, conflict-free advisory platform aligned exclusively with client interests.
          </p>
          <div className="team-tags">
            <span className="team-tag">HEC Geneva 2003</span>
            <span className="team-tag">Swiss National</span>
            <span className="team-tag">20+ Years Experience</span>
          </div>
        </div>
        <div className="team-card reveal reveal-delay-1">
          <div className="team-card-header">
            <div className="team-avatar">MF</div>
            <div>
              <h3>Micca Ferrero</h3>
              <span className="team-role">Chairman</span>
            </div>
          </div>
          <p>
            Holding a Master's degree in Business Law from the University of Geneva, Micca has been based in Monaco since 2009. With extensive experience in corporate law, compliance, and governance across multiple jurisdictions, he provides strategic oversight and ensures FAM's operations meet the highest regulatory and ethical standards. His legal expertise complements the firm's financial advisory capabilities.
          </p>
          <div className="team-tags">
            <span className="team-tag">Master Business Law Geneva</span>
            <span className="team-tag">Monaco since 2009</span>
            <span className="team-tag">Corporate Governance</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── MONACO ── */
function Monaco() {
  const ref = useReveal()
  const advantages = [
    'Zero personal income tax for residents — one of the most favourable fiscal environments globally.',
    'Political stability and strong rule of law under the Princely Government.',
    'World-class banking infrastructure with leading Swiss and international institutions.',
    'Strategic location in the heart of the Côte d\'Azur, 30 minutes from Nice International Airport.',
    'Robust regulatory framework for financial services (CCAF, Loi n° 1439).',
    'Member of the Council of Europe and signatory of major international conventions.',
    'Exclusive lifestyle with unparalleled security and privacy for high-net-worth residents.',
  ]

  return (
    <section className="monaco" id="monaco" ref={ref}>
      <div className="monaco-image" role="img" aria-label="Monaco harbour"></div>
      <div className="monaco-content">
        <span className="intro-label reveal">Why Monaco</span>
        <h2 className="reveal reveal-delay-1">The Strategic Advantage</h2>
        <p className="reveal reveal-delay-2">
          Monaco offers a unique combination of fiscal efficiency, political stability, and quality of life that makes it an ideal base for wealth management.
        </p>
        <ul className="monaco-list reveal reveal-delay-3">
          {advantages.map((a, i) => (
            <li key={i}>
              <CheckCircle size={18} />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── PERSPECTIVES ── */
function Perspectives() {
  const ref = useReveal()
  const articles = [
    {
      tag: 'Wealth Planning',
      title: 'The Art of Intergenerational Wealth Transfer',
      desc: 'How UHNW families can structure their assets to ensure a seamless transition across generations while preserving family values and governance.',
    },
    {
      tag: 'Market Insight',
      title: 'Monaco\'s Evolving Regulatory Landscape',
      desc: 'An overview of recent regulatory developments in the Principality and their implications for family offices and wealth management structures.',
    },
    {
      tag: 'Deal Structuring',
      title: 'Private Equity: Co-Investment Strategies for Family Offices',
      desc: 'Exploring how direct co-investment alongside institutional partners can enhance returns while maintaining portfolio diversification.',
    },
    {
      tag: 'Governance',
      title: 'Building a Family Charter: From Values to Framework',
      desc: 'A practical guide to creating governance structures that align family wealth with shared values, decision-making processes, and long-term vision.',
    },
  ]

  return (
    <section className="perspectives" id="perspectives" ref={ref}>
      <div className="section-header reveal">
        <span className="section-label">Insights</span>
        <h2>Perspectives</h2>
      </div>
      <div className="perspectives-grid">
        {articles.map((a, i) => (
          <div className={`article-card reveal reveal-delay-${i + 1}`} key={i}>
            <span className="article-tag">{a.tag}</span>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
            <a href="#" className="article-link">Read more <ChevronRight size={14} style={{ verticalAlign: 'middle' }} /></a>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── CTA FINAL ── */
function CtaFinal() {
  const ref = useReveal()
  return (
    <section className="cta-final" id="contact" ref={ref}>
      <div className="cta-final-bg"></div>
      <div className="cta-final-content reveal">
        <h2>Begin a confidential<br />conversation.</h2>
        <a href="mailto:info@fam.mc" className="cta-btn">Contact Us</a>
      </div>
    </section>
  )
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-logo">
            FAM<span>Monaco Multi Family Office</span>
          </div>
          <p>
            Licensed Multi Family Office under Monegasque Law n° 1439. Member of the Monaco Economic Board. Dedicated to preserving and growing generational wealth.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Wealth Planning</a></li>
            <li><a href="#services">Wealth Monitoring</a></li>
            <li><a href="#services">Deal Structuring</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#team">The Firm</a></li>
            <li><a href="#monaco">Why Monaco</a></li>
            <li><a href="#perspectives">Perspectives</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="https://maps.google.com/?q=Le+Roqueville+20+Bd+Princesse+Charlotte+MC+98000+Monaco" target="_blank" rel="noopener noreferrer">Le Roqueville, 20 Bd Princesse Charlotte<br />MC 98000 Monaco</a></li>
            <li><a href="tel:+37797773334">+377 97 77 33 34</a></li>
            <li><a href="mailto:info@fam.mc">info@fam.mc</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} FAM Monaco. All rights reserved.</span>
        <span>
          <a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="#">Legal Notice</a>
        </span>
      </div>
    </footer>
  )
}

/* ── APP ── */
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TaglineBar />
      <IntroSplit />
      <Services />
      <PhotoBreak />
      <Team />
      <Monaco />
      <Perspectives />
      <CtaFinal />
      <Footer />
    </>
  )
}

export default App
