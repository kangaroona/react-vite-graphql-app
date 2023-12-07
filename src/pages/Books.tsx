import React from "react";
import { BookList, Book } from "../components/BookList";
import { useLocation, useParams } from "react-router-dom";
function Books() {
  return (
    <div>
      <BookList />
    </div>
  );
}
function BookItem() {
  const { state } = useLocation();
  const params = useParams();
  console.log(params, state);
  return (
    <div>
      <Book title={params.title as string} />
    </div>
  );
}

export { Books, BookItem };
