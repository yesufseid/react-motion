import React from 'react';
import {motion,useCycle} from 'framer-motion'

const loaderVariant={
    animationOne:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                yoyo:Infinity,
                duration:0.5
            },
            y:{
                yoyo:Infinity,
                duration:0.25

            },
            ease:"easeInOut"
        }

    },
    animationTow:{
        y:[0,-40],
        x:0,
        transition:{
            x:{
                yoyo:Infinity,
                duration:0.5
            },
            y:{
                yoyo:Infinity,
                duration:0.25

            },
            ease:"easeInOut"
        }

    },

}

const Loader=()=>{
    const [animation,cycleAnimation]=useCycle("animationOne","animationTow")
    return(
        <>
        <motion.div className='loader'
         variants={loaderVariant}
         animate={animation}
        >

        </motion.div>
        <div onClick={()=>cycleAnimation()}>cycle button</div>
        </>
    )

}

export default Loader