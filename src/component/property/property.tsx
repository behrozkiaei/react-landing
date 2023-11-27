"use client";

import "./property.scss";
import { animate, motion, useInView } from "framer-motion";
export default function Property() {
  return (
    <div className="wrapper">
      <div className="title"></div>
      <div className="images-box">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity:0 , y:-40},
            visible: {opacity:1 , y:1},
          }}
          className="item"
        >
          <img  src="/paralel1.jpg" alt="" className="property-img" />
          <div className="p-containet">
            <p>Specializing in dated/distressed propertie</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity:0 , y:-40},
            visible: {opacity:1 , y:1},
          }}
          className="item"
        >
          <img  src="/paralel2.jpg" className="property-img"  alt="" />
          <div className="p-containet">
            <p>Willingness to consider properties in any condition</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
