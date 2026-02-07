
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  Scan, 
  Database, 
  ShieldCheck, 
  Search, 
  Banknote, 
  Activity, 
  Zap, 
  MessageSquare,
  AlertTriangle,
  FileSearch,
  Users,
  TrendingUp,
  BarChart3,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
interface Agent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  result: string;
  icon: React.ReactNode;
}

// --- Components ---

const Logo = () => (
  <div className="flex items-center gap-2 font-heading font-bold text-2xl tracking-tight">
    <span>brikz</span>
    <div className="flex flex-col gap-[2px]">
      <div className="w-2 h-2 bg-cyan"></div>
      <div className="w-2 h-2 bg-cyan translate-x-2"></div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          <a href="#problema" className="text-sm font-medium hover:text-cyan transition-colors">Problema</a>
          <a href="#solucao" className="text-sm font-medium hover:text-cyan transition-colors">Solução</a>
          <a href="#agentes" className="text-sm font-medium hover:text-cyan transition-colors">Agentes</a>
          <a href="#prova" className="text-sm font-medium hover:text-cyan transition-colors">Resultados</a>
          <button className="bg-cyan text-black px-6 py-2.5 rounded-sm font-bold text-sm hover:brightness-110 transition-all flex items-center gap-2">
            Agendar demonstração <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#problema" onClick={() => setIsOpen(false)} className="text-lg font-medium">Problema</a>
          <a href="#solucao" onClick={() => setIsOpen(false)} className="text-lg font-medium">Solução</a>
          <a href="#agentes" onClick={() => setIsOpen(false)} className="text-lg font-medium">Agentes</a>
          <a href="#prova" onClick={() => setIsOpen(false)} className="text-lg font-medium">Resultados</a>
          <button className="bg-cyan text-black px-6 py-4 rounded-sm font-bold text-center">
            Agendar demonstração
          </button>
        </div>
      )}
    </nav>
  );
};

