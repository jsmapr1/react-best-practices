import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import Small from './components/Small/Small';
import Photo from './components/Photo/Photo';
import PhotoWithActiveRatings from './components/PhotoWithActiveRatings/PhotoWithActiveRatings'
import PhotoWithActiveRatingsState from './components/PhotoWithActiveRatingsState/PhotoWithActiveRatingsState'
import PhotoWithHigherOrderComponent from './components/PhotoWithHigherOrderComponent/PhotoWithHigherOrderComponent';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li> <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/small">Small</Link></li>
              <li><Link to="/refactor">Refactor</Link></li>
              <li><Link to="/external-state">External State</Link></li>
              <li><Link to="/local-state">Local State</Link></li>
              <li><Link to="/hoc">Inject</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/small" component={Small}/>
            <Route path="/refactor" component={Photo}/>
            <Route path="/external-state" component={PhotoWithActiveRatings}/>
            <Route path="/local-state" component={PhotoWithActiveRatingsState}/>
            <Route path="/hoc" component={PhotoWithHigherOrderComponent}/>
            <Route path="/active" component={Topics}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
