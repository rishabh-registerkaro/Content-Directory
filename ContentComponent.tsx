import React, { useState } from "react";
import WhatIsPLCR from "./WhatIsPLCR";
import SelectionOfCompany from "./SelectionOfCompany";
import FrequentAskedQuestion from "./FrequentAskedQuestion";
import WhoCanRegisterPLC from "./WhoCanRegisterPLC";
import { motion } from "framer-motion";

const ContentComponent = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contentArray = [
    "What is Private Limited Company Registration",
    "Who can Register a Private Limited Company",
    "Benefits of Registering a Private Limited Company in Kolkata",
    "Documents Required for Registration of Private Limited Company in Kolkata",
    "Company Registration Process in Kolkata",
    "Selection of a Company Name in Kolkata & Trademark Process",
    "GST Requirements for Business Registration in Kolkata",
    "Register Your Hassle-free with Razorpay Rize",
    "Company Registration Authorities in Kolkata",
    "Frequently Asked Questions",
  ];

  const [selectedContent, setSelectedContent] = useState<number>(0);

  const renderedContentData = [
    <WhatIsPLCR />,
    <WhoCanRegisterPLC />,
    <SelectionOfCompany />,
    <FrequentAskedQuestion />,
  ];

  return (
    <section className="content-sections-container">
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="content-title-section"
      >
        <h1>Contents</h1>
        <div className="content-array-section">
          {contentArray.map((content, index) => (
            <div
              key={index}
              className={`content-section-title ${
                selectedContent === index ? "active" : ""
              }`}
              onClick={() => setSelectedContent(index)}
            >
              {content}
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="rendered-content-sections"
      >
        {renderedContentData[selectedContent]}
      </motion.div>
    </section>
  );
};

export default ContentComponent;
