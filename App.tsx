import React, { useEffect, useRef, useState } from 'react';
import './index.css';

const LOGO_URL = 'https://17uumjmuih.ufs.sh/f/TrFfSLZlNSd2eR3rAXbKqgOR4iAaBvGJecdI8wVyFm16NWDh';

type Lang = 'pt' | 'en';

type Status = 'ready' | 'building';

interface Translation {
  nav: { solucoes: string; blocos: string; inteligencia: string; cta: string };
  hero: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    sub: string;
    ctaPrimary: string;
    ctaGhost: string;
  };
  problem: {
    label: string;
    title: string;
    desc: string;
    cards: { title: string; desc: string }[];
  };
  solucoes: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
  };
  combos: { title: string; desc: string; tags: string[] }[];
  casos: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    statusReady: string;
    statusBuilding: string;
  };
  usecases: { name: string; desc: string; status: Status }[];
  how: {
    label: string;
    title: string;
    desc: string;
    steps: { num: string; title: string; desc: string }[];
  };
  dados: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    flywheelCenter: string;
    flywheelNodes: string[];
    insights: { title: string; desc: string }[];
  };
  closing: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    cta: string;
    imageAlt: string;
  };
  footer: {
    tagline: string;
    menuTitle: string;
    contactTitle: string;
    socialTitle: string;
    contactLink: string;
    copy: string;
    love: string;
  };
}

