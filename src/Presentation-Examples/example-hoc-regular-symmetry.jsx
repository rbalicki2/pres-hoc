/* eslint-disable */
import React from 'react';

// higher order version
const addProp = Component => (props) =>
  <Component {...props} meaningOfLife={42} />

// traditional version
const AddProp = (props) =>
  React.cloneElement(this.props.children, {
    meaningOfLife: 42
  });

// Render prop
const AddPropWithRenderProp = (props) => this.props.children(42);

// use it like:
<AddPropWithRenderProp>
  { meaningOfLife => <MyExistingComponent meaningOfLife={meaningOfLife} /> }
</AddPropWithRenderProp>

// NOTE: children is a function. That looks weird, but get over it!

