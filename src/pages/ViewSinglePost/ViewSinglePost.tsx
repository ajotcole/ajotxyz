import { Spinner, SpinnerSize, Stack } from '@fluentui/react';
import { useState, useEffect } from 'react';
import { CgCalendarDates, CgUser } from 'react-icons/cg';
import { useParams } from 'react-router-dom';
import { ContentRenderer } from '../../components/contentRenderer/contentRenderer';
import { IArticle } from '../../models/IArticle';
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
        console.log(e);
      }
    })();
  }, []);

  document.title = `ajot.xyz - ${item?.title}`;

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
          {item && item.dynamicZone.map((x, i) => <ContentRenderer dynamicZone={x} key={i} />)}
        </Stack>
      )}
    </div>
  );
};
