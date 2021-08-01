import { Stack } from '@fluentui/react';
import styles from './navigation.module.scss';

export const Naviagtion = () => {
  return (
    <Stack horizontal className={styles.navigationContainer}>
      <Stack.Item>Left</Stack.Item>
      <Stack.Item className={styles.centerItem} grow={3} align="center">
        Center
      </Stack.Item>
      <Stack.Item align="end">Right</Stack.Item>
    </Stack>
  );
};
