import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Container, Row, Col } from "react-bootstrap";
function Services() {
  return (
    <>
      <Header />
      <section className="servicesSection">
        <Container>
          <Row>
            <Col md="12">services page</Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
export { Services };
