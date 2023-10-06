import React, { useState, useEffect } from "react";
import { Container, Row, Button, Col, Card, Table ,Modal} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import '../cssUser/UserDashboard.css';


const UserDashboard = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [scholarship, setScholarship] = useState([]);
  const userEmail = localStorage.getItem("email");

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

  const [showModal, setShowModal] = useState(false);
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

<div class="mb-3">
<label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
<input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username"/>
</div>

<div class="row gx-3 mb-3">

<div class="col-md-6">
<label class="small mb-1" for="inputFirstName">First name</label>
<input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie"/>
</div>

<div class="col-md-6">
<label class="small mb-1" for="inputLastName">Last name</label>
<input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
</div>
</div>

<div class="row gx-3 mb-3">

<div class="col-md-6">
<label class="small mb-1" for="inputOrgName">Organization name</label>
<input class="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value="Start Bootstrap"/>
</div>

<div class="col-md-6">
<label class="small mb-1" for="inputLocation">Location</label>
<input class="form-control" id="inputLocation" type="text" placeholder="Enter your location" value="San Francisco, CA"/>
</div>
</div>

<div class="mb-3">
<label class="small mb-1" for="inputEmailAddress">Email address</label>
<input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com"/>
</div>

<div class="row gx-3 mb-3">

<div class="col-md-6">
<label class="small mb-1" for="inputPhone">Phone number</label>
<input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
</div>

<div class="col-md-6">
<label class="small mb-1" for="inputBirthday">Birthday</label>
<input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988"/>
</div>
</div>
<div class="row gx-3 mb-3">

<div class="col-md-6">
<label class="small mb-1" for="inputPhone">SSC Percentage</label>
<input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
</div>

<div class="col-md-6">
<label class="small mb-1" for="inputPhone">SSC Percentage</label>
<input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
</div>
</div>
<div class="row gx-3 mb-3">
<div class="col-md-6">
<label class="small mb-1" for="inputPhone">CET Percentile</label>
<input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
</div>
<div class="col-md-6">
<label class="small mb-1" for="inputPhone">JEE Percentile</label>
<input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
</div>
<div class="mb-3">
<label class="small mb-1" for="inputEmailAddress">Achievements</label>
<input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com"/>
</div>

</div>
<button class="btn btn-primary" type="button">Save changes</button>
</form>
</div>
</div>
</div>
</div>
</div>
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th>Scholarship Name</th>
              <th>Category</th>
              <th>Amount</th>
               <th>Status</th>      {/* add status to schema */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {scholarship?.map((item, index) => (
              <tr key={item._id}>
                <td>{item.scholarshipName}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
                {item.status === "Rejected" ? (<td><Button variant="danger">{item.status}</Button></td>) :item.status ==="Accepted" ?(<td><Button variant="success">{item.status}</Button></td>) : (<td><Button variant="warning" style={{width : "150px"}}>{item.status}</Button></td>)}
                {/* <td>{item.status}</td> */}
                { item.status === "Accepted" || item.status ==="Rejected" ? (
                  <></>
                ) :(<td>
                  <Button onClick={() => handleButtonClick(index)}>
                    View More
                  </Button>
                </td>)}
                {/* <td>
                 <Button onClick={() => handleButtonClick(index)}>
                   View More
                  </Button>
                </td> */}
                
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={showModal} onHide={() => setShowModal(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{scholarship[selected]?.scholarshipName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={3} className="modal-label">
                Amount:
              </Col>
              <Col sm={3}>{scholarship[selected]?.amount}</Col>
              <Col sm={2} className="modal-label">
                Category:
              </Col>
              <Col sm={3}>{scholarship[selected]?.category}</Col>              
            </Row>
            <br />
            <Row>
              <Col sm={3} className="modal-label">
                Bank Name:
              </Col>
              <Col sm={9}>{`${scholarship[selected]?.bankName} , ${scholarship[selected]?.branch}`}</Col>
            </Row>
            <br />
            <Row>
              <Col sm={3} className="modal-label">
                Income
              </Col>
              <Col sm={3}>{scholarship[selected]?.income}</Col>
              <Col sm={2} className="modal-label">
                Income proof:
              </Col>
              <Col sm={4}>{scholarship[selected]?.incomeProof}</Col>
            </Row>
            <br />
            <Row>
              <Col sm={3} className="modal-label">
                College Name:
              </Col>
              <Col sm={9}>{scholarship[selected]?.collegeName}</Col>
            </Row>
            <br />
            <Row>
              <Col sm={3} className="modal-label">
                UID:
              </Col>
              <Col sm={3}>{scholarship[selected]?.uid}</Col>
              <Col sm={3} className="modal-label">
                College Email Id:
              </Col>
              <Col sm={2}>{scholarship[selected]?.collegeEmail}</Col>
            </Row>
            <br />
            <Row>
              <Col sm={3} className="modal-label">
                Achievements:
              </Col>
              <Col sm={9}>{scholarship[selected]?.achievements}</Col>
            </Row>
            <br />
            <Row>
              <Col sm={3} className="modal-label">
                Certificates:
              </Col>
              <Col sm={9}>{scholarship[selected]?.certificates}</Col>
            </Row>
            <br />
            <Row>
              <Col sm={3} className="modal-label">
                LOR:
              </Col>
              <Col sm={9}>{scholarship[selected]?.lor}</Col>
            </Row>
            <br />
          </Container>
          {/* <p>Deadline: {data[selected]?.deadline}</p>
          <p>Last Date to Update Details: {data[selected]?.lastDateUpdate}</p>
          <p>Amount: {data[selected]?.amount}</p>
          <p>Eligibility: {data[selected]?.eligibility}</p>
          <p>Documents Required: {data[selected]?.DocumentsRequired}</p> */}
        </Modal.Body>
        <Modal.Footer>
          {/* <Link to={`/update-scholarship/${scholarship[selected]?._id}`}>
            <Button variant="primary" >Update</Button>
          </Link> */}
          <Button variant="danger"  onClick={handleShow}>Delete</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
        <Modal.Title>{scholarship[selected]?.scholarshipName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure You want to delete this Application?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </>
  );
};

export default UserDashboard;
