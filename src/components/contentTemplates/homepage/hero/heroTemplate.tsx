import { Stack } from '@fluentui/react';
import styles from './heroTemplate.module.scss';

export const HeroTemplate = () => {
  return (
    <Stack className={styles.heroContainer}>
      <Stack.Item>
        <div className={styles.image}></div>
      </Stack.Item>
      <Stack horizontal tokens={{ childrenGap: 40 }} horizontalAlign="center">
        <Stack.Item>
          <div className={styles.contentContainer}>Content Container</div>
        </Stack.Item>
      </Stack>
    </Stack>
  );
};
