import React from 'react';

import WindowSizeScrollProvider from 'src/components/WindowSizeScrollProvider';

const isOnScreen = (w, br) => {
  if (!w || !br) {
    return false;
  }

  const isOnScreenY = !(br.top > w.innerHeight || br.bottom < 0);
  // in reality, we would do the same for the isOnScreenX, but for
  // this demo, it doesn't matter.
  console.log(isOnScreenY);
  return isOnScreenY;
};

export default ({ children }) => <WindowSizeScrollProvider>{({ w, br }) =>
  children(isOnScreen(w, br))
}</WindowSizeScrollProvider>;
