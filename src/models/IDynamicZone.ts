export interface IDynamicZone {
  __component: string;
  id: number;
  richText: string;
  singleText: string;
  imageSlider: image[];
  imageSingle: image;
  description: string;
}

export enum componentTypesEnum {
  'images.single-image',
  'images.image-slider',
  'text.rich-text',
  'text.single-text',
}

interface image {
  url: string;
  caption: string;
  alternativeText: string;
  formats: {
    thumbnail: {
      url: string;
    };
    large: {
      url: string;
    };
    medium: {
      url: string;
    };
    small: {
      url: string;
    };
  };
}
