import { Observable, Observer, ChannelObserver } from "./observer";
import { News } from "./news";

/**
 * Interface for channles classes
 */
export interface ChannelInterface {
  /**
   * Function to publish news on the channel
   * @param newsToPublish news to pusblish on the channel
   */
  publish(newsToPublish: News): void;
  //   showNews(): void;
}

/**
 * Class Channel where you can have a collection of news
 */
export class Channel implements ChannelInterface, Observable {
  private observers: Observer[] = [];
  /**
   * 
   * @param name name of channel
   * @param news collection of news
   */
  constructor(
    private name: string,
    private news: News[],
  ) {}

  getName() {
    return this.name;
  }

  getNews(): News[] {
    return this.news;
  }

  subscribe(observer: Observer): void {
    if (this.observers.includes(observer)) {
      throw new Error("The observer had already been subscribed");
    } else {
      this.observers.push(observer);
    }
  }
  unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error("The observer has not been subscribed");
    } else {
      this.observers.splice(index, 1);
    }
  }
  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
  publish(newsToPublish: News): void {
    this.news.unshift(newsToPublish);
    this.notify;
  }
}

// Client code
let myNews = new News(
  "Accidente TF-5",
  "Ocurre un ...",
  "Los afectados ...",
  "No hay ...",
  ["Juan", "Aaron"],
);
const myChannel = new Channel("ULL", [myNews]);

const firstChannelObserver = new ChannelObserver(1, "firstChannelObserver");

console.log("firstChannelObserver subscription");
myChannel.subscribe(firstChannelObserver);

try {
    myChannel.subscribe(firstChannelObserver);
} catch (error) {
  console.log("firstChannelObserver was already subscribed");
}

myNews = new News(
    "Resolución aceptados...",
    "Para los interesados ...",
    "Se dictaminó que ...",
    "Esta propuesta se ...",
    ["Rectorado ..."],
  );

console.log("publish news");
myChannel.publish(myNews);