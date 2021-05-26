import React, { useState, useEffect } from "react";
import {
  ResultPageContainer,
  CardContainer,
  Title,
  Card,
  Message,
  VaccineMsg,
  Place,
} from "./ResultElements";
import axios from "axios";
import { useSelector } from "react-redux";

function ResultInfo() {
  const [availableCenters, setAvailableCenters] = useState([]);
  const districtCode = useSelector((state) => state.district.districtCode);

  useEffect(() => {
    // let url = `https://www.baradana.in/availablecenters?ageGroup=45&districtCode=378&vaccineName=COVISHIELD&feeType=free&doseNo=1`;
    let url = `http://localhost:3456/availablecenters?ageGroup=45&districtCode=365&vaccineName=COVISHIELD&feeType=free&doseNo=1`;
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
      <Message>
        Details Submitted successfully
        {availableCenters.length > 0 ? (
          <VaccineMsg>
            "Vaccine slots are available in your area. Please book the slot at{" "}
            <a
              href="https://www.cowin.gov.in/home"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              https://www.cowin.gov.in/home
            </a>
          </VaccineMsg>
        ) : (
          <VaccineMsg>
            "Vaccine slots are not available now, will notify once available"
          </VaccineMsg>
        )}
      </Message>

      {availableCenters.length > 0 ? <span style={{"font-weight":"600"}}>Available Centers</span> : ""}
      <CardContainer>
        {availableCenters.map((center) => {
          return center.sessions.map((session) => (
            <Card key={session.session_id}>
              <Place>{center.name}</Place>
              <Title>Date:</Title> {session.date}
              <Title>Address:</Title> {center.address},{center.block_name},
              {center.district_name},{center.pincode}
              <Title>Vaccine Name:</Title> {session.vaccine}
              <Title>Available Dose 1:</Title>{" "}
              {session.available_capacity_dose1}
              <Title>Available Dose 2:</Title>{" "}
              {session.available_capacity_dose2}
            </Card>
          ));
        })}
      </CardContainer>
    </ResultPageContainer>
  );
}

export default ResultInfo;
