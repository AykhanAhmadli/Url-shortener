import { FC, SyntheticEvent, useState } from "react";
import axios from "axios";

type Urls = {
  full: string;
  short: string;
};

const Task1: FC = () => {
  // axios.get("http://localhost:3000/").then((res: any) => {
  //   console.log(res);
  // });

  const [inputValue, setInputValue] = useState("");

  const [urls, setUrls] = useState<Urls>();

  const submitUrl = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!inputValue) {
      console.log("here");
      return;
    }
    const response = await axios.post("http://localhost:3000/shortUrls", {
      fullUrl: inputValue,
    });
    setUrls(response.data);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="px-16 py-8 border rounded-lg border-slate-300">
        <div className=" text-3xl font-bold p-2">Link shortener</div>
        {/* long url */}
        <div className="py-2">
          <form className=" space-x-2" onSubmit={submitUrl}>
            <label htmlFor="fullUrl" className="">
              Enter your Url
            </label>
            <input
              required
              className="border border-slate-300 focus-visible:outline-none p-2"
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-cyan-500 rounded-lg text-white p-2"
            >
              Create Link
            </button>
          </form>
        </div>
        {/* mini url */}
        <div className=" py-2">
          <div className="font-bold">Your short url</div>
          <div className="">
            {/* <div>{urls?.full}</div> */}
            <a href={`http://127.0.0.1:5173/${urls?.short}`}>
              http://127.0.0.1:5173/{urls?.short}
            </a>
          </div>
        </div>
        {/* button */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Task1;
