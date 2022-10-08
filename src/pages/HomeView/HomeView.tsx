import { Spinner, SpinnerSize, Stack } from '@fluentui/react';
import { useEffect, useState } from 'react';
import { IArticle } from '../../models/IArticle';
import { ArticlesService } from '../../services/articlesService';
import { HeroTemplate } from '../../components/hero/heroTemplate';
import { ContentCard } from '../../components/card/card';
import { Button as ChakraButton, ButtonGroup } from '@chakra-ui/react';

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
        <ButtonGroup marginBottom="10px">
          <ChakraButton variant="outline">Button1</ChakraButton>
          <ChakraButton variant="ghost">Button2</ChakraButton>
        </ButtonGroup>
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
