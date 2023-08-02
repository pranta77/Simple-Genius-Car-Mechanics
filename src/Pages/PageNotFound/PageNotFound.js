import React from "react";
import notFound from "../../Images/404.jpg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <img width={"100%"} height={"700px"} src={notFound} alt="" />
      <Link to={"/home"}>
        <button className="text-danger bg-black">Go-Back</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
