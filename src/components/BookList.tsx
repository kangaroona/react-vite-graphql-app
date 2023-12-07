import React from "react";
import { useQuery } from "@apollo/client";
import { BOOKSN } from "../gql/books-type";
function BookList() {
  const { loading, error, data } = useQuery(BOOKSN);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const booksLst = data?.books;
  return booksLst?.map((item, idx: number) => {
    return <div key={"book" + idx}>{item?.title}</div>;
  });
}
function Book(props: { title: string }) {
  const { loading, error, data } = useQuery(BOOKSN, {
    variables: { title: props.title },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const booksLst = data?.getBookByTitle;
  return (
    <div>
      <ul>
        {booksLst?.map((item, idx: number) => (
          <li key={`title-${idx}`}>{item?.title}</li>
        ))}
      </ul>
    </div>
  );
}

export { BookList, Book };
