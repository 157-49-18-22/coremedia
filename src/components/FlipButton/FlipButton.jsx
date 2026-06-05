import React from 'react';
import './FlipButton.css';

/**
 * CleanButton — simple bordered button, hover glows the border.
 *
 * Props:
 *  variant  — 'primary' | 'secondary' | 'outline' | 'cta' | 'ghost'  (default: 'primary')
 *  children — button label
 *  onClick  — click handler
 *  className — extra classes
 *  style    — inline style
 */
const FlipButton = ({ variant = 'primary', children, onClick, className = '', style = {}, ...rest }) => {
  return (
    <button
      className={`flip-btn flip-${variant} ${className}`}
      onClick={onClick}
      style={style}
      {...rest}
    >
      <span className="flip-label">{children}</span>
    </button>
  );
};

export default FlipButton;
