/* eslint-disable */
import React from 'react';

// Class version is unnecessary:
// export default function addExtraLogging(WrappedComponent) {
//   return class ComponentWithLogs extends React.Component {
//     render() {
//       console.log(`Rendering ${WrappedComponent.displayName}`);
//       console.log(this.props);
//       return <WrappedComponent {...this.props} />;
//     }
//   };
// }

const addExtraLogging = (WrappedComponent) =>
  (props) => {
    console.log(`Rendering ${WrappedComponent.displayName}`);
    console.log(props);
    return <WrappedComponent {...this.props} />;
  };



export default addExtraLogging;