import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliveryMealsImage from '../Assets/delivery-image.png'



export default function Work() {
    const workInfo = [
        {
            Image : PickMeals,
            title :"Pick Meals",
            text : "Lorem ipsum dolar sit amet consectetur.Maecenas orci et  duis elementum interdum facilisi bibendum"
        },
        {
            Image : ChooseMeals,
            title :"Choose How Often",
            text : "Lorem ipsum dolar sit amet consectetur.Maecenas orci et  duis elementum interdum facilisi bibendum"
        },
        {
            Image : DeliveryMealsImage,
            title :"Fast Deliveries",
            text : "Lorem ipsum dolar sit amet consectetur.Maecenas orci et  duis elementum interdum facilisi bibendum"
        },

    ]
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>Lorem ipsum dolar sit amet consectetur.Non tincidunt magna non et elit.Dolar turpis molestie dui magnis facilisis at frangilla quam.</p>
        </div>
        <div className="work-section-bottom">
            {
                workInfo.map((data)=>(
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.Image} alt="" />
                        </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
