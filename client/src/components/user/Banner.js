import React from 'react';
import '../cssUser/Banner.css'; // Create a CSS file for styling\
import '../cssUser/Home.css';

const Banner = () => {
  return (
    <>
    {/* <div className="banner column">
      <div className="rectangular-component">
        <div className="text-container">
          <p className='sen'>
            <span class="sentence">
              We know it’s not fair
            </span>
          </p>
        </div>
      <div className="column rectangular-component">
        <img src="https://www.scholarshipsgov.in/wp-content/uploads/2021/09/National_Merit_Scholarship-880x586-1.jpg" alt="Image 1" />
        <h2>Column 1</h2>
        <p>This is the content of column 1.</p>
      </div>
      <div className="column rectangular-component">
        <img src="https://www.scholarshipsgov.in/wp-content/uploads/2021/09/National_Merit_Scholarship-880x586-1.jpg" alt="Image 2" />
        <h2>Column 2</h2>
        <p>This is the content of column 2.</p>
      </div>

      </div>
    </div> */}
      <div className="container1">
      <div className="column1">
        <div className="box single-box box">Single Box</div>
      </div>
      <div className="column">
        <div className="box vertical-box " id='box11'> Vertical Box 1</div>
        <div className="box vertical-box" id='box12'>Vertical Box 2</div>
      </div>
    </div>
    </>
    
  );
};

export default Banner;
