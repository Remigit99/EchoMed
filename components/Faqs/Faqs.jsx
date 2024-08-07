"use client";
import { useState, useEffect } from "react";
import Faq from "react-faq-component"
import { faqsData } from "@/Data/faqsData";

const Faqs = () => {
  const styles = {
    bgColor: "#ff7f50",
    // titleTextColor: "blue",
    rowTitleColor: "white",
    rowContentColor: 'white',
    arrowColor: "white",
    rowContentBg: "purple",
    rowContentText:""
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  return (
    <div>
        
      <Faq data={faqsData} styles={styles} config={config} />
    </div>
  );
};

export default Faqs;
