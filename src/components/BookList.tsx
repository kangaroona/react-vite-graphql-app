import React from "react";
import { useQuery } from "@apollo/client";
import { BOOKS } from "../gql/books";
import { Ibook } from "../types/book";
function BookList() {
  const { loading, error, data } = useQuery(BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const booksLst: Ibook[] = data?.books;
  return booksLst?.map(({ title }, idx: number) => {
    return <div key={"book" + idx}>{title}</div>;
  });
}

export default BookList;
