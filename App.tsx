import React, { useEffect, useRef } from 'react';
import './index.css';

const LOGO_URL = 'https://17uumjmuih.ufs.sh/f/TrFfSLZlNSd2eR3rAXbKqgOR4iAaBvGJecdI8wVyFm16NWDh';

const USECASES = [
  { name: 'Onboarding & KYC', desc: 'Abertura de relacionamento com validação automatizada de identidade, documentos e trilha auditável completa.', status: 'ready' },
  { name: 'Validação de Lastro', desc: 'Checagem automática de elegibilidade de ativos contra regras de negócio, regulamento e políticas internas.', status: 'building' },
  { name: 'Poderes & Procurações', desc: 'Leitura e interpretação de documentos societários, procurações e atas para validação de poderes de assinatura.', status: 'ready' },
  { name: 'Reconciliação', desc: 'Conciliação automática entre sistemas internos, registradoras e extratos bancários.', status: 'building' },
  { name: 'Compliance & PLD', desc: 'Análise de redes de contrapartes, detecção de risco e prevenção à lavagem de dinheiro via grafos.', status: 'building' },
  { name: 'Reporting Regulatório', desc: 'Reports automáticos para Bacen, CVM e auditorias com evidências rastreáveis.', status: 'building' },
  { name: 'Monitoramento de Carteira', desc: 'Acompanhamento 24/7 de concentração, aging, liquidez e early warnings de inadimplência.', status: 'building' },
  { name: 'Decisão de Crédito', desc: 'Análise de risco assistida com parecer estruturado para o tomador de decisão.', status: 'building' },
  { name: 'Inteligência Operacional', desc: 'Consolidação de sinais de todos os blocos com recomendação da próxima melhor ação.', status: 'building' },
];

