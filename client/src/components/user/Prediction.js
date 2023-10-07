// import React, { useState, useEffect } from 'react';

// function App() {
//   const [cet, setCet] = useState('');
//   const [rank, setRank] = useState('');
//   const [department, setDepartment] = useState(Math.random() >= 0.5 ? 1 : 0);
//   const [rating, setRating] = useState(Math.floor(Math.random() * (10 - 7 + 1)) + 7);
//   const [collegeName, setCollegeName] = useState('');
//   const [accuracy, setAccuracy] = useState('');

//   // Function to fetch CET and Rank data from GET APIs
//   useEffect(() => {
//     // Make GET requests to your API endpoints to fetch cet and rank data.
//     // Replace 'yourCetApiEndpoint' and 'yourRankApiEndpoint' with your actual API endpoints.
//     fetch('yourCetApiEndpoint')
//       .then((response) => response.json())
//       .then((data) => setCet(data.cet));

//     fetch('yourRankApiEndpoint')
//       .then((response) => response.json())
//       .then((data) => setRank(data.rank));
//   }, []);

//   // Function to send POST request with data
//   const sendData = () => {
//     // Create a payload with the data you want to send
//     const payload = {
//       cet,
//       rank,
//       department,
//       rating,
//     };

//     // Make a POST request to your API endpoint with the payload
//     // Replace 'yourPostApiEndpoint' with your actual API endpoint for sending data.
//     fetch('yourPostApiEndpoint', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setCollegeName(data.collegeName);
//         setAccuracy(data.accuracy);
//       });
//   };

//   return (
//     <div>
//       <div className="input-container">
//         <label>CET:</label>
//         <span>{cet}</span>
//       </div>
//       <div className="input-container">
//         <label>Rank:</label>
//         <span>{rank}</span>
//       </div>
//       <div className="input-container">
//         <label>Department:</label>
//         <span>{department}</span>
//       </div>
//       <div className="input-container">
//         <label>Rating:</label>
//         <span>{rating}</span>
//       </div>
//       <button onClick={sendData}>Send Data</button>
//       <div className="response-container">
//         <div>
//           <strong>College Name:</strong>
//           <span>{collegeName}</span>
//         </div>
//         <div>
//           <strong>Accuracy:</strong>
//           <span>{accuracy}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
