import Link from 'next/link';
import { whatsappLabel, whatsappUrl } from '@/content/contact';

const prices = [
  { label: 'Artistas independentes', short: 'ARTISTAS', price: 'R$ 50', accent: 'purple' },
  { label: 'Brechós', short: 'BRECHÓS', price: 'R$ 75', accent: 'paper' },
  { label: 'Lojas', short: 'LOJAS', price: 'R$ 89', accent: 'red' },
  { label: 'Alimentação e bebidas não alcoólicas', short: 'ALIMENTAÇÃO', price: 'R$ 100', accent: 'purple' },
];

const milestones = [
  { number: '01', title: 'Proposta e minutas', status: 'CONCLUÍDO', tone: 'done', detail: 'Documentos iniciais produzidos.' },
  { number: '02', title: 'Articulação institucional', status: 'PLANEJADO', tone: 'planned', detail: 'Contato e responsável ainda a definir.' },
  { number: '03', title: 'Local e regularização', status: 'A CONFIRMAR', tone: 'wait', detail: 'Sem local ou datas confirmados.' },
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="site-header shell" id="topo">
        <a className="wordmark" href="#topo" aria-label="Feira Alternativa, início">
          <span>FEIRA</span><span className="wordmark-slash">/</span><span>ALTERNATIVA</span>
          <small>MONTES CLAROS — MG</small>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#manifesto">Manifesto</a>
          <a href="#feirantes">Feirantes</a>
          <a href="#progresso">Progresso</a>
          <a href="#editais">Editais</a>
          <Link href="/feirantes/inscricao">Inscrições</Link>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Abrir menu">MENU <span aria-hidden="true">+</span></summary>
          <nav aria-label="Navegação móvel">
            <a href="#manifesto">Manifesto</a>
            <a href="#feirantes">Feirantes</a>
            <a href="#progresso">Progresso</a>
            <a href="#editais">Editais</a>
            <Link href="/feirantes/inscricao">Inscrições</Link>
          </nav>
        </details>
      </header>

      <div className="topline shell" aria-label="Status do projeto">
        <span>STATUS // EM PLANEJAMENTO</span>
        <span className="topline-rule" aria-hidden="true" />
        <span>DOCUMENTOS EM MINUTA</span>
      </div>

      <div id="conteudo">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-kicker mono">{'MODO: CONSTRUÇÃO PÚBLICA'} <span className="cursor-block" /></div>
          <div className="hero-stamp">MOC<br /><span>MG / 2027</span></div>
          <div className="hero-copy">
            <p className="eyebrow">CULTURA INDEPENDENTE // MONTES CLAROS</p>
            <h1 id="hero-title">A CIDADE<br /><em>TAMBÉM É</em><br />NOSSA.</h1>
            <p className="hero-lede">Um encontro em construção para quem cria, vende, toca, joga, se move e faz barulho.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#manifesto">Conheça o projeto <Arrow /></a>
              <a className="button button-ghost" href="#progresso">Ver o progresso <Arrow /></a>
            </div>
          </div>
          <div className="hero-note mono">A CULTURA NÃO PEDE LICENÇA<br /><span>EVENTOS PRECISAM DE AUTORIZAÇÃO</span></div>
          <div className="hero-index mono">[ FEIRA CONTÍNUA ]</div>
        </section>

        <div className="ticker" aria-label="Áreas da feira">
          <div className="ticker-track">
            <span>ARTE</span><b>✳</b><span>MÚSICA</span><b>✳</b><span>BRECHÓ</span><b>✳</b><span>GAMES</span><b>✳</b><span>SKATE</span><b>✳</b><span>CULTURA INDEPENDENTE</span><b>✳</b>
            <span aria-hidden="true">ARTE</span><b aria-hidden="true">✳</b><span aria-hidden="true">MÚSICA</span><b aria-hidden="true">✳</b><span aria-hidden="true">BRECHÓ</span><b aria-hidden="true">✳</b><span aria-hidden="true">GAMES</span><b aria-hidden="true">✳</b><span aria-hidden="true">SKATE</span><b aria-hidden="true">✳</b><span aria-hidden="true">CULTURA INDEPENDENTE</span>
          </div>
        </div>

        <section className="manifesto shell section" id="manifesto" aria-labelledby="manifesto-title">
          <div className="section-label mono">01 // MANIFESTO</div>
          <div className="manifesto-paper torn-edge">
            <p className="eyebrow dark">O UNDERGROUND TEM ENDEREÇO</p>
            <h2 id="manifesto-title">A rua não cabe<br /><span>num template.</span></h2>
            <p className="manifesto-text">A Feira Alternativa é uma proposta de encontro entre contracultura, economia criativa, música, arte independente, brechós, gastronomia e esportes urbanos de Montes Claros.</p>
            <p className="manifesto-text">Uma feira contínua, sem número fixo de edições. Entrada gratuita. Até 30 expositores por edição. Um espaço para circular ideias, produtos e presenças — com transparência sobre o que ainda precisa acontecer.</p>
            <a className="text-link dark-link" href="#feirantes">Entenda como participar <Arrow /></a>
          </div>
          <div className="manifesto-aside">
            <div className="sticker sticker-red">SEM<br />POSE</div>
            <p className="mono">A proposta é independente.<br />O processo é visível.<br />O futuro ainda está<br /><span>a confirmar.</span></p>
            <div className="ascii" aria-hidden="true">{'//__//'}<br />{'_//__//'}<br />{'//__//_'}</div>
          </div>
        </section>

        <section className="universes shell section" aria-labelledby="universes-title">
          <div className="section-label mono">02 // DOIS UNIVERSOS</div>
          <div className="section-heading-row">
            <h2 id="universes-title">O MESMO<br /><span>RUÍDO.</span></h2>
            <p>Programação artística e esportiva podem ocupar o mesmo pulso. A composição final depende de espaço, autorizações e condições reais.</p>
          </div>
          <div className="universe-grid">
            <article className="universe-card universe-art">
              <div className="universe-card-top mono"><span>FRENTE A</span><span>A CONFIRMAR</span></div>
              <div className="universe-symbol symbol-star" aria-hidden="true">✳</div>
              <h3>ARTE<br /><em>EM ALTA</em></h3>
              <p>Bandas, cosplay, games, exposições, publicações e tudo que nasce fora do molde.</p>
              <span className="card-number mono">{'// 01'}</span>
            </article>
            <article className="universe-card universe-sport">
              <div className="universe-card-top mono"><span>FRENTE B</span><span>A CONFIRMAR</span></div>
              <div className="universe-symbol symbol-cross" aria-hidden="true">+</div>
              <h3>CORPO<br /><em>EM JOGO</em></h3>
              <p>Skate, basquete, e-sports, música e cultura urbana em movimento.</p>
              <span className="card-number mono">{'// 02'}</span>
            </article>
          </div>
        </section>

        <section className="fees shell section" id="feirantes" aria-labelledby="fees-title">
          <div className="section-label mono">{'03 // PARA FEIRANTES'}</div>
          <div className="fees-heading">
            <h2 id="fees-title">FAÇA PARTE<br /><span>DO RUÍDO.</span></h2>
            <div className="fees-copy"><p>O processo seletivo é gratuito, com participação nas edições anunciadas e sem compromisso obrigatório com um ciclo. As taxas abaixo são por edição e só serão cobradas após seleção, autorização e confirmação das condições legais.</p><span className="status-pill">INSCRIÇÕES AINDA NÃO ABERTAS</span></div>
          </div>
          <div className="price-grid">
            {prices.map((item) => (
              <article className={`price-card price-${item.accent}`} key={item.label}>
                <div className="price-index mono">0{prices.indexOf(item) + 1}</div>
                <h3>{item.short}</h3>
                <p>{item.label}</p>
                <strong>{item.price}<small>/ edição</small></strong>
              </article>
            ))}
          </div>
          <div className="fees-foot"><span className="mono">ATÉ 30 EXPOSITORES / EDIÇÃO</span><span className="mono">FEIRA CONTÍNUA</span><span className="mono">ENTRADA GRATUITA</span></div>
          <div className="registration-callout">
            <h3>Seu trabalho tem lugar nessa conversa.</h3>
            <p>Acesse a área de inscrições para ler a minuta e conversar com a organização pelo WhatsApp. A seleção formal ainda não está aberta.</p>
            <Link className="button button-primary" href="/feirantes/inscricao">Área de inscrições ↗</Link>
          </div>
        </section>

        <section className="progress shell section" id="progresso" aria-labelledby="progress-title">
          <div className="section-label mono">04 // CONSTRUÇÃO PÚBLICA</div>
          <div className="progress-layout">
            <div>
              <h2 id="progress-title">AINDA<br /><span>EM OBRAS.</span></h2>
              <p className="progress-intro">O que já existe, o que está em movimento e o que ainda depende de confirmação. Sem barra de progresso inventada.</p>
              <a className="button button-ghost" href="#editais">Ver documentos-base <Arrow /></a>
            </div>
            <ol className="timeline">
              {milestones.map((milestone) => (
                <li className={`timeline-item timeline-${milestone.tone}`} key={milestone.number}>
                  <span className="timeline-number mono">{milestone.number}</span>
                  <div><div className="timeline-head"><h3>{milestone.title}</h3><span className="mono">{milestone.status}</span></div><p>{milestone.detail}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="documents shell section" id="editais" aria-labelledby="documents-title">
          <div className="section-label mono">05 // DOCUMENTOS</div>
          <div className="documents-heading"><h2 id="documents-title">LEIA<br /><span>AS MINUTAS.</span></h2><p>Transparência começa na fonte. Os documentos abaixo são os arquivos de referência do projeto e ainda passam por revisão.</p></div>
          <div className="document-list">
            <article className="document-row"><span className="doc-type mono">DOC / 001</span><div><h3>Edital comunitário de seleção de expositores</h3><p>MINUTA · Regras, critérios, vagas e taxas por edição.</p></div><a className="button button-ghost" href="/editais/edital-feirantes-minuta.pdf" download aria-label="Baixar edital de feirantes em PDF">PDF ↓</a></article>
            <article className="document-row"><span className="doc-type mono">DOC / 002</span><div><h3>Proposta institucional de apoio e parcerias</h3><p>MINUTA / PROPOSTA NÃO OFICIAL · Formas possíveis de colaboração.</p></div><a className="button button-ghost" href="/editais/edital-institucional-minuta.pdf" download aria-label="Baixar proposta institucional em PDF">PDF ↓</a></article>
          </div>
          <p className="documents-note mono">Textos integrais em PDF. Documentos em minuta, sujeitos à revisão e às condições de realização.</p>
        </section>
      </div>

      <footer className="site-footer">
        <div className="shell footer-top"><div className="footer-mark">FA<span>{'//'}</span></div><p>O underground tem endereço.<br /><strong>A cultura tem espaço.</strong></p><a className="button button-primary" href="#topo">Voltar ao topo <Arrow /></a></div>
        <div className="shell footer-bottom"><span className="mono">{'FEIRA ALTERNATIVA // MONTES CLAROS — MG'}</span><span className="mono">PROJETO EM PLANEJAMENTO · 2026</span><a className="mono" href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp: {whatsappLabel}</a></div>
      </footer>
    </main>
  );
}
