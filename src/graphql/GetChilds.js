import { gql } from "@apollo/client";

export const GET_CHILDS = gql`
  query GetChilds {
    allChildren {
      id
      name
      age
    }
  }
`;
