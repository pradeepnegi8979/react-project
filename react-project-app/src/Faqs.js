import React, { useState } from "react";
import { faqans } from "./data/faqdata.js";

import { Container, Row } from "react-bootstrap";
function Faqs() {
  let [showAns, setShowAns] = useState(faqans[0].id);
  return (
    <section className="faqSection">
      <Container>
        <Row>
          <div className="heading">FAQ's</div>
          <div className="faqOuter">
            {faqans.map((faqList, i) => {
              return (
                <div className="faqItems" key={i}>
                  <div
                    className={`faqHeading ${
                      showAns === faqList.id ? "boxOpen" : "boxClose"
                    }`}
                    onClick={() => setShowAns(faqList.id)}
                  >
                    <h2>
                      <span>{faqList.id}</span>
                      {faqList.name}
                    </h2>
                  </div>
                  <div
                    className={`faqDiscription ${
                      showAns === faqList.id ? "faqShow" : ""
                    }`}
                  >
                    {faqList.body}
                  </div>
                </div>
              );
            })}
          </div>
        </Row>
      </Container>
    </section>
  );
}
export { Faqs };
