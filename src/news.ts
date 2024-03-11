/**
 * Interface of the News class
 */
export interface NewsInterface {
  /**
   * Function to show the news.
   */
  showNews(): void;
}

/**
 * Class to represent a real news
 */
export class News implements NewsInterface {
  /**
   *
   * @param title title of the news
   * @param summary summary of the news
   * @param info more information about the news
   * @param conclusion conclusion of the news
   * @param contacts contacts
   */
  constructor(
    private title: string,
    private summary: string,
    private info: string,
    private conclusion: string,
    private contacts: string[],
  ) {}
  showNews(): void {
    console.log(this.title);
    console.log(this.summary);
    console.log(this.info);
    console.log(this.conclusion);
    this.contacts.forEach((contact) => console.log(contact));
  }
}
