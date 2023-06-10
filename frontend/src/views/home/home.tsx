import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  Text,
  Spacer,
  Stack,
  Image,
  useColorModeValue,
  Box,
  Spinner,
} from '@chakra-ui/react';
import { ArticleGrid } from '../../components/articleGrid.tsx/articleGrid';
import { useState } from 'react';
import { IArticle } from '../../models/IArticle';
import { IHomeHero } from '../../models/IHomeHero';
import { useQuery } from '@apollo/client';
import { Post, PostEntityResponse, PostEntityResponseCollection } from '../../models/__generated__/graphql';
import { GET_POSTS } from '../../models/graphQLrequests';
import { HomeHero } from '../../components/homeHero/homeHero';

// TODO make better
interface PostsGQLResponse {
  posts: PostEntityResponseCollection;
}

export const Home = () => {
  const { loading, error, data } = useQuery<PostsGQLResponse>(GET_POSTS);

  console.log(data);

  return (
    <>
      <Flex marginBottom="20px">
        <Spacer />
        <Center>
          <HomeHero />
        </Center>
        <Spacer />
      </Flex>
      <Flex marginBottom="20px">
        <Spacer />
        <Box>
          <Text
            style={{
              textTransform: 'uppercase',
              fontFamily: 'Karla',
              letterSpacing: '2px',
              marginBottom: '0.5em',
            }}
          >
            All articles
          </Text>
          <div
            style={{
              display: 'block',
              height: '1px',
              width: '12em',
              backgroundColor: useColorModeValue('#000', '#fff'),
              marginBottom: '1em',
            }}
          />
          {loading && <Spinner />}
          {error && <p>TODO posts error</p>}
          {data && <ArticleGrid articles={data.posts.data} />}
        </Box>
        <Spacer />
      </Flex>
    </>
  );
};
