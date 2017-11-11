/* eslint-disable */
import React from 'react';

export default function addExtraLogging(WrappedComponent) {
  return class ComponentWithLogs extends React.Component {
    render() {
      console.log(`Rendering ${WrappedComponent.displayName}`);
      console.log(this.props);
      return <WrappedComponent {...this.props} />;
    }
  };
}

class GoodJobDiv extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    return <div>Good job {this.props.name}!</div>;
  }
}

export const GoodJobDivWithLogged = addExtraLogging(GoodJobDiv);

