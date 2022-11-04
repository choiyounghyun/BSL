import React from "react";
import "./BrandCard.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DummyImg from "../assets/images/dummy-img.png";

function BrandCard(props) {
  return (
    <div id="brand-card">
      <div className="card-list">
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={DummyImg} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default BrandCard;
