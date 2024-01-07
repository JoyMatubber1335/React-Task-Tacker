import { useState } from "react";
import { Button } from "./Button";
const Header = ({ title, toggole, showAdd }) => {
  const handelOnclick = () => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={showAdd ? "Close" : "Add"} color={showAdd ? "red" : "green"} onClick={toggole} />
    </header>
  );
};
// default props
Header.defaultProps = {
  title: "Welcome task tacker",
};

// css in js
// const headingStyle = {
//   color: "green",
// };

export default Header;
