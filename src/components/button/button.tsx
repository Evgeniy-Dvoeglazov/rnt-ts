import './button.css';
import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

interface buttonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'type'> {
  onClick: () => void;
  variant: 'withBackground' | 'withoutBackground';
  title: string;
}

export default function Button(props: buttonProps) {
  const buttonClasses = classNames('button', `button_${props.variant}`,  props.className);

  return (
    <button {...props} className={buttonClasses} type='button'>{props.title}</button>
  )
}
