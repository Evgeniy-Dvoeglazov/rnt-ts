import './radioButton.css';
import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

interface RadioButtonProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type'> {
  mode: string,
  variant: 'withBorder' | 'withoutBorder',
};

export default function RadioButton(props: RadioButtonProps) {
  const radioButtonInputClasses = classNames('radioButton__input', props.className);

  const radioButtonSpanClasses = classNames('radioButton__span', `radioButton__span_${props.variant}`);

  return (
    <label className='radioButton'>
      <input {...props} className={radioButtonInputClasses} type='radio' />
      <span className={radioButtonSpanClasses}>{props.mode}</span>
    </label>
  )
}
