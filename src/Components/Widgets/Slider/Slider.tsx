import React, { FC, JSX, useEffect, useState } from "react";
import style from "./style.module.css";
import banner1 from "../../../Assets/Images/jpg/banner1.jpg";
import banner2 from "../../../Assets/Images/jpg/banner2.jpg";
import banner3 from "../../../Assets/Images/jpg/banner3.jpg";
import indexCheck from "../../../Utils/indexCheck.ts";
import ScreenSticker from "../../Dummies/ScreenStickers/ScreenSticker.tsx";

//Слайдер и его функционал
// Каждые 5 сек автоматически переключается

const Slider: FC = (): JSX.Element => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const handleClick = (index):void => {
    setSlideIndex(index);
  };

  useEffect(() => {
    if (slideIndex > 2) {
      setSlideIndex(0);
    }

    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <React.Fragment>
      <ScreenSticker color={"pink"} innerText={"TOP\n100\nBOOKS\n2022"}></ScreenSticker>
      <div className={style.Slider}>
        <div
          className={
            style.SliderWrapper + indexCheck(slideIndex, 0, style.Active)
          }
        >
          <img className={style.SliderImg} src={banner1} alt="banner1" />
        </div>
        <div
          className={
            style.SliderWrapper + indexCheck(slideIndex, 1, style.Active)
          }
        >
          <img className={style.SliderImg} src={banner2} alt="banner2" />
        </div>
        <div
          className={
            style.SliderWrapper + indexCheck(slideIndex, 2, style.Active)
          }
        >
          <img className={style.SliderImg} src={banner3} alt="banner3" />
        </div>
      </div>
      <div className={style.SliderDots}>
        <button
          onClick={() => handleClick(0)}
          className={
            style.SliderDot + indexCheck(slideIndex, 0, style.ActiveDot)
          }
        ></button>
        <button
          onClick={() => handleClick(1)}
          className={
            style.SliderDot + indexCheck(slideIndex, 1, style.ActiveDot)
          }
        ></button>
        <button
          onClick={() => handleClick(2)}
          className={
            style.SliderDot + indexCheck(slideIndex, 2, style.ActiveDot)
          }
        ></button>
      </div>
    </React.Fragment>
  );
};

export default Slider;
