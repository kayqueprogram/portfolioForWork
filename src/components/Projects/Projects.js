import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/img2.png";
import osgestor from "../../Assets/Projects/OSGESTOR.jpg";
import editor from "../../Assets/Projects/img1.png";
import chatify from "../../Assets/Projects/img1.jpeg";
import bitsOfCode from "../../Assets/Projects/img2.jpeg";
import lifeQuest from "../../Assets/Projects/Lifequest.png";
import uploadIA from "../../Assets/Projects/upload_ia.png";
import databridge from "../../Assets/Projects/databridge.png";
import discordBot from "../../Assets/Projects/discord_bot.png";
import financeManager from "../../Assets/Projects/finance_manager.png";
import autovagas from "../../Assets/Projects/autovagas.png";
import safecircle from "../../Assets/Projects/safecircle.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus trabalhos <strong className="purple">recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Explorando soluções robustas e interfaces intuitivas em projetos reais.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={autovagas}
              isBlog={false}
              title="AutoVagas: Automated Job Hunt"
              description="Sistema de busca automatizada de vagas utilizando Elixir e Phoenix Framework. Utiliza concorrência de alta performance para monitorar plataformas como LinkedIn, Gupy e Indeed, enviando notificações instantâneas via WhatsApp/Telegram para novas oportunidades."
              ghLink="https://github.com/kayqueprogram/AutoVagas"
              tags={["Elixir", "Phoenix", "Concurrency", "Web Scraping"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={safecircle}
              isBlog={false}
              title="SafeCircle: Smart Tracking"
              description="Plataforma avançada de segurança e monitoramento para proteção familiar. Utiliza geolocalização de alta precisão em tempo real, fornecendo alertas instantâneos e um painel de controle intuitivo com estética Glassmorphism para acompanhamento de dependentes."
              ghLink="https://github.com/kayqueprogram/Safe-Kids"
              demoLink="https://antisequestro.vercel.app/"
              tags={["Next.js", "Tailwind CSS", "Geolocation API", "Real-time"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Entre Mundos: Visual Novel"
              description="Desenvolvimento de um jogo interativo multiplataforma utilizando a Engine Ren'Py (Python-based). Otimizado para alta performance e portabilidade, abrangendo distribuições Linux, Windows e ecossistemas Android."
              ghLink="https://github.com/kayqueprogram/Entre-Mundos-Project---Game"
              tags={["Python", "Ren'Py", "Multiplataforma"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Entre Mundos: Web Experience"
              description="Landing page de alto desempenho desenvolvida com Next.js 13 e Tailwind CSS. Focada em SEO, design responsivo e fluidez visual, servindo como o hub oficial de marketing para o game."
              ghLink="https://github.com/kayqueprogram/Entre-Mundos-Project---Site"
              demoLink="https://entremundosgame.vercel.app/"
              tags={["Next.js", "Tailwind CSS", "SEO"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portal Educacional Omar Donato"
              description="Plataforma institucional robusta construída com React e TypeScript. Implementa arquitetura moderna e prioriza a inclusão social através de acessibilidade nativa em Libras (VLibras)."
              ghLink="https://github.com/kayqueprogram/website-school-reformuled"
              demoLink="https://omardonatobassani.vercel.app/"
              tags={["React", "TypeScript", "Styled-Components"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ABBA Logistics: Web Presence"
              description="Solução corporativa para o setor logístico utilizando ReactJS e Argon Design System. Entrega uma interface moderna, gestão de identidade visual e foco total em UI/UX para conversão de novos parceiros."
              ghLink="https://github.com/kayqueprogram/abbalogistcs"
              demoLink="https://abbalogistcs.vercel.app/"
              tags={["React", "Argon Design", "UI/UX"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={osgestor}
              isBlog={false}
              title="FKS Logistics: OS GESTOR"
              description="ERP focado em gestão de ativos críticos e manutenção preventiva. Desenvolvido com Next.js, TypeScript e Firebase para persistência em tempo real, automatizando o controle de estoque e ciclos de manutenção industrial."
              ghLink="#"
              tags={["Next.js", "Firebase", "TypeScript", "Tailwind"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={uploadIA}
              isBlog={false}
              title="Upload.ai: IA Video Optimizer"
              description="Plataforma de inteligência artificial que automatiza a criação de títulos, descrições e transcrições para vídeos do YouTube. Utiliza a API da OpenAI (GPT-3.5/4) e processamento local de áudio para entregar resultados otimizados para SEO."
              ghLink="https://github.com/kayqueprogram/upload-ai-api"
              tags={["Next.js", "OpenAI API", "Prisma", "Tailwind"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={databridge}
              isBlog={false}
              title="DataBridge: Cloud Sync"
              description="Ferramenta de sincronização de dados de alta performance entre Firebase Firestore e bancos de dados MySQL. Desenvolvida em Python com SQLModel para garantir a integridade dos dados e automação de backups em tempo real."
              ghLink="https://github.com/kayqueprogram/DataBridge-"
              tags={["Python", "Firebase", "MySQL", "SQLModel"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={discordBot}
              isBlog={false}
              title="Discord Study Bot"
              description="Um assistente inteligente para servidores de estudo no Discord. Implementa comandos de Pomodoro, organização de cronogramas e integração com APIs de busca, ajudando estudantes a manterem o foco e produtividade."
              ghLink="https://github.com/kayqueprogram/Discord-Bot-Full-Study"
              tags={["JavaScript", "Discord.js", "Node.js"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={financeManager}
              isBlog={false}
              title="Finance Manager Pro"
              description="Sistema de gestão financeira pessoal com visualização de dados dinâmica. Permite o controle rigoroso de despesas e receitas, gerando relatórios gráficos e insights sobre hábitos de consumo para auxiliar na saúde financeira."
              ghLink="https://github.com/kayqueprogram/Gerenciamento-de-Financas"
              tags={["Python", "SQLite", "Matplotlib", "SQLModel"]}
            />
          </Col>

          <Col md={4} className="project-card d-flex align-items-stretch mb-4">
            <ProjectCard
              imgPath={lifeQuest}
              isBlog={false}
              title="LifeQuest: Personal Hub"
              description="Plataforma holística de produtividade que integra gestão financeira, organização de tarefas e um sistema de comunidade. Focada em transformar a rotina em uma jornada gamificada, permitindo o acompanhamento de metas pessoais com suporte social."
              demoLink="https://lifequesthub.vercel.app/"
              tags={["Next.js", "Firebase", "Context API", "Tailwind"]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;