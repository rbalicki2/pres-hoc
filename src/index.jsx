import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import Main from 'src/components/Main';

const renderApp = () => render(
  <AppContainer><Main /></AppContainer>,
  document.getElementById('app')
);

renderApp();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
}
