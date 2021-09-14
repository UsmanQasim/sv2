import React from "react";

import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import routes from "./components/routes";

import Navbar from "./components/navbar/Nav";
import notFound from "./components/pages/Page404";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Switch>
          <Navbar />
          <Switch>
            {routes.map(({ destination, page }, key) => (
              <Route path={destination} component={page} key={key} exact />
            ))}
            <Redirect to="/notFound" component={notFound} />
          </Switch>
        </Switch>
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default App;
