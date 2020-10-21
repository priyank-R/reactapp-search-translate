import React from "react";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <a href="/" className="item">
        Accordian
      </a>

      <a href="/search" className="item">
        Search
      </a>

      <a hef="/translate" className="item">
        Translate
      </a>
    </div>
  );
};

export default Header
