import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="lg-3">
            <div className="gt_touch">
              <h5>Get in touch</h5>
              <p className="country_name">India</p>
              <p className="address">
                C-56, A/13, 8th Floor, Sector 62, Noida, Uttar Pradesh 201307.
                <br />
                India +91 837 395 2258
              </p>
            </div>
          </Col>
          <Col className="lg-3">2</Col>
          <Col className="lg-3">3</Col>
          <Col className="lg-3">4</Col>
        </Row>
      </Container>
    </footer>
  );
}
export { Footer };
