import React, { FC, JSX } from "react";
import style from "./style.module.css"
import Slider from "../../../Widgets/Slider/Slider.tsx";

// Блок баннера

const BannerBlock:FC = ():JSX.Element => {
    return(
        <div className={style.Banner}>
            <Slider></Slider>
        </div>
    )
}

export default BannerBlock