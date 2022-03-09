import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="row">
              <div className="col-md-6 info-text">
                <Link
                  to="/fhpayroll"
                  className="text-decoration-none text-black"
                >
                  <h3 className="text-center">
                    Four H <br /> HR &amp; Payroll
                  </h3>
                </Link>
              </div>
              <div className="col-md-6 info-text">
                <h3 className="text-center">
                  Four H <br /> WMS
                </h3>
              </div>
              <div className="col-md-12 info-text">
                <Link
                  to="/softwareInstallResources"
                  className="text-decoration-none text-black"
                >
                  <h3 className="text-center">
                    HR &amp; Payroll <br /> Software Installation Resources
                  </h3>
                </Link>
              </div>
              <div className="col-md-6 info-text">
                <h3 className="text-center">
                  HR &amp; Payroll <br /> Other Clients
                </h3>
              </div>
              <div className="col-md-6 info-text">
                <h3 className="text-center">
                  Other <br /> Projects
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
