import { Component } from 'react';
import debounce from 'lodash/debounce';

const SCROLL_RESIZE_DEBOUNCE_MS = 300;

export default class WindowSizeScrollProvider extends Component {
  constructor(props) {
    super(props);
    this.handleScrollOrResize = debounce(this.handleScrollOrResize.bind(this), SCROLL_RESIZE_DEBOUNCE_MS);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollOrResize);
    window.addEventListener('resize', this.handleScrollOrResize);
  }

  handleScrollOrResize() {
    this.setState({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    }, () => console.log(this.state));
  }

  render() {
    return this.props.children({
      w: this.state,
    });
  }
}
