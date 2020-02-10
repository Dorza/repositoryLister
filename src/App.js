import React from "react";
import "./sass/styles.scss";
import { NavBar } from "./components/3.organisms";
import { Repositories, Organisations } from "./components/4.ecosystems";
import { ToastProvider } from 'react-toast-notifications'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {

  return (
      <ToastProvider placement="bottom-right">
        <Router>
          <NavBar />
          <div className="c-container">
            <main>
                <Switch>
                  <Route path="/" exact component={Repositories} />    
                  <Route path="/repositories" component={Repositories} />        
                  <Route path="/organisations" component={Organisations} />
                </Switch>
            </main>
          </div>
        </Router>
      </ToastProvider>
  );
}
