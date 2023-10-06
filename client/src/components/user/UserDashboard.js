import React, { useState, useEffect } from "react";
import { Container, Row, Button, Col, Card, Table ,Modal} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import '../cssUser/UserDashboard.css';


const UserDashboard = () => {
  const [userData, setUserData] = useState({
    username: "Valerie",
    firstName: "Valerie",
    lastName: "Luna",
    orgName: "Start Bootstrap",
    location: "San Francisco, CA",
    email: "name@example.com",
    phone: "555-123-4567",
    birthday: "06/10/1988",
    sscPercentage: "80%",
    hscPercentage: "80%",
    cetPercentile: "90%",
    jeePercentile: "95%",
    achievements: "Sample achievement",
  });

  const [userImage, setUserImage] = useState("http://bootdey.com/img/Content/avatar/avatar1.png");

  const [scholarships, setScholarships] = useState([]);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    // Fetch user data from MongoDB and set it to the state
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/get-user-data/${userEmail}`);
        setUserData(response.data.userData);
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    };

    // Fetch scholarship data from MongoDB and set it to the state
    const fetchScholarships = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/get-user-applications/${userEmail}`);
        setScholarships(response.data.application);
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    };

    fetchUserData();
    fetchScholarships();
  }, [userEmail]);

  const handleImageUpload = () => {
    // Implement image upload logic here
    // Update userImage state with the new image URL
  };

  const handleSaveChanges = () => {
    // Implement logic to save user data to MongoDB
    // Use userData state to get the updated user data
  };

  const handleScholarshipDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/delete-scholarship/${selectedScholarship._id}`);
      alert(response.data.message);
      setShowModal(false);
      // Refresh scholarship data after deletion
      // Implement logic to update scholarships state without the deleted scholarship
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };


  const navigate = useNavigate();
  const params = useParams();
  const [scholarship, setScholarship] = useState([]);
  // const userEmail = localStorage.getItem("email");

  // Get function
  const getScholarships = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/get-user-applications/${userEmail}`
      );
      setScholarship(data.application);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getScholarships();
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async() => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/get-applications/${scholarship[selected]?._id}`
      );
      alert(data.message);
      navigate("/user-dashboard");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }


  const date = new Date(scholarship.timestamp);
  const timestampString = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleButtonClick = (index) => {
    setSelected(index);
    setShowModal(true);
  };

  return (
    <>
    <div class="container-xl px-4 mt-4">
<hr class="mt-0 mb-4"/>
<div class="row">
<div class="col-xl-4">

<div class="card mb-4 mb-xl-0">
<div class="card-header">Profile Picture</div>
<div class="card-body text-center">

<img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt/>

<div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>

<button class="btn btn-primary" type="button">Upload new image</button>
</div>
</div>
</div>
<div class="col-xl-8">

<div class="card mb-4">
<div class="card-header">Account Details</div>
<div class="card-body">
<form>

 <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">
                    Username (how your name will appear to other users on the site)
                  </label>
                  <input
                    className="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    value={userData.username}
                    onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                  />
                </div>

<div class="row gx-3 mb-3">

<div class="col-md-6">
<label className="small mb-1" htmlFor="inputFirstName">
                   first Name
                  </label>
                  <input
                    className="form-control"
                    id="inputFirstName"
                    type="text"
                    placeholder="Enter First Name"
                    value={userData.firstName}
                    onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                  /></div>

<div class="col-md-6">
<label className="small mb-1" htmlFor="inputLastName">
Last name
                  </label>
                  <input
                    className="form-control"
                    id="inputLastName"
                    type="text"
                    placeholder="Enter Last Name"
                    value={userData.lastName}
                    onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                  /></div>
</div>

<div class="row gx-3 mb-3">

<div class="col-md-6">
<label className="small mb-1" htmlFor="inputOrgName">
Organization name
                  </label>
                  <input
                    className="form-control"
                    id="inputOrgName"
                    type="text"
                    placeholder="Organization Name"
                    value={userData.orgName}
                    onChange={(e) => setUserData({ ...userData, orgName: e.target.value })}
                  /></div>

<div class="col-md-6">
<label className="small mb-1" htmlFor="inputLocation">
Location
                  </label>
                  <input
                    className="form-control"
                    id="inputLocation"
                    type="text"
                    placeholder="Enter your Location"
                    value={userData.location}
                    onChange={(e) => setUserData({ ...userData, location: e.target.value })}
                  /></div>
</div>

<div class="mb-3">
<label className="small mb-1" htmlFor="inputEmailAddress">
Email address
                  </label>
                  <input
                    className="form-control"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Enter your mail"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  /></div>

<div class="row gx-3 mb-3">

<div class="col-md-6">
<label className="small mb-1" htmlFor="inputPhone">
Phone number
                  </label>
                  <input
                    className="form-control"
                    id="inputPhone"
                    type="tel"
                    placeholder="Enter Phone no."
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  /></div>

<div class="col-md-6">
<label className="small mb-1" htmlFor="inputBirthday">
                   Birth Date
                  </label>
                  <input
                    className="form-control"
                    id="inputBirthday"
                    type="text"
                    placeholder="Enter Birth Date"
                    value={userData.birthday}
                    onChange={(e) => setUserData({ ...userData, birthday: e.target.value })}
                  />
</div>
</div>
<div class="row gx-3 mb-3">

<div class="col-md-6">
<label className="small mb-1" htmlFor="ssc">
SSC Percentage
                  </label>
                  <input
                    className="form-control"
                    id="ssc"
                    type="text"
                    placeholder="Enter SSC percentage"
                    value={userData.sscPercentage}
                    onChange={(e) => setUserData({ ...userData, sscPercentage: e.target.value })}
                  /></div>

<div class="col-md-6">
<label className="small mb-1" htmlFor="hsc">
HSC Percentage
                  </label>
                  <input
                    className="form-control"
                    id="hsc"
                    type="text"
                    placeholder="Enter Hsc percentage"
                    value={userData.hscPercentage}
                    onChange={(e) => setUserData({ ...userData, hscPercentage: e.target.value })}
                  /></div>
</div>
<div class="row gx-3 mb-3">
<div class="col-md-6">
<label className="small mb-1" htmlFor="cet">
                   Cet Percentile %
                  </label>
                  <input
                    className="form-control"
                    id="cet"
                    type="text"
                    placeholder="Enter Cet percentile"
                    value={userData.cetPercentile}
                    onChange={(e) => setUserData({ ...userData, cetPercentile: e.target.value })}
                  /></div>
<div class="col-md-6">
<label className="small mb-1" htmlFor="jee">
CET JEE Percentile
                  </label>
                  <input
                    className="form-control"
                    id="jee"
                    type="text"
                    placeholder="Enter Jee percentile"
                    value={userData.jeePercentile}
                    onChange={(e) => setUserData({ ...userData, jeePercentile: e.target.value })}
                  /></div>
<div class="mb-3">
<label className="small mb-1" htmlFor="achievement">
CET Achievements
                  </label>
                  <input
                    className="form-control"
                    id="achievement"
                    type="text"
                    placeholder="Enter your Extra Achievements"
                    value={userData.achievements}
                    onChange={(e) => setUserData({ ...userData, achievements: e.target.value })}
                  /></div>

</div>
<button class="btn btn-primary" type="button">Save changes</button>
</form>
</div>
</div>
</div>
</div>
</div>

    </>
  );
};

export default UserDashboard;
