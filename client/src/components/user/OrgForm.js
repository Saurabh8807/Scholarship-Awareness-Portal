import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import userRegister from "../../images/OrgFormImg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OrgForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ssc, setSsc] = useState("");
  const [hsc, setHsc] = useState("");
  const [cet, setCet] = useState("");
  const [jee, setJee] = useState("");
  const [percentage, setPercentage] = useState(""); // Changed from Percentage to percentage

  const PostData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/register", {
        name,
        email,
        ssc,
        hsc,
        cet,
        jee,
        percentage, // Changed from Percentage to percentage
      });
      if (res.data.success) {
        alert(res.data.message);
        navigate("/login");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error); // Changed to console.error for better error logging
      alert(`Something went wrong: ${error.message}`); // Added .message to error for better error message
    }
  };

  return (
    <>
      <section className="registration">
        <Container>
          <Row>
            <Col>
              <img
                style={{ height: "80vh", marginTop: "10vh", marginLeft: "-5vw", width: "50vw" }}
                src={userRegister}
                alt="User Registration"
              />
            </Col>
            <Col>
              <Form onSubmit={PostData} method="POST">
                <h2 style={{ textAlign: "center" }}>Eligibility Criteria</h2>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <label>Organization Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupSsc">
                  <label>SSC Percentage</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter SSC Percentage"
                    name="ssc"
                    value={ssc}
                    onChange={(e) => setSsc(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupHsc">
                  <label>HSC Percentage</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter HSC Percentage"
                    name="hsc"
                    value={hsc}
                    onChange={(e) => setHsc(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupCet">
                  <label>CET Percentage</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter CET Percentage"
                    name="cet"
                    value={cet}
                    onChange={(e) => setCet(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupJee">
                  <label>JEE Percentage</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter JEE Percentage"
                    name="jee"
                    value={jee}
                    onChange={(e) => setJee(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPercentage">
                  <label>Percentage of Scholarship</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter Percentage of Scholarship"
                    name="percentage"
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OrgForm;
