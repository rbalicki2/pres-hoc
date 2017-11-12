import React from 'react';

import BoundingRectProvider from 'src/components/BoundingRectProvider';
import WindowSizeScrollProvider from 'src/components/WindowSizeScrollProvider';

const isOnScreen = (w, br) => true;

export default ({ children }) => <WindowSizeScrollProvider>{({ w }) =>
  <BoundingRectProvider>{({ br }) =>
    children(isOnScreen(w, br))
  }</BoundingRectProvider>
}</WindowSizeScrollProvider>;
