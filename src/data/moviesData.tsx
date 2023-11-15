import shawshankImage from '../pictures/shawshank.jpg';
import greenMileImage from '../pictures/green-mile.jpg';
import thingImage from '../pictures/thing.jpg';
import spiderManImage from '../pictures/spider-man.jpg';
import interstellarImage from '../pictures/interstellar.jpg';
import shutterIslandImage from '../pictures/shutter-island.jpg';
import illusionistImage from '../pictures/illusionist.jpg';
import gladiatorImage from '../pictures/gladiator.jpg';

export enum Genre {
  Drama = 'drama',
  Horror = 'horror',
  Adventure = 'adventure',
  Fantasy = 'fantasy',
  Thriller = 'horror',
  Blockbuster = 'blockbuster'
};

export const moviesData = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    genre: Genre.Drama,
    year: 1994,
    image: shawshankImage
  },
  {
    id: 2,
    title: 'The Green Mile',
    genre: Genre.Drama,
    year: 1999,
    image: greenMileImage
  },
  {
    id: 3,
    title: 'The Thing',
    genre: Genre.Horror,
    year: 1982,
    image: thingImage
  },
  {
    id: 4,
    title: 'Spider-Man',
    genre: Genre.Adventure,
    year: 2002,
    image: spiderManImage
  },
  {
    id: 5,
    title: 'Interstellar',
    genre: Genre.Fantasy,
    year: 2014,
    image: interstellarImage
  },
  {
    id: 6,
    title: 'Shutter Island',
    genre: Genre.Thriller,
    year: 2010,
    image: shutterIslandImage
  },
  {
    id: 7,
    title: 'The Illusionist',
    genre: Genre.Fantasy,
    year: 2006,
    image: illusionistImage
  },
  {
    id: 8,
    title: 'Gladiator',
    genre: Genre.Blockbuster,
    year: 2000,
    image: gladiatorImage
  },
];
