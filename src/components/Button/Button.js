import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Button.module.scss";

export const Button = ({ style = "light", className, onClick, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      className={classNames(
        styles["root"],
        styles[`theme-${style}`],
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.oneOf(["light", "dark"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
