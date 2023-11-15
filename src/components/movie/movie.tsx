import './movie.css';

type Genre = 'drama' | 'horror' | 'adventure' | 'fantasy' | 'thriller' | 'blockbuster';

interface MovieProps {
  title: string,
  image: string,
  genre: Genre,
  year: number
};

export default function Movie(props: MovieProps) {
  return (
    <li className='movie'>
      <img className='movie__image' src={props.image} alt={props.title} />
      <div className='movie__info'>
        <h2 className='movie__title'>{props.title}</h2>
        <p className='movie__year'>{props.year}</p>
      </div>
      <p className='movie__genre'>{props.genre}</p>
    </li>
  )
}
