import { type FC } from "react";

const Home: FC = () => {
  return (
    <div className="">
      <div className="text-lg font-bold">Home</div>
      <div>
        <span className="text-blue-500">Hello</span>
        <span className="text-red-500">Universe</span>
        <span className="text-green-500">Woohoo!</span>
      </div>
    </div>
  );
};

export default Home;
