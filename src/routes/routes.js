//---------------------------
//File: routes.js
//Author: Paulo Bertotti
//Date: 27/07/2021
//Brief: Live roadmap route module
//---------------------------

import { Route, Switch, Redirect } from "react-router-dom";
import { Menu } from "../components";
import routeConfig from "./config";

//---------------------------
const PublicRoute = ({ component: Component }) => {
  return (
    <Route
      render={props => (
        <Menu routes={routeConfig.routes}>
          <Component />
        </Menu>
      )}
    />
  );
};
//---------------------------

//---------------------------
const Routes = () => {
  return (
    <Switch>
      <PublicRoute
        exact
        path="/"
        component={props => (
          <Redirect to={routeConfig.settings.defaultPublicRoute} />
        )}
      />

      {routeConfig.routes.map((route, index) => (
        <PublicRoute
          exact
          key={index}
          path={route.path}
          component={route.screen}
        />
      ))}

      <Route path="/404" render={() => <h1> 404 Page Not Found </h1>} />
      <Route render={() => <Redirect to="/404" />} />
    </Switch>
  );
};
//---------------------------

//---------------------------
export default Routes;
//---------------------------
