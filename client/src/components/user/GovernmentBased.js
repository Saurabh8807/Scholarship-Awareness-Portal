import React from 'react';
import ScholarshipList from './ScholarshipList'; // Import the ScholarshipList component

// Sample scholarship data in JSON format
const scholarshipsData = [
  {
    title: 'Scholarship 1',
    deadline: '2023-12-31',
    amount: 'Rs. 10,000',
    link: 'https://www.mahadbtmahait.org.in/pradhan-mantri-krishi-sinchayee-yojana/',
  },
  {
    title: 'Scholarship 2',
    deadline: '2023-11-15',
    amount: 'Rs. 15,000',
    link: 'https://www.mahadbtmahait.org.in/mahadbt-farmer-registration-agriculture/',
  },
  {
    title: 'Scholarship 3',
    deadline: '2024-1-15',
    amount: 'Rs. 25,000',
    link: 'https://www.mahadbtmahait.org.in/mahadbt-benefit-disbursement-status/',
  },
  {
    title: 'Scholarship 4',
    deadline: '2024-2-15',
    amount: 'Rs. 5,000',
    link: 'https://www.mahadbtmahait.org.in/mahadbt-benefit-disbursement-status/',
  },
  // Add more scholarship entries as needed
];

function App() {
  return (
    <div className="App">
        <div>
            <br></br>
            <br></br>
        </div>
      <ScholarshipList scholarships={scholarshipsData} />
    </div>
  );
}

export default App;
