/* eslint-disable */
import React from 'react';

// higher order version
const addProp = Component => (props) =>
  <div><Component {...props} meaningOfLife="42" /></div>

// traditional version
const AddProp = (props) =>
  <div>
    {
      React.cloneElement(this.props.children, {
        meaningOfLife: 42
      })
    }
  </div>;

