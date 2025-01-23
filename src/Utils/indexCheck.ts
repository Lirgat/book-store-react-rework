import { indexCheckUtilType } from "./utilsTypes"

// Сравнение с индексом, добавление/удаление класса

const indexCheck:indexCheckUtilType = (state:number, index, style) => {
    return (state === index ? ' ' +  style : '')
}

export default indexCheck