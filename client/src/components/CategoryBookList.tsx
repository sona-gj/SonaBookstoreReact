import   '../types';
import '../assets/css/CategoryBookList.css';
import CategoryBookListItem from './CategoryBookListItem';
import CategoryNav from './CategoryNav';
import  "../types";
import {bookList,BookItem} from "../types";

function CategoryBookList() {
  return (
      <><CategoryNav/>
          <section className="category-book-list">

              {bookList.map((book:BookItem) => (
                  <CategoryBookListItem  bookId={book.bookId} isPublic={book.isPublic} price={book.price} discountPrice={book.discountPrice} title={book.title} author={book.author}/>))}
          </section>
      </>
)
}

export default CategoryBookList;
