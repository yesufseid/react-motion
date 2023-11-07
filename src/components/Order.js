import React,{useState} from 'react';
import {motion} from "framer-motion"
import { useEffect } from 'react';

const ContainerVariant={
  hidden:{
    x:"100vw",
    opacity:0
  },
  visble:{
    x:0,
    opacity:1,
    transition:{
      mass:0.4,
      damping:8,
      type:"spring",
      when: "beforeChildren",
      staggerChildren:2,
      }
  },
  exit:{
    x:'-100vw',
    transition:{
     ease:'easeInOut'
    }
 }
}
const childeVariant={
  hidden:{
    opacity:0
  },
  visble:{
    opacity:1
  }
}
const Order = ({ pizza ,setShowmodal}) => {
  useEffect(()=>{
    setTimeout(()=>{
      setShowmodal(true)
    },5000)
  },[setShowmodal])
  return (
    <motion.div className="container order"
     variants={ContainerVariant}
     initial="hidden"
     animate="visble"
     exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childeVariant}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childeVariant}>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;