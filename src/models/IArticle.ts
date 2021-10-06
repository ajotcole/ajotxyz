export interface IArticle {
  id: number;
  title: string;
  created: Date;
  category: string;
  cover: string;
  content?: string;
}
