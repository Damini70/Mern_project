import React from 'react';
import { motion } from 'framer-motion';

export default function Animate() {
  return (
    <div>
        <motion.div
  animate={{ x: 100 }}
  transition={{ ease: "easeIn", duration: 2 }}
>
     
        <h1>Animate</h1>
      {/* Your card content here */}
    </motion.div>
    </div>
  )
}
