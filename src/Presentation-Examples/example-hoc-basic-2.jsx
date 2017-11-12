/* eslint-disable */
import addExtraLogging from './example-hoc-basic';

// class GoodJobDiv extends React.Component {
//   static propTypes = {
//     name: React.PropTypes.string,
//   };

//   render() {
//     return <div>Good job {this.props.name}!</div>;
//   }
// }

// export const GoodJobDivWithLogged = addExtraLogging(GoodJobDiv);

const GoodJobComponent = (props) =>
  <div>You did a good job, { this.props.name }!</div>;

export default addExtraLogging(GoodJobComponent);
