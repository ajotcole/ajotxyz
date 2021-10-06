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
        created: new Date(r.date),
        category: r.category,
        cover: r.cover?.formats.small.url,
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
    const response = await fetch(`https://strapi.ajot.dev/dev-posts/${id}`);
    const article = await response.json();
    const data: IArticle = {
      id: article.id,
      title: article.title,
      created: new Date(article.date),
      category: article.category,
      cover: article.cover?.formats.large.url,
      content: article.content,
    } as IArticle;

    return data;
  }
}
