import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá pessoal! Meu nome é <span className="purple">Kayque de Jesus, </span>
             sou de <span className="purple"> São Bernardo do Campo, Brasil.</span>
            <br />
            Atualmente, busco uma oportunidade para trabalhar novamente em minha área, como desenvolvedor Full Stack
            <br />
            Eu faço Bacharelado em Ciência da Computação na Universidade Anhanguera
            <br />
            <br />
            Além de codar, existem outras coisas que amo fazer
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Estudar sobre desenvolvimento de games
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprender novos idiomas
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprimorar minha comunicação
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Você pode encarar um erro como uma besteira a ser esquecida ou como um resultado que aponta uma nova direção."{" "}
          </p>
          <footer className="blockquote-footer">Kayque</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
