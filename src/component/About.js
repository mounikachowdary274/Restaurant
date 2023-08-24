import React from 'react'
import about_background_image from '../Assets/about-background-image.png'
import about_background from '../Assets/about-background.png'
import {BsFillPlayCircleFill} from 'react-icons/bs'


export default function About() {
  return (
    <div class="about-section-container">
      <div className="about-background-image-container">
        <img src={about_background} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={about_background_image} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className='primary-subheading'>About</p>
        <h1 className='primary-heading'>About Food is an Important Part of a Balanced Diet</h1>
        <p className='primary-text'>lorem ipsum sit amet consectetur.Non tincidunt magna nonetelit.Dolar turpis molestie dui magins facilisis quam</p>
        <p>Non tincidunt magna non et elit.Dolar turpis molestie dui magnis facilisis at fringilla quam</p>
        <div className="about-buttons-container">
            <button className='secondary-button'>Learn More</button>
            <button className="watch-video-button"><BsFillPlayCircleFill/>Watch Video</button>
        </div>
      </div>
    </div>
  )
}
