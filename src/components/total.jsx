import React from "react";

const Total = ({totalCounters}) => {
    return (
        <div style={{ fontSize: "32px" }} className="d-flex justify-content-center align ">
              {" Total: "}
              <span className="ml-1 mt-1 badge rounded-pill d-flex align">
                  {totalCounters}
              </span>
          </div>
    )
}

export default Total;