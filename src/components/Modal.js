import React,{useState} from 'react';
import {motion,AnimatePresence} from "framer-motion"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Backdrop={
    hidden:{
        opacity:0
    },
    visble:{
        opacity:1
    }
}
const modal={
    hidden:{
        opacity:0,
        y:"-100vh"
    },
    visble:{
        opacity:1,
        y:"200px",
        transition:{
             delay:0.5
        }
    }
}
const Modal=({showModal,setShowmodal})=>{
    return(
        <AnimatePresence exitBeforeEnter>
            {showModal&&(
                <motion.div  className='backdrop'
                 variants={Backdrop}
                 initial="hidden"
                 animate="visble"
                >
                 <motion.div  className='modal'
                   variants={modal}
                   exit="hidden"
                 >
                    <p>Want to make another pizza?</p>
                    <Link to={"/"}
                    ><button>Start again</button></Link>
                 </motion.div>
                    
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal