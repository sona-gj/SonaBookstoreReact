// Contains all the custom types we want to use for our application
import Classics from './assets/images/categories/classics.jpg';
import Fantasy from './assets/images/categories/fantasy.jpg';
import Mystery from './assets/images/categories/mystery.jpg';
import Romance from './assets/images/categories/romance.jpg';
export interface BookItem {
  bookId: number;
  title: string;
  author: string;
  price: number;
  discountPrice: number;
  isPublic: boolean;
}

export interface CategoryItem {
  categoryId: number;
  name: string;
}

export const categoryList = [
  { categoryId: 1001, name: "Best Sellers" },
  { categoryId: 1002, name: "New Releases" },
  { categoryId: 1003, name: "Fiction" },
  { categoryId: 1004, name: "Non-fiction" },
  { categoryId: 1005, name: "Kids" },
  { categoryId: 1006, name: "Games&Puzzles" },
];

export const bookList = [
  {
    bookId: 1001,
    title: "The Dangerous Ones",
    author: "Laura Blackwood",
    price: 1900,
    discountPrice: 1699,
    isPublic: false,
  },
  {
    bookId: 1002,
    title: "Hello Beautiful",
    author: "Ann Napolitano",
    price: 1900,
    discountPrice: 1699,
    isPublic: false,
  },
  {
    bookId: 1003,
    title: "Things We Never Got Over",
    author: "Lucy Score",
    price: 1900,
    discountPrice: 1699,
    isPublic: false,
  },
  {
    bookId: 1004,
    title: "The Woman",
    author: "Kristin Hannah",
    price: 1900,
    discountPrice: 1699,
    isPublic: false,
  },
  {
    bookId: 1005,
    title: "Happy Place",
    author: "Emily Henry",
    price: 1900,
    discountPrice: 1699,
    isPublic: true,
  },
  {
    bookId: 1006,
    title: "Email From The Future",
    author: "Michael Rogers",
    price: 1900,
    discountPrice: 1699,
    isPublic: false,
  },
  {
    bookId: 1007,
    title: "The Diary of a SugarBaby",
    author: "J Q Gagliastro",
    price: 1900,
    discountPrice: 1699,
    isPublic: true,
  },
  {
    bookId: 1008,
    title: "The Odyssey of Fletcher",
    author: "Erik Dargitz",
    price: 1900,
    discountPrice: 1699,
    isPublic: false,
  },
  {
    bookId: 1009,
    title: "Rock Gods & Messy Monsters",
    author: "Diane Hatz",
    price: 1900,
    discountPrice: 1699,
    isPublic: false,
  },
  {
    bookId: 1010,
    title: "Lucky Stars: A sci-fi comedy series",
    author: "H. Claire Taylor",
    price: 1900,
    discountPrice: 1699,
    isPublic: false,
  },
  {
    bookId: 1011,
    title: "The Bad Weather Friend",
    author: "Dean Koontz",
    price: 1900,
    discountPrice: 1699,
    isPublic: false,
  },
  {
    bookId: 1012,
    title: "They Named Him Primo",
    author: "Jaka Tomc",
    price: 1900,
    discountPrice: 1699,
    isPublic: true,
  },
  {
    bookId: 1013,
    title: "Two Women Walk into a Bar",
    author: "Cheryl Strayed",
    price: 1900,
    discountPrice: 1699,
    isPublic: false,
  },
  {
    bookId: 1014,
    title: "Ruby and Lonely",
    author: "Patrice Karst",
    price: 1900,
    discountPrice: 1699,
    isPublic: false,
  },
];