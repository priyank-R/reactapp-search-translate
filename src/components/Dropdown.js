import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (!ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.body.addEventListener("click", onBodyClick);

    //cleanup function
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <option
        key={option.value}
        className="item"
        value={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </option>
    );
  });
  console.log(ref);

  return (
    <div ref={ref} className="dropdown-component">
      <div
        onClick={() => setOpen(!open)}
        className={`ui selection dropdown ${open ? "visible active" : ""}`}
      >
        <i className="dropdown icon"></i>
        <div className="text">{selected.label}</div>
        <div className={`menu ${open ? "visible transition" : ""}`}>
          {renderedOptions}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
