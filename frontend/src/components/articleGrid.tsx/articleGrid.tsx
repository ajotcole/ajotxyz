import { Card, CardBody, SimpleGrid, Image, Text, useColorModeValue, Center } from '@chakra-ui/react';
import { CgCalendarDates } from 'react-icons/cg';
import { formatDate } from '../../utility';
import { PostEntity } from '../../models/__generated__/graphql';
import { InfoIcon } from '@chakra-ui/icons';

export const ArticleGrid: React.FC<{ articles: PostEntity[] }> = ({ articles }) => {
  console.log(articles);
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 3,
      }}
      minChildWidth="160px"
      spacingX="20px"
      spacingY="20px"
    >
      {articles.length === 0 && (
        <Center height="100px">
          <InfoIcon marginRight="5px" /> Unfortunately there are no articles here
        </Center>
      )}
      {articles.length > 0 &&
        articles.map((article, index) => (
          <Card
            onClick={() => window.open(`/articles/${article.id}`, '_self')}
            cursor="pointer"
            overflow="hidden"
            borderRadius="15px"
            boxShadow="sm"
            minW="180px"
            backgroundColor={useColorModeValue('#FDEFD5', '#4d4941')}
            key={index}
          >
            <Image
              objectFit="cover"
              maxH={'100px'}
              maxW={'100%'}
              src={
                article.attributes?.cardimage?.data
                  ? `${import.meta.env.VITE_STRAPI_URL}${article.attributes.cardimage.data?.attributes?.formats.small.url}`
                  : 'https://picsum.photos/1000'
              }
            />
            <CardBody>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontFamily: 'Karla',
                  letterSpacing: '2px',
                  fontSize: '14px',
                }}
              >
                {article.attributes?.category}
              </Text>
              <Text
                style={{
                  fontFamily: 'DM Serif Display',
                  fontSize: '30px',
                  lineHeight: '30px',
                }}
              >
                {article.attributes?.title}
              </Text>
              <div
                style={{
                  backgroundColor: useColorModeValue('#000', '#fff'),
                  display: 'block',
                  height: '1px',
                  width: '100%',
                  margin: '0.6em 0',
                }}
              />
              <Text
                style={{
                  fontFamily: 'Karla',
                  letterSpacing: '2px',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CgCalendarDates
                  style={{
                    marginRight: '0.5em',
                  }}
                />
                {formatDate(new Date(article.attributes?.createdAt))}
              </Text>
            </CardBody>
          </Card>
        ))}
    </SimpleGrid>
  );
};
