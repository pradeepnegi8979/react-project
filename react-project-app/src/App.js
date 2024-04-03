import { Header } from "./common/Header";
import { Footer } from "./common/Footer";
import { Faqs } from "./Faqs";
import { Modal } from "./Modal";
import { Tabs } from "./Tabs";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import { blog } from "./data/blog";
import { Testimonial } from "./Testimonial";
import { Todo } from "./Todo";
function App() {
  return (
    <div className="Main">
      <Header />
      <section className="product-section">
        <Container>
          <Row>
            {blog.map((v, i) => {
              return <ProductItem pitems={v} key={i} />;
            })}
          </Row>
        </Container>
      </section>
      <section className="testimonial-section">
        <Container>
          <Row>
            <Testimonial />
          </Row>
        </Container>
      </section>
      <Modal />
      <Faqs />
      <Todo />
      <Tabs />
      <Footer />
    </div>
  );
}
export default App;
function ProductItem({ pitems }) {
  return (
    <Col lg="4 mb-4">
      <Card className="h-100">
        <Card.Body>
          <Card.Title>{pitems.title}</Card.Title>
          <Card.Text>{pitems.body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
