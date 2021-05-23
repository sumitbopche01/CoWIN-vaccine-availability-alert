import React, { useState, useEffect } from "react";
import { ResultPageContainer } from "./ResultElements";
import axios from "axios";

function ResultInfo() {
  const [availableCenters, setAvailableCenters] = useState([]);
  const districtCode = "378";

  useEffect(() => {
    let url = `https://www.baradana.in/availablecenters?districtCode=${districtCode}`;

    axios
      .get(url)
      .then((res) => {
        setAvailableCenters(res.body);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ResultPageContainer>
      <h2>
        Details Submitted Succefully. You Will notified once vaccines are
        available in your area.
      </h2>
    </ResultPageContainer>
  );
}

export default ResultInfo;
