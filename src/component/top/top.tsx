"use client";
import "./top.scss";
import { animate, motion } from "framer-motion";

export default function Top() {
  return (
    <div className="top-container">
      <div className="image-box">
        <img  src="./images/top-picture.jpg" alt="" className="top-image"/>
      </div>
      <div className="content-box">
        <div className="content">
          <motion.div
            transition={{ duration:0.25 ,delay: 0.5}}
            initial={{ x: -700 }}
            animate={{ x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <p className="title">
              Distinctive Approach to Real Estate Investment
            </p>
          </motion.div>
          <motion.div
            transition={{ duration:0.5 ,delay: 0.5 }}
            initial={{ x: -700 }}
            animate={{ x: 0}}
            viewport={{ once: false, amount: 0.1 }}
          >
            <p className="desc">Unlocking Off-Market Opportunities</p>
          </motion.div>
          <motion.div 
           transition={{ duration:0.5 ,delay: 0.5 }}
           initial={{ x: -700 }}
           animate={{ x: 0}}
           viewport={{ once: false, amount: 0.1 }}
          className="button">Contact Us Today</motion.div>
        </div>
      </div>
    </div>
  );
}
