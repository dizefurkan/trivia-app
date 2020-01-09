import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Welcome from 'src/components/Welcome/index';
import Questions from 'src/components/Questions/index';
import './App.css';

const App: React.FC = () => {
  return (
  	<Router>
	    <Switch>
	      <Route path="/questions">
	      	<Questions />
	      </Route>
	      <Route path="/">
	        <Welcome />
	      </Route>
	    </Switch>
    </Router>
  );
}

export default App;
