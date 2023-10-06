import React, { useState } from 'react';
// import '../css/FormPage.css'; // Import your CSS file
import '../cssUser/Details.css';
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate = useNavigate();

  // State for input values
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const routeChange = () => {
    let path = `/scholarships`;
    navigate(path);
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data here
  };

  return (
    <div className="form-container">
      <h2>Details</h2>
      <form onSubmit={handleSubmit} className="two-column-form">
        <div className="form-box">
          <div className="form-column-1">
            <div className="form-group">
              <label htmlFor="input1">Input 1:</label>
              <input
                type="text"
                id="input1"
                name="input1"
                value={formData.input1}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="input2">Input 2:</label>
              <input
                type="text"
                id="input2"
                name="input2"
                value={formData.input2}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="input3">Input 3:</label>
              <input
                type="text"
                id="input3"
                name="input3"
                value={formData.input3}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            {/* Add more input fields for the first column */}
            {/* Example: */}
            <div className="form-group">
              <label htmlFor="input4">Input 4:</label>
              <input
                type="text"
                id="input4"
                name="input4"
                value={formData.input4}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
          </div>

          <div className="form-column-2">
            <div className="form-group">
              <label htmlFor="input5">Input 5:</label>
              <input
                type="text"
                id="input5"
                name="input5"
                value={formData.input5}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="input6">Input 6:</label>
              <input
                type="text"
                id="input6"
                name="input6"
                value={formData.input6}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="input7">Input 7:</label>
              <input
                type="text"
                id="input7"
                name="input7"
                value={formData.input7}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            {/* Add more input fields for the second column */}
            {/* Example: */}
            <div className="form-group">
              <label htmlFor="input4">Input 8:</label>
              <input
                type="text"
                id="input8"
                name="input8"
                value={formData.input8}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
          </div>
        </div>

        {/* Add more input fields as needed */}
        {/* ... Input 5 to Input 8 */}

        <button type="submit" onClick={routeChange}>Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
