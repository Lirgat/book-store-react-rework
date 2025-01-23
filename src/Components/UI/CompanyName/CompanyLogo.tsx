import React, { FC, JSX } from "react";
import style from "./style.module.css"

const CompanyLogo:FC = ():JSX.Element => {
    return(
        <h1 className={style.CompanyLogo}>Bookshop</h1>
    )
}

export default CompanyLogo