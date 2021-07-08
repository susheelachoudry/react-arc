import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import { Login } from "./components/Login/Login";

const App = () => {
  const [token, setToken] = useState("");

  const temp = (data) => {
    setToken(data.token);
  };

  if (!token) {
    return <Login setToken={temp} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/preferences" component={Preferences} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