const TRANSLATIONS: Record<Lang, Translation> = {
  pt: {
    nav: { solucoes: 'Soluções', blocos: 'Blocos', inteligencia: 'Inteligência', cta: 'Fale conosco' },
    hero: {
      label: 'Soluções Agênticas em Blocos',
      titlePrefix: 'Construa soluções de negócios com nossas ',
      titleHighlight: 'aplicações agênticas',
      titleSuffix: '',
      sub: 'Monte a combinação que sua operação precisa — cada bloco é um agente pronto para rodar.',
      ctaPrimary: 'Quero conhecer',
      ctaGhost: 'Ver soluções',
    },
    problem: {
      label: 'O problema',
      title: 'Toda instituição financeira constrói as mesmas coisas. Do zero.',
      desc: 'Milhões gastos em soluções operacionais que poderiam ser blocos reutilizáveis. Cada banco, cada gestora, cada financeira reinventa a roda.',
      cards: [
        { title: 'Reconstrução constante', desc: 'Onboarding, compliance, crédito — toda instituição constrói do zero com consultoria, sistema legado e planilha.' },
        { title: 'Sistemas que não conversam', desc: 'Cada solução vive isolada. Os dados não se conectam, os processos não se integram. Retrabalho e zero visibilidade.' },
        { title: 'Sem inteligência operacional', desc: 'Dados críticos fragmentados em dezenas de fontes. Ninguém extrai insights da própria operação.' },
      ],
    },
    solucoes: {
      label: 'Aplicações práticas',
      titleLine1: 'Veja o que você pode fazer.',
      titleLine2: 'Soluções por vertical.',
      desc: 'Combinações prontas de blocos para resolver desafios específicos da sua operação.',
    },
    combos: [
      { title: 'Esteira de Crédito', desc: 'Operação completa de crédito estruturado — da validação de lastro à decisão.', tags: ['Validação de Lastro', 'Reconciliação', 'Poderes', 'Decisão de Crédito'] },
      { title: 'Compliance & PLD', desc: 'Onboarding regulatório com monitoramento contínuo de contrapartes e reporting automático.', tags: ['Onboarding & KYC', 'Compliance & PLD', 'Reporting'] },
      { title: 'Gestão Inteligente de Carteira', desc: 'Monitoramento ativo com early warnings e recomendações automatizadas.', tags: ['Monitoramento', 'Inteligência Operacional'] },
    ],
    casos: {
      label: 'Blocos disponíveis',
      titleLine1: 'Capacidades que compõem',
      titleLine2: 'suas soluções.',
      desc: 'Cada brikz é um bloco funcional pronto para rodar. Combine os blocos que sua operação precisa.',
      statusReady: 'Disponível',
      statusBuilding: 'Em construção',
    },
    usecases: [
      { name: 'Onboarding & KYC', desc: 'Abertura de relacionamento com validação automatizada de identidade, documentos e trilha auditável completa.', status: 'ready' },
      { name: 'Validação de Lastro', desc: 'Checagem automática de elegibilidade de ativos contra regras de negócio, regulamento e políticas internas.', status: 'building' },
      { name: 'Poderes & Procurações', desc: 'Leitura e interpretação de documentos societários, procurações e atas para validação de poderes de assinatura.', status: 'ready' },
      { name: 'Reconciliação', desc: 'Conciliação automática entre sistemas internos, registradoras e extratos bancários.', status: 'building' },
      { name: 'Compliance & PLD', desc: 'Análise de redes de contrapartes, detecção de risco e prevenção à lavagem de dinheiro via grafos.', status: 'building' },
      { name: 'Reporting Regulatório', desc: 'Reports automáticos para Bacen, CVM e auditorias com evidências rastreáveis.', status: 'building' },
      { name: 'Monitoramento de Carteira', desc: 'Acompanhamento 24/7 de concentração, aging, liquidez e early warnings de inadimplência.', status: 'building' },
      { name: 'Decisão de Crédito', desc: 'Análise de risco assistida com parecer estruturado para o tomador de decisão.', status: 'building' },
      { name: 'Inteligência Operacional', desc: 'Consolidação de sinais de todos os blocos com recomendação da próxima melhor ação.', status: 'building' },
    ],
    how: {
      label: 'Como funciona',
      title: 'Escolha. Combine. Opere.',
      desc: 'Três passos para transformar sua operação financeira.',
      steps: [
        { num: '01', title: 'Escolha os blocos', desc: 'Selecione os casos de uso que resolvem as dores mais urgentes.' },
        { num: '02', title: 'Combine e opere', desc: 'Os blocos se conectam e começam a rodar na sua esteira.' },
        { num: '03', title: 'Receba inteligência', desc: 'Seus dados viram insights para decisões melhores e mais rápidas.' },
      ],
    },
    dados: {
      label: 'O diferencial',
      titleLine1: 'Seus dados. Suas decisões.',
      titleLine2: 'Só que agora, estruturados.',
      desc: 'Cada bloco que roda captura e estrutura dados fragmentados. Devolvemos como inteligência para o seu negócio.',
      flywheelCenter: 'Seus\ndados',
      flywheelNodes: ['Mais blocos em uso', 'Mais dados estruturados', 'Melhores insights', 'Melhores decisões'],
      insights: [
        { title: 'Qualidade de lastro em tempo real', desc: 'Composição e risco do portfólio a qualquer momento.' },
        { title: 'Concentração e exposição', desc: 'Exposição por cedente, sacado, setor e prazo — antes que vire problema.' },
        { title: 'Early warning de inadimplência', desc: 'Sinais preditivos baseados nos seus dados operacionais reais.' },
        { title: 'Próxima melhor ação', desc: 'Recomendações automáticas do cruzamento de todos os blocos.' },
      ],
    },
    closing: {
      label: 'Próximo passo',
      titleLine1: 'Pare de construir do zero.',
      titleLine2: 'Monte com a brikz.',
      desc: 'Escolha os blocos que sua operação precisa. A infraestrutura é nossa. A solução é sua.',
      cta: 'Fale com a gente',
      imageAlt: 'Profissional sorrindo',
    },
    footer: {
      tagline: 'Soluções Agênticas em Blocos',
      menuTitle: 'Menu',
      contactTitle: 'Contato',
      socialTitle: 'Social',
      contactLink: 'hi@brikz.io',
      copy: '© 2025 brikz. Todos os Direitos Reservados.',
      love: 'Feito com ❤️ em São Paulo, nossa querida terra da garoa',
    },
  },
  en: {
    nav: { solucoes: 'Solutions', blocos: 'Blocks', inteligencia: 'Intelligence', cta: 'Talk to us' },
    hero: {
      label: 'Agentic building blocks',
      titlePrefix: 'Run your operation on ',
      titleHighlight: 'agentic applications',
      titleSuffix: ' — block by block.',
      sub: 'Pick the mix your operation needs. Each block ships as a working agent, ready to run.',
      ctaPrimary: 'Book a demo',
      ctaGhost: 'Browse the blocks',
    },
    problem: {
      label: 'The problem',
      title: 'Every financial institution rebuilds the same stack. From scratch.',
      desc: 'Millions burned on operational tooling that should be reusable. Every bank, every asset manager, every lender reinvents the wheel.',
      cards: [
        { title: 'Endless rebuilds', desc: 'Onboarding, compliance, credit — stitched together with consultancies, legacy systems and spreadsheets at every new shop.' },
        { title: "Systems that don't talk", desc: "Each tool lives in its own silo. Data doesn't connect, processes don't integrate — just rework and blind spots." },
        { title: 'No operational intelligence', desc: "Mission-critical data scattered across dozens of sources. Nobody mines insight from their own back office." },
      ],
    },
    solucoes: {
      label: 'In production',
      titleLine1: 'See what you can put live.',
      titleLine2: 'Bundles by vertical.',
      desc: "Pre-assembled block bundles that solve concrete challenges in your operation — not slideware.",
    },
    combos: [
      { title: 'Structured Credit Pipeline', desc: 'End-to-end structured-credit workflow — from receivables eligibility to credit decisioning.', tags: ['Receivables Eligibility', 'Reconciliation', 'Signing Authority', 'Credit Decisioning'] },
      { title: 'Compliance & AML', desc: 'Regulatory onboarding with continuous counterparty monitoring and audit-ready reporting.', tags: ['Onboarding & KYC', 'Compliance & AML', 'Regulatory Reporting'] },
      { title: 'Active Portfolio Management', desc: 'Live portfolio monitoring with early-warning signals and automated next-best-action.', tags: ['Portfolio Monitoring', 'Operational Intelligence'] },
    ],
    casos: {
      label: 'Available blocks',
      titleLine1: 'The capabilities that',
      titleLine2: 'compose your stack.',
      desc: 'Each brikz is a working block, ready to run on day one. Compose the ones your operation actually needs.',
      statusReady: 'Live',
      statusBuilding: 'On the roadmap',
    },
    usecases: [
      { name: 'Onboarding & KYC', desc: 'Counterparty onboarding with automated identity and document checks — and a full audit trail by default.', status: 'ready' },
      { name: 'Receivables Eligibility', desc: 'Automated eligibility checks on every asset, against your fund regulation, business rules and internal policies.', status: 'building' },
      { name: 'Signing Authority', desc: "Reads corporate bylaws, powers of attorney and minutes to validate who can actually sign what.", status: 'ready' },
      { name: 'Reconciliation', desc: 'Automated reconciliation across core systems, registrars (B3, CERC) and bank statements.', status: 'building' },
      { name: 'Compliance & AML', desc: 'Graph-based counterparty network analysis, risk scoring and anti-money-laundering signals.', status: 'building' },
      { name: 'Regulatory Reporting', desc: 'Audit-ready reports for Bacen, CVM and external auditors — every claim backed by traceable evidence.', status: 'building' },
      { name: 'Portfolio Monitoring', desc: '24/7 watch on concentration, aging, liquidity and early-warning default signals.', status: 'building' },
      { name: 'Credit Decisioning', desc: 'Decision-ready risk analysis with a structured opinion for whoever signs off.', status: 'building' },
      { name: 'Operational Intelligence', desc: 'Consolidates signals across every block and surfaces the next best action.', status: 'building' },
    ],
    how: {
      label: 'How it works',
      title: 'Choose. Combine. Operate.',
      desc: 'Three steps to put your financial operation on agentic rails.',
      steps: [
        { num: '01', title: 'Choose the blocks', desc: 'Pick the use cases that hit your most expensive pain points first.' },
        { num: '02', title: 'Combine and operate', desc: 'The blocks plug into each other and start running on your pipeline.' },
        { num: '03', title: 'Compound the intelligence', desc: 'Your operational data turns into insight — feeding faster, sharper decisions.' },
      ],
    },
    dados: {
      label: 'The compounding edge',
      titleLine1: 'Your data. Your decisions.',
      titleLine2: 'Finally structured.',
      desc: 'Every block running captures and structures fragmented data — and gives it back as intelligence on your portfolio.',
      flywheelCenter: 'Your\ndata',
      flywheelNodes: ['More blocks running', 'More structured data', 'Sharper insights', 'Better decisions'],
      insights: [
        { title: 'Collateral quality, real time', desc: 'Portfolio composition and risk profile, on tap.' },
        { title: 'Concentration & exposure', desc: 'Exposure by originator, obligor, sector and tenor — before it becomes a problem.' },
        { title: 'Early default warnings', desc: 'Predictive signals built on your own operational data, not industry averages.' },
        { title: 'Next best action', desc: 'Automated recommendations from cross-block intelligence.' },
      ],
    },
    closing: {
      label: 'What now',
      titleLine1: 'Stop building from scratch.',
      titleLine2: 'Compose with brikz.',
      desc: 'Pick the blocks your operation needs. The infrastructure is on us. The solution is yours.',
      cta: "Let's talk",
      imageAlt: 'Smiling professional',
    },
    footer: {
      tagline: 'Agentic building blocks',
      menuTitle: 'Menu',
      contactTitle: 'Contact',
      socialTitle: 'Social',
      contactLink: 'hi@brikz.io',
      copy: '© 2025 brikz. All rights reserved.',
      love: 'Built with ❤️ in São Paulo.',
    },
  },
};

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'pt';
  const stored = window.localStorage.getItem('brikz-lang');
  if (stored === 'pt' || stored === 'en') return stored;
  const browser = window.navigator.language?.toLowerCase() ?? '';
  return browser.startsWith('pt') ? 'pt' : 'en';
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
}

