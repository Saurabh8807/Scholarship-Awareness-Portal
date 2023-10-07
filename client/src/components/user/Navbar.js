import React, { useState, useContext, useEffect } from 'react';
import { Button, Form, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';
import { UserContext } from '../../context/auth';
import '../cssUser/Navbar.css';
import logo from '../../images/logo.png';
import altLogo from '../../images/alt_logo.png'; // Add an alternative logo image

const Navbar = () => {
  const { loggedIn, setLoggedIn, user, setUser, adminLoggedIn, setAdminLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route location

  const handleLogout = async () => {
    alert('Logged Out Successfully');
    navigate('/');
    setUser(null);
    setLoggedIn(false);
    setAdminLoggedIn(false);
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    // refresh page after submit is done
    window.location.reload();
  };

  const [navShow, setNavShow] = useState(false);
  const [dynamicLogo, setDynamicLogo] = useState(logo); // Initialize with default logo

  useEffect(() => {
    // Update the logo based on the current route
    if (location.pathname === '/OrgLogin' || location.pathname === '/OrgRegister') {
      setDynamicLogo(altLogo); // Set an alternative logo for the 'scholarships' route
    } else {
      setDynamicLogo(logo); // Set the default logo for other routes
    }
  }, [location.pathname]);

  return (
    <>
      <header className="container header">
        {/* ==== NAVBAR ==== */}
        <nav className="nav">
          <div className="logo" data-aos="fade-down" data-aos-duration="100">
            {/* Link to the homepage or use any other route */}
            <a href="/">
              <img src={dynamicLogo} alt="Scholarix Logo" /> {/* Use dynamicLogo */}
            </a>
          </div>

          <div className="nav_menu" id="nav_menu">
            <button className="close_btn" id="close_btn">
              <i className="ri-close-fill" />
            </button>
            <ul className="nav_menu_list">
              {!adminLoggedIn ? (
                <li
                  className="nav_menu_item"
                  data-aos="fade-down"
                  data-aos-duration="200"
                >

                  <a
                    href="/"
                    className="nav_menu_link "
                    style={{ textDecoration: 'none' }}
                    >
                    Home
                  </a>
                    
                </li>
              ) : (
                <></>
              )}

              {!adminLoggedIn ? (
                <li
                  className="nav_menu_item"
                  data-aos="fade-down"
                  data-aos-duration="400"
                >
                  <a
                    href="/scholarships"
                    className="nav_menu_link"
                    style={{ textDecoration: 'none' }}
                  >
                    Scholarships
                  </a>
                </li>
              ) : (
                <></>
              )}
              {!adminLoggedIn ? (
                <li
                  className="nav_menu_item"
                  data-aos="fade-down"
                  data-aos-duration="600"
                >
                  <a
                    href="/scholarship_information"
                    className="nav_menu_link"
                    style={{ textDecoration: 'none' }}
                  >
                    Information
                  </a>
                </li>
              ) : (
                <></>
              )}
              {!adminLoggedIn ? (
                <li
                  className="nav_menu_item"
                  data-aos="fade-down"
                  data-aos-duration="800"
                >
                  <a
                    href="/contact"
                    className="nav_menu_link"
                    style={{ textDecoration: 'none' }}
                  >
                    Contact Us
                  </a>
                </li>
              ) : (
                <></>
              )}

              {loggedIn ? (
                <li
                  className="nav_menu_item"
                  data-aos="fade-down"
                  data-aos-duration="800"
                >
                  <a
                    href="/user-dashboard"
                    className="nav_menu_link"
                    style={{ textDecoration: 'none' }}
                  >
                    Profile
                  </a>
                </li>
              ) : (
                <></>
              )}

              <li
                className="nav_menu_item"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                {!loggedIn && !adminLoggedIn ? (
                  <button className="btn btn-primary-outline">
                    <NavDropdown title="Login" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/Question">
                        <i className="ri-account-circle-line" />
                        <span> User</span>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/admin_login">
                        <i className="ri-admin-fill" />
                        <span> Admin</span>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </button>
                ) : (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                )}
              </li>
            </ul>
          </div>
          <button
            className="toggle_btn"
            id="toggle_btn"
            onClick={() => setNavShow(true)}
          >
            <i className="ri-menu-line" />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