const COMBOS = [
  { title: 'Esteira de Crédito', desc: 'Operação completa de crédito estruturado — da validação de lastro à decisão.', tags: ['Validação de Lastro', 'Reconciliação', 'Poderes', 'Decisão de Crédito'] },
  { title: 'Compliance & PLD', desc: 'Onboarding regulatório com monitoramento contínuo de contrapartes e reporting automático.', tags: ['Onboarding & KYC', 'Compliance & PLD', 'Reporting'] },
  { title: 'Gestão Inteligente de Carteira', desc: 'Monitoramento ativo com early warnings e recomendações automatizadas.', tags: ['Monitoramento', 'Inteligência Operacional'] },
];

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

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <img src={LOGO_URL} alt="brikz." className="nav-logo-img" />
        </a>
        <div className="nav-links">
          <a href="#solucoes" className="nav-link">Soluções</a>
          <a href="#casos" className="nav-link">Blocos</a>
          <a href="#dados" className="nav-link">Inteligência</a>
          <a href="#contato" className="nav-cta">Fale conosco</a>
        </div>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
          <span className={mobileMenuOpen ? 'open' : ''}></span>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#solucoes" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Soluções</a>
        <a href="#casos" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Blocos</a>
        <a href="#dados" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Inteligência</a>
        <a href="#contato" className="mobile-menu-link mobile-menu-cta" onClick={() => setMobileMenuOpen(false)}>Fale conosco</a>
      </div>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-fade" />
        <div className="hero-content">
          <div className="hero-label">Soluções Agênticas em Blocos</div>
          <h1>Construa soluções de negócios com nossas <span className="cyan">aplicações agênticas</span></h1>
          <p className="hero-sub">Monte a combinação que sua operação precisa — cada bloco é um agente pronto para rodar.</p>
          <div className="hero-cta-row">
            <a href="#contato" className="btn-primary">Quero conhecer</a>
            <a href="#solucoes" className="btn-ghost">Ver soluções</a>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <Reveal>
          <div className="line-accent" />
          <div className="section-label">O problema</div>
          <div className="section-title">Toda instituição financeira constrói as mesmas coisas. Do zero.</div>
          <p className="section-desc">Milhões gastos em soluções operacionais que poderiam ser blocos reutilizáveis. Cada banco, cada gestora, cada financeira reinventa a roda.</p>
        </Reveal>
        <Reveal className="problem-grid">
          <div className="problem-card">
            <div className="problem-title">Reconstrução constante</div>
            <div className="problem-desc">Onboarding, compliance, crédito — toda instituição constrói do zero com consultoria, sistema legado e planilha.</div>
          </div>
          <div className="problem-card">
            <div className="problem-title">Sistemas que não conversam</div>
            <div className="problem-desc">Cada solução vive isolada. Os dados não se conectam, os processos não se integram. Retrabalho e zero visibilidade.</div>
          </div>
          <div className="problem-card">
            <div className="problem-title">Sem inteligência operacional</div>
            <div className="problem-desc">Dados críticos fragmentados em dezenas de fontes. Ninguém extrai insights da própria operação.</div>
          </div>
        </Reveal>
      </section>

      <section id="solucoes">
        <Reveal>
          <div className="line-accent" />
          <div className="section-label">Aplicações práticas</div>
          <div className="section-title">Veja o que você pode fazer.<br />Soluções por vertical.</div>
          <p className="section-desc">Combinações prontas de blocos para resolver desafios específicos da sua operação.</p>
        </Reveal>
        <Reveal className="combos-grid">
          {COMBOS.map((combo, i) => (
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
          <div className="section-label">Blocos disponíveis</div>
          <div className="section-title">Capacidades que compõem<br />suas soluções.</div>
          <p className="section-desc">Cada brikz é um bloco funcional pronto para rodar. Combine os blocos que sua operação precisa.</p>
        </Reveal>
        <Reveal className="usecases-grid">
          {USECASES.map((uc, i) => (
            <div key={i} className="usecase-card">
              <div className="usecase-icon"><span /><span /></div>
              <div className="usecase-name">{uc.name}</div>
              <div className="usecase-desc">{uc.desc}</div>
              <span className={`usecase-status ${uc.status === 'ready' ? 'status-ready' : 'status-building'}`}>
                {uc.status === 'ready' ? 'Disponível' : 'Em construção'}
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
          <div className="section-label">Como funciona</div>
          <div className="section-title">Escolha. Combine. Opere.</div>
          <p className="section-desc">Três passos para transformar sua operação financeira.</p>
        </Reveal>
        <Reveal className="how-flow">
          <div className="how-step">
            <div className="how-num">01</div>
            <div className="how-step-title">Escolha os blocos</div>
            <div className="how-step-desc">Selecione os casos de uso que resolvem as dores mais urgentes.</div>
          </div>
          <div className="how-step">
            <div className="how-num">02</div>
            <div className="how-step-title">Combine e opere</div>
            <div className="how-step-desc">Os blocos se conectam e começam a rodar na sua esteira.</div>
          </div>
          <div className="how-step">
            <div className="how-num">03</div>
            <div className="how-step-title">Receba inteligência</div>
            <div className="how-step-desc">Seus dados viram insights para decisões melhores e mais rápidas.</div>
          </div>
        </Reveal>
      </section>

      <section className="bg-soft" id="dados">
        <Reveal>
          <div className="line-accent" />
          <div className="section-label">O diferencial</div>
          <div className="section-title">Seus dados. Suas decisões.<br />Só que agora, estruturados.</div>
          <p className="section-desc">Cada bloco que roda captura e estrutura dados fragmentados. Devolvemos como inteligência para o seu negócio.</p>
        </Reveal>
        <Reveal className="data-layout">
          <div>
            <div className="flywheel-container">
              <div className="flywheel-ring" />
              <div className="flywheel-ring-inner" />
              <div className="flywheel-center">
                <div className="flywheel-center-text">Seus<br />dados</div>
              </div>
              <div className="fw-node">Mais blocos em uso</div>
              <div className="fw-node">Mais dados estruturados</div>
              <div className="fw-node">Melhores insights</div>
              <div className="fw-node">Melhores decisões</div>
            </div>
          </div>
          <div className="data-right">
            <div className="insight-card">
              <div className="insight-title">Qualidade de lastro em tempo real</div>
              <div className="insight-desc">Composição e risco do portfólio a qualquer momento.</div>
            </div>
            <div className="insight-card">
              <div className="insight-title">Concentração e exposição</div>
              <div className="insight-desc">Exposição por cedente, sacado, setor e prazo — antes que vire problema.</div>
            </div>
            <div className="insight-card">
              <div className="insight-title">Early warning de inadimplência</div>
              <div className="insight-desc">Sinais preditivos baseados nos seus dados operacionais reais.</div>
            </div>
            <div className="insight-card">
              <div className="insight-title">Próxima melhor ação</div>
              <div className="insight-desc">Recomendações automáticas do cruzamento de todos os blocos.</div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="closing" id="contato">
        <Reveal>
          <div className="closing-content">
            <div className="closing-text">
              <div className="line-accent" style={{ margin: '0 0 1.5rem' }} />
              <div className="section-label">Próximo passo</div>
              <div className="section-title">Pare de construir do zero.<br />Monte com a brikz.</div>
              <p className="section-desc">Escolha os blocos que sua operação precisa. A infraestrutura é nossa. A solução é sua.</p>
              <div className="closing-cta">
                <a href="mailto:hi@brikz.io" className="btn-primary">Fale com a gente</a>
              </div>
            </div>
            <div className="closing-image">
              <img src="https://17uumjmuih.ufs.sh/f/TrFfSLZlNSd2TOVawdZlNSd2DUhj8z9qitZpLyX3YxmArg1s" alt="Profissional sorrindo" />
            </div>
          </div>
        </Reveal>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-col">
            <img src={LOGO_URL} alt="brikz." className="footer-logo-img" />
            <p className="footer-tagline">Soluções Agênticas em Blocos</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Menu</h4>
            <a href="#solucoes" className="footer-link">Soluções</a>
            <a href="#casos" className="footer-link">Blocos</a>
            <a href="#dados" className="footer-link">Inteligência</a>
            <a href="#contato" className="footer-link">Contato</a>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contato</h4>
            <a href="mailto:hi@brikz.io" className="footer-link">hi@brikz.io</a>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Social</h4>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social">LinkedIn</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">&copy; 2025 brikz. Todos os Direitos Reservados.</div>
          <div className="footer-love">Feito com ❤️ em São Paulo, nossa querida terra da garoa</div>
        </div>
      </footer>
    </>
  );
}
