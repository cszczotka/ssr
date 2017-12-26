import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import reducers from './reducers';
import PageTemplate from './components/PageTemplate';
import App from './components/App';

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('*', async (req, res) => {
  const scripts = ['vendor.js', 'client.js'];
  const initialState = { initialText: 'rendered on the server' };
  const store = createStore(reducers, initialState);
  const context = {};

  const appMarkup = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App {...initialState} />
      </StaticRouter>
    </Provider>
  );

  const html = ReactDOMServer.renderToStaticMarkup(
    <PageTemplate children={appMarkup} scripts={scripts} initialState={initialState} />
  );

  res.send(`<!doctype html>${html}`);
});

app.listen(3100, () => console.log('Listening on localhost:3100'));
