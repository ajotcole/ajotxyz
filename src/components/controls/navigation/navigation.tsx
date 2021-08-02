import { FontIcon, Stack } from '@fluentui/react';
import styles from './navigation.module.scss';

export const Naviagtion = () => {
  return (
    <Stack horizontal className={styles.navigationContainer}>
      <Stack.Item>
        <FontIcon className={styles.icons} iconName="Search" />
      </Stack.Item>
      <Stack.Item className={styles.centerItem} grow={3} align="center">
        Center
      </Stack.Item>
      <Stack.Item align="end">
        <FontIcon className={styles.icons} iconName="GlobalNavButton" />
      </Stack.Item>
    </Stack>
  );
};
