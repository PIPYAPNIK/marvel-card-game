import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./Text.module.scss";

export const Text = ({
  children,
  element = "div",
  className,
  strong = false,
  italic = false,
  disabled = false,
}) => {
  return children
    ? React.createElement(
        element,
        {
          className: cn(styles.root, className, {
            [styles.strong]: strong,
            [styles.italic]: italic,
            [styles.disabled]: disabled,
          }),
        },
        children
      )
    : null;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.oneOf(["div", "span", "p"]),
  className: PropTypes.string,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  disabled: PropTypes.bool,
};
