"use client";
import Item from "./item/item";
import "./table.scss";

import { animate, motion, useInView } from "framer-motion";
export default function TableDetail() {
  const data = [
    {
      image: "/Efficient Offer Process.png",
      desc: "Efficient Offer Process",
      detail: "Same day offers upon receiving property information",
    },
    {
      image: "/Financial Flexibility.png",
      desc: "Financial Flexibility.png",
      detail: "Cash transactions with no financing contingency",
    },
    {
      image: "/Speedy Closings.png",
      desc: "Ability to close deals in as",
      detail: "little as 7 days",
    },
  ];
  const second = {
    image: "/Cost Transparency.png",
    desc: "Cost Transparency",
    detail: "No fees for sellers, including no buyer's agent commission.",
  };

  return (
    <div className="wrapper-table">
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false, amount: 0.1 }}
         transition={{ duration: 0.4 }}
         variants={{
          visible: { opacity:1 , y:0},
          hidden: { opacity:0 ,y:10 },
         }}
        className="row"
      >
        {data.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            desc={item.desc}
            detail={item.detail}
          />
        ))}
      </motion.div>
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity:1 , y:0},
            hidden: { opacity:0 ,y:10 },
          }}
        className="single"
      >
        <Item image={second.image} desc={second.desc} detail={second.detail} />
      </motion.div>
    </div>
  );
}
