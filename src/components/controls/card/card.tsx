import { Stack } from '@fluentui/react';
import styles from './card.module.scss';
import { CgCalendarDates } from "react-icons/cg";
import { formatDate } from '../../../utility';

export const ContentCard = (props: { content: number }) => {
  console.log(props.content);

  return (
    <a className={styles.linkContainer} href="https://google.com">
      <Stack className={styles.card}>
        <div className={styles.cardImage}></div>
        <Stack className={styles.cardContent}>
          <div className={styles.category}>category</div>
          <div className={styles.heading}>Heading</div>
          <div className={styles.seperator} />
          <div className={styles.date}><CgCalendarDates/>{formatDate(new Date())}</div>
        </Stack>
      </Stack>
    </a>
  );
};
