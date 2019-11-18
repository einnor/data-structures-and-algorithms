import React, {ChangeEvent} from 'react';

import './style.scss'

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: 'password' | 'number' | 'email' | 'image' | 'text' | 'file' | 'date' | 'phone' | 'url';
  disabled?: boolean;
  label?: string;
  value: string | number | string[] | undefined;
  name?: string;
  id?: string;
};

const TextInput = (props: Props) => {
  return (
    <div className="text-input-wrapper">
      <input
        className="text-input"
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
      />
      <label className="label">{props.label ? props.label : 'Enter value'}</label>
      <span className="focus-border"></span>
  </div>
)
};

export default TextInput;
