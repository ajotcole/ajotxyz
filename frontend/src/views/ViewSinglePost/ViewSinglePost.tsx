import { DiscussionEmbed } from 'disqus-react';
import { useEffect, useState } from 'react';
import { CgCalendarDates, CgUser } from 'react-icons/cg';
import { useParams } from 'react-router-dom';
import { ContentRenderer } from '../../components/contentRenderer/contentRenderer';
import { IArticle } from '../../models/IArticle';
import { IDynamicZone } from '../../models/IDynamicZone';
import { ArticlesService } from '../../api/articlesService';
import { formatDate } from '../../utility';
import styles from './ViewSinglePost.module.scss';
import { Center, Flex, HStack, Spacer, Spinner, Stack, useColorModeValue } from '@chakra-ui/react';

export const ViewSinglePost = () => {
  const { id }: any = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState<IArticle>();

  useEffect(() => {
    (async () => {
      try {
        const data = await ArticlesService.getSingleArticle(id);

        setItem(data);
        setIsLoaded(true);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  document.title = `AJOT.XYZ - ${item?.title}`;

  return (
    <div className={styles.articleContainer}>
      {!isLoaded && (
        <Flex>
          <Spacer />
          <Center>
            <Spinner />
          </Center>
          <Spacer />
        </Flex>
      )}
      {isLoaded && item && (
        <Stack className={styles.articleContent}>
          <div className={styles.category}>{item.category}</div>
          <h1>{item.title}</h1>
          <div
            style={{
              backgroundColor: useColorModeValue('#000', '#fff'),
              display: 'block',
              height: '1px',
              width: '100%',
            }}
          />
          <Flex className={styles.metadata}>
            <Center className={styles.date}>
              <CgCalendarDates />
              {formatDate(item.created)}
            </Center>
            <Spacer />
            <Center className={styles.author}>
              <CgUser />
              AJ Cole
            </Center>
          </Flex>
          {item && item.dynamicZone.map((x: IDynamicZone, i: number) => <ContentRenderer dynamicZone={x} key={i} />)}
          {/* 
          TODO fix theming and else sometime
          
          <DiscussionEmbed
            shortname="ajotxyz"
            config={{
              url: window.location.href,
              identifier: id,
              title: item.title,
              language: 'en_US',
              
            }}
          /> */}
        </Stack>
      )}
    </div>
  );
};
