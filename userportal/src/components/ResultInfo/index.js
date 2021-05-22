import React, { useState } from "react";
import { ResultPageContainer } from "./ResultElements";

function ResultInfo() {
  const [availableCenters, setAvailableCenters] = useState([]);

  useEffect(() => {
    let url = "https://www.baradana.in/";

    axios
      .get(url)
      .then((res) => {
          
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
