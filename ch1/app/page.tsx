"use client"
import React from 'react'
import { motion } from 'framer-motion'
function page() {
  return (  
    <div>
      <motion.button className="bg-blue-700 text-white p-2 rounded" whileHover={{ scale: 1.1 }}>
        apply now
      </motion.button>
    </div>
  )
}

export default page

// <motion.button whileHover={{ scale: 1.1 }}>
//   Apply Now
// </motion.button>