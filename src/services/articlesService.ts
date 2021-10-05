import { IArticle } from '../models/IArticle';

export class ArticlesService {
  public static async getAllArticles() {
    // gets the whole thing
    const response = await fetch('https://strapi.ajot.dev/dev-posts');
    const articles = await response.json();
    const data: IArticle[] = [];

    articles.map((r: any) =>
      data.push({
        id: r.id,
        title: r.title,
        created: new Date(r.Date),
        category: r.category,
        cover: r.cover?.formats.thumbnail.url,
      } as IArticle),
    );

    return data;
  }

  public static getAllArticlesHome() {
      // gets lightweight list just for cards
      return "TODO"
  }

  public static getSingleArticle() {
    //   Gets data for a single article
      return "TODO"
  }
}
