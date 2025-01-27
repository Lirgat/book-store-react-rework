import React, { FC, JSX, useState } from "react";
import style from "./style.module.css";
import Category from "../../UI/Category/Category.tsx";

//Компонент колонки категорий

const CategoryList: FC = (): JSX.Element => {
  const categories = [
    "Art & Fashion",
    "Biography",
    "Business",
    "Crafts & Hobbies",
    "Drama",
    "Fiction",
    "Food & Drink",
    "Health & Wellbeing",
    "History & Politics",
    "Humor",
    "Poetry",
    "Psychology",
    "Science",
    "Technology",
    "Travel & Maps",
  ];

  const initialCategory = categories.length > 0 ? categories[0] : null
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory)

  const handleCategoryClick = (category: string) => {
    setActiveCategory(prevCategory => prevCategory === category ? null : category)
  }

  return(
    <div className={style.CategoryList}>
        {categories.map((category) => (
            <Category key={category} category={category} isActive={activeCategory === category} onClick={() => handleCategoryClick(category)} />
        ))}
    </div>
  );
};

export default CategoryList;
