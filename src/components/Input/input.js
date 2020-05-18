import React from 'react';
import './input.scss';

const Input = (props) => {
  return (
    <div className="form-input">
      {props.label
        ? (
          <label htmlFor={props.id}>
            {props.label}
            {props.required
              ? <span>*</span> : null}
          </label>
        ) : null}
        <input
          id={props.id}
          readOnly={props.readonly ? true : null}
          type={props.type ? props.type : 'text'}
          name={props.name}
          maxLength={255}
          placeholder={props.placeholder}
          required={props.required ? true : null}
          disabled={props.disabled ? true : null}
          defaultValue={props.value}
          onFocus={props.onFocus ? props.onFocus : null}
          onChange={props.onChange ? props.onChange : null}
          autoComplete="off"
        />
    </div>
  );
};

export default Input;
