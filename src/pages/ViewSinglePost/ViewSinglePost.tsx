import { Spinner, SpinnerSize, Stack } from '@fluentui/react';
import { DiscussionEmbed } from 'disqus-react';
import { useEffect, useState } from 'react';
import { CgCalendarDates, CgUser } from 'react-icons/cg';
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
          {item && item.dynamicZone.map((x: IDynamicZone, i: number) => <ContentRenderer dynamicZone={x} key={i} />)}
          <DiscussionEmbed
            shortname="ajotxyz"
            config={{
              url: window.location.href,
              identifier: id,
              title: item.title,
              language: 'en_US',
            }}
          />
        </Stack>
      )}
    </div>
  );
};
