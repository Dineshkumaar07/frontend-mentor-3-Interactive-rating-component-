import React,{useState} from 'react'

import star from '../images/icon-star.svg'
import Thankyou from './Thankyou'


const Rating = () => {
  const [active, setActive] = useState(false)
  const [rating, setRating] = useState("");
  const Button = ({n}) => {
    
    const bstyle = "bg-dblue text-mgray h-11 w-11 rounded-full flex items-center justify-center hover:bg-mgray hover:text-white focus:bg-orange focus:text-white duration-150"
    return (
      <button className={bstyle} onClick={ ()=>{setRating(n)} }>{n}</button>
    )
  }
  return (
    <div>
      {!active &&     <div className='px-2 flex items-center justify-center  h-screen w-full font-overpass bg-vdblue overflow-hidden'>
      <div className='rounded-xl max-w-xl px-5 lg:w-1/4 md:w-1/2 grid  gap-5  bg-gradient-to-br from-dblue to-vdblue py-7'>
        <img src={star} alt="star" className='bg-dblue rounded-full p-3'/>
        <h1 className='text-3xl font-bold text-white'>How did we do?</h1>
        <p className='text-mgray text-lg'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <ul className='flex justify-between mb-4'>
            <li><Button n={1}/></li>
            <li><Button n={2}/></li>
            <li><Button n={3}/></li>
            <li><Button n={4}/></li>
            <li><Button n={5}/></li>
        </ul>
        <button className='py-2 bg-orange rounded-3xl text-white tracking-widest hover:bg-white hover:text-orange font-bold duration-200' onClick={()=>{setActive(true)}}>SUBMIT</button>
      </div>
    </div>}

    {active && <Thankyou rating={rating}/>}
    </div>



    
  )
}




export default Rating