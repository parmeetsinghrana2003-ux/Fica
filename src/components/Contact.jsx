import axios from 'axios';
import React, { useState } from 'react'

function Contact() {

  const courses = [
    "Computer Basics (CCA)",
    "Tally Prime with GST",
    "Advance Diploma in Computer Application (ADCA)",
    "Programming & Language Course",
    "Web Designing Course",
    "Desktop Publishing (DTP)",
    "Digital Marketing",
    "Graphic Design",
    "Python Course",
    "Hindi / English Typing",
    "Spoken English",
  ];


   const [user, setUser]= useState({
          name:'',
          email:'',
          num:'',
          sc:'',
          // course:'',
          comment:'',
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
                   "http://localhost/Fica/Form2.php",user
              );
              alert(li.data.message);
              setUser({
                  name:"",
                  email:"",
                  num:"",
                  sc:'',
                  // course:'',
                  comment:'',
              });
  
          }
          catch (err) {
        alert("Registration Failed");
        console.log(err);
      }
  
      };
  return (
    <>
    <section class="coursediv">
  <div class="coursediv1">
    <h3>Connect with Us or Drop By Today</h3>
    <p>Feel empowered to take the next step towards your educational journey. Reach out to us through our student contact form or visit our institute for further assistance.</p><br />
    <h3>Federal Institute of Computer Application (FICA)</h3>
    <h4>Head Office</h4>
    <p>1st Floor, Maa Bhagwati Complex, Gali Number 3, near Maa Darshani photo studio, Suman Vihar, Bapu Gram, IDPL Colony, Rishikesh, Uttarakhand
Pin Code :- 249202</p>
<h4>Branch</h4>
<p>Khadri Road Purshotam Farm, Near Paras Creation Shyampur,Rishikesh, Uttarakhand
Pin Code :- 249204</p>
<h4>Phone Number</h4>
<p>9999226750 , 9582630581 , 8791996750</p>
<h4>Support</h4>
<p>enquiry@ficainstitute.com, ficainstitute@gmail.com</p>
<h4>Follow Us</h4>
<ul>
               <a href="#"><i class="fab fa-facebook-f"></i></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-youtube"></i></a>
            </ul>
  </div>
  <div class="coursediv2">
    <section class="coursediv2sec1">
    <h3>Student Course Enquiry Form</h3>
    <p>Please fill in the details below. Our admission team will contact you shortly with complete course information.</p>
      </section>  


      
    <form  onSubmit={formsubmit}>
      <h1>Full Name *</h1>
      <input type="text" placeholder="Enter Your Full Name" name='name' value={user.name} onChange={change} required />
      <h1>Email Address *</h1>
      <input type="text" placeholder="Enter your Email Address" name='email' value={user.email} onChange={change} required/>
      <h1>Mobile Number *</h1>
      <input type="text" placeholder="Enter 10-digit Mobile Number" name='num' value={user.num} onChange={change} required maxlength="10"  pattern="[0-9]{10}"/>
      <h1>School / College (Optional)</h1>
      <input type="text" placeholder="Your School and College Name" name='sc' value={user.sc} onChange={change} required/>
      {/* <h1>Course You Are Interested In *</h1> */}
       {/* <select
        value={course}
        name='course'
        onChange={change}
        required >
        <option value={user.course}  >-- Select a Course --</option>

        {courses.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select> */}
      <h1>Your Message *</h1>
      <textarea rows="6" cols="60" id="commentbox" name='comment' value={user.comment}  onChange={change} required ></textarea>
      <center><button> Submit</button></center>
    </form>
  </div>
</section>
    </>
  )
}

export default Contact
