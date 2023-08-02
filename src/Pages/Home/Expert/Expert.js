import React from "react";

const Expert = ({ allexpert }) => {
  const { name, img, expertize } = allexpert;
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <img width={250} src={img} alt="" />
      <h2>{name}</h2>
      <h4 className="text-danger">{expertize}</h4>
    </div>
  );
};

export default Expert;
