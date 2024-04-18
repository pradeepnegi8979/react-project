import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Categories } from "../Categories";
import { Header } from "../common/Header";
function Clothing() {
  let [finalCategory, setfinalCategory] = useState([]);
  let [finalProduct, setFinalProduct] = useState([]);
  let [catName, setcatName] = useState("");
  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalResponse) => {
        setfinalCategory(finalResponse);
      });
  };
  let getProduct = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((proRes) => proRes.data)
      .then((finalProResponse) => {
        setFinalProduct(finalProResponse.products, "product lists");
      });
  };
  useEffect(() => {
    getCategory();
    getProduct();
  }, []);
  useEffect(() => {
    if (catName !== "") {
      axios
        .get(`https://dummyjson.com/products/category/${catName}`)
        .then((proRes) => proRes.data)
        .then((finalProResponse) => {
          setFinalProduct(finalProResponse.products, "product lists");
        });
    }
  }, [catName]);

  let productItem = finalProduct.map((products, index) => {
    return <ProuctItems key={index} pdata={products} />;
  });
  return (
    <>
      <Header />
      <section className="cloathingSec">
        <Container>
          <Row>
            <Col md="3">
              <Categories
                finalCategory={finalCategory}
                setcatName={setcatName}
              />
            </Col>
            <Col md="8">
              <div className="itemGrid">
                {finalProduct.length >= 1 ? productItem : "No products found"}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export { Clothing };
function ProuctItems({ pdata }) {
  // console.log(pdata);
  return (
    <div className="item">
      <img src={pdata.thumbnail} className="img-fluid" alt="" />
      <h4>{pdata.title}</h4>
      <h5>{pdata.price}</h5>
    </div>
  );
}
