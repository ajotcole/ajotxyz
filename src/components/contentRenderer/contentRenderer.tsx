import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { componentTypesEnum, IDynamicZone } from '../../models/IDynamicZone';
import styles from './contentRenderer.module.scss';

export const ContentRenderer = (props: { dynamicZone: IDynamicZone[] }) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [contentArray, setContentArray] = useState<IDynamicZone[]>([]);

  if (props.dynamicZone) {
    setIsEmpty(false);
  }

  useEffect(() => {
    setContentArray(props.dynamicZone);
  }, []);

  console.log('i ran');

  return (
    <>
      {isEmpty && <div>Hier ist noch kein content.</div>}
      {!isEmpty &&
        contentArray.map((x) => {
          switch (x.__component) {
            case componentTypesEnum['text.single-text']:
              <div>{x.singleText}</div>;
              break;
            case componentTypesEnum['text.rich-text']:
              <ReactMarkdown className={styles.richText}>{x.richText || ''}</ReactMarkdown>;
              break;
          }
        })}
    </>
  );
};
