import { gql } from "@apollo/client";

export const LIST_ANIMALS = gql`
  query Query($where: AnimalFilterInput, $order: [AnimalSortInput!], $after: String) {
    animals(where: $where, order: $order, after: $after) {
      edges {
        node {
          id
          name
          color
          photoUrl
          animalType {
            name
          }
          breed {
            name
          }
          sex {
            name
          }
        }
      }
      totalCount
      pageInfo {
        startCursor,
        endCursor
      }
    }
  }
`;
