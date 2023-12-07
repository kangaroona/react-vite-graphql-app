// import { gql } from "@apollo/client";
import { graphql } from "../__generated__/gql";
export const BOOKSN = graphql(`
  query v2($title: String) {
    books {
      title
      author
    }
    getBookByTitle(title: $title) {
      author
      title
    }
  }
`);
