import { gql } from "@apollo/client";

export const GET_CHILD_BY_ID = gql`
  query GetChildById($id: ID!) {
    Child(id: $id) {
      id
      name
      age
    }
  }
`;
