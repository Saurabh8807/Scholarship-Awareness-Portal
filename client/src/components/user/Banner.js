import React from "react";
import "../cssUser/Banner.css"; // Create a CSS file for styling\
// import '../cssUser/Home.css';
import { useNavigate , Link} from "react-router-dom";

const Banner = () => {
  // const navigate = useNavigate();
  // const redirectToEligibility = () => {
  //   navigate("/eligibles");
  // };

  // const redirectToScholarship = () => {
  //   navigate("/Scholarship");
  // };
  return (
    <>
      <div className="rectangular-component31">
        <div className="text-container31">
          <p className="sen31">
            <span class="sentence31">
              We believe that education should be affordable and accessible to
              all.
            </span>
            <span class="sentence13">
              <br />
              Through our AI-powered tools and technology, ScholarshipOwl
              connects students to the right scholarships that enable them to
              graduate debt-free.
            </span>
          </p>
        </div>
        {/* <Link to="/eligibles">
          
          
        <button
          className="btn view_more_btn"
          // onClick={redirectToEligibility}
          style={{
            height: "12vh",
            fontSize: "20px",
            marginBottom: "-4vh",
            marginTop: "5vh",
            marginLeft: "5vw",
            backgroundColor: "#335eea",
            color: "#fff",
            width: "235px",
            borderRadius: "20px",
          }}
          >
          Eligible Scholarship
        </button>
          </Link>
          <Link to="/Scholarship">

        <button
          className="btn view_more_btn"
          // onClick={redirectToScholarship}
          style={{
            height: "12vh",
            marginBottom: "-4vh",
            fontSize: "20px",
            marginTop: "5vh",
            marginLeft: "5vw",
            backgroundColor: "#335eea",
            color: "#fff",
            width: "235px",
            borderRadius: "20px",
          }}
          >
          View Scholarship
        </button>
            </Link> */}
            <div
              className="grid-item-1"
              data-aos="fade-up"
              data-aos-duration="800"
            >
            </div>

        <div className="image-container41">
          <img
            className="addImg31"
            src="https://scholarshipowl.com/_ipx/_/images/components/about-us/megaphone-girl.png"
            alt="Image123"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
