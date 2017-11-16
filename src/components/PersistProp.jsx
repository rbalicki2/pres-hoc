import { Component } from 'react';

export default class PersistProp extends Component {
  state = {
    prop: this.props.prop,
  };

  componentWillReceiveProps({ prop }) {
    if (prop !== this.state.prop && this.checkProp(prop)) {
      this.setState({
        prop,
      });
    }
  }

  checkProp(prop) {
    return this.props.checkFalsy
      ? !!prop
      : prop !== undefined;
  }

  render() {
    return this.props.children(this.state.prop);
  }
}
