import React, { FC, JSX } from "react";
import style from "./style.module.css"
import CategoryList from "../../../Widgets/CategoryList/CategoryList.tsx";

const BookCatalogLayout:FC = ():JSX.Element => {
    return(
        <div className={style.BookCatalog}>
            <CategoryList></CategoryList>
        </div>
    )
}

export default BookCatalogLayout