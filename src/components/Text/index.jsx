import React from "react";

const sizeClasses = {
  txtGilroyMedium16BlueA700: "font-gilroy font-medium",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtGilroyMedium18BlueA700: "font-gilroy font-medium",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroyMedium16: "font-gilroy font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
