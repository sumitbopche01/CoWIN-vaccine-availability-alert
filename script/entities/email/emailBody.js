exports.getEmailBody = (data) => {
  return `<html lang="en">
  <style>
    #md {
      background-color: white;
      border-radius: 4px;
      border: 1px solid #bfbfbf;
      box-shadow: 5px 5px 8px 5px #888888;
      max-width: 500px;
      margin: 0 auto;
      padding: 12px;
    }
    p {
      font-size: 18px;
    }
    a {
      padding: 5px;
      font-size: 20px;
      color: white;
      background-color: #01bf71;
      font-weight: 600;
      border-radius: 5px;
      text-decoration: none;
    }

    a:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    }
  </style>
  <body>
    <div id="md">
      <p>The Vaccine is available in your district for the age group ${data.ageGroup}+.</p>
      <p>Number of sessions available: ${data.count}</p>
      <p>
        Please book the appointment on
        <a href="https://selfregistration.cowin.gov.in/">https://selfregistration.cowin.gov.in/</a>
      </p>
    </div>
  </body>
</html>
`;
};
