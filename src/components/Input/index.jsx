import React, {useState} from 'react';
import "./index.css";

export function Input(props) {
  const {
    type = "text",
    placeholder = "Write here...",
    value,
    onChange = () => {},
    disabled = false,
    label,
    danger = false,
    children
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const inputClassName = `input ${danger ? "input--danger" : ""}`;
  const labelClassName = `label ${danger ? "label--danger" : ""} ${isFocused ? "label--focus" : ""}`;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="input-container">
      {label && <label className={labelClassName}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClassName}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default Input;
