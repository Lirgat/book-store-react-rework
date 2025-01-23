//Клиентские типы слайдера на стороне фронтенда

export type StickerColorType = "purple" | "pink"

export interface StickerPropsType {
    color: StickerColorType
    innerText: string
}