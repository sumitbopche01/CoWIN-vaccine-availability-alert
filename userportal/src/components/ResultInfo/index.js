import React, { useState, useEffect } from "react";
import {
  ResultPageContainer,
  CardContainer,
  Title,
  Card,
} from "./ResultElements";
import axios from "axios";
import { useSelector } from "react-redux";

function ResultInfo() {
  const [availableCenters, setAvailableCenters] = useState([]);
  const districtCode = useSelector((state) => state.district.districtCode);

  useEffect(() => {
    // let url = `https://www.baradana.in/availablecenters?ageGroup=45&districtCode=378&vaccineName=COVISHIELD&feeType=free&doseNo=1`;
    let url = `http://localhost:3456/availablecenters?ageGroup=45&districtCode=378&vaccineName=COVISHIELD&feeType=free&doseNo=1`;
    axios
      .get(url)
      .then((res) => {
        setAvailableCenters(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ResultPageContainer>
      <h2>
        Details Submitted Succefully. You Will notified once vaccines are
        available in your area. Distrct Code
      </h2>
      <CardContainer>
        {availableCenters.map((center) => {
          return center.sessions.map((session) => (
            <Card key={session.session_id}>
              {center.name}
              <Title>Date:</Title> {session.date}
              <Title>Address:</Title> {center.address},{center.block_name},
              {center.district_name},{center.pincode}
              =<Title>Vaccine Name:</Title> {session.vaccine}
              <Title>Available Dose 1:</Title> {session.available_capacity_dose1}
              <Title>Available Dose 2:</Title> {session.available_capacity_dose2}
            </Card>
          ));
        })}
      </CardContainer>
    </ResultPageContainer>
  );
}

export default ResultInfo;
