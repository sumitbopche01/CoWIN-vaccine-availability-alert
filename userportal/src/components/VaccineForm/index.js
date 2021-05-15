import React, { useState } from "react";
import stateList from "../../data/stateList.json";
import axios from "axios";
import {
  FormContainer,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  Headline,
  FormSelect,
} from "./FormElements";

function VaccineForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districtList, setDistrictList] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  // const [stateList] = useState(ListStates);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const RegisterUser = () => {
    console.log(name, email, ageGroup, selectedDistrict, selectedState);
    if (email && selectedDistrict && selectedState) {
      let user = {
        name: name,
        email: email,
        ageGroup: ageGroup,
        districtCode: selectedDistrict,
        stateCode: selectedState,
      };

      // let url = "http://localhost:3456/user";
      let url = "http://ec2-15-206-28-251.ap-south-1.compute.amazonaws.com:3456/user";
      axios
        .post(url, user)
        .then((res) => {
          if (res.status === 200) {
            alert("Succefully Submitted!");
          } else {
            alert("Something went wrong. Please try again later");
          }
        })
        .catch((error) => {
          alert(error);
        });

      setName("");
      setEmail("");
      setAgeGroup("18");
      setSelectedState("");
      setSelectedDistrict("");
      // setDistrictList([]);
    } else {
      alert("Please please required fields");
    }
  };

  const handleStateSelection = async (event) => {
    console.log(event.target.value);

    await setSelectedState(event.target.value);

    console.log("state id ", selectedState);
    let url = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${event.target.value}`;
    console.log("url, ", url);
    axios.get(url).then((res) => {
      console.log("res.body ", res);
      if (res.status === 200) {
        let list = res.data.districts;
        console.log(list);
        setDistrictList(list);
        console.log(districtList);
      }
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
            rel="noreferrer"
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
            rel="noreferrer"
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
          placeholder="Your email id for notification email "
          onChange={(e) => setEmail(e.target.value)}
        ></FormInput>
        <FormLabel htmlFor="ageGroup">
          <span>*</span>Age Group:{" "}
        </FormLabel>
        <FormSelect
          type="text"
          value={ageGroup}
          placeholder="Your Age group (18 or 45)"
          onChange={(e) => setAgeGroup(e.target.value)}
        >
          <option key="1" value="optionMessage">
            Select Age Group
          </option>
          <option key="18+" value={18}>
            18+
          </option>
          <option key="45+" value={45}>
            45+
          </option>
        </FormSelect>
        <FormLabel htmlFor="district">
          <span>*</span>State:{" "}
        </FormLabel>
        <FormSelect onChange={handleStateSelection} placeholder="Select State">
          <option key="1we" value="optionMessage">
            Select State
          </option>
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
          <option key="1qw" value="optionMessage">
            Select District
          </option>
          {districtList.map((district) => (
            <option key={district.district_id} value={district.district_id}>
              {district.district_name}
            </option>
          ))}
        </FormSelect>
        <FormButton type="submit" onClick={RegisterUser}>
          Get Notified
        </FormButton>
      </Form>
    </FormContainer>
  );
}

export default VaccineForm;
