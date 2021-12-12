import { Spinner, SpinnerSize, Stack } from '@fluentui/react';
import { useState, useEffect } from 'react';
import { CgCalendarDates, CgUser } from 'react-icons/cg';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { ContentRenderer } from '../../components/contentRenderer/contentRenderer';
import { IArticle } from '../../models/IArticle';
import { IDynamicZone } from '../../models/IDynamicZone';
import { ArticlesService } from '../../services/articlesService';
import { formatDate } from '../../utility';
import styles from './ViewSinglePost.module.scss';

export const ViewSinglePost = () => {
  const { id }: any = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState<IArticle>();
  const [dynamicZoneData, setDynamicZoneData] = useState<IDynamicZone[]>([]);

  useEffect(() => {
    (async () => {
      setItem(await ArticlesService.getSingleArticle(id));
      setIsLoaded(true);
    })();
  }, []);

  document.title = `ajot.xyz - ${item?.title}`;
  setDynamicZoneData(item?.dynamicZone || []);

  return (
    <div className={styles.articleContainer}>
      {!isLoaded && <Spinner className={styles.spinnerStyle} size={SpinnerSize.large} />}
      {isLoaded && item && (
        <Stack className={styles.articleContent}>
          <div className={styles.category}>{item.category}</div>
          <h1>{item.title}</h1>
          <div className={styles.seperator} />
          <Stack horizontal className={styles.metadata} horizontalAlign="space-between" tokens={{ childrenGap: 3000 }}>
            <div className={styles.date}>
              <CgCalendarDates />
              {formatDate(item.created)}
            </div>
            <div className={styles.author}>
              <CgUser />
              AJ Cole
            </div>
          </Stack>

          <div
            className={styles.coverImage}
            style={{
              backgroundImage: `${item.cover ? `url("https://strapi.ajot.dev${item.cover}")` : 'url("https://picsum.photos/1000")'}`,
            }}
          />
          <ContentRenderer dynamicZone={dynamicZoneData} />
        </Stack>
      )}
    </div>
  );
};
