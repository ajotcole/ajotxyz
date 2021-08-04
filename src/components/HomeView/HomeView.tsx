import { Stack } from '@fluentui/react';
import React from 'react';
import { HeroTemplate } from '../contentTemplates/homepage/hero/heroTemplate';
import { ContentCard } from '../controls/card/card';
import styles from './HomeView.module.scss';

export const HomeView = () => {
  const mockData = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <HeroTemplate />
      <Stack className={styles.homeView}>
        <div className={styles.heading}>All Articles</div>
        <div className={styles.seperator} />
        <Stack horizontal horizontalAlign="space-between" wrap tokens={{ childrenGap: 10 }}>
          {mockData.map((i) => (
            <ContentCard content={i} key={i} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};
