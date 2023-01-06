import React from 'react'
import i from '../images/illustration-thank-you.svg'

const Thankyou = ({rating}) => {
    return (
        <div className='px-3 flex items-center justify-center  h-screen w-full font-overpass bg-vdblue overflow-hidden'>
            <div className='rounded-xl max-w-xl px-5 lg:w-1/4 md:w-1/2  grid  gap-5  bg-gradient-to-br from-dblue to-vdblue py-7 place-items-center'>
                <img src={i} alt="bg" />
                <p className='text-orange bg-dblue rounded-xl text-center text-xs px-2 py-1 '>You selected {rating} out of 5</p>
                <h1 className='text-white text-2xl font-bold'>Thank you!</h1>
                <p className='text-mgray ml-2 text-center'> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </div>
      )
}

export default Thankyou