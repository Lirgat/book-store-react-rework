import React, { FC, JSX, useState } from "react"
import style from "./style.module.css"
import { CategoryType } from "../../../Models/Categories/client"

const Category:FC<CategoryType> = ({isActive, category, onClick}):JSX.Element => {return (
        <div onClick={onClick} className={`${style.Category} ${isActive === true ? style.ActiveCategory : ""}`}>{category}</div>
    )
}

export default Category