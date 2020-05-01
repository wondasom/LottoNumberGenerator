import React from "react";

// class Button extends React.PureComponent {
//   componentDidMount() {
//     console.debug("Button was mounted");
//   }

//   componentDidUpdate() {
//     console.debug("Button was rerendered");
//   }

//   render() {
//     return (
//       <button style={buttonStyles} onClick={this.props.onRandomizeButtonClick}>
//         {this.props.children}
//       </button>
//     );
//   }
// }

const Button = React.memo(props => {
  // React.useEffect(() => {
  //   console.log("Button was mounted");
  // }, []);

  // React.useEffect(() => {
  //   console.log("Button was rerendered");
  // });

  return (
    <button className="btn" onClick={props.onRandomizeButtonClick}>
      {props.children}
    </button>
  );
});

export default Button;
