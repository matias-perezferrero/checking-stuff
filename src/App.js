import React, { Component } from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ducks/store";
import Nav from "./components/Nav/Nav";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            {routes}
            <Nav location={this.props.location} />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
