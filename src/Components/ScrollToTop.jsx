import { PureComponent } from 'react';

class ScrollIntoView extends PureComponent {
  componentDidMount = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  render = () => this.props.children;
}

export default ScrollIntoView;
