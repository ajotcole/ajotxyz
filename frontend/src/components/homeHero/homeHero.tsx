import { CgMailForward } from 'react-icons/cg';
import { Button, Card, CardBody, CardFooter, Stack, useColorModeValue, Text, Image } from '@chakra-ui/react';
import { HomeHeroEntity, Maybe } from '../../models/__generated__/graphql';

export const HomeHero: React.FC<{ data: Maybe<HomeHeroEntity> | undefined }> = (data) => {
  return (
    <>
      {data && (
        <>
          <Card
            boxShadow="sm"
            direction={{ base: 'column', sm: 'row' }}
            style={{
              width: '100%',
              backgroundColor: useColorModeValue('#e7ecef', '#282828'),
              border: 0,
              borderRadius: '15px',
              marginTop: '15px',
            }}
            overflow="hidden"
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              maxH={{ base: '200px', sm: '100%' }}
              // TODO add image url
              src="https://picsum.photos/1000"
            />
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
                  {data.data?.attributes?.title}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Titillium Web',
                    fontSize: '18px',
                  }}
                >
                  {data.data?.attributes?.content}
                </Text>
              </CardBody>
              <CardFooter>
                {/* TODO add url to article logic */}
                <Button rightIcon={<CgMailForward size={28} />} variant="ghost" onClick={() => window.open('TODO', '_self')}>
                  {data.data?.attributes?.linkText}
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </>
      )}
    </>
  );
};
