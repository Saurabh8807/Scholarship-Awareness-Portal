import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Col, Button, Modal, Row } from "react-bootstrap";
import {Link ,useNavigate } from "react-router-dom"
import axios from "axios";
import '../cssUser/Eligibles.css';

import { UserContext } from "../../context/auth";


const NeedBased = () => {
  const {
    loggedIn,
    setLoggedIn,
    user,
    setUser,
    adminLoggedIn,
    setAdminLoggedIn,
  } = useContext(UserContext);

  
    const navigate = useNavigate();
    const [scholarship, setScholarship] = useState([]);
    const [data, setData] = useState([]);

    // useEffect(() => {
    //   // Fetch data from your API here (replace with your API endpoint)
    //   fetch('https://api.example.com/colleges')
    //     .then((response) => response.json())
    //     .then((data) => setData(data));
    // }, []);
    // Get function
    // const getScholarships = async () => {
    //   try {
    //     const { data } = await axios.get(
    //       `http://localhost:8080/get-scholarships`
    //     );
    //     setScholarship(data.scholarship);
        
    //   } catch (error) {
    //     console.log(error);
    //     alert("Something went wrong");
    //   }
    // };
  
    // useEffect(() => {
    //   getScholarships();
    // }, []);
  
    // const [show, setShow] = useState(false);
  
    
  
    // const [id, setId] = useState();
    const [showModal, setShowModal] = useState(false);
    // const [data, setData] = useState(data)
    const [selected, setSelected] = useState(null);
    const handleButtonClick = (index) => {
      setSelected(index);
      setShowModal(true);
    };
  
    const staticData = [
      { collegeName: 'BITS Pilani', amount: getRandomAmount() },
      { collegeName: 'VIT Vellore', amount: getRandomAmount() },
      { collegeName: 'SRM University', amount: getRandomAmount() },
      { collegeName: 'Manipal Institute of Technology', amount: getRandomAmount() },
      { collegeName: 'Amity University', amount: getRandomAmount() },
      { collegeName: 'Lovely Professional University', amount: getRandomAmount() },
      { collegeName: 'Symbiosis International University', amount: getRandomAmount() },
      { collegeName: 'Thapar Institute of Engineering and Technology', amount: getRandomAmount() },
      { collegeName: 'Jain University', amount: getRandomAmount() },
      { collegeName: 'Christ University', amount: getRandomAmount() },
      { collegeName: 'Birla Institute of Technology, Mesra', amount: getRandomAmount() },
      { collegeName: 'Manipal University Jaipur', amount: getRandomAmount() },
      { collegeName: 'Kalinga Institute of Industrial Technology', amount: getRandomAmount() },
      { collegeName: 'Shiv Nadar University', amount: getRandomAmount() },
      { collegeName: 'Galgotias University', amount: getRandomAmount() },
      { collegeName: 'SASTRA University', amount: getRandomAmount() },
      { collegeName: 'PES University', amount: getRandomAmount() },
    ];
    
    function getRandomAmount() {
      return Math.floor(Math.random() * 10000) + 5000; // Random amount between 5000 and 14999
    }
    
    // This array contains 17 Indian private college names with random amounts.
    
  
    // const [scholarshipName , setScholarshipName] = useState("");
    return (
      <>
         <div className="info-box88">
        <div className="box-content">
          <div className="recommended-tag">Recommended</div>
          <div className="college-info">
            <strong>College Name :-- </strong>
            <span>Thapar Institute of Engineering and Technology</span>
          </div>
          <div className="accuracy-info">
          <strong>Sponsorship :--</strong>
          <span>90%</span>
        </div>

          <div className="recommended-tag">Recommended</div>
        </div>
      </div>

      <div className="info-box44">
        <div className="box-content">
          <div className="college-info">
            <strong>College Name :--</strong>
            <span> Shiv Nadar University</span>
          </div>
          <div className="accuracy-info">
            <strong>Sponsorship :--</strong>
            <span>73%</span>
          </div>
        </div>
      </div>
<div className="table-container">
<table className="custom-table">
        <thead>
          <tr>
            <th>College Name</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {staticData.map((item, index) => (
            <tr key={index}>
              <td>{item.collegeName}</td>
              <td>${item.amount}</td>
              <td>
                <button className="action-button">Apply Now</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </>
    );
}


export default NeedBased