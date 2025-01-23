import React, { FC, JSX } from "react";
import style from "./style.module.css";
import {
  routerLink,
  routerLinksArrayType,
} from "../../../Models/Header/client";

// Компонент линков для роутинга в заголовке,
// вынес в массив объектов, чтобы было удобнее редачить

const RoutingLinks: FC = (): JSX.Element => {
  const routingLinksArray: routerLinksArrayType = [
    {
      innerText: "BOOKS",
      src: "#",
      isActive: true,
    },
    {
      innerText: "AUDIOBOOKS",
      src: "#",
      isActive: false,
    },
    {
      innerText: "STATIONERY & GIFTS",
      src: "#",
      isActive: false,
    },
    {
      innerText: "BLOG",
      src: "#",
      isActive: false,
    },
  ];

  return (
    <nav>
      <ul className={style.Nav}>
        {routingLinksArray.map((link: routerLink) => (
          <li className={style.RoutingLinks__li}>
            <a
              className={`${link.isActive === true ? style.Active : ""} ${
                style.RoutingLinks__li_a
              }`}
              href={link.src}
            >
              {link.innerText}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RoutingLinks;
