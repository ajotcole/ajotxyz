import { Stack } from '@fluentui/react';
import { useEffect, useState } from 'react';
import { IArticle } from '../../../models/IArticle';
import { ArticlesService } from '../../../services/articlesService';
import { HeroTemplate } from '../../contentTemplates/homepage/hero/heroTemplate';
import { ContentCard } from '../../controls/card/card';
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

  document.title = 'ajot.xyz - Home';

  return (
    <>
      <HeroTemplate />
      <Stack className={styles.homeView}>
        <div className={styles.heading}>All Articles</div>
        <div className={styles.seperator} />
        <Stack horizontal horizontalAlign="start" wrap tokens={{ childrenGap: 20 }}>
          {isLoaded ? items && items.map((i, index) => <ContentCard content={i} key={index} />) : <div>Loading</div>}

          {console.log(items)}
        </Stack>
      </Stack>
    </>
  );
};
