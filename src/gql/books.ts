// import { gql } from "@apollo/client";
import { graphql } from "../__generated__/gql";
export const BOOKS = graphql(`
  query Book($title: String) {
    books() {
      title
    }
    getBookByTitle(title: $title) {
      author
      title
    }
  }
`);
