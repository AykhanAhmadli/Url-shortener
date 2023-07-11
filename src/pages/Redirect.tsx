import React from "react";

type Props = {};

const Redirect = (props: Props) => {
  window.location.replace("https://bobbyhadz.com");
  return <div>Redirect</div>;
};

export default Redirect;
