import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import ResultInfo from './components/ResultInfo';
import VaccineForm from "./components/VaccineForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={VaccineForm} exact/>
        <Route path="/result" component={ResultInfo} />
      </Switch>
    </Router>
  );
}

export default App;
