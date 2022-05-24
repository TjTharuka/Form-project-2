import React from 'react';
import { Input } from 'reactstrap';

function InputField(props) {
  const {
    field,
    placeholder,
    id,
    passwordVisibilityToggleId,
    type,
    visibility,
    onClick,
    classes,
    disabled,
    onChange,
  } = props;
  const icon = !visibility ? 'fa fa-eye-slash' : 'fa fa-eye'; // add icon type for the icon
  return (
    <>
      <Input
        className={classes}
        {...field}
        type={!visibility ? type : 'text'}
        placeholder={placeholder}
        id={id}
        {...(onChange && { onChange })}
        disabled={disabled || ''}
      />
      {type === 'password' && (
        <i
          id={passwordVisibilityToggleId}
          className={`${icon} pt-2 mt-1 pr-2`}
          onClick={onClick}
          style={{ color: 'black', cursor: 'pointer' }}
        />
      )}
    </>
  );
}

export default InputField;
