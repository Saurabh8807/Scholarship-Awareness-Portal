import React, { useState, useEffect } from 'react';
import '../cssUser/Prediction.css';


function App() {
  const [cet, setCet] = useState('');
  const [rank, setRank] = useState('');
  const [department, setDepartment] = useState(Math.random() >= 0.5 ? 1 : 0);
  const [rating, setRating] = useState(Math.floor(Math.random() * (10 - 7 + 1)) + 7);
  const [collegeName, setCollegeName] = useState('');
  const [accuracy, setAccuracy] = useState('');

  // Function to send POST request with data
  const sendData = () => {
    // Create a payload with the data you want to send
    const payload = {
      cet,
      rank,
      department,
      rating,
    };

    // Make a POST request to your API endpoint with the payload
    // Replace 'yourPostApiEndpoint' with your actual API endpoint for sending data.
    fetch('yourPostApiEndpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        setCollegeName(data.collegeName);
        setAccuracy(data.accuracy);
      });
  };

  // Function to fetch CET and Rank data from GET APIs
  useEffect(() => {
    // Make GET requests to your API endpoints to fetch cet and rank data.
    // Replace 'yourCetApiEndpoint' and 'yourRankApiEndpoint' with your actual API endpoints.
    fetch('yourCetApiEndpoint')
      .then((response) => response.json())
      .then((data) => setCet(data.cet));

    fetch('yourRankApiEndpoint')
      .then((response) => response.json())
      .then((data) => setRank(data.rank));

    // Call sendData here to send data when the component mounts.
    sendData();
  }, []); // Empty dependency array to run this effect only once when the component mounts.

  return (
<div class="recommendation-box">
  <div class="recommended-tag">Recommended</div>
  <div class="response-container">
    <div>
      <strong>College Name:</strong>
      <span>{collegeName}</span>
    </div>
    <div>
      <strong>Accuracy:</strong>
      <span>{accuracy}</span>
    </div>
  </div>
</div>


  );
}

export default App;
