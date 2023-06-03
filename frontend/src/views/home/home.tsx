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
import { CgMailForward } from 'react-icons/cg';
import { ArticleGrid } from '../../components/articleGrid.tsx/articleGrid';
import { useState, useEffect } from 'react';
import { ArticlesService } from '../../api/articlesService';
import { IArticle } from '../../models/IArticle';
import { IHomeHero } from '../../models/IHomeHero';

export const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHomeHeroLoaded, setIsHomeHeroLoaded] = useState(false);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [homeHero, setHomeHero] = useState<IHomeHero>();

  // TODO improve loading
  useEffect(() => {
    (async () => {
      setArticles(await ArticlesService.getAllArticles());
      setIsLoaded(true);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setHomeHero(await ArticlesService.getHomeHeroData());
      setIsHomeHeroLoaded(true);
    })();
  }, []);

  return (
    <>
      <Flex marginBottom="20px">
        <Spacer />
        <Center>
          {/* TODO move to its own component */}
          {isHomeHeroLoaded ? (
            <Card
              boxShadow="sm"
              direction={{ base: 'column', sm: 'row' }}
              style={{
                width: '600px',
                backgroundColor: useColorModeValue('#e7ecef', '#282828'),
                border: 0,
                borderRadius: '15px',
                marginTop: '15px',
              }}
              overflow="hidden"
            >
              <Stack>
                <CardBody>
                  <Text
                    style={{
                      textTransform: 'uppercase',
                      fontFamily: 'Karla',
                      letterSpacing: '2px',
                      fontSize: '14px',
                    }}
                  >
                    Featured Article
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'DM Serif Display',
                      fontSize: '36px',
                      lineHeight: '36px',
                    }}
                  >
                    {homeHero?.title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Titillium Web',
                      fontSize: '18px',
                    }}
                  >
                    {homeHero?.description}
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button rightIcon={<CgMailForward size={28} />} variant="ghost" onClick={() => window.open(homeHero?.buttonUrl, '_self')}>
                    {homeHero?.buttonText}
                  </Button>
                </CardFooter>
              </Stack>
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '200px' }}
                maxH={{ base: '200px', sm: '100%' }}
                src={homeHero?.image ? `https://strapi.ajot.dev${homeHero?.image}` : 'https://picsum.photos/1000'}
              />
            </Card>
          ) : (
            <Spinner />
          )}
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
          {isLoaded ? <ArticleGrid articles={articles} /> : <Spinner />}
        </Box>
        <Spacer />
      </Flex>
    </>
  );
};
