import { useState, useEffect } from 'react';
import { IHomeHero } from '../../models/IHomeHero';
import { ArticlesService } from '../../api/articlesService';
import styles from './heroTemplate.module.scss';
import { CgMailForward } from 'react-icons/cg';
import { Box, HStack, Stack } from '@chakra-ui/react';

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
          <HStack style={{ marginTop: '76px' }}>
            <Box>
              <div className={styles.contentContainer}>
                <div className={styles.category}>Featured Article</div>
                <div className={styles.heading}>{homeHero.title}</div>
                <div className={styles.shortDescription}>{homeHero.description}</div>
                <HStack className={styles.linkFeaturedArticle} onClick={() => window.open(homeHero.buttonUrl)}>
                  <CgMailForward size={28} />
                  <span>{homeHero.buttonText}</span>
                </HStack>
              </div>
            </Box>
          </HStack>
        )
      ) : (
        <div>Is Loading</div>
      )}
    </Stack>
  );
};
