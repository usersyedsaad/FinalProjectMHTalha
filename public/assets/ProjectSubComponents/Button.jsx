import React from 'react';

const Button = ({
  buttonTitle,
  imgURL,
  imgALT,
  icon,
  style,
  onClick,
  className,
}) => {
  return (
    <button
      className={`bg-[#01B7C3] py-3 px-6 rounded-full text-white text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl flex items-center gap-2 hover:bg-[#019CA7] focus:outline-none focus:ring-2 focus:ring-[#01B7C3] focus:ring-opacity-50 ${className}`}
      style={style}
      onClick={onClick}
      aria-label={buttonTitle || imgALT}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {buttonTitle && <span>{buttonTitle}</span>}
      {imgURL && (
        <img
          src={imgURL}
          alt={imgALT}
          className="h-6 w-6 flex-shrink-0"
          style={{ flexShrink: 0 }} // Prevent resizing or stretching
        />
      )}
    </button>
  );
};

// Default Props
Button.defaultProps = {
  buttonTitle: '',
  imgURL: null,
  imgALT: 'Button Icon',
  icon: null,
  style: {},
  onClick: null,
  className: '',
};

export default Button;
