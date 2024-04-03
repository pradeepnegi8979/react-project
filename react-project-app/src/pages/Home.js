import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Container, Row, Col } from "react-bootstrap";
function Home() {
  return (
    <>
      <Header />
      <section className="homepage">
        <Container>
          <Row>
            <Col>Home Page</Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
export { Home };
