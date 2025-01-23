import React, { FC, JSX } from "react";
import userIcon from "../../../Assets/Icons/user.svg"
import searchIcon from "../../../Assets/Icons/search.svg"
import shopBagIcon from "../../../Assets/Icons/shopBag.svg"
import style from "./style.module.css"

// Компоннт с кнопками авторизации, поиска и корзины

const HeaderBtns: FC = (): JSX.Element => {
  return (
    <div className={style.BtnList}>
      <button className={style.BtnLogin}>
        <img src={userIcon} alt="" />
      </button>
      <button className={style.BtnSearch}>
        <img src={searchIcon} alt="" />
      </button>
      <button className={style.BtnShopper}>
        <img src={shopBagIcon} alt="" />
      </button>
    </div>
  );
};

export default HeaderBtns