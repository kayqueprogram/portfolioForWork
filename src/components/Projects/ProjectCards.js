import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsZoomIn } from "react-icons/bs";

function ProjectCards(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="project-card-view h-100 d-flex flex-column shadow-sm">
        {/* Imagem clicável com efeito de zoom no hover */}
        <div 
          style={{ height: "200px", overflow: "hidden", cursor: "pointer", position: "relative" }} 
          onClick={handleShow}
          className="img-container"
        >
          <Card.Img 
            variant="top" 
            src={props.imgPath} 
            alt="card-img" 
            style={{ height: "100%", objectFit: "cover" }} 
          />
          <div className="img-overlay d-flex align-items-center justify-content-center">
             <BsZoomIn size={30} color="white" />
          </div>
        </div>
        
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold" onClick={handleShow} style={{ cursor: "pointer" }}>
            {props.title}
          </Card.Title>
          
          <Card.Text style={{ textAlign: "justify" }} className="flex-grow-1 text-muted">
            {props.description.length > 150 
              ? `${props.description.substring(0, 150)}...` 
              : props.description}
          </Card.Text>

          <div className="mt-auto pt-3 d-flex flex-wrap gap-2">
            {props.ghLink && (
              <Button variant="primary" href={props.ghLink} target="_blank" className="d-flex align-items-center">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            )}

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                className="d-flex align-items-center"
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* Modal para Visualização Expandida */}
      <Modal show={show} onHide={handleClose} size="lg" centered contentClassName="project-modal-content">
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold purple">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
            src={props.imgPath} 
            alt={props.title} 
            className="img-fluid rounded shadow-sm mb-3" 
            style={{ width: "100%", maxHeight: "500px", objectFit: "contain", backgroundColor: "#1a1a1a" }} 
          />
          <h5 className="mb-3 mt-4 fw-bold">Sobre o Projeto</h5>
          <p style={{ textAlign: "justify", color: "#ddd" }}>{props.description}</p>
          
          {props.tags && (
            <div className="mt-3">
              {props.tags.map((tag, index) => (
                <span key={index} className="badge badge-purple me-2">{tag}</span>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCards;