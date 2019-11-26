import React from "react";
import Computation from "../../assets/img/computation.gif";

const Dashboard = () => {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "26px" }}
      >
        Real Time Call Surveillance
      </div>
      <div
        style={{
          width: "40%",
          marginTop: "",
          margin: "100px auto 0 auto"
        }}
      >
        <img
          src={Computation}
          alt=""
          style={{ width: "107%", marginLeft: "-3%" }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
