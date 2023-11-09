import './RadioButton.css';

interface RadioButtonProps {
  name: string,
  checked: boolean,
  changeRadio: () => void;
}

function RadioButton(props: RadioButtonProps) {
  function handleChange() {
    props.changeRadio();
  }

  return (
    <div className='radioButton'>
      <input className='radioButton__input' id={props.name} type='radio' name='searchFilter' value={props.name} checked={props.checked} onChange={handleChange} />
      <label className='radioButton__label' htmlFor={props.name}>{props.name}</label>
    </div>
  )
}

export default RadioButton;
