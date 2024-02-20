import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
          <div className="header-row my-[7px]">
            <Img
              className="h-[35px]"
              src="images/img_group10392_22.svg"
              alt="Group10392"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
            <div className="flex-row gap-[11px] hidden items-start justify-between w-[27%] sm:w-full">
              <Text
                className="mt-[3px] text-base text-gray-900"
                size="txtGilroyMedium16"
              >
                Products
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_gray_900.svg"
                alt="arrowdown"
              />
            </div>
            <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
              <Text
                className="hidden mt-[3px] text-base text-gray-900"
                size="txtGilroyMedium16"
              >
                Resouces
              </Text>
              <Img
                className="h-6 hidden w-6"
                src="images/img_arrowdown_gray_900.svg"
                alt="arrowdown One"
              />
            </div>
            <Text
              className="hidden sm:mt-0 mt-1 text-base text-gray-900"
              size="txtGilroyMedium16"
            >
              Request a demo
            </Text>
          </div>
          <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[225px] rounded-md w-[18%] md:w-full">
            <a href="javascript:" className="text-base text-gray-900">
              <Text size="txtGilroyMedium16">Sign in</Text>
            </a>
            <Button
              className="cursor-pointer font-gilroy font-medium min-w-[148px] text-base text-center"
              shape="round"
              color="blue_A700"
              size="sm"
              variant="fill"
            >
              Sign up for free
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
