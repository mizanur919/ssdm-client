import React from "react";
import { Link } from "react-router-dom";
import "./SoftInstallSingle.css";

const SoftInstallSingle = ({ singleTool }) => {
  const { ToolName, Version, DownloadLink } = singleTool;
  return (
    <div>
      <div className="col-md-12 tools-info d-flex justify-content-between align-items-center mb-4 py-2 px-4 rounded">
        <div className="soft-title">
          <h4>{ToolName}</h4>
        </div>
        <div className="soft-title">
          <h4>{Version}</h4>
        </div>
        <div className="soft-download">
          <Link to="{DownloadLink}" className="text-decoration-none text-black">
            Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SoftInstallSingle;
