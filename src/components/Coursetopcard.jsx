import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import courses from '../component data/Comcoursedata';

function Coursetopcard() {
   
  const { id } = useParams();
  const [openIndex, setOpenIndex] = useState(null);

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  return (
    <>
    
    <section class="heading">
    <div>
  <h1>{course.heading}</h1>
  </div>
</section>


<div className='coursedetailmain'>

  {/* first div */}
<section className='coursedetail'>
<img src={course.img} alt="IMAGE NOT FOUND"/>
<h1>{course.title}</h1>

<section className='coursedetail1'>
  <p dangerouslySetInnerHTML={{__html:course.p1}} />
   <p dangerouslySetInnerHTML={{__html:course.p2}}/>
    <p dangerouslySetInnerHTML={{__html:course.p3}}/>
</section>


<div  className='coursedetail2'>
    <h4>Course Overview</h4>
    <h4><span>|</span>Features</h4>
    <h4><span>|</span> Admission Info</h4>
</div>


<h3>Instructor</h3>
<section className='fac'>
  <div className='fac1'><img src={course.fimg} alt="image not found" /></div>
  <div className='fac2'>
    <h3 dangerouslySetInnerHTML={{__html: course.fname}}/>
    <p dangerouslySetInnerHTML={{__html:course.fabout}}/>
  </div>
</section>


<div className='overview' >
  <h3>Course Overview</h3>
  <p dangerouslySetInnerHTML={{ __html: course.cp1 }}/>
  <p dangerouslySetInnerHTML={{ __html: course.cp2 }}/>
  <p dangerouslySetInnerHTML={{ __html: course.cp3 }}/>
  <p dangerouslySetInnerHTML={{ __html: course.cp4 }}/>
</div>


<h3>Features of this Course</h3>
<div className='feature'>
{/* heading 1 */}
  <h4>{course.heading1}</h4>
{
  course.head1?.map((abc, index) => (
    <div className="course-point" key={index}>
      <p>
        <i class="fa-regular fa-circle-right" style={{color: "rgb(0, 0, 0)"}}/>
     <span dangerouslySetInnerHTML={{__html:abc}}/>
      </p>
    </div>
  ))
}
{/* heading2 */}
  <h4>{course.heading2}</h4>

{
  course.head2?.map((abc, index) => (
    <div className="course-point" key={index}>

      <p>
        <i class="fa-regular fa-circle-right" style={{color: "rgb(0, 0, 0)"}}/>
        <span dangerouslySetInnerHTML={{__html:abc}}/>
      </p>
    </div>
  ))
}
{/* heading 3 */}
  <h4>{course.heading3}</h4>
  {
  course.head3?.map((abc, index) => (
    <div className="course-point" key={index}>
      <p>
        <i class="fa-regular fa-circle-right" style={{color: "rgb(0, 0, 0)"}}/>
     <span  dangerouslySetInnerHTML={{__html:abc}}/>
      </p>
    </div>
  ))
}

<p style={{marginTop:"30px", textAlign:"justify", fontWeight:"600"}}>{course.lastcontent}</p>
</div>
</section>


{/* second div */}
<section className='coursedetailmain2'>
  <div>
    <h1 >{course.cardhead}</h1>
  <h4><i class="fa-solid fa-circle-arrow-right" style={{color: "rgb(0, 0, 0)"}}/>{course.time}</h4>
  <h4><i class="fa-solid fa-circle-arrow-right" style={{color: "rgb(0, 0, 0)"}}/>{course.daytime}</h4>
 
  {
  course.info?.map((abc) => (
    
    <h4> <i class="fa-solid fa-circle-arrow-right" style={{color: "rgb(0, 0, 0)"}}/>{abc}</h4>
  ))
}
  <h3>Limited Seat Available- Enroll early</h3>
  <Link to="/contact">
  <center><button>Enroll Now</button></center>
  </Link>
  </div>
</section>

</div>
{/* faq section */}
<section className='faq'>

<center>
  <h1>Frequently Asked Questions (Programming & Language Course)</h1>
</center>

{
  course.faq?.map((item, index) => (
    <div className="faq-item" key={index}>

      <div
        className="faq-question"
        onClick={() =>
          setOpenIndex(openIndex === index ? null : index)
        }
      >
        <h3>{item.question}</h3>

        <span>
          {openIndex === index ? "x" : "+"}
        </span>

      </div>


      {
        openIndex === index && (
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        )
      }

    </div>
  ))
}

</section>








    </>
  )
}

export default Coursetopcard
