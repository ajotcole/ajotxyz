import styles from './card.module.scss';
import { CgCalendarDates } from 'react-icons/cg';
import { formatDate } from '../../utility';
import { IArticle } from '../../models/IArticle';
import { Box, Stack } from '@chakra-ui/react';

export const ContentCard = (props: { content: IArticle }) => {
  return (
    <a className={styles.linkContainer} href={`/articles/${props.content.id}`}>
      <Stack className={styles.card}>
        <Box
          className={styles.cardImage}
          style={{
            backgroundImage: `${
              props.content.cardCover ? `url("https://strapi.ajot.dev${props.content.cardCover}")` : 'url("https://picsum.photos/1000")'
            }`,
          }}
        >
          &nbsp;
        </Box>
        <Box className={styles.cardContent}>
          <div className={styles.category}>{props.content.category}</div>
          <div className={styles.heading}>{props.content.title}</div>
          <div className={styles.seperator} />
          <div className={styles.date}>
            <CgCalendarDates />
            {formatDate(props.content.created)}
          </div>
        </Box>
      </Stack>
    </a>
  );
};
