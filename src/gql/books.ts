import { gql } from "@apollo/client";
export const BOOKS = gql`
  query Book {
    books {
      title
    }
  }
`;
