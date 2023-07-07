import { FC } from "react";
import axios from "axios";

const Task1: FC = () => {
  axios.get("http://localhost:3000/users").then((res: any) => {
    console.log(res);
  });
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="px-16 py-8 border rounded-lg border-slate-300">
        <div className=" text-3xl font-bold p-2">Link shortener</div>
        {/* long url */}
        <div className="py-2">
          <div className="font-bold">Enter your URL</div>
          <input
            className="border border-slate-300 focus-visible:outline-none p-2"
            type="text"
          />
        </div>
        {/* mini url */}
        <div className=" py-2">
          <div className="font-bold">Your short url</div>
          <div className="">
            <div>shortenedlink.com/</div>
          </div>
        </div>
        {/* button */}
        <div className="">
          <button className="bg-cyan-500 rounded-lg text-white p-2">
            Create Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task1;
