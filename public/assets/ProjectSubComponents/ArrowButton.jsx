import React from 'react';

const ArrowButton = (props) => {
  const arrowScale = props.arrowScale || 0.6; // Default arrow size is 60% of the button size

  return (
    <div
      className="relative flex items-center justify-center rounded-full"
      style={{
        height: props.size || '60px',
        width: props.size || '60px',
        padding: props.padding || '0px', // Optional padding
        ...props.style,
      }}
    >
      {/* SVG Arrow */}
      <svg
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          height: `calc(${arrowScale} * 100%)`, // Arrow scales based on arrowScale
          width: `calc(${arrowScale} * 100%)`,
        }}
      >
        <g id="arrow-forward">
          <path
            id="Icon"
            d="M8 13.7143L15 6M15 6L22 13.7143M15 6L15 24"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default ArrowButton;
