import React from 'react';

const getImageSrc = id => `https://s3.amazonaws.com/rb-pres-hoc/images/${id}.jpg`;

const outerImageStyle = {
  width: 'calc(33vw - 20px)',
  display: 'inline-block',
  padding: 10,
  minHeight: 150,
};

const innerImageStyle = {
  border: '1px solid black',
  // minHeight: 200,
  // maxHeight: 300,
  height: 'auto',
  maxWidth: 'calc(33vw - 20px)',
};


export default ({ id }) => <div style={outerImageStyle}>
  <img style={innerImageStyle} src={getImageSrc(id)} />
</div>;
