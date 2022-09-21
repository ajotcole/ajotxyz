import { IArticle } from '../models/IArticle';
import { IHomeHero } from '../models/IHomeHero';

export class ArticlesService {
  public static async getAllArticles() {
    // gets the whole thing
    const response = await fetch('https://strapi.ajot.dev/api/posts?populate=*');
    const articles = await response.json();
    const data: IArticle[] = [];

    articles.data.map((r: any) =>
      data.push({
        id: r.id,
        title: r.attributes.title,
        created: new Date(r.attributes.date),
        category: r.attributes.category,
        cardCover: r.attributes.cardCover.data?.attributes.formats.small.url,
      } as IArticle),
    );

    return data;
  }

  public static getAllArticlesHome() {
    // gets lightweight list just for cards
    return 'TODO';
  }

  public static async getSingleArticle(id: number) {
    //   Gets data for a single article
    const response = await fetch(`https://strapi.ajot.dev/api/posts/${id}?populate=deep`);
    const article = await response.json();

    const data: IArticle = {
      id: article.data.id,
      title: article.data.attributes.title,
      created: new Date(article.data.attributes.date),
      category: article.data.attributes.category,
      cardCover: article.data.attributes.cardCover.data?.attributes.formats.large.url,
      dynamicZone: article.data.attributes?.dynamicZone,
    } as IArticle;

    return data;
  }

  public static async getHomeHeroData() {
    const response = await fetch('https://strapi.ajot.dev/api/home-hero-container?populate=*');
    const content = await response.json();
    const data: IHomeHero = {
      title: content.data.attributes.title,
      description: content.data.attributes.description,
      image: content.data.attributes.image.data?.attributes.formats.large.url,
      buttonUrl: content.data.attributes.buttonUrl,
      buttonText: content.data.attributes.buttonText,
    } as IHomeHero;

    return data;
  }
}
