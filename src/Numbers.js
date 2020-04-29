import React from "react";

// class Numbers extends React.PureComponent {
//   componentDidUpdate() {
//     console.log("Numbers was rerendered");
//   }

//   render() {
//     return [1, 2, 3].map(number => <div style={numberStyles}>{number}</div>);
//   }
// }

const Numbers = React.memo(({ numbers }) => {
  React.useEffect(() => {
    console.log("Numbers was rerendered");
  });

  return numbers.map(number => <div>{number}</div>);
});

export default Numbers;
