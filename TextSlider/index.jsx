import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

const TextSlider = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const textList = texts;

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + textList.length) % textList.length);
    setAnimationClass(styles.slideOut);
    setTimeout(() => {
      setAnimationClass("");
    }, 100);
  };

  // useEffect(() => {
  //   setAnimationClass("");
  // }, [currentIndex]);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % textList.length);
    setAnimationClass(styles.slideIn);
    setTimeout(() => {
      setAnimationClass("");
    }, 100);
  };

  return (
    <div className={styles.textSlider}>
      {currentIndex == textList.length - 2 ? (
        <button disabled onClick={handlePrevClick}>
          &lt;
        </button>
      ) : (
        <button onClick={handlePrevClick}>&lt;</button>
      )}
      <span className={`${styles.textSliderItem} ${animationClass}`}>{textList[currentIndex]}</span>
      {currentIndex == textList.length - 1 ? (
        <button disabled onClick={handleNextClick}>
          &gt;
        </button>
      ) : (
        <button onClick={handleNextClick}>&gt;</button>
      )}
    </div>
  );
};

export default TextSlider;
