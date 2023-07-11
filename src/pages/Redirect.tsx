import axios from "axios";
import React from "react";

type Props = {};

const Redirect = (props: Props) => {
  const link = window.location.pathname;
  console.log(link);
  axios.get("http://localhost:3000" + link).then((res: any) => {
    console.log(res);
    window.location.replace(res.data);
  });
  //   window.location.replace("https://bobbyhadz.com");
  return <div>Redirect</div>;
};

export default Redirect;
