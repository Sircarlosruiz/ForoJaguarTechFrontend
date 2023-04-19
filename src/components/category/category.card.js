import React from "react";

import "./category.styles.scss";

const CategoryCard = ({ categories }) => {
  console.log("====================================");
  console.log(categories);
  console.log("====================================");

  const { name, URL } = categories;

  return (
    <section className="category-card">
      <div className="name-categorie">{name}</div>
      <img src={URL} alt={name} className="CategoryImage" />
    </section>
  );
};

export default CategoryCard;
