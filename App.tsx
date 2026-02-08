import React, { useEffect, useRef } from 'react';
import './index.css';

const LOGO_URL = 'https://17uumjmuih.ufs.sh/f/TrFfSLZlNSd2eR3rAXbKqgOR4iAaBvGJecdI8wVyFm16NWDh';

const BLOCKS = [
  { name: 'Onboarding Agent', role: 'Abertura de relacionamento com KYC/KYB automatizado, checagem documental e trilha auditável completa.', tag: 'tag-operational' },
  { name: 'Eligibility Agent', role: 'Validação automática de lastro contra regras de negócio, regulamento de fundo e políticas internas de crédito.', tag: 'tag-operational' },
  { name: 'Powers Agent', role: 'Leitura e interpretação de documentos societários, procurações e atas para validação de poderes de assinatura.', tag: 'tag-operational' },
  { name: 'Reconciliation Agent', role: 'Conciliação automática entre sistemas internos, registradoras e extratos bancários. Fim das divergências manuais.', tag: 'tag-operational' },
  { name: 'Regulatory Reporting', role: 'Geração automática de reports para Bacen, CVM e auditorias com evidências rastreáveis e compliance nativo.', tag: 'tag-operational' },
  { name: 'Portfolio Sentinel', role: 'Monitoramento 24/7 de carteira — concentração, aging, liquidez e early warnings de inadimplência em tempo real.', tag: 'tag-analytics' },
  { name: 'Credit Decision Agent', role: 'Esteira de análise de risco assistida que consolida dados e gera parecer estruturado para o tomador de decisão.', tag: 'tag-analytics' },
  { name: 'Compliance Agent', role: 'Análise de redes de contrapartes e detecção de situações de risco em PLD via grafos relacionais.', tag: 'tag-analytics' },
  { name: 'Insight Orchestrator', role: 'Consolida sinais de todos os agentes, correlaciona eventos e recomenda a próxima melhor ação para sua equipe.', tag: 'tag-intelligence' },
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
  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <img src={LOGO_URL} alt="brikz." className="nav-logo-img" />
        </a>
        <div className="nav-links">
          <a href="#blocos" className="nav-link">Blocos</a>
          <a href="#como" className="nav-link">Como funciona</a>
          <a href="#dados" className="nav-link">Dados</a>
          <a href="#contato" className="nav-cta">Fale conosco</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-bg-overlay" />
        <div className="hero-fade" />
        <div className="hero-content">
          <div className="hero-label">Financial Solution Blocks</div>
          <h1>Sua operação de crédito merece mais do que <span className="cyan">planilhas.</span></h1>
          <p className="hero-sub">Agentes inteligentes e modulares que automatizam sua esteira de crédito, estruturam seus dados e devolvem os insights que você nunca conseguiu extrair.</p>
          <div className="hero-cta-row">
            <a href="#contato" className="btn-primary">Quero conhecer</a>
            <a href="#blocos" className="btn-ghost">Ver os blocos</a>
          </div>
        </div>
      </section>

      <section className="pain">
        <Reveal>
          <div className="line-accent" />
          <div className="section-label">O problema</div>
          <div className="section-title">O crédito cresceu.<br />A operação ficou no século passado.</div>
          <p className="section-desc">Instituições financeiras operam esteiras de crédito com processos manuais, sistemas que não conversam e dados fragmentados. O resultado é previsível.</p>
        </Reveal>
        <Reveal className="pain-grid">
          <div className="pain-card">
            <div className="pain-number">70%</div>
            <div className="pain-stat">do tempo do analista</div>
            <div className="pain-desc">É gasto em tarefas operacionais repetitivas que poderiam ser automatizadas — de conferência documental a reconciliação manual.</div>
          </div>
          <div className="pain-card">
            <div className="pain-number">5x</div>
            <div className="pain-stat">mais lento para escalar</div>
            <div className="pain-desc">Cada novo fundo ou produto exige retrabalho de processos. A operação não escala — ela se multiplica em complexidade.</div>
          </div>
          <div className="pain-card">
            <div className="pain-number">0</div>
            <div className="pain-stat">visibilidade integrada</div>
            <div className="pain-desc">Dados críticos vivem em planilhas, e-mails e sistemas legados. Ninguém tem uma visão unificada da própria operação.</div>
          </div>
        </Reveal>
      </section>

      <section className="blocks" id="blocos">
        <Reveal>
          <div className="line-accent" />
          <div className="section-label">Blocos de solução</div>
          <div className="section-title">Contrate só o que precisa.<br />Cada bloco resolve uma dor.</div>
          <p className="section-desc">Cada brikz é um agente autônomo para sua esteira de crédito. Funciona sozinho. Junto com outros blocos, forma uma operação inteligente.</p>
        </Reveal>
        <Reveal className="blocks-grid">
          {BLOCKS.map((block, i) => (
            <div key={i} className="block-card">
              <div className="block-icon"><span /><span /></div>
              <div className="block-name">{block.name}</div>
              <div className="block-role">{block.role}</div>
              <span className={`block-tag ${block.tag}`}>
                {block.tag === 'tag-operational' ? 'Operacional' : block.tag === 'tag-analytics' ? 'Analítico' : 'Inteligência'}
              </span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="how how-combined" id="como">
        <Reveal>
          <div className="line-accent" style={{ margin: '0 auto 1.5rem' }} />
          <div className="section-label">Como funciona</div>
          <div className="section-title">Arquitetura de agentes autônomos.<br /><span className="cyan">Se auto gerenciam — e criam novos agentes quando preciso.</span></div>
          <p className="section-desc">Na brikz, cada agente é uma unidade independente: orquestra tarefas, delega trabalho e pode instanciar novos agentes especializados quando a demanda ou a complexidade exige. A operação escala sem você redesenhar o sistema. Cada bloco alimenta o próximo — quanto mais você usa, mais inteligente sua operação fica.</p>
        </Reveal>
        <Reveal className="architecture-grid">
          <div className="pain-card">
            <div className="pain-number">1</div>
            <div className="pain-stat">Auto-gestão</div>
            <div className="pain-desc">Cada agente decide o que fazer com base em regras, contexto e prioridades. Não depende de um controlador central — ele se organiza e executa.</div>
          </div>
          <div className="pain-card">
            <div className="pain-number">2</div>
            <div className="pain-stat">Orquestração entre agentes</div>
            <div className="pain-desc">Agentes se comunicam e delegam subtarefas entre si. Um fluxo complexo é quebrado em passos que os próprios agentes distribuem e monitoram.</div>
          </div>
          <div className="pain-card">
            <div className="pain-number">3</div>
            <div className="pain-stat">Criação sob demanda</div>
            <div className="pain-desc">Quando o volume ou a natureza do trabalho justifica, a arquitetura pode criar novos agentes especializados. A topologia evolui com a necessidade, com auditoria e governança.</div>
          </div>
        </Reveal>
        <Reveal>
          <p className="how-sublabel">Três camadas, um ecossistema</p>
        </Reveal>
        <Reveal className="how-flow">
          <div className="how-step">
            <div className="how-num">01</div>
            <div className="how-step-title">Automação operacional</div>
            <div className="how-step-desc">Agentes resolvem as tarefas manuais que consomem horas da sua equipe.</div>
          </div>
          <div className="how-step">
            <div className="how-num">02</div>
            <div className="how-step-title">Dados estruturados</div>
            <div className="how-step-desc">Cada agente captura e organiza dados que antes viviam em planilhas e e-mails.</div>
          </div>
          <div className="how-step">
            <div className="how-num">03</div>
            <div className="how-step-title">Insights e decisão</div>
            <div className="how-step-desc">Seus dados organizados viram inteligência para decisões melhores e mais rápidas.</div>
          </div>
        </Reveal>
        <Reveal>
          <p className="section-desc" style={{ marginTop: '2rem', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
            Tudo com trilha auditável: quem fez o quê, qual agente criou qual e por quê. Flexibilidade de sistema vivo, sem perder controle ou compliance.
          </p>
        </Reveal>
      </section>

      <section className="data-section" id="dados">
        <Reveal>
          <div className="line-accent" />
          <div className="section-label">O diferencial</div>
          <div className="section-title">Seus dados. Suas decisões.<br />Só que agora, estruturados.</div>
          <p className="section-desc">Não vendemos seus dados. Nós os organizamos e devolvemos como inteligência. Quanto mais a brikz roda na sua operação, mais clara fica a visão do seu próprio negócio.</p>
        </Reveal>
        <Reveal className="data-layout">
          <div>
            <div className="flywheel-container">
              <div className="flywheel-ring" />
              <div className="flywheel-ring-inner" />
              <div className="flywheel-center">
                <div className="flywheel-center-text">Seus<br />dados</div>
              </div>
              <div className="fw-node">Mais agentes em uso</div>
              <div className="fw-node">Mais dados estruturados</div>
              <div className="fw-node">Melhores insights</div>
              <div className="fw-node">Melhores decisões</div>
            </div>
          </div>
          <div className="data-right">
            <div className="insight-card">
              <div className="insight-title">Qualidade de lastro em tempo real</div>
              <div className="insight-desc">Entenda a composição e o risco do seu portfólio de recebíveis a qualquer momento, não só no fechamento mensal.</div>
            </div>
            <div className="insight-card">
              <div className="insight-title">Concentração e exposição</div>
              <div className="insight-desc">Visualize automaticamente sua exposição por cedente, sacado, setor e prazo — antes que vire problema.</div>
            </div>
            <div className="insight-card">
              <div className="insight-title">Early warning de inadimplência</div>
              <div className="insight-desc">Sinais preditivos que antecipam deterioração da carteira com base no comportamento real dos seus dados.</div>
            </div>
            <div className="insight-card">
              <div className="insight-title">Próxima melhor ação</div>
              <div className="insight-desc">Recomendações automáticas para sua equipe baseadas no cruzamento de todos os agentes da sua operação.</div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="closing" id="contato">
        <Reveal>
          <div className="line-accent" style={{ margin: '0 auto 1.5rem' }} />
          <div className="section-label">Próximo passo</div>
          <div className="section-title">Sua esteira de crédito pode ser mais inteligente a partir de agora.</div>
          <p className="section-desc">Escolha os blocos que resolvem suas dores mais urgentes. A brikz faz o resto.</p>
          <div className="closing-cta">
            <a href="mailto:contato@brikz.com.br" className="btn-primary">Fale com a gente</a>
          </div>
        </Reveal>
      </section>

      <footer>
        <div className="footer-brand">
          <img src={LOGO_URL} alt="brikz." className="footer-logo-img" />
        </div>
        <div className="footer-copy">&copy; 2025 brikz. Financial Solution Blocks.</div>
      </footer>
    </>
  );
}
