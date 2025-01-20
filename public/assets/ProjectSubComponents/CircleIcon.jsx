const CircleIcon = (props) => {
  return (
    <svg
      className="md:w-[150px] md:h-[150px] lg:w-[185px] lg:h-[185px] w-[50%] h-[50%]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 228 228"
      fill="none"
    >
      <circle cx="114" cy="114" r="114" fill="#D9D9D9" fillOpacity="0.08" />
      <circle
        cx="114"
        cy="114"
        r="113.571"
        stroke="#444A55"
        strokeWidth="0.857143"
      />
      <image
        href={props.imgURL}
        x="52"
        y="34"
        height="160.143"
        width="123.429"
      />
    </svg>
  );
};

export default CircleIcon;
