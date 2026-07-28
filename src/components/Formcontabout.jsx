import axios from 'axios';
import React, { useState } from 'react'

function Formcontabout() {
   const [user, setUser]= useState({
          name:'',
          email:'',
          num:'',
      });
      const change=(e)=> {
          setUser({
              ...user,
              [e.target.name]: e.target.value,
          });
      };
  
      const formsubmit = async(e)=>{
          e.preventDefault();
  
          try{
              const li= await axios.post(
                   "http://localhost/Fica/Form.php",user
              );
              alert(li.data.message);
              setUser({
                  name:"",
                  email:"",
                  num:"",
              });
  
          }
          catch (err) {
        alert("Registration Failed");
        console.log(err);
      }
  
      };
  
  return (
    <>
    <section class="formsection">
    <section class="formsection1">
        <h2>What Makes FICA a Trusted Computer Training Institute in Rishikesh</h2>
        <h3>Experienced Faculty:-</h3>
        <p>Our team of <span>highly qualified and experienced faculty </span> brings deep industry knowledge and practical exposure into the classroom. At <span> FICA Computer Training Institute in Rishikesh,</span> we focus on hands-on learning to ensure students gain <span>real-world computer skills</span> and confidence.</p><br />
        <h3>Wide Range of Computer Courses:-</h3>
        <p>We offer a diverse range of <span>computer application courses</span> designed for beginners as well as advanced learners. Our popular programs include <span>ADCA, CCA, Web Designing, Digital Marketing, Programming & Languages, Tally Prime </span> and other <span>job-oriented computer courses.</span></p> <br />
        <h3>Commitment to Quality Computer Education:-</h3>
        <p><span>FICA Computer Institute</span> is committed to delivering <span>high-quality computer education</span> that empowers students to succeed in today's digital world. We create a <span>supportive learning environment </span>that encourages innovation, skill development, and career growth. Our industry-aligned curriculum helps learners stay updated with <span>latest technologies and trends.</span> </p><br />
    </section>
    <section class="formsection2">
        <h2>Ready to take the next step?</h2>
        <p>Contact <span>FICA Computer Institute in Rishikesh </span>today and discover how our <span>professional computer courses</span>  can open doors to exciting <span>career opportunities </span>in the IT and digital sector.</p>
      
      
       {/* <!-- form start --> */}
        <form class="form22"  onSubmit={formsubmit}>
        <h3>Submit Your Details</h3>
        <h4>Full Name *</h4>
        <input type="text" placeholder="Name" name='name' value={user.name} onChange={change} required/>
        <h4>Email Address *</h4>
        <input type="text" placeholder="Email Address"  name='email' value={user.email} onChange={change} required/>
        <h4>Mobil Number *</h4>
        <input type="text" placeholder="Phone Number"  name='num' value={user.num} onChange={change} required  maxlength="10"  pattern="[0-9]{10}"/><br />
        <center><button> Submit</button></center>
    </form>
    {/* <!-- form end --> */}


    </section>
</section>
    </>
  )
}

export default Formcontabout
