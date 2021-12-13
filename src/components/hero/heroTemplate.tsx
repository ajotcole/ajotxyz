import { DefaultButton, Stack } from '@fluentui/react';
import { useState, useEffect } from 'react';
import { IHomeHero } from '../../models/IHomeHero';
import { ArticlesService } from '../../services/articlesService';
import styles from './heroTemplate.module.scss';

export const HeroTemplate = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [homeHero, setHomeHero] = useState<IHomeHero>();

  useEffect(() => {
    (async () => {
      setHomeHero(await ArticlesService.getHomeHeroData());
      setIsLoaded(true);
    })();
  }, []);

  return (
    <Stack className={styles.heroContainer}>
      {isLoaded ? (
        homeHero && (
          <>
            <Stack.Item>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `${
                    homeHero.image ? `url("https://strapi.ajot.dev${homeHero.image}")` : 'url("https://picsum.photos/1000")'
                  }`,
                }}
              ></div>
            </Stack.Item>
            <Stack horizontal tokens={{ childrenGap: 40 }} horizontalAlign="center">
              <Stack.Item>
                <div className={styles.contentContainer}>
                  <div className={styles.category}>Featured Article</div>
                  <div className={styles.heading}>{homeHero.title}</div>
                  <div className={styles.shortDescription}>{homeHero.description}</div>
                  <DefaultButton>Zum Artikel</DefaultButton>
                </div>
              </Stack.Item>
            </Stack>
          </>
        )
      ) : (
        <div>Is Loading</div>
      )}
    </Stack>
  );
};
