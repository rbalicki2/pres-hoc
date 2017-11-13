import React from 'react';

import IsOnScreenProvider from 'src/components/IsOnScreenProvider';

const getImageSrc = id => `https://s3.amazonaws.com/rb-pres-hoc/images/${id}.jpg`;

const outerImageStyle = {
  width: 'calc(33vw - 20px)',
  display: 'inline-block',
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 5,
  verticalAlign: 'top',
  minHeight: 250,
  transition: 'opacity 1s ease-out',
};

const outerImageInvisibleStyle = {
  ...outerImageStyle,
  opacity: 0,
};

const innerImageStyle = {
  border: '1px solid black',
  height: 'auto',
  maxWidth: 'calc(33vw - 20px)',
};

export default ({ id }) => <IsOnScreenProvider>{isOnScreen =>
  <div style={isOnScreen ? outerImageStyle : outerImageInvisibleStyle}>
    <img style={innerImageStyle} src={isOnScreen ? getImageSrc(id) : ''} />
  </div>
}</IsOnScreenProvider>;
