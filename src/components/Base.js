import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'


const ContainerVariant={
  hidden:{
    x:"100vw",
    opacity:0
  },
  visble:{
    x:0,
    opacity:1,
    transition:{
      delay:1.5,
      type:"spring",}
  },
  exit:{
    x:'-100vw',
    transition:{
     ease:'easeInOut'
    }
 }
}
const nextVariant={
  hidden:{
    x:'-100vw'
  },
  visble:{
    x:0,
    transition:{
      delay:0.2,
      type:"spring",
      stiffness:120}
  }

}

const buttonVariants={
  hover:{
    scale:1.1,
    textShadow:"0px 0px 8px rgb(255,255,255)",
    boxShadow:"0px 0px 8px rgb(255,255,255)",
    transition:{
      duration:0.3,
      yoyo:Infinity
    }
  }
}
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
    variants={ContainerVariant}
      initial="hidden"
      animate="visble"
      exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover={{
              scale:1.3 ,originX:0,color:"#f8e112"
             }}
             transition={{type:"spring", stiffness:300}}
            >
            
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        variants={nextVariant}
        >
          <Link to="/toppings"

          >
            <motion.button
            variants={buttonVariants}
             whileHover="hover"
            >
              Next
              </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;