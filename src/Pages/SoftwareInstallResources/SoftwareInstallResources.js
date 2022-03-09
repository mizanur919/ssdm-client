import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SoftInstallSingle from "../../Components/SoftInstallSingle/SoftInstallSingle";
import "./SoftwareInstallResources.css";

const SoftwareInstallResources = () => {
  const [toolInfo, setToolInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const getAllData = async () => {
      let response = await fetch("http://localhost:5000/tools");
      response = await response.json();
      setToolInfo(response);
      setLoading(false);
    };
    getAllData();
  }, []);

  return (
    <div className="tools-section my-5">
      <div className="container">
        <div className="row">
          <div className="tools-section-title mb-4">
            <h2 className="text-center">Software Installation Resources</h2>
          </div>
          <div className="fh-payroll-search text-center mb-5">
            <input
              className="w-25 rounded border border-info p-2"
              type="text"
              placeholder="Search By Tools Name"
              onChange={(e) => setSearchTitle(e.target.value)}
            />
          </div>
          <div className="col-md-8 mx-auto">
            <div className="row">
              {loading ? (
                <p>Loading ...</p>
              ) : (
                toolInfo
                  .filter((value) => {
                    if (searchTitle === "") {
                      return value;
                    } else if (
                      value.ToolName.toLowerCase().includes(
                        searchTitle.toLowerCase()
                      )
                    ) {
                      return value;
                    }
                  })
                  .map((singleTool) => (
                    <SoftInstallSingle
                      key={singleTool._id}
                      singleTool={singleTool}
                    ></SoftInstallSingle>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareInstallResources;
