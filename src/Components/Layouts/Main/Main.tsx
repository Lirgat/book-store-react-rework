import React, { FC, JSX } from "react"
import BannerBlock from "./BannerBlock/BannerBlock.tsx"
import style from "./style.module.css"
import BookCatalogLayout from "./BookCatalog/BookCatalog.tsx"

// Мейн компонент с контентом

const Main:FC = ():JSX.Element => {
    return(
        <main className={style.PageListMain}>
            <BannerBlock></BannerBlock>
            <BookCatalogLayout></BookCatalogLayout>
        </main>
    )
}

export default Main