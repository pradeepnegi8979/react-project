import React from "react";
function Categories({ finalCategory, setcatName }) {
  let cat = finalCategory.map((v, i) => {
    return (
      <li key={i} onClick={() => setcatName(v)}>
        {v}
      </li>
    );
  });

  return (
    <div className="categorySection">
      <h2>Product Category</h2>
      <ul>{cat}</ul>
    </div>
  );
}
export { Categories };
