import '../assets/css/CategoryNav.css'
import '../assets/css/global.css'
import { categoryList } from '../types';
import {Link} from "react-router-dom";

function CategoryNav() {
  return (
  <nav className="category-nav">
    <ul className="category-buttons">

      {categoryList.map((category) => (

          <li className="unselected-category-list">
            <Link to={"/categories"} className="button unselected-category-button">{category.name}</Link>
            <hr className="category-focus"/>
          </li>
      ))}

    </ul>
  </nav>
)
}

export default CategoryNav;

