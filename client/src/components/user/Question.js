import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssUser/Question.css';
import Que from '../../images/Que.png';


const QuestionPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Function to redirect to the student page
  const redirectToStudentPage = () => {
    navigate('/login'); // Replace with the actual path of the student page
  };

  // Function to redirect to the organization page
  const redirectToOrganizationPage = () => {
    navigate('/OrgLogin'); // Replace with the actual path of the organization page
  };

  return (
    <div className="question-page">
        <img className="QImg"src={Que} alt="Image" />
      <div className="question-container">
        <h1>Who are you?</h1>
        <div className="button-container">
          <button
            className={`option-button ${
              selectedOption === 'student' ? 'selected' : ''
            }`}
            onClick={redirectToStudentPage}
          >
            Student
          </button>
          <button
            className={`option-button ${
              selectedOption === 'organization' ? 'selected' : ''
            }`}
            onClick={redirectToOrganizationPage}
          >
            Organization
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
