import "./App.css";

import GetUsers from "./Components/GetUsers";
import Form from "./Components/Form";
// import { Switch, Route } from "react-router-dom";

import { Router, Route, Switch, useHistory, create } from "react-router-dom";
import { createBrowserHistory } from "history";
import React from "react";

const history = createBrowserHistory();

function App() {
  return (
    // <Router history={history}>
    <Switch>
      <Route path="/" exact component={GetUsers} />
      <Route path="/detail" component={Form} />
    </Switch>
    // </Router>
    // <ApolloProvider client={client}>
    //   {" "}
    //   <GetUsers />
    //   {/* <Form /> */}
    //   {/* <Routes>
    //     <Route path="/" element={<GetUsers />} />
    //     <Route path="/create" element={<Form />} />
    //   </Routes> */}
    // </ApolloProvider>
  );
}

export default App;
