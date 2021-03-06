import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import {
  Highlight_1,
  Highlight_2,
  Highlight_3,
  Color,
  Outline,
  Glitch,
} from './Highlight.module.scss';

const Highlight = ({
  children,
  v1,
  v2,
  v3,
  color,
  outline,
  glitch,
  className,
  ...props
}) => {
  const classes = cx(
    {
      [Highlight_1]: v1,
      [Highlight_2]: v2,
      [Highlight_3]: v3,
      [Color]: color,
      [Outline]: outline,
      [Glitch]: glitch,
    },
    className,
  );
  return (
    <span {...props} className={classes} data-text={children}>
      {children}
    </span>
  );
};

Highlight.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.bool,
  outline: PropTypes.bool,
  glitch: PropTypes.bool,
  v1: PropTypes.bool,
  v2: PropTypes.bool,
  v3: PropTypes.bool,
  className: PropTypes.string,
};

export default Highlight;
