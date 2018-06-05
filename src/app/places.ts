import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

export interface IWeather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface ISocialInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}

export interface IPlace {
  img: string;
  address: string;
  phone: number;   // дополнительно задание pipe для форматирования
  weather: IWeather;
  social_info: ISocialInfo;
  type: string;
}

const data: IPlace[] = [
  {
    img: '/assets/images/r1.jpg',
    address: 'Test Road, 1',
    phone: 12345,
    weather: {
      title: 'Architecto veritatis sit sint',
      icon: '',
      water: 11,
      temperature: 18
    },
    social_info: {
      title: 'harum debitis quasi',
      img: '/assets/images/r1.jpg',
      followers: 10,
      following: 5
    },
    type: 'Fishing'
  },
  {
    img: '/assets/images/res.jpg',
    address: 'Hello World, 2',
    phone: 777888999,
    weather: {
      title: 'Enim dicta modi cumque',
      icon: '',
      water: 20,
      temperature: 25
    },
    social_info: {
      title: 'alias non quos quas',
      img: '/assets/images/b1.jpg',
      followers: 1000,
      following: 50
    },
    type: 'Tours'
  },
  {
    img: '/assets/images/r1.jpg',
    address: 'Somwhere, 3',
    phone: 111111000,
    weather: {
      title: 'Hic laudantium consequatur',
      icon: '',
      water: 25,
      temperature: 30
    },
    social_info: {
      title: 'Aut sit sed consequatur',
      img: '/assets/images/r1.jpg',
      followers: 800,
      following: 200
    },
    type: 'Hotel'
  }
];

export const places$: Observable<IPlace[]> = of(data)
  .pipe(
    delay(1000)
  );
