import React from "react";
import "./Burger.css";
import BurgerIngredient from "./Burgeringredient/Burgeringredient";

const burger = props => {
  let transform = Object.keys(props.type)
    .map(igkey => {
      return [...Array(props.type[igkey])].map((_, i) => (
        <BurgerIngredient key={igkey + i} type={igkey} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    });
  if (transform.length === 0) {
    transform = <p>Please add the ingredients.</p>;
  }
  console.log(transform);

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transform}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
