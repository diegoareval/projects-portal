import React from "react";
import "./styles.css";


interface AccordeonProps {
    children: React.ReactNode
}
const Accordeon = (props: AccordeonProps) => {


    const { children } = props;
  return <div className="accordion">{children}</div>;
};

export default Accordeon;


