import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ContentRenderer = (dynamicZone: any) => {
  const [isError, setIsError] = useState<boolean>(false);

  setIsError(false);

  return (
    <>
      {isError && <div>Error while loading content.</div>}
      {!isError && (
        <div>
          Content Renderer works.
          <Swiper></Swiper>
        </div>
      )}
    </>
  );
};
