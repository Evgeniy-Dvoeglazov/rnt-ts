import './movie.css';

interface movieProps {
  title: string,
  image: string,
  genre: string,
  year: number
}

export default function Movie(props: movieProps) {
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
