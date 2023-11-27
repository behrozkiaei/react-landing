"use client";
import { useEffect, useRef } from "react";
import "./discover-apex.scss";
import { animate, motion, useInView } from "framer-motion";
import Image  from "next/image";
export default function DiscoverApex() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <div className="container-discover" ref={ref}>
      <div className="logo-box">
        <img   src="/logo-white.png" alt="Apex" className="logo" />{" "}
      </div>
      <div className="wrapper-discover">
        <div className="content">
          {/* {isInView && ( */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { scale:1 },
                hidden: { scale:0 },
              }}
            >
              <p>
                Discover Apex Pioneer Group, your trusted partner in off-market
                real estate. Specializing in acquiring properties needing
                repairs or quick closings, we operate with a unique approach 0%
                buyers agent commission.
              </p>
            </motion.div>
          {/* )} */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { scale:1 },
                hidden: { scale:0 },
            }}
          >
            <p>
              ABOUT SERVICES CONTACTApex Pioneer group Distinctive Approach to
              Real Estate Investment Unlocking Off-Market Opportunities Contact
              Us Today Discover Apex Pioneer Group, your trusted partner in
              off-market real estate. Specializing in acquiring properties
              needing repairs or quick closings, we operate with a unique
              approach 0% buyers agent commission. Focused on the Dallas/Fort
              Worth Metroplex, we actively seek work needed properties. Meet
              Apex Pioneer Group, our flagship, dedicated to purchasing SFRs and
              multifamily units.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
