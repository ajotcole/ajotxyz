import { Stack } from '@fluentui/react';
import styles from './footer.module.scss';
export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Stack className={styles.contentContainer}>
        <Stack.Item className={styles.contentSection} align="center">
          Impressum - About me - Other Stuff
        </Stack.Item>
        <Stack.Item className={styles.copyrightName} align="center">
          © 2021 ajot.xyz
        </Stack.Item>
      </Stack>
    </footer>
  );
};
