import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Button.module.scss";

export const Button = ({ color = "light", className, onClick, children }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button
      className={classNames(styles.root, styles[`theme-${color}`], className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
