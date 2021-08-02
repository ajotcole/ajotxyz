import { Stack } from '@fluentui/react';
import React from 'react';
import { HeroTemplate } from '../contentTemplates/homepage/hero/heroTemplate';
import styles from './HomeView.module.scss';

export const HomeView = () => {
  const mockData = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <HeroTemplate />
      <Stack className={styles.homeView}>
        <div className={styles.heading}>Test Überschrift</div>
        <Stack horizontal horizontalAlign="space-around" wrap tokens={{ childrenGap: 15 }}>
          {mockData.map((i) => (
            <Stack.Item key={i} className={styles.card}>
              {i}
            </Stack.Item>
          ))}
        </Stack>
      </Stack>
    </>
  );
};
