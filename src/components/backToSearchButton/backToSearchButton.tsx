import './backToSearchButton.css'

interface BackToSearchButtonProps {
  backToSearch: () => void;
}

export default function BackToSearchButton(props: BackToSearchButtonProps) {
  return (
    <button className='backToSearchButton' type='button' onClick={props.backToSearch}>Back to search</button>
  )
}
