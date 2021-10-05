import { FontIcon, Stack } from '@fluentui/react';
import styles from './navigation.module.scss';

export const Naviagtion = () => {
  return (
    <Stack horizontal className={styles.navigationContainer} tokens={{ childrenGap: 10}}>
      <Stack.Item align="center">
        <FontIcon className={styles.icons} iconName="Search" />
      </Stack.Item>
      <Stack.Item className={styles.centerItem} grow={3} align="center">
        <div className={styles.fontLogo}>
          ajot.xyz
        </div>
      </Stack.Item>
      <Stack.Item align="center">
        <FontIcon className={styles.icons} iconName="GlobalNavButton" />
      </Stack.Item>
    </Stack>
  );
};
