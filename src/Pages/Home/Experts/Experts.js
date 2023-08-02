import React from "react";

import mechanic1 from "../../../Images/mechanic/mechanic-1.webp";
import mechanic2 from "../../../Images/mechanic/mechanic-2.webp";
import mechanic3 from "../../../Images/mechanic/mechanic-3.webp";
import mechanic4 from "../../../Images/mechanic/mechanic-4.webp";
import mechanic5 from "../../../Images/mechanic/mechanic-5.webp";
import Expert from "../Expert/Expert";
const experts = [
  {
    img: mechanic1,
    name: "Andrew Smith",
    expertize: "-Engine Expert-",
  },
  {
    img: mechanic2,
    name: "John Anderson",
    expertize: "-Polish Expert-",
  },
  {
    img: mechanic3,
    name: "Zakaria Smith",
    expertize: "-Coloring Expert-",
  },
  {
    img: mechanic4,
    name: "Pranta Smith",
    expertize: "-Engine Expert-",
  },
  {
    img: mechanic5,
    name: "steve Smith",
    expertize: "-Engine Expert-",
  },
];

const Experts = () => {
  return (
    <div id="experts" className="container">
      <h2 className="text-primary mt-5">Our Experts</h2>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.name} allexpert={expert} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
