import React, { FC, JSX } from "react";
import style from "./style.module.css";
import { StickerPropsType } from "../../../Models/SliderBanner/client";
import arrow from "../../../Assets/Icons/arrow.svg"

// Глупый компонент для отображение стикеров/переходников на экране

const ScreenSticker:FC<StickerPropsType> = ({color, innerText}):JSX.Element => {
  return (
    <div
      className={
        color === "purple"
          ? style.PurpleSticker
          : color === "pink"
          ? style.PinkSticker
          : ""
      }
    >
        <p> 
        {innerText}
        </p>
        <img className={style.StickerArrow} src={arrow} alt="Стрелка" />
    </div>
  );
};

export default ScreenSticker;
