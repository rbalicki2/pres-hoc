import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import Routes from 'src/Routes';

const renderApp = () => render(
  <AppContainer><Routes /></AppContainer>,
  document.getElementById('app')
);

renderApp();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}
