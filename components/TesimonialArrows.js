

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: "#FFDAB9", borderRadius: "50%" }} // Change 'red' to your desired color
      onClick={onClick}
    />
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: "#FFDAB9", borderRadius: "50%" }} // Change 'red' to your desired color
      onClick={onClick}
    />
  );
};
