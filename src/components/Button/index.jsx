import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-md" };
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    blue_A700: "bg-blue-A700 text-white-A700",
  },
  outline: { blue_A700: "border border-blue-A700 border-solid text-blue-A700" },
};
const sizes = { xs: "p-2", sm: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "sm",
  variant = "fill",
  color = "blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700", "blue_A700"]),
};

export { Button };
