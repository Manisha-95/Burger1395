import React, { Component } from "react";

import Layout from "./component/Layout/Layout";
import "./styles.css";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
