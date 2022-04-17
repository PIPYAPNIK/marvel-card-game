import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./Container.module.scss";

export const Container = ({ children, className }) => {
  return children ? (
    <div className={cn(styles.root, className)}>{children}</div>
  ) : null;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
