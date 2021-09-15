import React from "react";

import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import routes from "./components/routes";

import Navbar from "./components/navbar/Nav";
import notFound from "./components/pages/Page404";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/notfound" component={notFound} />
          <Route>
            <Navbar />
            <Switch>
              {routes.map(({ destination, page }, key) => (
                <Route path={destination} component={page} key={key} exact />
              ))}
              <Redirect to="/notFound" component={notFound} />
            </Switch>
          </Route>
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
