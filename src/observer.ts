import { Channel } from "./channel";

/**
 * Interface for observable classes
 */
export interface Observable {
  /**
   * Function to subcribe the class
   * @param observer Observer of the subscription
   */
  subscribe(observer: Observer): void;
  /**
   * Function to unsubcribe the class
   * @param observer Observer of the subscription
   */
  unsubscribe(observer: Observer): void;
  /**
   * Function to notify the actual state of the class
   */
  notify(): void;
}

/**
 * Interface for observer classes
 */
export interface Observer {
  update(observable: Observable): void;
}

export class ChannelObserver implements Observer {
  constructor(
    private id: number,
    private name: string,
  ) {}

  getId(): number {
    return this.id;
  }

  getName() {
    return this.name;
  }

  update(observable: Observable) {
    if (observable instanceof Channel) {
      console.log(
        `I am ${this.name}. The name of the channel is ${observable.getName}, the news are:`,
      );
      console.log(
        observable.getNews().forEach((newsToShow) => newsToShow.showNews()),
      );
    }
  }
}
