//Клиентские типы заголовка на стороне фронтенда

export type RouterLinksArrayType = RouterLink[]

export interface RouterLink {
    innerText: string
    src: string
    isActive: boolean
}

export interface CompanyNameTypeProp {
    page: string | "BOOKS" | "AUDIOBOOKS" | "STATIONERY & GIFTS" | "BLOG"
}