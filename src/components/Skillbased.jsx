import React from "react";
import data from '../component data/Skillbased';
import { Link } from "react-router-dom";
function Skillbased() {
  return (
    <>
      {/* content start */}
      <section class="content1 content11">
        <p class="animate__animated animate__bounceIn animate__delay  animate__slow animate__infinite	">
          Explore Skill-Based Computer Courses
        </p>
        <h4>
          At <span> FICA Skill Development Institute,</span> students can
          explore a wide range of <span>career-focused computer programs</span>{" "}
          designed for today's digital requirements. Courses include ADCA, CCA,
          Tally Prime with GST, programming, web designing and digital
          marketing, along with language and typing skills for confidence
          building.
        </h4>
      </section>
      {/* content end */}

      {/* card */}
      <section class="background2">
        <div class="wrapper">
          {
            data.map((abc)=>{
            return(
                <div class="single-card">
            <div class="img-area">
              <img src={abc.img} alt="IMAGE NOT FOUND" />
            </div>

            <div class="info">
              <h3>{abc.heading}</h3>
            </div>
          </div>
            );
          })
          }
       
        </div>
           <div class="card4">
      <Link to="/course"><center><br /> <button class="animate__animated animate__flash animate__delay  animate__slower animate__infinite"><a
            href="">More Courses</a></button></center></Link>
    </div>
        
      </section>
    </>
  );
}

export default Skillbased;
