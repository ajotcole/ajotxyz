import { Center, Flex, Text, Spacer, useColorModeValue, Box, Spinner } from '@chakra-ui/react';
import { ArticleGrid } from '../../components/articleGrid.tsx/articleGrid';
import { useQuery } from '@apollo/client';
import { HomeHeroEntityResponse, PostEntityResponseCollection } from '../../models/__generated__/graphql';
import { GET_HOMEHERO, GET_POSTS } from '../../models/graphQLrequests';
import { HomeHero } from '../../components/homeHero/homeHero';

// TODO make better
interface PostsGQLResponse {
  posts: PostEntityResponseCollection;
}

interface HomeHeroGQLResponse {
  homeHero: HomeHeroEntityResponse;
}

export const Home = () => {
  const { loading: loadingPosts, error: errorPosts, data: dataPosts } = useQuery<PostsGQLResponse>(GET_POSTS);

  const { loading: loadingHomeHero, error: errorHomeHero, data: dataHomeHero } = useQuery<HomeHeroGQLResponse>(GET_HOMEHERO);

  return (
    <>
      <Flex marginBottom="20px">
        <Spacer />
        <Center
          minW={{
            base: '100%',
            sm: '600px',
          }}
        >
          {loadingHomeHero && (
            <Center>
              <Spinner margin={'30px 0'} />
            </Center>
          )}
          {errorHomeHero && <p>TODO posts error</p>}
          {dataHomeHero && <HomeHero data={dataHomeHero?.homeHero.data} />}
        </Center>
        <Spacer />
      </Flex>
      <Flex marginBottom="20px">
        <Spacer />
        <Box
          minW={{
            base: '100%',
            sm: '600px',
          }}
        >
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
          {loadingPosts && (
            <Center>
              <Spinner margin={'30px 0'} />
            </Center>
          )}
          {errorPosts && <p>TODO posts error</p>}
          {dataPosts && <ArticleGrid articles={dataPosts.posts.data} />}
        </Box>
        <Spacer />
      </Flex>
    </>
  );
};
