import React from "react";
import { useState } from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
function Modal() {
  let [modalstatus, setModalStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      mobile: "",
    });
  };
  return (
    <section>
      <Container>
        <button className="en" onClick={() => setModalStatus(!modalstatus)}>
          {" "}
          Enquiry Now{" "}
        </button>
        <div className={`modalOverlay ${modalstatus ? "modalshow" : ""} `}>
          <div className={`modalDiv ${modalstatus ? "showModalDiv" : ""} `}>
            <Col lg="12">
              <button
                className="closeBtn"
                onClick={() => setModalStatus(!modalstatus)}
              >
                &times;
              </button>
              <Form onSubmit={handleForm}>
                <Form.Group className="mb-3 formGroup">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3 formGroup">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3 formGroup">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="tel"
                    name="mobile"
                    placeholder="Phone"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className=" formGroup">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </div>
        </div>
      </Container>
    </section>
  );
}
export { Modal };
