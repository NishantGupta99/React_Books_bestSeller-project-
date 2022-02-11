import React from "react";
import ReactDOM from "react-dom";
//CSS
import "./index.css";
// vars
const books = [
 {
  img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4+OTOL._AC_UL604_SR604,400_.jpg",
  title: "The Alchemist",
  author: "Aulo Coelho",
},
{
  img: "https://images-eu.ssl-images-amazon.com/images/I/818e+fq7+BL._AC_UL604_SR604,400_.jpg",
  title: "Word Power Made Easy ",
  author: "Norman Lewis ",
},
{
  img: "https://images-eu.ssl-images-amazon.com/images/I/81NYuWzsJcS._AC_UL302_SR302,200_.jpg",
  title: "The Psychology of Money",
  author: "Morgan Housel ",
}
]

function BookList() {
  return (
    <section className="booklist">
{books.map((book) => {
 // const {img, title, author} = book;
  return <Book book={book}></Book>;
  
})}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
   const {img, title, author} = props.book;
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>     
      <h4>{author}</h4>
      
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
