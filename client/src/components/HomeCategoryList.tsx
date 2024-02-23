import '../assets/css/HomeCategoryList.css';
import {categoryList, categoryImages} from '../types';


/*const categoryImageFileName = (category) => {
  let name = category.name.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.jpg`;
};*/


function HomeCategoryList(){

    return(

  <ul className ="home-list">
      {categoryList.map((category) => (
          <li className="home-list-li">
    <img src={categoryImages[category.name.toLowerCase()]}
         alt="book.title"
    />
              <div className="home-list-div"> {category.name} </div>
          </li>
      ))}


  </ul>

)
}
export default HomeCategoryList;
