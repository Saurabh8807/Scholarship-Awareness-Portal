import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import '../cssUser/UserDashboard.css';

const UserDashboard = () => {
  const [userData, setUserData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    orgName: '',
    location: '',
    email: '',
    phone: '',
    birthday: '',
    sscPercentage: '',
    hscPercentage: '',
    cetPercentile: '',
    jeePercentile: '',
    achievements: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios
        .put('http://localhost:8080/profile-update', userData)
        .then((response) => {
          setUserData(response.data);
        });

      if (response.status === 201) {
        console.log('Profile data saved successfully');
      } else {
        console.error('Error saving profile data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const userEmail = localStorage.getItem('email');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/get-user-data/${userEmail}`
        );
        setUserData(response.data.userData);
      } catch (error) {
        console.error(error);
        alert('Something went wrong');
      }
    };
    fetchUserData();
  }, [userEmail]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container-xl px-4 mt-4">
          <hr className="mt-0 mb-4" />
          <div className="row">
            <div className="col-xl-4">
              <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src="http://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="profile"
                  />

                  <div className="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>

                  <button className="btn btn-primary" type="button">
                    Upload image
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card mb-4">
                <div className="card-header">Account Details</div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="inputUsername">
                        Username (how your name will appear to other users on
                        the site)
                      </label>
                      <input
                        className="form-control"
                        id="inputUsername"
                        type="text"
                        placeholder="Enter your username"
                        value={userData.username}
                        onChange={(e) =>
                          setUserData({ ...userData, username: e.target.value })
                        }
                      />
                    </div>

                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputFirstName">
                          first Name
                        </label>
                        <input
                          className="form-control"
                          id="inputFirstName"
                          type="text"
                          placeholder="Enter First Name"
                          value={userData.firstName}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              firstName: e.target.value
                            })
                          }
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputLastName">
                          Last name
                        </label>
                        <input
                          className="form-control"
                          id="inputLastName"
                          type="text"
                          placeholder="Enter Last Name"
                          value={userData.lastName}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              lastName: e.target.value
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputOrgName">
                          Organization name
                        </label>
                        <input
                          className="form-control"
                          id="inputOrgName"
                          type="text"
                          placeholder="Organization Name"
                          value={userData.orgName}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              orgName: e.target.value
                            })
                          }
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputLocation">
                          Location
                        </label>
                        <input
                          className="form-control"
                          id="inputLocation"
                          type="text"
                          placeholder="Enter your Location"
                          value={userData.location}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              location: e.target.value
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="inputEmailAddress">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        id="inputEmailAddress"
                        type="email"
                        placeholder="Enter your mail"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputPhone">
                          Phone number
                        </label>
                        <input
                          className="form-control"
                          id="inputPhone"
                          type="tel"
                          placeholder="Enter Phone no."
                          value={userData.phone}
                          onChange={(e) =>
                            setUserData({ ...userData, phone: e.target.value })
                          }
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputBirthday">
                          Birth Date
                        </label>
                        <input
                          className="form-control"
                          id="inputBirthday"
                          type="text"
                          placeholder="Enter Birth Date"
                          value={userData.birthday}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              birthday: e.target.value
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="ssc">
                          SSC Percentage
                        </label>
                        <input
                          className="form-control"
                          id="ssc"
                          type="text"
                          placeholder="Enter SSC percentage"
                          value={userData.sscPercentage}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              sscPercentage: e.target.value
                            })
                          }
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="hsc">
                          HSC Percentage
                        </label>
                        <input
                          className="form-control"
                          id="hsc"
                          type="text"
                          placeholder="Enter Hsc percentage"
                          value={userData.hscPercentage}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              hscPercentage: e.target.value
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="cet">
                          Cet Percentile %
                        </label>
                        <input
                          className="form-control"
                          id="cet"
                          type="text"
                          placeholder="Enter Cet percentile"
                          value={userData.cetPercentile}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              cetPercentile: e.target.value
                            })
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="jee">
                          CET JEE Percentile
                        </label>
                        <input
                          className="form-control"
                          id="jee"
                          type="text"
                          placeholder="Enter Jee percentile"
                          value={userData.jeePercentile}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              jeePercentile: e.target.value
                            })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="achievement">
                          CET Achievements
                        </label>
                        <input
                          className="form-control"
                          id="achievement"
                          type="text"
                          placeholder="Enter your Extra Achievements"
                          value={userData.achievements}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              achievements: e.target.value
                            })
                          }
                        />
                      </div>
                    </div>
                    <button className="btn btn-primary" type="submit">
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserDashboard;
