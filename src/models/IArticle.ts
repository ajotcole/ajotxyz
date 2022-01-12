import { IDynamicZone } from './IDynamicZone';

export interface IArticle {
  id: number;
  title: string;
  created: Date;
  category: string;
  dynamicZone: IDynamicZone[];
  cardCover: string;
}
