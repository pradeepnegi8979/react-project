import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import { blog } from "../data/blog";
function Blog() {
  return (
    <>
      <Header />
      <section>
        <Container>
          <Row>
            {blog.map((v, i) => {
              return <Bloglisting Bloglist={v} key={i} />;
            })}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
export { Blog };

function Bloglisting({ Bloglist }) {
  console.log(Bloglist);
  return (
    <Col lg="3 mb-4">
      <Card className="h-100">
        <Card.Body>
          <Card.Title>{Bloglist.title}</Card.Title>
          <Card.Text>{Bloglist.body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
