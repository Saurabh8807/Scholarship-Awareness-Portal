import React, { useState } from 'react';
import OrgHorizon from '../../images/OrgHorizon.png'
import shobhit from '../../images/shobhit.png'
import '../cssUser/OrgDash.css';

const OrgDash = () => {
 

  return (
    <div>
    <div className="rectangular-component11">
        <div className="text-container11">
          <p className="sen11">
            <span class="sentence11">
            Generate 
            <br/>Authentic
            <br/> Gen Z Leads 
            <br/>Using 
            <br/>Scholarships
            </span>
            <span class="sentence12">
                <br/>
            Unlock the power of Gen Z through scholarships, effortlessly generating reliable and trustworthy leads.
            </span>
        
          </p>
        </div>
        <button
                className="btn view_more_btn"
                style={{
                    height:"10vh",
                    marginBottom:"-4vh",
                    marginTop:"5vh",
                    marginLeft:"5vw",
                    backgroundColor: '#335eea',
                    color: '#fff',
                    width: '200px',
                    borderRadius:"20px"
                }}
                >
                Book Demo
                
                  </button>
        <div className="image-container11">
          <img className="addImg" src={shobhit} alt="Image123" />
        </div>
      </div>
      <div className="image-container21">
          <img className="addImg" src={OrgHorizon} alt="Image123" />
        </div>

    </div>
  );
};

export default OrgDash;
