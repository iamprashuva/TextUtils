import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

 
function About(props) {
  return (
    <>
    <div className='container my-3'>
        <h1 style={{color:props.mode==="dark"?"white":"black"}}>About Us</h1>
        <p style={{color:props.mode==="dark"?"white":"black"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque vitae veniam modi, et quia, sit nobis mollitia consequuntur facilis, nulla perspiciatis obcaecati earum.</p>
         <p style={{color:props.mode==="dark"?"white":"black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, perferendis soluta earum totam minima tempora temporibus deserunt assumenda adipisci non nostrum, animi minus delectus natus laborum sint, nisi dolorum consectetur? Velit earum repudiandae voluptate. Quaerat vel molestiae praesentium rem quod, a voluptate optio. Cupiditate, rerum?</p>
    </div>
    <div className='container my-3'>
    <h2 style={{color:props.mode==="dark"?"white":"black"}}>Contact Us</h2>
      <div className='box'>
     <FontAwesomeIcon icon={faPhone} size="2x" style={{color:props.mode==="dark"?"white":"black"}}/>
     <h3 style={{color:props.mode==="dark"?"white":"black"}}>Phone Number</h3>
     <p style={{color:props.mode==="dark"?"white":"black"}}>44500, 44555</p>
      </div>
      <div className="box">
      <FontAwesomeIcon icon={faEnvelope} size="2x" style={{color:props.mode==="dark"?"white":"black"}} />
      <h3 style={{color:props.mode==="dark"?"white":"black"}}>Email Address</h3>
      <p style={{color:props.mode==="dark"?"white":"black"}}>textUtils@gmail.com</p>
      </div>
    </div>
 </>
  );
}

export default About
