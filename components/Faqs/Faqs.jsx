"use client";
import { useState, useEffect } from "react";
import QA from "./qa";
import { faqsData } from "@/Data/faqsData";
import style from "@/styles/faqs.module.css"

const Faqs = () => {

  return (
    <div>
        
        {faqsData.map((data, i) =>
                <div className={style.faqsMain} key={i}>
                    <QA
                        question={data.title}
                        answer={data.content}
                    />
                </div>
            )}
        </div>
  );
};

export default Faqs;
