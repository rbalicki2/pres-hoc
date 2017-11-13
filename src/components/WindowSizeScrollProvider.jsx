import React, { Component } from 'react';
import debounce from 'lodash/debounce';

const SCROLL_RESIZE_DEBOUNCE_MS = 150;

// TODO this seems a bit hacky to require this. What other properties do I need
// to modify?
const style = {
  display: 'inline-block',
};

export default class WindowSizeScrollProvider extends Component {
  constructor(props) {
    super(props);
    this.handleScrollOrResize = this.handleScrollOrResize.bind(this);
    this.debouncedHandleScrollOrResize = debounce(this.handleScrollOrResize, SCROLL_RESIZE_DEBOUNCE_MS, {
      // force an update every SCROLL_RESIZE_DEBOUNCE_MS ms
      maxWait: SCROLL_RESIZE_DEBOUNCE_MS,
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.debouncedHandleScrollOrResize);
    window.addEventListener('resize', this.debouncedHandleScrollOrResize);
    this.handleScrollOrResize();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedHandleScrollOrResize);
    window.removeEventListener('resize', this.debouncedHandleScrollOrResize);
  }

  handleScrollOrResize() {
    this.setState({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
  }

  render() {
    const br = this.el && this.el.getBoundingClientRect();

    return <div style={style} ref={(el) => { this.el = el; }}>{
      this.props.children({
        w: this.state,
        br,
      })
    }</div>;
  }
}
