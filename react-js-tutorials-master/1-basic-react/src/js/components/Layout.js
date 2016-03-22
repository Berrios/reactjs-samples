import React from "react";

import Footer from "./Footer";
import Header from "./Header";

/** the core of react is that everything is a componenet **/

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome!",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {  /** jsx must have a render function at minimum. **/
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer /> /** to render a componenet use it as an html tag **/
      </div>
    );
  }
}
