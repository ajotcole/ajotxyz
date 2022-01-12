import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { IDynamicZone } from '../../models/IDynamicZone';
import styles from './contentRenderer.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

export const ContentRenderer = (props: { dynamicZone: IDynamicZone }) => {
  const [data, setData] = useState<IDynamicZone>();

  useEffect(() => {
    setData(props.dynamicZone);
  }, []);

  // install Swiper modules
  SwiperCore.use([Navigation]);

  return (
    <>
      {data?.__component === 'text.single-text' && <div>{data.singleText}</div>}
      {data?.__component === 'text.rich-text' && <ReactMarkdown className={styles.richText}>{data.richText}</ReactMarkdown>}
      {data?.__component === 'images.single-image' && (
        <div>
          <img
            className={styles.imageRender}
            src={`https://strapi.ajot.dev${data.imageSingle.url}`}
            alt={data.imageSingle.alternativeText}
          />
          {data.imageSingle.caption && <div>{data.imageSingle.caption}</div>}
        </div>
      )}
      {data && data?.__component === 'images.image-slider' && (
        <Swiper className={styles.swiperCustomProps} centeredSlides navigation={true} height={200}>
          {data.imageSlider.map((x, i) => (
            <SwiperSlide key={i}>
              <img src={`https://strapi.ajot.dev${x.url}`} alt={x.alternativeText} />
              {x.caption && <div>{x.caption}</div>}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
