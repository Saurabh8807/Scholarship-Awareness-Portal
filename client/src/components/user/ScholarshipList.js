import React from 'react';
import {Link } from "react-router-dom"


// Define the Scholarship component to render each scholarship entry
function Scholarship({ title, deadline, amount, link }) {
  const handleButtonClick = () => {
    window.open(link, '_blank'); // Opens the link in a new tab/window
  };

  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '10px',
        marginBottom: '50px',
        width:'25vw',
        height:'30vh',
        margin: '0 auto',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
      }}
    >
      <h3>{title}</h3>
      <p style={{ marginBottom: '10px' }}>Deadline: {deadline}</p>
      <p style={{ marginBottom: '10px' }}>Amount: {amount}</p>
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Visit Scholarship
      </button>
    </div>
  );
}

// Define the ScholarshipList component to render a list of scholarships
function ScholarshipList({ scholarships }) {
  return (
    <div className="scholarship-list">
      <Link
        style={{ fontSize: "30px", textDecoration: "none", color:"black"}} // Add textDecoration: "none"
        to="/scholarships"
        className="back-link"

        
      >
        🡸
      </Link>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
        }}
      >
        {scholarships.map((scholarship, index) => (
          <Scholarship key={index} {...scholarship} />
        ))}
      </div>
    </div>
  );
}

export default ScholarshipList;
