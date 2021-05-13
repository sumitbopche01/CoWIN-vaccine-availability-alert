import React, { useState } from "react";
import {
  FormContainer,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  Headline,
  FormSelect,
} from "./FormElements";
import stateList from "../../data/stateList.json";
const axios = require("axios").default;
axios.defaults.baseURL = "https://cdn-api.co-vin.in/api";

function VaccineForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ageGroup, setAgeGroup] = useState("18");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districtList, setDistrictList] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const RegisterUser = () => {
    alert("clicked");
  };

  const handleStateSelection = (event) => {
    setSelectedState(event.target.value);
    axios.get("/v2/admin/location/districts/" + selectedState).then((res) => {
      console.log("res.body ", res.body, res.status);
    });
  };

  return (
    <FormContainer>
      <Headline>
        <h2>
          Get Notified Once Vaccine Slot is <br /> Available on{" "}
          <a
            href="https://www.cowin.gov.in/home"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            https://www.cowin.gov.in/home
          </a>{" "}
        </h2>
        <p>
          The project is developed and maintained by{" "}
          <a
            href="https://www.linkedin.com/in/sumit-bopche-609131a0/"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            Sumit Bopche
          </a>
        </p>
      </Headline>
      <Form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Name: </FormLabel>
        <FormInput
          type="text"
          value={name}
          placeholder="Your name (optional)"
          onChange={(e) => setName(e.target.value)}
        ></FormInput>
        <FormLabel htmlFor="email">
          <span>*</span>Email:{" "}
        </FormLabel>
        <FormInput
          type="email"
          value={email}
          required
          placeholder="Your email id for notification email "
          onChange={(e) => setEmail(e.target.value)}
        ></FormInput>
        <FormLabel htmlFor="ageGroup">
          <span>*</span>Age Group:{" "}
        </FormLabel>
        <FormInput
          type="text"
          value={ageGroup}
          placeholder="Your Age group (18 or 45)"
          onChange={(e) => setAgeGroup(e.target.value)}
        ></FormInput>
        <FormLabel htmlFor="district">
          <span>*</span>State:{" "}
        </FormLabel>
        <FormSelect
          onChange={handleStateSelection}
          placeholder="Select your state"
        >
          {stateList.map((state) => (
            <option key={state.state_id} value={state.state_id}>
              {state.state_name}
            </option>
          ))}
        </FormSelect>
        <FormLabel htmlFor="district">
          <span>*</span>District:{" "}
        </FormLabel>
        <FormSelect
          placeholder="Select your district"
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          {}
        </FormSelect>
        <FormButton type="submit" onClick={RegisterUser}>
          Get Notified
        </FormButton>
      </Form>
    </FormContainer>
  );
}

export default VaccineForm;
