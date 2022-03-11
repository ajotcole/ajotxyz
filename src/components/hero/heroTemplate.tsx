import { FontIcon, Stack } from '@fluentui/react';
import { useState, useEffect } from 'react';
import { IHomeHero } from '../../models/IHomeHero';
import { ArticlesService } from '../../services/articlesService';
import styles from './heroTemplate.module.scss';
import { CgMailForward } from 'react-icons/cg';

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
            <Stack horizontal tokens={{ childrenGap: 40 }} style={{ marginTop: '76px' }} horizontalAlign="center">
              <Stack.Item>
                <div className={styles.searchBox}>
                  <FontIcon style={{ margin: '0 10px' }} iconName="Search" />
                  <span>Search coming soon...</span>
                </div>
                <div className={styles.contentContainer}>
                  <div className={styles.category}>Featured Article</div>
                  <div className={styles.heading}>{homeHero.title}</div>
                  <div className={styles.shortDescription}>{homeHero.description}</div>
                  <Stack horizontal className={styles.linkFeaturedArticle}>
                    <CgMailForward size={28} />
                    <span>TO ARTICLE</span>
                  </Stack>
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
