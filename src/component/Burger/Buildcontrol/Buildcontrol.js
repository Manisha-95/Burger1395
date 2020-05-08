import React, { Component } from "react";
import "./Buildcontrol.css";

class Buildcontrol extends Component {
  render() {
    return (
      <div className="BuildControl">
        {this.props.label}
        <button
          disabled={this.props.ing[this.props.typ] === 0}
          onClick={this.props.onSub}
          className="Less"
        >
          Less
        </button>
        <button onClick={this.props.onAdd} className="More">
          More
        </button>
      </div>
    );
  }
}

export default Buildcontrol;
