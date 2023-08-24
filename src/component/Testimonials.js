import React from 'react'
import  ProfilePic from '../Assets/john-doe-image.png'
import {AiFillStar} from 'react-icons/ai';
export default function Testimonials() {
  return (
    <div className='work-section-wrapper'>
       <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className='primary-text'>Lorem ipsum dolar sit amet consectetur.Non tincidunt magna non et elit.Dolar turpis molestie dui magnis facilisis at frangilla quam.</p>
       </div>
    <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="no-image" />
         <p>Lorem ipsum dolar sit amet consectetur.Non tincidunt magna non et elit.Dolar turpis molestie dui magnis facilisis at frangilla quam.</p>
         <div className="testimonials-stars-container">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
         </div>
         <h1>John Doe</h1>
    </div>
    </div>
  )
}
