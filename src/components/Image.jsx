import React from 'react';

import IsOnScreenProvider from 'src/components/IsOnScreenProvider';
import PersistProp from 'src/components/PersistProp';

const getImageSrc = id => `https://s3.amazonaws.com/rb-pres-hoc/images/${id}.jpg`;

const outerImageStyle = {
  width: 'calc(33vw - 20px)',
  display: 'inline-block',
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 5,
  height: 'calc(33vw - 20px)',
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
  <PersistProp prop={isOnScreen} checkFalsy>{
    persistedIsOnScreen =>
      <div style={persistedIsOnScreen ? outerImageStyle : outerImageInvisibleStyle}>
        <img style={innerImageStyle} src={persistedIsOnScreen ? getImageSrc(id) : ''} />
      </div>
  }</PersistProp>
}</IsOnScreenProvider>;
