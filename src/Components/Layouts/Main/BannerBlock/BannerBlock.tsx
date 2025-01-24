import React, { FC, JSX } from "react";
import style from "./style.module.css"
import Slider from "../../../Widgets/Slider/Slider.tsx";
import ScreenSticker from "../../../Dummies/ScreenStickers/ScreenSticker.tsx";

// Блок баннера

const BannerBlock:FC = ():JSX.Element => {
    return(
        <div className={style.Banner}>
            <ScreenSticker color={"purple"} innerText={"CHANGE OLD BOOK ON NEW"}></ScreenSticker>
            <Slider></Slider>
        </div>
    )
}

export default BannerBlock