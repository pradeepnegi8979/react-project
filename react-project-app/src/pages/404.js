import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Container, Row } from "react-bootstrap";
function Error404() {
  return (
    <>
      <Header />
      <section>
        <Container>
          <Row>
            <h2>Error 404</h2>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
export { Error404 };
