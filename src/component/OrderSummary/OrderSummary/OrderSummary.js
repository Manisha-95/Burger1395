import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../Burger/UI/Button/button";

const OrderSummary = props => {
  let ingredientlist = Object.keys(props.ingr).map(igKey => {
    return (
      <li key={igKey}>
        <span>{igKey}</span>:{props.ingr[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <div>A Delicious Burger with following items:</div>
      {ingredientlist}
      <p>
        <strong>Total Price:</strong>
        {props.price}
      </p>
      <p>Want to checkout?</p>
      <Button onClick={props.purchasecancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button onClick={props.purchasecontinued} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
