import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
					<Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    </div>
  );
};

render(<Root />, document.getElementById("root"));
