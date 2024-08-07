"use client";
import { useState } from "react";
import style from "@/styles/faqs.module.css";
import Image from "next/image";

const QA = (props) => {
  const [showQA, setShowQA] = useState(false);

  return (
    <div className={style.faqs2}>
      <button
        className={style.faqsHeaderBtn}
        onClick={() => setShowQA(!showQA)}
      >
        <div className={style.faqsQ}>
          {" "}
          <h3>{props.question}</h3>
        </div>
        <div className={style.faqsArrow}>
          {showQA ? (
            <Image
              src="/assets/icons/arrow-circle-up.svg"
              alt="arrow-up"
              width={30}
              height={30}
            />
          ) : (
            <Image
              src="/assets/icons/arrow-circle-down.svg"
              alt="arrow-down"
              width={30}
              height={30}
            />
          )}
        </div>
      </button>
      {showQA && <p className={style.faqsA}>{props.answer}</p>}
    </div>
  );
};

export default QA;
