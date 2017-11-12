import React from 'react';

const imageContainerStyle = {
  width: '100vw',
};

export default ({ children }) => <div style={imageContainerStyle}>
  { children }
</div>;
