import { IArticle } from '../models/IArticle';
import { IHomeHero } from '../models/IHomeHero';

export class ArticlesService {
  public static async getAllArticles() {
    //TODO update to gql
    return 'foo';
  }

  public static getAllArticlesHome() {
    // gets lightweight list just for cards
    return 'TODO';
  }

  public static async getSingleArticle(id: number) {
    //TODO update to gql
    return 'foo';
  }

  public static async getHomeHeroData() {
    //TODO update to gql
    return 'foo';
  }
}
