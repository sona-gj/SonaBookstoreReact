import '../assets/css/global.css'
import '../assets/css/HeaderDropdown.css';
import {categoryList} from '../types';
import { Link } from 'react-router-dom';


function HeaderDropdown() {
  return (

      <div className="header-dropdown">
          <div className="menu-category-down-arrow">
              <button className="menu-button">Categories</button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L11.165 15L15.33 10H7Z" fill="#1C0461"/>
              </svg>
          </div>
          <ul>
              {categoryList.map((item) => <li>
                  <Link to="/categories">
                      {item.name}</Link></li>)}

          </ul>

      </div>

  )
}

export default HeaderDropdown

