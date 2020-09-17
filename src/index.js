import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {getAuthToken} from './api/authentication';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import * as History from 'history';
import createStore from './reducks/store/store';
import { ConnectedRouter } from 'connected-react-router';

const accessToken = getAuthToken()
const history = History.createBrowserHistory();
export const store = createStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <div>
          <Route exact path="/">
            <Redirect to={'/app'}/>
          </Route>
          <Route exact path="/app">
            <App token={accessToken}/>
          </Route>
        </div>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
