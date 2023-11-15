import './radioButton.css';
import type { ComponentPropsWithoutRef } from 'react';

interface RadioButtonProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type'> {
  mode: string,
  variant: 'withBorder' | 'withoutBorder',
};

export default function RadioButton(props: RadioButtonProps) {
  return (
    <label className='radioButton'>
      <input {...props} className={`radioButton__input ${props.className}`} type='radio' />
      <span className={`radioButton__span radioButton__span_${props.variant}`}>{props.mode}</span>
    </label>
  )
}