function LangSwitch({ lang, onChange, className = '' }: { lang: Lang; onChange: (l: Lang) => void; className?: string }) {
  return (
    <div className={`lang-switch ${className}`.trim()} role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-option ${lang === 'pt' ? 'active' : ''}`}
        onClick={() => onChange('pt')}
        aria-pressed={lang === 'pt'}
      >
        PT
      </button>
      <span className="lang-divider" aria-hidden="true">/</span>
      <button
        type="button"
        className={`lang-option ${lang === 'en' ? 'active' : ''}`}
        onClick={() => onChange('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.lang = lang;
    if (typeof window !== 'undefined') window.localStorage.setItem('brikz-lang', lang);
  }, [lang]);

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <img src={LOGO_URL} alt="brikz." className="nav-logo-img" />
        </a>
        <div className="nav-links">
          <a href="#solucoes" className="nav-link">{t.nav.solucoes}</a>
          <a href="#casos" className="nav-link">{t.nav.blocos}</a>
          <a href="#dados" className="nav-link">{t.nav.inteligencia}</a>
          <LangSwitch lang={lang} onChange={setLang} />
          <a href="#contato" className="nav-cta">{t.nav.cta}</a>
        </div>
        <div className="nav-mobile-actions">
          <LangSwitch lang={lang} onChange={setLang} className="lang-switch-mobile" />
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={mobileMenuOpen ? 'open' : ''}></span>
            <span className={mobileMenuOpen ? 'open' : ''}></span>
            <span className={mobileMenuOpen ? 'open' : ''}></span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#solucoes" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.solucoes}</a>
        <a href="#casos" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.blocos}</a>
        <a href="#dados" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.inteligencia}</a>
        <a href="#contato" className="mobile-menu-link mobile-menu-cta" onClick={() => setMobileMenuOpen(false)}>{t.nav.cta}</a>
      </div>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-fade" />
        <div className="hero-content">
          <div className="hero-label">{t.hero.label}</div>
          <h1>
            {t.hero.titlePrefix}
            <span className="cyan">{t.hero.titleHighlight}</span>
            {t.hero.titleSuffix}
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>
          <div className="hero-cta-row">
            <a href="#contato" className="btn-primary">{t.hero.ctaPrimary}</a>
            <a href="#solucoes" className="btn-ghost">{t.hero.ctaGhost}</a>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <Reveal>
          <div className="line-accent" />
          <div className="section-label">{t.problem.label}</div>
          <div className="section-title">{t.problem.title}</div>
          <p className="section-desc">{t.problem.desc}</p>
        </Reveal>
        <Reveal className="problem-grid">
          {t.problem.cards.map((card, i) => (
            <div key={i} className="problem-card">
              <div className="problem-title">{card.title}</div>
              <div className="problem-desc">{card.desc}</div>
            </div>
          ))}
        </Reveal>
      </section>

      <section id="solucoes">
        <Reveal>
          <div className="line-accent" />
          <div className="section-label">{t.solucoes.label}</div>
          <div className="section-title">{t.solucoes.titleLine1}<br />{t.solucoes.titleLine2}</div>
          <p className="section-desc">{t.solucoes.desc}</p>
        </Reveal>
        <Reveal className="combos-grid">
          {t.combos.map((combo, i) => (
            <div key={i} className="combo-card">
              <div className="combo-title">{combo.title}</div>
              <div className="combo-desc">{combo.desc}</div>
              <div className="combo-blocks">
                {combo.tags.map((tag, j) => (
                  <span key={j} className="combo-block-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-soft" id="casos">
        <Reveal>
          <div className="line-accent" />
          <div className="section-label">{t.casos.label}</div>
          <div className="section-title">{t.casos.titleLine1}<br />{t.casos.titleLine2}</div>
          <p className="section-desc">{t.casos.desc}</p>
        </Reveal>
        <Reveal className="usecases-grid">
          {t.usecases.map((uc, i) => (
            <div key={i} className="usecase-card">
              <div className="usecase-icon"><span /><span /></div>
              <div className="usecase-name">{uc.name}</div>
              <div className="usecase-desc">{uc.desc}</div>
              <span className={`usecase-status ${uc.status === 'ready' ? 'status-ready' : 'status-building'}`}>
                {uc.status === 'ready' ? t.casos.statusReady : t.casos.statusBuilding}
              </span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="how" id="como">
        <Reveal>
          <div className="blocks-animation">
            <div className="block block-1"></div>
            <div className="block block-2"></div>
            <div className="block block-3"></div>
          </div>
          <div className="line-accent" style={{ margin: '0 auto 1.5rem' }} />
          <div className="section-label">{t.how.label}</div>
          <div className="section-title">{t.how.title}</div>
          <p className="section-desc">{t.how.desc}</p>
        </Reveal>
        <Reveal className="how-flow">
          {t.how.steps.map((step, i) => (
            <div key={i} className="how-step">
              <div className="how-num">{step.num}</div>
              <div className="how-step-title">{step.title}</div>
              <div className="how-step-desc">{step.desc}</div>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-soft" id="dados">
        <Reveal>
          <div className="line-accent" />
          <div className="section-label">{t.dados.label}</div>
          <div className="section-title">{t.dados.titleLine1}<br />{t.dados.titleLine2}</div>
          <p className="section-desc">{t.dados.desc}</p>
        </Reveal>
        <Reveal className="data-layout">
          <div>
            <div className="flywheel-container">
              <div className="flywheel-ring" />
              <div className="flywheel-ring-inner" />
              <div className="flywheel-center">
                <div className="flywheel-center-text">
                  {t.dados.flywheelCenter.split('\n').map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              {t.dados.flywheelNodes.map((node, i) => (
                <div key={i} className="fw-node">{node}</div>
              ))}
            </div>
          </div>
          <div className="data-right">
            {t.dados.insights.map((insight, i) => (
              <div key={i} className="insight-card">
                <div className="insight-title">{insight.title}</div>
                <div className="insight-desc">{insight.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="closing" id="contato">
        <Reveal>
          <div className="closing-content">
            <div className="closing-text">
              <div className="line-accent" style={{ margin: '0 0 1.5rem' }} />
              <div className="section-label">{t.closing.label}</div>
              <div className="section-title">{t.closing.titleLine1}<br />{t.closing.titleLine2}</div>
              <p className="section-desc">{t.closing.desc}</p>
              <div className="closing-cta">
                <a href="mailto:hi@brikz.io" className="btn-primary">{t.closing.cta}</a>
              </div>
            </div>
            <div className="closing-image">
              <img src="https://17uumjmuih.ufs.sh/f/TrFfSLZlNSd2TOVawdZlNSd2DUhj8z9qitZpLyX3YxmArg1s" alt={t.closing.imageAlt} />
            </div>
          </div>
        </Reveal>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-col">
            <img src={LOGO_URL} alt="brikz." className="footer-logo-img" />
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">{t.footer.menuTitle}</h4>
            <a href="#solucoes" className="footer-link">{t.nav.solucoes}</a>
            <a href="#casos" className="footer-link">{t.nav.blocos}</a>
            <a href="#dados" className="footer-link">{t.nav.inteligencia}</a>
            <a href="#contato" className="footer-link">{t.footer.contactTitle}</a>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">{t.footer.contactTitle}</h4>
            <a href="mailto:hi@brikz.io" className="footer-link">{t.footer.contactLink}</a>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">{t.footer.socialTitle}</h4>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social">LinkedIn</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">{t.footer.copy}</div>
          <div className="footer-love">{t.footer.love}</div>
        </div>
      </footer>
    </>
  );
}
