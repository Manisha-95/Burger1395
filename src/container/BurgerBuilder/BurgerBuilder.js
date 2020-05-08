import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../component/Burger/Burger";
import Buildcontrols from "../../component/Burger/Buildcontrols/Buildcontrols";
import Modal from "../../component/Burger/UI/Modal/Modal";
import OrderSummary from "../../component/OrderSummary/OrderSummary/OrderSummary";

const ING_PRICE = {
  salad: 1,
  meat: 2,
  cheese: 4,
  bacon: 2.5
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  updatePurchasestate = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  addHandler = item => {
    const old = this.state.ingredients[item];
    const updatedcount = old + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[item] = updatedcount;

    const priceAdd = ING_PRICE[item];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + priceAdd;

    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchasestate(updatedIngredients);
  };
  subHandler = item => {
    const subold = this.state.ingredients[item];
    const subupdatecount = subold - 1;
    const subupdatedIngredients = {
      ...this.state.ingredients
    };
    subupdatedIngredients[item] = subupdatecount;
    const subpriceAdd = ING_PRICE[item];
    const suboldPrice = this.state.totalPrice;
    const subupdatedPrice = suboldPrice - subpriceAdd;

    this.setState({
      totalPrice: subupdatedPrice,
      ingredients: subupdatedIngredients
    });
    this.updatePurchasestate(subupdatedIngredients);
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancel = () => {
    this.setState({ purchasing: false });
  };
  purchasecontinue = () => {
    alert("You can continue");
  };
  render() {
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancel}>
          <OrderSummary
            purchasecancelled={this.purchaseCancel}
            purchasecontinued={this.purchasecontinue}
            ingr={this.state.ingredients}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger type={this.state.ingredients} />
        <Buildcontrols
          type={this.state.ingredients}
          add={this.addHandler}
          sub={this.subHandler}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
