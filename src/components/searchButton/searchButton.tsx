import './searchButton.css';

interface SearchButtonProps {
  onClick: () => void;
}

export default function SearchButton(props: SearchButtonProps) {
  return (
    <button className='searchButton' type='button' onClick={props.onClick}>Search</button>
  )
}
