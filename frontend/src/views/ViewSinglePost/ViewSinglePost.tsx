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
import {
  ComponentImageImageSingle,
  ComponentImageImageSlider,
  ComponentTextRichText,
  PostEntityResponse,
} from '../../models/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_POST } from '../../models/graphQLrequests';

interface SinglePostGQLResponse {
  post: PostEntityResponse;
}

export const ViewSinglePost = () => {
  const { id }: any = useParams();

  const { loading, error, data } = useQuery<SinglePostGQLResponse>(GET_SINGLE_POST, {
    variables: { id: id },
  });

  document.title = `AJOT.XYZ - ${data?.post.data?.attributes?.title}`;

  console.log(data);

  return (
    <div className={styles.articleContainer}>
      {loading && <Spinner />}
      {error && <p>TODO posts error</p>}
      {data && (
        <Stack className={styles.articleContent}>
          <div className={styles.category}>{data.post.data?.attributes?.category}</div>
          <h1>{data.post.data?.attributes?.title}</h1>
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
              {formatDate(new Date(data.post.data?.attributes?.createdAt))}
            </Center>
            <Spacer />
            <Center className={styles.author}>
              <CgUser />
              {/* TODO get proper name */}
              AJ Cole
            </Center>
          </Flex>
          {data.post.data?.attributes?.dynamicZone &&
            data.post.data?.attributes?.dynamicZone.map((item, index) => {
              if (item?.__typename === 'ComponentTextRichText') {
                return <ContentRenderer component={item} key={index} />;
              } else if (item?.__typename === 'ComponentImageImageSingle') {
                return <ContentRenderer component={item} key={index} />;
              } else if (item?.__typename === 'ComponentImageImageSlider') {
                return <ContentRenderer component={item} key={index} />;
              }
            })}
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
