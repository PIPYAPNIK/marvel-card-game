import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./Heading.module.scss";

export const Heading = ({
  level = 1,
  id,
  className,
  black = false,
  backLine = false,
  children,
}) => {
  const el = `h${level}`;

  return children
    ? React.createElement(
        el,
        {
          className: cn(styles.root, className, {
            [styles.black]: black,
            [styles.backLine]: backLine,
          }),
          id: id,
        },
        children
      )
    : null;
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
  id: PropTypes.string,
  black: PropTypes.bool,
  backLine: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
