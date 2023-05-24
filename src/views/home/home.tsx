import { Button, Card, CardBody, CardFooter, Center, Flex, Text, Spacer, Stack, Image, useColorModeValue, Box } from '@chakra-ui/react';
import { CgMailForward } from 'react-icons/cg';
import { ArticleGrid } from '../../components/articleGrid.tsx/articleGrid';

export const Home = () => {
  return (
    <>
      <Flex marginBottom="20px">
        <Spacer />
        <Center>
          {/* TODO move to its own component */}
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
                  Heading of featured article
                </Text>
                <Text
                  style={{
                    fontFamily: 'Titillium Web',
                    fontSize: '18px',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </CardBody>
              <CardFooter>
                <Button rightIcon={<CgMailForward size={28} />} variant="ghost">
                  Button Text
                </Button>
              </CardFooter>
            </Stack>
            <Image objectFit="cover" maxW={{ base: '100%', sm: '200px' }} src="https://picsum.photos/1000" />
          </Card>
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
          <ArticleGrid articles={['', '', '', '', '']} />
        </Box>
        <Spacer />
      </Flex>
    </>
  );
};
