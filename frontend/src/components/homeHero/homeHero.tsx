import { CgMailForward } from 'react-icons/cg';
import { Button, Card, CardBody, CardFooter, Spinner, Stack, useColorModeValue, Text, Image } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { HomeHeroEntityResponse } from '../../models/__generated__/graphql';
import { GET_HOMEHERO } from '../../models/graphQLrequests';

// TODO make better
interface HomeHeroGQLResponse {
  homeHero: HomeHeroEntityResponse;
}

export const HomeHero = () => {
  const { loading, error, data } = useQuery<HomeHeroGQLResponse>(GET_HOMEHERO);

  return (
    <>
      {loading && <Spinner />}
      {error && <p>TODO error message</p>}
      {data && (
        <Stack>
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
                  {data.homeHero.data?.attributes?.title}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Titillium Web',
                    fontSize: '18px',
                  }}
                >
                  {data.homeHero.data?.attributes?.content}
                </Text>
              </CardBody>
              <CardFooter>
                {/* TODO add url to article logic */}
                <Button rightIcon={<CgMailForward size={28} />} variant="ghost" onClick={() => window.open('TODO', '_self')}>
                  {data.homeHero.data?.attributes?.linkText}
                </Button>
              </CardFooter>
            </Stack>
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              maxH={{ base: '200px', sm: '100%' }}
              // TODO add image url
              src="https://picsum.photos/1000"
            />
          </Card>
        </Stack>
      )}
    </>
  );
};
