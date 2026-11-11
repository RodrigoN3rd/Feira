import Link from 'next/link';
import { whatsappLabel, whatsappUrl } from '@/content/contact';

export const metadata = { title: 'Inscrições e WhatsApp | Feira Alternativa' };

export default function Inscricao() {
  return (
    <main className="shell section registration">
      <Link href="/" className="button button-ghost">← Voltar à feira</Link>
      <p className="section-label mono">{'FEIRANTES // CANAL DE INSCRIÇÕES'}</p>
      <h1>FAÇA PARTE<br /><span>DO RUÍDO.</span></h1>
      <p className="status-pill">INSCRIÇÕES FORMAIS AINDA NÃO ABERTAS</p>
      <p>Converse com a organização pelo WhatsApp para saber como participar. O projeto está em planejamento: local, datas e regras definitivas ainda dependem de confirmação.</p>
      <ol>
        <li>Leia a minuta do edital: vagas, critérios de seleção e taxas por edição.</li>
        <li>Abra a conversa no WhatsApp. Uma mensagem de interesse estará pronta para você revisar.</li>
        <li>Envie a mensagem no aplicativo e aguarde orientação da organização.</li>
      </ol>
      <div className="hero-actions">
        <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conversar sobre inscrição ↗</a>
        <a className="button button-ghost" href="/editais/edital-feirantes-minuta.pdf" download>Baixar edital · PDF ↓</a>
      </div>
      <p className="mono">WhatsApp: {whatsappLabel}</p>
      <h2>Antes de enviar</h2>
      <p>A inscrição no processo seletivo é gratuita. Enviar uma mensagem de interesse não constitui inscrição formal, seleção ou reserva de vaga. Não há cobrança nesta etapa.</p>
      <p>O site não coleta nem armazena seus dados. Ao abrir o WhatsApp, você utilizará um serviço externo; seu número e as informações que decidir enviar ficarão disponíveis ao destinatário e sujeitos às condições do serviço. Não envie documentos pessoais ou dados sensíveis neste contato inicial.</p>
      <p>Se o link não abrir, confira o número acima no aplicativo. Nenhuma mensagem é enviada automaticamente.</p>
    </main>
  );
}
