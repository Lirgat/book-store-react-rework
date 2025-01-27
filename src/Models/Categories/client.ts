//Клиентские типы категорий книг

export interface CategoryType {
    isActive: boolean
    category: string
    onClick: () => void
}