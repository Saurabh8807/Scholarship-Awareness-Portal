import React, { useState } from 'react';

const EmailComposer = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const sendEmail = () => {
    console.log('Recipient:', recipient);
    console.log('Subject:', subject);
    console.log('Description:', description);
  };

  return (
    <div>
      <h2>Email Composer</h2>
      <form>
        <div>
          <label htmlFor="recipient">Recipient:</label>
          <input
            type="email"
            id="recipient"
            value={recipient}
            onChange={handleRecipientChange}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <button type="button" onClick={sendEmail}>
            Send Email
          </button>
        </div>
      </form>
      {/* Inline CSS for styling */}
      <style>
        {`
          label {
            font-weight: bold;
          }
          input,
          textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          button {
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            cursor: pointer;
          }
          button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </div>
  );
};

export default EmailComposer;
