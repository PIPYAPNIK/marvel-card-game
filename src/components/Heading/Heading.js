import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./Heading.module.css";

export const Heading = ({ level = 1, className, black = false, children }) => {
  const el = `h${level}`;

  if (!children) {
    return;
  }

  return React.createElement(
    el,
    {
      className: cn(styles.root, className, { [styles.black]: black }),
    },
    children
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
  black: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
