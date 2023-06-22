import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query Posts {
    posts {
      data {
        attributes {
          title
          subtitle
          category
          createdAt
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

export const GET_IMPRINT = gql`
  query Imprint {
    imprint {
      data {
        attributes {
          title
          content
        }
      }
    }
  }
`;
