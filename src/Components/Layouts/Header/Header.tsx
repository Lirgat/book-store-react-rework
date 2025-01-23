import React, { FC, JSX } from "react"
import style from "./style.module.css"
import CompanyLogo from "../../UI/CompanyName/CompanyLogo.tsx"
import RoutingLinks from "../../UI/RoutingLinks/RoutingLinks.tsx"
import HeaderBtns from "../../UI/HeaderBtns/HeaderBtns.tsx"

const Header:FC = ():JSX.Element => {
    return(
        <header className={style.Header}>
            <CompanyLogo></CompanyLogo>
            <RoutingLinks></RoutingLinks>
            <HeaderBtns></HeaderBtns>
        </header>
    )
}

export default Header