import { Spinner, SpinnerSize, Stack } from '@fluentui/react';
import { useState, useEffect } from 'react';
import { CgCalendarDates } from 'react-icons/cg';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { IArticle } from '../../../models/IArticle';
import { ArticlesService } from '../../../services/articlesService';
import { formatDate } from '../../../utility';
import styles from './ViewSinglePost.module.scss';

export const ViewSinglePost = () => {
  const { id }: any = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState<IArticle>();

  useEffect(() => {
    (async () => {
      setItem(await ArticlesService.getSingleArticle(id));
      setIsLoaded(true);
    })();
  }, [id]);

  document.title = `ajot.xyz - ${item?.title}`;

  console.log(item?.content);

  return (
    <div className={styles.articleContainer}>
      {isLoaded ? (
        item && (
          <Stack className={styles.articleContent}>
            <div className={styles.category}>{item.category}</div>
            <h1>{item.title}</h1>
            <div className={styles.seperator} />
            <div className={styles.date}>
              <CgCalendarDates />
              {formatDate(item.created)}
            </div>
            <div
              className={styles.coverImage}
              style={{
                backgroundImage: `${item.cover ? `url("https://strapi.ajot.dev${item.cover}")` : 'url("https://picsum.photos/1000")'}`,
              }}
            />
            <ReactMarkdown className={styles.richText}>{item.content || ''}</ReactMarkdown>
          </Stack>
        )
      ) : (
        <Spinner className={styles.spinnerStyle} size={SpinnerSize.large} />
      )}
    </div>
  );
};
