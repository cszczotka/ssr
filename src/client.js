import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import App from './components/App';

/*
ReactDOM.render(
<App initialText="rendered on the client side!" />,
    document.getElementById('app')
);
*/

const store = createStore(reducers, { ...window.MY_STATE });

/*ReactDOM.hydrate(
  <App {...window.MY_STATE} />, document.getElementById('app')
);
*/

/*ReactDOM.hydrate(
  <Provider store={store}>
    <Home {...window.APP_STATE} />
  </Provider>,
  document.getElementById('app'));
*/

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App {...window.MY_STATE} />
    </BrowserRouter>
  </Provider>, document.getElementById('app')
);
