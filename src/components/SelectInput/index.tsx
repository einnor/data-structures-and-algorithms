import React, {ChangeEvent} from 'react';

import './style.scss'

type SelectItem = {
  key: string;
  text: string;
  value: string;
};

type Props = {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  data: SelectItem[];
  active: string;
  name?: string;
  id?: string;
};

const SelectInput = (props: Props) => {

  return (
    <div className="select-input-wrapper">
      <select
        className="select-input"
        placeholder={props.placeholder}
        disabled={props.disabled}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
      >
        {
          props.data.map((option) => (
            <option key={option.key} value={option.value}>
              {option.text}
            </option>
          ))
        }
      </select>
      <label className="label">{props.label ? props.label : 'Enter value'}</label>
      <span className="focus-border"></span>
  </div>
)
};

export default SelectInput;
