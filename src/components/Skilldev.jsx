import React from "react";
import Skilldevdata from '../component data/Skilldevdata';
import { Link } from "react-router-dom";
function Skilldev() {
  return (
    <>
      {/* content start */}
      <section className="content1">
        <p class="animate__animated animate__pulse animate__delay-3s animate__slower animate__infinite	">
          Why Choose FICA Skill Development Institute?
        </p>
        <h4>
          {" "}
          <span>FICA</span> is an <span> ISO 9001:2015 certified</span> and{" "}
          <span>government-registered institute </span>
          focused on practical learning. Training programs are designed to match
          current industry needs with modern tools, affordable fees and a
          student-friendly environment.
        </h4>
      </section>

      {/* content end */}

      <section className="card-section">
        <div>
          {
            Skilldevdata.map((abc)=>{
              return(
                <section class="card-wrap">
            <div class="card-header" style={{background: abc.clr}}>
              <i>
                <img src={abc.img} alt="image not found" width="200px" />
              </i>
            </div>
            <div class="card-content">
              <h1 class="card-title">{abc.title}</h1>
              <p class="card-text">
                {abc.content}
              </p>
              <div style={{ textAlign: "center" }}>
                <Link to="/about"><button class="card-btn" style={{background: abc.clr}}>Read More</button></Link>
              </div>
            </div>
          </section>
              );
            })
          }
          
        
        </div>
      </section>
    </>
  );
}

export default Skilldev;
