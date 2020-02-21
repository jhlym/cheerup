import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const MainPage = React.lazy(() => import("./pages/MainPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
