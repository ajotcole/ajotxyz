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

  console.log(data);

  return (
    <>
      {data?.__component === 'text.single-text' && <div>{data.singleText}</div>}
      {data?.__component === 'text.rich-text' && <ReactMarkdown className={styles.richText}>{data.richText}</ReactMarkdown>}
      {data?.__component === 'images.image-single' && (
        <div className={styles.imageRenderContainer}>
          <img
            className={styles.imageRender}
            src={`https://strapi.ajot.dev${data.imageSingle.data.attributes.url}`}
            alt={data.imageSingle.data.attributes.alternativeText}
          />
          {data.description && <div>{data.description}</div>}
        </div>
      )}
      {data && data?.__component === 'images.image-slider' && (
        <Swiper className={styles.swiperCustomProps} centeredSlides navigation={true} height={200}>
          {data.imageSlider.data.map((x, i) => (
            <SwiperSlide key={i}>
              <img src={`https://strapi.ajot.dev${x.attributes.url}`} alt={x.attributes.alternativeText} />
              {x.attributes.caption && <div>{x.attributes.caption}</div>}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
