import React, { useEffect, useState } from "react";
import FHPayrollSingle from "../../Components/FHPayrollSingle/FHPayrollSingle";
import "./FHPayroll.css";

const FHPayroll = () => {
  const [payrollConcern, setPayrollConcern] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const getAllData = async () => {
      let response = await fetch("http://localhost:5000/fhPayrollInfo");
      response = await response.json();
      setPayrollConcern(response);
      setLoading(false);
    };
    getAllData();
  }, []);

  return (
    <>
      <div className="fh-payroll my-5">
        <div className="container">
          <div className="fh-payroll-title mb-3">
            <h2 className="text-center">Four H HR &amp; Payroll Information</h2>
          </div>
          <div className="fh-payroll-search text-center mb-5">
            <input
              className="w-25 rounded border border-info p-2"
              type="text"
              placeholder="Search By Concern Name"
              onChange={(e) => setSearchTitle(e.target.value)}
            />
          </div>
          <div className="fh-payroll-concerns-list my-4">
            <div className="row">
              {loading ? (
                <p>Loading ...</p>
              ) : (
                payrollConcern
                  .filter((value) => {
                    if (searchTitle === "") {
                      return value;
                    } else if (
                      value.ConcernName.toLowerCase().includes(
                        searchTitle.toLowerCase()
                      )
                    ) {
                      return value;
                    }
                  })
                  .map((singlePayrollConcern) => (
                    <FHPayrollSingle
                      key={singlePayrollConcern._id}
                      singlePayrollConcern={singlePayrollConcern}
                    ></FHPayrollSingle>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FHPayroll;
