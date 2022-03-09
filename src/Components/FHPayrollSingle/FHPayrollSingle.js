import React from "react";
import "./FHPayrollSingle.css";

const FHPayrollSingle = ({ singlePayrollConcern }) => {
  const { ConcernName, IP, Factory_Code } = singlePayrollConcern;
  return (
    <div className="col-sm-4 mb-4">
      <div className="card text-center">
        <div className="card-body single-concern">
          <h5 className="card-title">{ConcernName}</h5>
          <p className="card-text">IP: {IP}</p>
          <p>Factory Code: {Factory_Code}</p>
        </div>
      </div>
    </div>
  );
};

export default FHPayrollSingle;
