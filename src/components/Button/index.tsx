import React from 'react';

import './style.scss';

type Props = {
  type?: 'default' | 'primary' | 'secondary';
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
  disabled?: boolean;
  active?: boolean;
  text: string;
  style?: object;
};

const Button = (props: Props) => {
  return (
    <button
      className={`button button--${props.type ? props.type : 'default'} ${props.active ? 'button--active' : null}`}
      disabled={props.disabled}
      onClick={props.onClick}
      style={props.style}
    >
      {props.text}
    </button>
  )
};

export default Button;
