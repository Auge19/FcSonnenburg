import { Slide } from './slide';

export interface HomeModel {
  events: HomeEvent[];
  slides: Slide[];
  people: HomePeople;
}

export interface HomeEvent {
  date: string;
  subtitle: string;
  title: string;
}

export interface HomePeople {
  name: string;
  url: string;
}
