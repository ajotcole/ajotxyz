import { Stack } from '@fluentui/react';
import styles from './footer.module.scss'
export const Footer = () => {
  return <footer className={styles.footerContainer}>
      <Stack className={styles.contentContainer}>
          <Stack horizontal horizontalAlign="space-around" wrap tokens={{ childrenGap: 10 }}>
              <div className={styles.contentSection}>Erster Bereich</div>
              <div className={styles.contentSection}>Zweiter Bereich</div>
          </Stack>
          <Stack.Item className={styles.copyrightName} align="center">© 2021 ajot.xyz</Stack.Item>
      </Stack></footer>;
};
