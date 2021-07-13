import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./styles.css";

interface AccordeonProps {
    children: React.ReactNode,
    title: string
}

const AccordionItem = ({ title, children }: AccordeonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyPress = () => {
    // e.stopPropagation();

    // if (e.key === " ") {
      setIsOpen(!isOpen);
    // }
  };

  return (
    <div
      className={cn("item", { opened: isOpen })}
      onClick={() => setIsOpen(!isOpen)}
      onKeyPress={handleKeyPress}
      tabIndex={1}
    >
      <div className="header">
        <span className="title">{title}</span>
        <span className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
        </span>
      </div>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
};

export default AccordionItem;

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};
