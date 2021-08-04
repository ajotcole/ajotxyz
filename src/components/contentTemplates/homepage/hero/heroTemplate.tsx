import { DefaultButton, Stack } from '@fluentui/react';
import styles from './heroTemplate.module.scss';

export const HeroTemplate = () => {
  return (
    <Stack className={styles.heroContainer}>
      <Stack.Item>
        <div className={styles.image}></div>
      </Stack.Item>
      <Stack horizontal tokens={{ childrenGap: 40 }} horizontalAlign="center">
        <Stack.Item>
          <div className={styles.contentContainer}>
            <div className={styles.category}>Category</div>
            <div className={styles.heading}>Heading</div>
            <div className={styles.shortDescription}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
            </div>
            <DefaultButton>Zum Artikel</DefaultButton>
          </div>
        </Stack.Item>
      </Stack>
    </Stack>
  );
};
