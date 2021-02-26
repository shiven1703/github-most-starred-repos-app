import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import NotFoundPage from "./Pages/Error";

function routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/About" exact component={AboutPage}></Route>
      <Route component={NotFoundPage}></Route>
    </Switch>
  );
}

export default routes;
