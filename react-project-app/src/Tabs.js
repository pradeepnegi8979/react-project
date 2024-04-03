import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { tabs } from "./data/tabs";
function Tabs() {
  let [activeTabs, setActiveTabs] = useState(0);
  let [activeContent, setActiveContent] = useState(tabs[0]);
  let changeData = (index) => {
    setActiveTabs(index);
    setActiveContent(tabs[index]);
  };
  return (
    <section className="tabsOuter">
      <Container>
        <Row>
          <Col md="12">
            <ul className="tabsList">
              {tabs.map((tabsItems, index) => {
                return (
                  <li>
                    <button
                      onClick={() => changeData(index)}
                      type="button"
                      className={activeTabs == index ? "activeBtn" : ""}
                    >
                      {tabsItems.title}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="contentData">
            {activeContent !== undefined ? (
              <p>{activeContent.discription}</p>
            ) : (
              ""
            )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export { Tabs };
