import React, { useState } from 'react'
import axios from "axios";
function Formcont() {
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
  <section class="form-section">
    <div class="div11">
      <h3  className='head1'>Begin your skill-building journey this
         <span>February</span> at 
         <span >FICA</span></h3>
      <h3 className='head2'><span>Shyampur Branch & Head Office.</span></h3>
      <h1>Early Admission Benefit</h1>
      <h5>Limited Seats are Available</h5>
    </div>




    <div class="div12">
      <form onSubmit={formsubmit}>
        <h3>*Submit Your Details*</h3>
        <h4>Full Name *</h4>
        <input type="text" placeholder="Name" name='name' value={user.name} onChange={change} required/>
        <h4>Email Address *</h4>
        <input type="text" placeholder="Email Address" name='email' value={user.email} onChange={change} required/>
        <h4>Mobil Number *</h4>
        <input type="tel" placeholder="Phone Number" name='num' value={user.num} onChange={change} required maxlength="10"  pattern="[0-9]{10}"/>
        <button> Submit</button>
      </form>

    </div>
  </section>
  </>
  )
}

export default Formcont;
