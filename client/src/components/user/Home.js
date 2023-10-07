import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import scholarshipImage from '../../../../client/src/images/scholarship.jpg';
import addImg from '../../images/addImage.png';
import '../cssUser/Home.css';
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <section className="wrapper">
        <div className="container">
          <Banner/>
          <div className="grid-cols-2">
            <div
              className="grid-item-1"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              
              
              <div className="button-container1">
      <div className="button-wrapper1 btn11">
        <a href="/eligibles">
          <button className="btn view-more-btn" id="eligible-button">
            Eligible Scholarships
            <i className="ri-arrow-right-line" />
          </button>
        </a>
      </div>
      <div className="button-wrapper1 btn12">
        <a href="/scholarships">
          <button className="btn view-more-btn" id="view-button">
            View Scholarships
            <i className="ri-arrow-right-line" />
          </button>
        </a>
      </div>
    </div>
            </div>
          
          </div>
        </div>
      </section>
    <div className='rect'>
      <div className="rectangular-component rect">
        <div className="text-container">
          <p className="sen">
            <span class="sentence">
              Applying for <br />
              scholarships is overwhelming
            </span>
            <span class="sentence">
              <br />
              But without scholarships, your ability to go to college is at risk
            </span>
            <span class="sentence">
              <br />
              <br />
              ...............................................
            </span>
            <span class="sentence">
              <br />
              <br />
              <br />
              Students should be able to focus on their education rather than
              worrying about how to pay for it
            </span>
            <span class="sentence">
              <br />
              We know it’s not fair
            </span>
          </p>
        </div>
        <div className="image-container">
          <img className="addImg" src="https://scholarshipowl.com/_ipx/_/images/components/homePage/problemSection/problem-bg-s.svg" alt="Image123" />
        </div>
        </div>

      </div>

      <div id="scholarship-info">
        <h1
          style={{
            marginTop:"5vh",
            fontWeight:"bolder",
            fontSize:"50",
            textAlign: 'center',
            fontFamily: 'sans-serif',
            color: '#212529'
          }}
        >
          Your one-stop scholarship<br/> application system
        </h1>
        <br/>
        <div style={{ fontFamily: 'sans-serif', display: 'flex' }}>
            <img src="https://scholarshipowl.com/_ipx/fit_outside,s_795x815/images/components/homePage/featureSet1Section/girl.png" />
        <div style={{width:"40vw",marginLeft:"5vw",marginTop:"5vh",fontFamily:"sans-serif"}}>
          <div>
            <h3 style={{fontFamily:"sans-serif",fontWeight:"bold"}}>Personalized vetted scholarship matches</h3>
            <p style={{fontFamily:"sans-serif",fontSize:"18"}}>
              Get matched to scholarships that are most relevant to you. View
              scholarship credibility scores to know where to focus your time
              and energy.
            </p>
            <br/>
            <h3 style={{fontFamily:"sans-serif",fontWeight:"bold"}}>Apply without leaving the platform</h3>
            <p style={{fontFamily:"sans-serif",fontSize:"18"}}>
            The entire search, match and application process happens all in one place. You can even write, edit and proof your essays right in the platform!
            </p>
            <br/>
            <h3 style={{fontFamily:"sans-serif",fontWeight:"bold"}}>Receive customized recommendations</h3>
            <p style={{fontFamily:"sans-serif",fontSize:"18"}}>
            Our smart system utilizes AI to generate scholarship recommendations tailored just for you, based on your profile and habits.
            </p>
            <br/>
            <h3 style={{fontFamily:"sans-serif",fontWeight:"bold"}}>Quickly apply for similar scholarships</h3>
            <p style={{fontFamily:"sans-serif",fontSize:"18"}}>
            Each time you apply, our AI will suggest scholarships with a similar topic or requirement. You can even repurpose your essays to apply for them!
            </p>
            <br/>
            <h3 style={{fontFamily:"sans-serif",fontWeight:"bold"}}>Access to Application Deadlines and Reminders</h3>
            <p style={{fontFamily:"sans-serif",fontSize:"18"}}>
            Never miss a scholarship opportunity with deadline reminders tailored to your interests.  </p>
            </div>
          </div>
        </div>
      </div>

      <div id="statistics">
        <div className="container service-section">
          <h1>Statistics</h1>
          <Row>
            {/* <div className="grid-cols-4"> */}
            <Col>
              <div
                className="grid-col-item"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Card border="primary">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body>
                    <Card.Title> 214532</Card.Title>
                    <Card.Text>Total Applications</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div
                className="grid-col-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Card border="success">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body>
                    <Card.Title>53246 </Card.Title>
                    <Card.Text>Scholarships Awarded</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div
                className="grid-col-item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Card border="warning">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body>
                    <Card.Title>76565.98</Card.Title>
                    <Card.Text>Amount Disbursed</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <div
                className="grid-col-item"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <Card border="dark">
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body>
                    <Card.Title>100</Card.Title>
                    <Card.Text>Number of Scholarship Schemes</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            {/* </div> */}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
