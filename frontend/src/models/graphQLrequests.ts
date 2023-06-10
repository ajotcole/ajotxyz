import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query Posts {
    posts {
      data {
        attributes {
          title
        }
      }
    }
  }
`;

export const GET_HOMEHERO = gql`
  query HomeHero {
    homeHero {
      data {
        attributes {
          title
          content
          category
          linkText
          createdAt
          updatedAt
          publishedAt
          __typename
        }
      }
    }
  }
`;
