import React from 'react';
import './FlipButton.css';

/**
 * FlipButton — hover animation where text slides up and a colored fill sweeps in.
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
      {/* Default (front) text */}
      <span className="flip-front">{children}</span>

      {/* Hover state */}
      <span className="flip-back">
        <span className="flip-bg" />
        <span className="flip-back-text">{children}</span>
      </span>
    </button>
  );
};

export default FlipButton;
