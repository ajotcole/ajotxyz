import { Stack } from '@fluentui/react';
import React from 'react';
import { Naviagtion } from '../controls/navigation';
import styles from './HomeView.module.scss';

export const HomeView = () => {
  const mockData = [1, 2, 3, 4, 5, 6];

  return (
    <Stack className={styles.homeView}>
      <Stack className={styles.headLogo} horizontalAlign="center">
        ajot.xyz
      </Stack>
      <Stack>
        <Naviagtion />
      </Stack>
      <Stack horizontal horizontalAlign="space-around" wrap tokens={{ childrenGap: 15 }}>
        {mockData.map((i) => (
          <Stack.Item key={i} className={styles.card}>
            {i}
          </Stack.Item>
        ))}
      </Stack>
    </Stack>
  );
};
