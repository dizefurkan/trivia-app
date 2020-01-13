import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Welcome from 'src/pages/Welcome';
import Questions from 'src/pages/Questions';
import Score from 'src/pages/Score';
import './App.css';

declare global {
  interface Window {
    SETTINGS: any,
    SCORE: any,
  }
}

const initialValue = {
  diffuculty: 'easy',
  categoryId: 22
}

window.SETTINGS = {
  difficulty: initialValue.diffuculty,
  categoryId: initialValue.categoryId,
}
window.SCORE = [];

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/questions">
          <Questions />
        </Route>
        <Route path="/score">
          <Score />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
