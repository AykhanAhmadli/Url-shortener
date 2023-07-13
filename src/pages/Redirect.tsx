import axios from "axios";

type Props = {};

const Redirect = (props: Props) => {
  const link = window.location.pathname;
  console.log(link);
  axios.get("http://localhost:3000" + link).then((res: any) => {
    console.log(res);
    window.location.replace(res.data);
  });
  return <div>Redirect</div>;
};

export default Redirect;
