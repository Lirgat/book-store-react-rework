import React, { FC, JSX } from "react";
import style from "./style.module.css"
import { CompanyNameTypeProp } from "../../../Models/Header/client";

// Фактически это глупый компонент, но я его решил засунуть в UI

const CompanyLogo:FC<CompanyNameTypeProp> = ({page}):JSX.Element => {
    return(
        <h1 className={style.CompanyLogo}>Bookshop | {page}</h1>
    )
}

export default CompanyLogo