// Fix for line 103: Using React.FC to handle 'key' and other React props correctly when used in lists
const AgentCard: React.FC<{ agent: Agent }> = ({ agent }) => (
  <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-none hover:border-cyan/30 transition-all group flex flex-col h-full">
    <div className="mb-6 text-cyan bg-cyan/5 w-12 h-12 flex items-center justify-center border border-cyan/20">
      {agent.icon}
    </div>
    <div className="mb-2">
      <h3 className="text-white font-heading text-xl font-bold">{agent.title}</h3>
      <p className="text-cyan text-xs font-mono uppercase tracking-widest mt-1">{agent.subtitle}</p>
    </div>
    <p className="text-gray-400 text-sm mb-6 mt-4 leading-relaxed">
      {agent.description}
    </p>
    <ul className="space-y-3 mb-8 flex-grow">
      {agent.features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
          <ChevronRight className="w-4 h-4 text-cyan mt-0.5 shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <div className="pt-6 border-t border-white/5 mt-auto">
      <div className="flex items-center gap-2 text-sm">
        <CheckCircle2 className="w-4 h-4 text-cyan" />
        <span className="font-semibold text-white">Resultado:</span>
        <span className="text-gray-400">{agent.result}</span>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const agents: Agent[] = [
    {
      id: 1,
      title: "Documentos entram com rastreabilidade total",
      subtitle: "Agent Ingestor — Captura sem decisão",
      description: "Recebe documentos, valida integridade técnica e cria o dossiê inicial do fundo.",
      features: ["Anti-duplicidade via hash", "Registro imutável de upload", "Trilha completa de auditoria"],
      result: "entrada robusta e rastreável desde o primeiro arquivo.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Extração inteligente com evidência regulatória",
      subtitle: "Agent Doc Reader — IA explicável",
      description: "Extrai campos estruturados e aponta exatamente o trecho do documento que sustenta cada dado.",
      features: ["Score de confiança por campo", "Evidência por página e recorte", "Auditoria humana e regulatória pronta"],
      result: "fim da leitura manual e da incerteza documental.",
      icon: <FileSearch className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Processamento de Escaneados",
      subtitle: "Agent OCR — Fallback Inteligente",
      description: "Processa PDFs escaneados preservando layout e coordenadas espaciais dos dados.",
      features: ["Reconhecimento de alta precisão", "Preservação de contexto visual", "Normalização automática"],
      result: "até documentos físicos viram dados auditáveis.",
      icon: <Scan className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Dados padronizados sem ambiguidade",
      subtitle: "Agent Normalizer — Transformação determinística",
      description: "Converte diferentes formatos em um modelo canônico reproduzível sem incertezas de IA.",
      features: ["Datas ISO e CNPJ normalizado", "Aliases bancários resolvidos", "Regras versionadas (sem 'alucinação')"],
      result: "consistência operacional e compliance nativo.",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Elegibilidade técnica automatizada",
      subtitle: "Agent Eligibility — Parecer assistido",
      description: "Executa regras técnicas e regulatórias do fundo com relatórios detalhados.",
      features: ["Conformidade CVM 175", "Ativo permitido e duplicidade", "Gravames e ônus inesperados"],
      result: "elegibilidade escalável sem perder controle.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Reconciliação com registradoras",
      subtitle: "Agent Registry Reconciler — Verdade operacional",
      description: "Compara o estado interno do fundo com o ecossistema regulado (B3/BCB).",
      features: ["Unidade de recebível na B3", "Titularidade no Banco Central", "Detecção de ônus em tempo real"],
      result: "“o que compramos” = “o que existe”.",
      icon: <Search className="w-6 h-6" />
    },
    {
      id: 7,
      title: "Conciliação bancária automática",
      subtitle: "Agent Bank Matcher — Fechamento financeiro",
      description: "Compara previsão de liquidação com extrato real usando modelos híbridos.",
      features: ["Matching exato (determinístico)", "Matching com explicação (probabilístico)", "Flags para validação humana"],
      result: "redução massiva de erro operacional.",
      icon: <Banknote className="w-6 h-6" />
    },
    {
      id: 8,
      title: "Monitoramento contínuo de risco",
      subtitle: "Agent Portfolio Sentinel — Guardião 24/7",
      description: "Monitora automaticamente a saúde da carteira e limites de concentração.",
      features: ["Aging e vencimentos em tempo real", "Inadimplência e liquidez futura", "Alertas + sugestão de bloqueio"],
      result: "risco em tempo real, não no fechamento.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      id: 9,
      title: "Conversar com o fundo",
      subtitle: "Agent Conversation Interface — Chat com evidências",
      description: "Gestor e auditores podem perguntar diretamente ao fundo sobre qualquer dado ou decisão.",
      features: ["Perguntas sobre exposição e sacados", "Evidências de duplicatas específicas", "Transparência total em rejecções"],
      result: "transparência total e auditoria instantânea.",
      icon: <MessageSquare className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-bold uppercase tracking-wider mb-8">
            <Zap className="w-3 h-3 fill-cyan" /> Arquitetura Agêntica para FIDCs
          </div>
          <h1 className="text-5xl md:text-8xl font-heading font-bold leading-tight mb-8 max-w-5xl">
            A operação do seu FIDC <br />
            <span className="text-cyan">não precisa ser manual</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mb-12 leading-relaxed">
            Planilhas, conciliações demoradas e reporting que vira uma corrida todo mês. 
            A brikz automatiza a esteira de recebíveis com <span className="text-white font-semibold">9 agentes especializados</span>, auditáveis e explicáveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-cyan text-black px-10 py-5 rounded-sm font-bold text-lg hover:scale-[1.02] transition-all glow-cyan flex items-center justify-center gap-3">
              Agendar demonstração <ArrowRight />
            </button>
            <button className="border border-white/20 bg-white/5 px-10 py-5 rounded-sm font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
              Ver Como Funciona
            </button>
          </div>
        </div>
        {/* Background Grid Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(0,255,255,0.08),transparent_70%)] pointer-events-none opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </section>

      {/* Problema Section */}
      <section id="problema" className="py-24 bg-[#050505] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
                O gargalo não é crédito. <br />
                <span className="text-cyan">É operação.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Gestores estão crescendo, mas a infraestrutura operacional continua fragmentada e dependente de intervenção humana constante.
              </p>
              <div className="space-y-4">
                {[
                  "Processamento manual com alto risco de erro",
                  "Falta de rastreabilidade entre documento e decisão",
                  "Reconciliação frágil com registradoras (B3/BCB)",
                  "Conciliação bancária cheia de divergências",
                  "Monitoramento de carteira sem visibilidade real",
                  "Dificuldade de escalar com conformidade CVM"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-300">
                    <AlertTriangle className="w-5 h-5 text-red-500/70" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-none flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-heading font-bold text-cyan mb-2">60%</span>
                <span className="text-gray-400 text-sm uppercase tracking-wider">Menos tempo operacional</span>
              </div>
              <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-none flex flex-col items-center justify-center text-center translate-y-8">
                <span className="text-5xl font-heading font-bold text-cyan mb-2">30%</span>
                <span className="text-gray-400 text-sm uppercase tracking-wider">Menos custo de execução</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solução Intro */}
      <section id="solucao" className="py-24 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
            Cada dor do gestor. <br />
            <span className="text-cyan">Um agente para resolver.</span>
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed">
            A brikz substitui esteiras manuais por uma arquitetura de agentes pequenos, especializados e auditáveis. 
            Nada de monólitos frágeis. Nada de “caixa preta”.
          </p>
        </div>
      </section>

      {/* Agents Grid Section */}
      <section id="agentes" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold flex items-center gap-4">
              <div className="brikz-icon"><div className="brikz-square"></div><div className="brikz-square"></div></div>
              OS 9 AGENTES DA OPERAÇÃO
            </h2>
            <div className="w-20 h-1 bg-cyan mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-[#050505] px-6">
        <div className="max-w-7xl mx-auto border border-white/10 p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <div className="grid grid-cols-4 gap-2">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-cyan"></div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-heading font-bold mb-16">
              Por que a brikz supera <br />
              <span className="text-cyan">sistemas tradicionais</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Auditabilidade Total", desc: "Cada decisão é um evento imutável registrado em log auditável." },
                { title: "Conformidade por Design", desc: "CVM e LGPD viram código executável na esteira de dados." },
                { title: "Escalabilidade Infinita", desc: "Agentes horizontais processam lotes massivos sem gargalos." },
                { title: "Explicabilidade Real (XAI)", desc: "Evidência documental imediata, não caixa preta de IA." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <h3 className="text-white font-heading font-bold text-xl">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prova / Resultados */}
      <section id="prova" className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: "Performance", title: "Processamento caiu de 3 dias para minutos", client: "BASF", icon: <TrendingUp className="text-cyan" /> },
              { label: "Confiabilidade", title: "90% menos erros operacionais em conciliação", client: "FIDC Multicedente", icon: <ShieldCheck className="text-cyan" /> },
              { label: "Escalabilidade", title: "Crescimento de 4x no PL com mesma equipe", client: "Asset Management", icon: <Users className="text-cyan" /> }
            ].map((caseStudy, i) => (
              <div key={i} className="p-10 border-l border-white/10 hover:border-cyan transition-colors group">
                <div className="mb-6">{caseStudy.icon}</div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan/70 font-bold mb-4">{caseStudy.label}</p>
                <h3 className="text-2xl font-heading font-bold text-white mb-6 group-hover:text-cyan transition-colors">{caseStudy.title}</h3>
                <p className="text-gray-500 font-medium">Parceiro: {caseStudy.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 bg-cyan text-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tight">
            Pronto para escalar seu FIDC sem inflar operação?
          </h2>
          <p className="text-black/70 text-xl md:text-2xl mb-12 font-medium">
            Transforme elegibilidade, conciliação e monitoramento em uma vantagem competitiva injusta.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-black text-white px-12 py-6 rounded-sm font-bold text-xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3">
              Agendar demonstração <ArrowRight />
            </button>
          </div>
          <p className="mt-12 text-black/40 font-bold uppercase tracking-widest text-sm">
            “Transforme sua operação de crédito em uma vantagem competitiva injusta.”
          </p>
        </div>
        {/* Abstract Background for CTA */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] border-[50px] border-black rounded-full"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
              Infraestrutura de dados agêntica para o mercado de capitais. Precisão, escala e transparência total para gestores.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Produto</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-cyan">Esteira de Crédito</a></li>
                <li><a href="#" className="hover:text-cyan">Reconciliação</a></li>
                <li><a href="#" className="hover:text-cyan">Monitoramento</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Compliance</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-cyan">Resolução 175</a></li>
                <li><a href="#" className="hover:text-cyan">LGPD</a></li>
                <li><a href="#" className="hover:text-cyan">Auditabilidade</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Contato</h4>
              <p className="text-gray-500 text-sm mb-4">contato@brikz.com</p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan cursor-pointer transition-colors">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan cursor-pointer transition-colors">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs">© 2025 brikz. Todos os direitos reservados.</p>
          <div className="flex gap-8 text-gray-600 text-xs">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
