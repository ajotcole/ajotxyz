import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { IDynamicZone } from '../../models/IDynamicZone';
import styles from './contentRenderer.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { ComponentImageImageSingle, ComponentImageImageSlider, ComponentTextRichText } from '../../models/__generated__/graphql';

export const ContentRenderer: React.FC<{ component: ComponentImageImageSingle | ComponentImageImageSlider | ComponentTextRichText }> = (
  component,
) => {
  // install Swiper modules
  SwiperCore.use([Navigation]);

  return (
    <>
      {/* TODO {component.component.__typename === 'ComponentTextRichText' && <div>{data.singleText}</div>} */}
      {component.component.__typename === 'ComponentTextRichText' && (
        <ReactMarkdown className={styles.richText} children={component.component.richText || ''} />
      )}
      {component.component.__typename === 'ComponentImageImageSingle' && (
        <div className={styles.imageRenderContainer}>
          <img
            className={styles.imageRender}
            src={`${import.meta.env.VITE_STRAPI_URL}${component.component.singleImage?.data?.attributes?.url}`}
            alt={component.component.singleImage?.data?.attributes?.alternativeText || ''}
          />
          {component.component.singleImage?.data?.attributes?.caption && (
            <div>{component.component.singleImage?.data?.attributes?.caption}</div>
          )}
        </div>
      )}
      {component.component.__typename === 'ComponentImageImageSlider' && (
        <Swiper className={styles.swiperCustomProps} centeredSlides navigation={true} height={200}>
          {component.component.imageSlider?.data.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={`${import.meta.env.VITE_STRAPI_URL}${image.attributes?.url}`} alt={image.attributes?.alternativeText || ''} />
              {image.attributes?.caption && <div>{image.attributes?.caption}</div>}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
