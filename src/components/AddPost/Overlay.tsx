import React from "react";
import classes from "./Overlay.module.css";

interface OverlayProps {
  click: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Overlay: React.FC<OverlayProps> = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.click}>
      {props.children}
    </div>
  );
};

export default Overlay;
