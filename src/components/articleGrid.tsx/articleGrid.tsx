import { Card, CardBody, SimpleGrid, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { CgCalendarDates } from 'react-icons/cg';
import { formatDate } from '../../utility';

export const ArticleGrid: React.FC<{ articles: string[] }> = ({ articles }) => {
  return (
    <SimpleGrid columns={3} spacingX="20px" spacingY="20px">
      {articles.map((article) => (
        <Card
          cursor="pointer"
          width="300px"
          overflow="hidden"
          borderRadius="15px"
          boxShadow="sm"
          backgroundColor={useColorModeValue('#FDEFD5', '#4d4941')}
        >
          <Image objectFit="cover" maxH={'100px'} maxW={'100%'} src="https://picsum.photos/1000" />
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
                fontSize: '30px',
                lineHeight: '30px',
              }}
            >
              Heading of featured article
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
              {formatDate(new Date())}
            </Text>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};
