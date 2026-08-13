import React from 'react'

function Mainbranchmap() {
  return (
     <div className="embed-map-responsive">
      <div className="embed-map-container">
        <iframe
          className="embed-map-frame"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=fica%20institute&t=h&z=17&ie=UTF8&iwloc=B&output=embed"
          title="FICA Institute Location"
        />
      </div>
      <center><h1>Head Office -FICA RISHIKESH</h1></center>
    </div>
  )
}

export default Mainbranchmap
