export interface OompaLoompa {
  age: number;
  country: string;
  email: string;
  favorite: Favorite;
  firstName: string;
  gender: string;
  height: number;
  id: number;
  image: string;
  lastName: string;
  profession: string;
  details?: OompaLoompaDetail;
}

export interface Favorite {
  color: string;
  food: string;
  randomString: string;
  song: string;
  superpower: string;
}

export interface OompaLoompaDetail {
  description: string;
  quote: string;
  lastFetched: number;
}
