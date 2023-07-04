import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query Posts {
    posts {
      data {
        id
        attributes {
          title
          subtitle
          category
          createdAt
          cardimage {
            data {
              attributes {
                url
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query Post($id: ID!) {
    post(id: $id) {
      data {
        attributes {
          title
          category
          createdAt
          subtitle
          dynamicZone {
            __typename
            ... on ComponentImageImageSingle {
              singleImage {
                data {
                  attributes {
                    url
                    formats
                  }
                }
              }
              description
            }
            __typename
            ... on ComponentImageImageSlider {
              description
              imageSlider {
                data {
                  attributes {
                    url
                    formats
                  }
                }
              }
            }
            __typename
            ... on ComponentTextRichText {
              richText
            }
          }
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
