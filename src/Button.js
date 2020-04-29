import React from "react";

const buttonStyles = {
  height: 50,
  width: 250,
  fontSize: 20,
  background: "tomato",
  border: "none",
  borderRadius: 5,
  color: "white",
  cursor: "pointer",
  marginBottom: 20,
  marginTop: 20
};

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
  React.useEffect(() => {
    console.log("Button was mounted");
  }, []);

  React.useEffect(() => {
    console.log("Button was rerendered");
  });

  return (
    <button style={buttonStyles} onClick={props.onRandomizeButtonClick}>
      {props.children}
    </button>
  );
});

export default Button;
