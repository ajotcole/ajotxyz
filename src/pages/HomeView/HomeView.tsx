import { Spinner, SpinnerSize, Stack } from '@fluentui/react';
import { useEffect, useState } from 'react';
import { IArticle } from '../../models/IArticle';
import { ArticlesService } from '../../services/articlesService';
import { HeroTemplate } from '../../components/hero/heroTemplate';
import { ContentCard } from '../../components/card/card';
import styles from './HomeView.module.scss';

export const HomeView = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<IArticle[]>([]);

  useEffect(() => {
    (async () => {
      setItems(await ArticlesService.getAllArticles());
      setIsLoaded(true);
    })();
  }, []);

  document.title = 'AJOT.XYZ - Home';

  return (
    <>
      <HeroTemplate />
      <Stack className={styles.homeView}>
        <div className={styles.heading}>All Articles</div>
        <div className={styles.seperator} />
        <div className={styles.contentItemsContainer}>
          {isLoaded ? (
            items && items.map((i, index) => <ContentCard content={i} key={index} />)
          ) : (
            <Spinner className={styles.spinnerStyle} size={SpinnerSize.large} />
          )}
        </div>
      </Stack>
    </>
  );
};
