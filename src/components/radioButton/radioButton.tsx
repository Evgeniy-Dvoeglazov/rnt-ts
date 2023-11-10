import './radioButton.css';
import type { ComponentPropsWithoutRef } from "react";

interface RadioButtonProps extends ComponentPropsWithoutRef<'input'> {
  mode: string,
}

export default function RadioButton(props: RadioButtonProps) {

  return (
      <label className='radioButton'>
        <input className='radioButton__input' id={props.mode} type='radio' name='searchMovieFilter' {...props} />
        <span className='radioButton__span'>{props.mode}</span>
      </label>
  )
}
