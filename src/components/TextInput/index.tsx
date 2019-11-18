import React, {ChangeEvent} from 'react';

import './style.scss'

type Props = {
  onChange: (e: ChangeEvent) => void;
  placeholder?: string;
  type: 'password' | 'number' | 'email' | 'image' | 'text' | 'file' | 'date' | 'phone' | 'url';
  disabled?: boolean;
  label?: string;
  value: string;
  name: string;
  id?: string;
};

const TextInput = (props: Props) => {
  return (
    <div className="wrapper">
      {/* OPTIONAL: Include label element */}
      <div className="text-input-wrapper">
        <input
          className="text-input"
          onChange={props.onChange}
          placeholder={props.placeholder}
          type={props.type || 'text'}
          disabled={props.disabled}
          value={props.value}
          name={props.name}
          id={props.id}
        />
      </div>
    </div>
  )
};

export default TextInput;
