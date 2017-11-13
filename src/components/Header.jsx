import React from 'react';

const headerStyle = {
  padding: 10,
  paddingTop: 0,
  marginBottom: 10,
  backgroundColor: '#F0F0F0',
  width: '100%',
  textAlign: 'center',
  marginTop: -8, // offset the body's margin in a lazy fashion...
};

const headerInsideStyle = {
  display: 'inline-block',
};

export default () => <div style={headerStyle}>
  <div style={headerInsideStyle}>
    <h1>Higher Order Components Presentation</h1>
    <h2>Robert Balicki</h2>
    <div>
      <a href="https://docs.google.com/presentation/d/1YIDVbovuDpMepMTG5YZF8jxRVwCwDGA2g2UZB2HCJ68/edit?usp=sharing">Link to presentation</a>
      &nbsp;❖&nbsp;
      <a href="https://github.com/rbalicki2/pres-hoc">Repository</a>
    </div>
  </div>
</div>;
