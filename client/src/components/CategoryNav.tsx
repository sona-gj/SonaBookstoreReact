import '../assets/css/CategoryNav.css'
import '../assets/css/global.css'
import { categoryList } from '../types';
import {Link} from "react-router-dom";

function CategoryNav() {
  return (
  <nav className="category-nav">
    <ul className="category-buttons">

      {categoryList.map((category) =>

          (

          <li className={`${category.categoryId === 1001 ? "selected-category-list" : "unselected-category-list"}`}>
            <button className={`category-name-button ${category.categoryId === 1001 ? "selected-category-button selected-category" : "unselected-category-button"}`}>{category.name}</button>
            <hr className={`${category.categoryId === 1001 ? "category-focus" : ""}`}/>
          </li>
      ))}
    </ul>
  </nav>
)
}

export default CategoryNav;

