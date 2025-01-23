import React, { FC, JSX } from "react"
import BannerBlock from "./BannerBlock/BannerBlock.tsx"
import style from "./style.module.css"

const Main:FC = ():JSX.Element => {
    return(
        <main className={style.PageListMain}>
            <BannerBlock></BannerBlock>
        </main>
    )
}

export default Main