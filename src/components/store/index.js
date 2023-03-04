// import React from 'react';
// import ReactDOM from 'react-Dom/client';
// import { Provider } from 'react-redux';

import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer} from './reducer'
// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// import Weather from '../route/Weather';
// import {Home} from './route/Home/Home';
// import reducer from './reducer';

 export const store = createStore(reducer, composeWithDevTools());

//  ReactDOM.render(
//  <Provider store={store}>
//    <Router>
//      <Switch>
//        <Route exact path="/" component={Home} />
//        <Route exact path={["${PATHS.WEATHER}/:city", "${PATHS.WEATHER}"]} component={Weather} />
//      </Switch>
//    </Router>
//  </Provider>,
//  document.getElementById('root')
// );
