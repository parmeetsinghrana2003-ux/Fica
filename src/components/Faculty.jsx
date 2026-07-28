import React from "react";
import data from "../component data/Facultydata";
function Faculty() {
  return (
    <>
      <section class="content1">
        <p class="animate__animated animate__bounceIn animate__delay  animate__slow animate__infinite	">
          Our Expert Faculty
        </p>
        <h4>
          At Federal Institute of Computer Application (FICA), our experienced
          faculty members play a vital role in student success. Each trainer
          specializes in their respective domain such as computer software,
          Tally, programming languages, web development, and hardware solutions.
          Our teachers focus on practical learning, individual guidance, and
          career-oriented training to help students gain confidence and
          job-ready skills.
        </h4>
      </section>

      <section class="faculty_card">
        <section class="sectionforflex">
          {/* card start */}
          <section className="row">
            {data.map((abc, index) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div class="faculty_wrapper">
                    <div class="card front-face">
                      <img src={abc.img} />
                    </div>
                    <div class="card back-face w-100">
                      <img src={abc.img} />
                      <div class="info">
                        <div class="title1">
                          <span>{abc.name}</span> <br />
                          {abc.tech}
                        </div>
                        <p>{abc.content}</p>
                        <ul>
                          <a href="#">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-youtube"></i>
                          </a>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* card end */}
          </section>
        </section>
      </section>
    </>
  );
}

export default Faculty;
