import React, {ChangeEvent} from 'react';

import './style.scss';

type Props = {
  type?: 'default' | 'primary' | 'secondary';
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
  disabled?: boolean;
  text: string;
};

const Button = (props: Props) => {
  return (
    <button
      className={`button ${props.type ? props.type : 'default'}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
};

export default Button;
