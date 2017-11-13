import React from 'react';
import Header from 'src/components/Header';

const imageContainerStyle = {
  width: '100vw',
};

export default ({ children }) => <div>
  <Header />  
  <div style={imageContainerStyle}>
    { children }
  </div>
</div>;
