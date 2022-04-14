import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./Container.module.css";

export const Conteiner = ({ children, className }) => {
  if (!children) {
    return;
  }

  return <div className={cn(styles.root, className)}>{children}</div>;
};

Conteiner.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
