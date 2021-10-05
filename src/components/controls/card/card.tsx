import { Stack } from '@fluentui/react';
import styles from './card.module.scss';
import { CgCalendarDates } from "react-icons/cg";
import { formatDate } from '../../../utility';
import { IArticle } from '../../../models/IArticle';

export const ContentCard = (props: { content: IArticle }) => {

  return (
    <a className={styles.linkContainer} href={`/articles/${props.content.id}`}>
      <Stack className={styles.card}>
        <div className={styles.cardImage} style={{ backgroundImage: `${props.content.cover ? `url("https://strapi.ajot.dev${props.content.cover}")` : 'url("https://picsum.photos/1000")'}` }}></div>
        <Stack className={styles.cardContent}>
          <div className={styles.category}>{props.content.category}</div>
          <div className={styles.heading}>{props.content.title}</div>
          <div className={styles.seperator} />
          <div className={styles.date}><CgCalendarDates/>{formatDate(props.content.created)}</div>
        </Stack>
      </Stack>
    </a>
  );
};
