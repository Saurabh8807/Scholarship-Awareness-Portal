import React, { useState } from 'react';
// import '../css/FormPage.css'; // Import your CSS file
import '../cssUser/Home.css';

const FormPage = () => {
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data here
  };

  return (
    <div className="form-container">
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit} className="two-column-form">
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="input1">Input 1:</label>
            <input
              type="text"
              id="input1"
              name="input1"
              value={formData.input1}
              onChange={handleInputChange}
            />
          </div>

          {/* Add more input fields for the first column */}
          {/* Example: */}
          <div className="form-group">
            <label htmlFor="input2">Input 2:</label>
            <input
              type="text"
              id="input3"
              name="input3"
              value={formData.input3}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-column">
          <div className="form-group">
            <label htmlFor="input3">Input 3:</label>
            <input
              type="text"
              id="input3"
              name="input3"
              value={formData.input2}
              onChange={handleInputChange}
            />
          </div>

          {/* Add more input fields for the second column */}
          {/* Example: */}
          <div className="form-group">
            <label htmlFor="input4">Input 4:</label>
            <input
              type="text"
              id="input4"
              name="input4"
              value={formData.input4}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input5">Input 5:</label>
            <input
              type="text"
              id="input4"
              name="input4"
              value={formData.input4}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input6">Input 6:</label>
            <input
              type="text"
              id="input4"
              name="input4"
              value={formData.input4}
              onChange={handleInputChange}
            />
          </div>
        
          <div className="form-group">
            <label htmlFor="input7">Input 7:</label>
            <input
              type="text"
              id="input4"
              name="input4"
              value={formData.input4}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input8">Input 8:</label>
            <input
              type="text"
              id="input4"
              name="input4"
              value={formData.input4}
              onChange={handleInputChange}
            />
          </div>
        
        </div>

        {/* Add more input fields as needed */}
        {/* ... Input 5 to Input 8 */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
