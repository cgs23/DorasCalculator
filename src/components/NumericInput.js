import { useState } from "react";

const NumericInput = ({ placeholder, getValue, defaultValue, name, label }) => {
  const [value, setValue] = useState(defaultValue ?? 0);

  const handleChange = (e) => {
    if(e.target.value === null || e.target.value === undefined || isNaN(parseFloat(e.target.value))){
        setValue(0);
        getValue(e.target.id, null);
    }
    setValue(e.target.value);
    getValue(e.target.id, e.target.value);
  };

  return (
    <div>
      <label className="rule-three" htmlFor={name}>{label}</label>
      <input
        value={value || ""}
        className="type-1 generic-numeric-input rule-three"
        type="number"
        id={name}
        name={name}
        placeholder={placeholder}
        step="any"
        onChange={handleChange}
      />
    </div>
  );
};

export default NumericInput;
