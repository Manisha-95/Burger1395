import React, { Component } from "react";

import "./Buildcontrols.css";
import Buildcontrol from "../Buildcontrol/Buildcontrol";

class Buildcontrols extends Component {
  controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
  ];

  render() {
    return (
      <div className="Buildcontrols">
        Current items:{this.props.price}
        {this.controls.map(ctrl => (
          <Buildcontrol
            key={ctrl.label}
            label={ctrl.label}
            onAdd={() => this.props.add(ctrl.type)}
            onSub={() => this.props.sub(ctrl.type)}
            ing={this.props.type}
            typ={ctrl.type}
          />
        ))}
        <button
          disabled={!this.props.purchasable}
          onClick={this.props.ordered}
          className="OrderButton"
        >
          Order Now
        </button>
      </div>
    );
  }
}

export default Buildcontrols;
