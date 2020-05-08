import React from "react";

import "./Navigationitems.css";
import NavigationItem from "./Navigationitem/Navigationitem";

const navigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
