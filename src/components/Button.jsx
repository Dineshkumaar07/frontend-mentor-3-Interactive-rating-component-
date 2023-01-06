import React,{useState} from 'react'

const Button = ({n}) => {
  const [n, setn] = useState("");
  const bstyle = "bg-dblue text-mgray h-11 w-11 rounded-full flex items-center justify-center hover:bg-mgray hover:text-white focus:bg-orange focus:text-white duration-150"
  return (
    <button className={bstyle} onClick={ ()=>{console.log(n)}}>{n}</button>
  )
}

export default Button